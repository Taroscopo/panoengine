import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  MASTER_HEIGHT,
  MASTER_WIDTH,
  PIPELINE_VERSION,
  PREVIEW_HEIGHT,
  PREVIEW_MAX_BYTES,
  PREVIEW_WIDTH,
  THUMB_HEIGHT,
  THUMB_MAX_BYTES,
  THUMB_WIDTH,
  TILE_LEVELS,
  TILE_WEBP_EFFORT,
  TILE_WEBP_QUALITY,
  TOTAL_TILES_PER_SCENE,
} from '@panoengine/schema';
import exifr from 'exifr';
import pLimit from 'p-limit';
import sharp from 'sharp';

/**
 * Descriptor de los parámetros del pipeline que afectan a los BYTES de los
 * derivados: versión, calidad/effort WebP, rejilla de niveles y tamaños.
 * Cualquier cambio aquí ⇒ revHash distinto ⇒ carpeta de tiles nueva
 * (la caché inmutable nunca se intoxica). Los campos de tour.json
 * (sphereCorrection, hotspots…) NO entran: son de render, no de píxeles.
 */
export function descriptorPipeline(
  version: number = PIPELINE_VERSION,
  calidad: number = TILE_WEBP_QUALITY,
  effort: number = TILE_WEBP_EFFORT,
): string {
  const rejilla = TILE_LEVELS.map((l) => `${l.width}x${l.cols}x${l.rows}`).join(',');
  return (
    `panoengine-v${version}|q${calidad}|e${effort}|m${MASTER_WIDTH}x${MASTER_HEIGHT}` +
    `|l[${rejilla}]|p${PREVIEW_WIDTH}x${PREVIEW_HEIGHT}|t${THUMB_WIDTH}x${THUMB_HEIGHT}`
  );
}

/**
 * Hash corto (10 hex) que identifica la revisión de la escena:
 * sha256(descriptor del pipeline ‖ bytes del master).
 */
export function hashConPipeline(
  bytes: Buffer,
  version: number = PIPELINE_VERSION,
  calidad: number = TILE_WEBP_QUALITY,
  effort: number = TILE_WEBP_EFFORT,
): string {
  return createHash('sha256')
    .update(`${descriptorPipeline(version, calidad, effort)}:`)
    .update(bytes)
    .digest('hex')
    .slice(0, 10);
}

export async function computeRevHash(masterPath: string): Promise<string> {
  return hashConPipeline(await fs.readFile(masterPath));
}

export interface QuickDerivatives {
  previewBytes: number;
  thumbBytes: number;
  durationMs: number;
  lat: number | undefined;
  lng: number | undefined;
}

/** Codifica un buffer raw a WebP bajando calidad hasta entrar en presupuesto. */
async function encodeRawWithinBudget(
  raw: Buffer,
  rawInfo: { width: number; height: number; channels: 3 | 4 },
  maxBytes: number,
  qualities: readonly number[],
  resize?: { width: number; height: number },
): Promise<Buffer> {
  let last: Buffer | undefined;
  for (const quality of qualities) {
    let pipeline = sharp(raw, { raw: rawInfo });
    if (resize) {
      pipeline = pipeline.resize(resize.width, resize.height, { fit: 'fill', kernel: 'lanczos3' });
    }
    last = await pipeline.webp({ quality, effort: 5 }).toBuffer();
    if (last.length <= maxBytes) {
      return last;
    }
  }
  // Último recurso: bajar resolución no está permitido por contrato (dimensiones fijas),
  // así que devolvemos el más pequeño conseguido y el llamador reporta la advertencia.
  if (!last) {
    throw new Error('No se pudo codificar WebP');
  }
  return last;
}

/**
 * FASE RÁPIDA: preview.webp 1024×512 y thumb.webp 300×150
 * + extracción de GPS del EXIF ANTES de que los metadatos se descarten.
 *
 * DECODIFICACIÓN ÚNICA: el master JPG se decodifica UNA sola vez, directamente
 * al tamaño del preview (1024×512, Lanczos3); el thumb se deriva de ese mismo
 * buffer raw. Antes eran dos decodificaciones completas del master (~1,5 s
 * cada una con un JPG real de 99 MP).
 */
export async function generateQuickDerivatives(
  masterPath: string,
  sceneDir: string,
): Promise<QuickDerivatives> {
  const startedAt = Date.now();
  await fs.mkdir(sceneDir, { recursive: true });

  // Única decodificación del master → raw 1024×512.
  const { data, info } = await sharp(masterPath, {
    sequentialRead: true,
    limitInputPixels: false,
  })
    .rotate()
    .resize(PREVIEW_WIDTH, PREVIEW_HEIGHT, { fit: 'fill', kernel: 'lanczos3' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const rawInfo = { width: info.width, height: info.height, channels: info.channels as 3 | 4 };

  const [preview, thumb, gps] = await Promise.all([
    encodeRawWithinBudget(data, rawInfo, PREVIEW_MAX_BYTES, [65, 55, 45, 40]),
    encodeRawWithinBudget(data, rawInfo, THUMB_MAX_BYTES, [75, 60, 50, 45], {
      width: THUMB_WIDTH,
      height: THUMB_HEIGHT,
    }),
    exifr.gps(masterPath).catch(() => undefined),
  ]);

  await Promise.all([
    fs.writeFile(path.join(sceneDir, 'preview.webp'), preview),
    fs.writeFile(path.join(sceneDir, 'thumb.webp'), thumb),
  ]);

  return {
    previewBytes: preview.length,
    thumbBytes: thumb.length,
    durationMs: Date.now() - startedAt,
    lat: gps?.latitude,
    lng: gps?.longitude,
  };
}

export interface PyramidProgress {
  level: number;
  done: number;
  total: number;
}

export interface PyramidResult {
  tiles: number;
  bytes: number;
  durationMs: number;
}

/**
 * FASE PIRÁMIDE: 168 tiles WebP (8 + 32 + 128) en 3 niveles de rejilla potencia
 * de 2 (L0 4×2 de 512, L1 8×4 de 640, L2 16×8 de 704 — ver constants.ts).
 * El master se decodifica UNA sola vez a raw 11264×5632 (RULES.md §3);
 * cada nivel se deriva por reescalado Lanczos3 del raw y extracción de tiles
 * del tamaño del nivel con concurrencia = núcleos de CPU.
 */
export async function generateTilePyramid(
  masterPath: string,
  sceneDistDir: string,
  onProgress?: (progress: PyramidProgress) => void,
): Promise<PyramidResult> {
  const startedAt = Date.now();
  const concurrency = Math.max(2, Math.min(os.cpus().length, 16));
  const limit = pLimit(concurrency);

  for (const level of TILE_LEVELS) {
    await fs.mkdir(path.join(sceneDistDir, `l${level.level}`), { recursive: true });
  }

  const master = sharp(masterPath, { sequentialRead: true, limitInputPixels: false })
    .rotate()
    .resize(MASTER_WIDTH, MASTER_HEIGHT, { fit: 'fill', kernel: 'lanczos3' })
    .removeAlpha()
    .raw();
  const masterRaw = await master.toBuffer({ resolveWithObject: true });
  const channels = masterRaw.info.channels;

  let done = 0;
  let bytes = 0;
  const encoded: Promise<void>[] = [];

  for (const level of TILE_LEVELS) {
    const levelRaw =
      level.width === MASTER_WIDTH && level.height === MASTER_HEIGHT
        ? masterRaw
        : await sharp(masterRaw.data, {
            raw: { width: MASTER_WIDTH, height: MASTER_HEIGHT, channels },
          })
            .resize(level.width, level.height, { fit: 'fill', kernel: 'lanczos3' })
            .raw()
            .toBuffer({ resolveWithObject: true });

    for (let row = 0; row < level.rows; row++) {
      for (let col = 0; col < level.cols; col++) {
        const tilePath = path.join(sceneDistDir, `l${level.level}`, `${row}_${col}.webp`);
        encoded.push(
          limit(async () => {
            await sharp(levelRaw.data, {
              raw: { width: level.width, height: level.height, channels },
            })
              .extract({
                left: col * level.tilePx,
                top: row * level.tilePx,
                width: level.tilePx,
                height: level.tilePx,
              })
              .webp({ quality: TILE_WEBP_QUALITY, effort: TILE_WEBP_EFFORT })
              .toFile(tilePath);
            const stat = await fs.stat(tilePath);
            bytes += stat.size;
            done++;
            onProgress?.({ level: level.level, done, total: TOTAL_TILES_PER_SCENE });
          }),
        );
      }
    }
  }

  await Promise.all(encoded);
  return { tiles: done, bytes, durationMs: Date.now() - startedAt };
}
