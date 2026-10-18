/**
 * AUDITORÍA QA DEL CORTADOR DE TILES — PanoEngine (NO es un test de la suite diaria).
 *
 * Ejecución:
 *   cd "/home/leo/Música/360 MOTOR TOURS" && pnpm --filter @panoengine/studio-server exec tsx test/auditoria-cortador.mts
 *
 * Verifica CON EVIDENCIA EN DISCO (no con los valores de retorno) la rejilla LEGAL de
 * potencias de 2 de RULES.md §3 (la 22×11/10×5 original es imposible: el adaptador
 * equirectangular-tiles 5.15.1 lanza PSVError si cols/rows no son potencias de 2):
 *   L0 2048×1024 → 4×2 tiles de 512×512 = 8
 *   L1 5120×2560 → 8×4 tiles de 640×640 = 32
 *   L2 11264×5632 → 16×8 tiles de 704×704 = 128
 *   TOTAL = 168 tiles por escena.
 *
 * Sección 0: además, audita la CARGA del propio tiler bajo tsx/Node ESM (las mismas
 * condiciones del arranque de producción "tsx src/main.ts"): exifr@7.1.3 sin campo
 * "exports" provoca que `import { gps } from 'exifr'` (tiler.ts:5) reviente fuera de
 * vitest. Si ocurre, se reporta como FALLO con su stack y la auditoría continúa con un
 * shim LOCAL (redirect a dist/full.esm.mjs) — src/ permanece intacto.
 *
 * Exit code: 0 si TODO pasa, 1 con lista de fallos si algo falla.
 */
import process from 'node:process';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire, registerHooks } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';
import {
  MASTER_HEIGHT,
  MASTER_WIDTH,
  PREVIEW_HEIGHT,
  PREVIEW_MAX_BYTES,
  PREVIEW_WIDTH,
  THUMB_HEIGHT,
  THUMB_MAX_BYTES,
  THUMB_WIDTH,
  TILE_LEVELS,
  TOTAL_TILES_PER_SCENE,
} from '@panoengine/schema';
// El tiler se importa DINÁMICAMENTE en la sección 0: la importación estática de
// src/processing/tiler.ts revienta bajo tsx/Node ESM (exifr sin export nombrado 'gps',
// ver sección 0). La auditoría detecta ese bug, lo reporta y sigue con un shim LOCAL.
import type { PyramidProgress, QuickDerivatives } from '../src/processing/tiler.js';

// ---------------------------------------------------------------------------
// Utilidades de reporte
// ---------------------------------------------------------------------------

const failures: string[] = [];
const warnings: string[] = [];

function hr(title: string): void {
  console.log(`\n===== ${title} =====`);
}
function ok(msg: string): void {
  console.log(`    [OK]    ${msg}`);
}
function info(msg: string): void {
  console.log(`    ${msg}`);
}
function warn(msg: string): void {
  warnings.push(msg);
  console.log(`    [AVISO] ${msg}`);
}
function fail(msg: string): void {
  failures.push(msg);
  console.log(`    [FALLO] ${msg}`);
}
function fmtBytes(n: number): string {
  return n >= 1024 * 1024
    ? `${(n / 1024 / 1024).toFixed(2)} MB`
    : `${(n / 1024).toFixed(1)} KB (${n} B)`;
}
function fmtMs(n: number): string {
  return `${(n / 1000).toFixed(2)} s (${Math.round(n)} ms)`;
}

// ---------------------------------------------------------------------------
// Constantes de CONTRATO esperadas según RULES.md §3 (texto normativo vigente)
// ---------------------------------------------------------------------------

interface ExpectedLevel {
  level: number;
  width: number;
  height: number;
  cols: number;
  rows: number;
  tilePx: number;
  count: number;
}

/** Rejilla legal (potencias de 2) tal y como la declara RULES.md §3. */
const RULES_EXPECTED: readonly ExpectedLevel[] = [
  { level: 0, width: 2048, height: 1024, cols: 4, rows: 2, tilePx: 512, count: 8 },
  { level: 1, width: 5120, height: 2560, cols: 8, rows: 4, tilePx: 640, count: 32 },
  { level: 2, width: 11264, height: 5632, cols: 16, rows: 8, tilePx: 704, count: 128 },
];

const RULES_TOTAL_TILES = 168;
const RULES_MASTER_W = 11264;
const RULES_MASTER_H = 5632;
const QUICK_SLA_MS = 2000;
/** Frases literales (normalizadas: sin '*' ni espacios dobles) que RULES.md §3 debe contener. */
const RULES_PHRASES: readonly string[] = [
  'L0: 2048×1024 → 4×2 tiles de 512×512 = 8 tiles',
  'L1: 5120×2560 → 8×4 tiles de 640×640 = 32 tiles',
  'L2: 11264×5632 → 16×8 tiles de 704×704 = 128 tiles',
  'Total: 168 tiles por escena',
  'Downscale Lanczos3 a 11264×5632',
];

// ---------------------------------------------------------------------------
// Generación del master sintético 11904×5952 (equirectangular 2:1)
// ---------------------------------------------------------------------------

const MASTER_W = 11904;
const MASTER_H = 5952;

type RGB = readonly [number, number, number];

function mix(a: RGB, b: RGB, t: number): RGB {
  const [ar, ag, ab] = a;
  const [br, bg, bb] = b;
  return [ar + (br - ar) * t, ag + (bg - ag) * t, ab + (bb - ab) * t];
}

function clampU8(v: number): number {
  return v < 0 ? 0 : v > 255 ? 255 : Math.round(v);
}

/**
 * JPG equirectangular sintético con textura real para el WebP:
 * degradado vertical de 3 paradas + bandas sinusoidales onduladas (2 frecuencias
   horizontales + 1 vertical) + 72 círculos con anillo contrastado.
 * Construido vía buffer raw RGB (~213 MB, apto para esta máquina) y codificado a JPG q90.
 */
async function crearMasterSintetico(filePath: string): Promise<void> {
  const W = MASTER_W;
  const H = MASTER_H;
  const buf = Buffer.alloc(W * H * 3);

  // Bandas sinusoidales horizontales: tabla por columna + fase variable por fila
  // (sin(a+b) = sin(a)cos(b) + cos(a)sin(b) → bucle interior barato).
  const F1 = 9; // banda ondulada ancha
  const F2 = 33; // banda fina
  const sinT1 = new Float64Array(W);
  const cosT1 = new Float64Array(W);
  const sinT2 = new Float64Array(W);
  for (let x = 0; x < W; x++) {
    const s = (2 * Math.PI * x) / W;
    sinT1[x] = Math.sin(F1 * s);
    cosT1[x] = Math.cos(F1 * s);
    sinT2[x] = Math.sin(F2 * s);
  }

  // Degradado vertical: azul → ámbar → verde.
  const c0: RGB = [11, 61, 145];
  const c1: RGB = [232, 163, 61];
  const c2: RGB = [46, 125, 50];

  let idx = 0;
  for (let y = 0; y < H; y++) {
    const t = y / (H - 1);
    const base: RGB = t < 0.5 ? mix(c0, c1, t * 2) : mix(c1, c2, (t - 0.5) * 2);
    const ph = 2 * Math.PI * 1.5 * t; // la fase ondula las bandas F1 a lo alto
    const cp = Math.cos(ph);
    const sp = Math.sin(ph);
    const ry = Math.sin(2 * Math.PI * 4 * t); // banda vertical lenta
    const br = base[0];
    const bg = base[1];
    const bb = base[2];
    for (let x = 0; x < W; x++) {
      const b1 = (sinT1[x] ?? 0) * cp + (cosT1[x] ?? 0) * sp;
      const b2 = sinT2[x] ?? 0;
      buf[idx] = clampU8(br + 24 * b1 + 12 * b2 + 10 * ry);
      buf[idx + 1] = clampU8(bg + 20 * b1 + 14 * b2 - 8 * ry);
      buf[idx + 2] = clampU8(bb + 16 * b1 + 10 * b2 + 12 * ry);
      idx += 3;
    }
  }

  // Círculos con anillo contrastado (bordes locales duros → el WebP tiene textura real).
  const GC = 12;
  const GR = 6;
  for (let gy = 0; gy < GR; gy++) {
    for (let gx = 0; gx < GC; gx++) {
      const cx = ((gx + 0.5) / GC) * W + (((gy * 7 + gx * 13) % 11) - 5) * 23;
      const cy = ((gy + 0.5) / GR) * H + (((gx * 5 + gy * 3) % 7) - 3) * 31;
      const r = H / 44 + ((gx + gy) % 3) * 18;
      const ring = 7;
      const fill = (gx + gy) % 2 === 0 ? 250 : 8;
      const ringC = 255 - fill;
      const alpha = 0.45;
      const rIn2 = (r - ring) * (r - ring);
      const rOut2 = (r + ring) * (r + ring);
      const x0 = Math.max(0, Math.floor(cx - r - ring));
      const x1 = Math.min(W - 1, Math.ceil(cx + r + ring));
      const y0 = Math.max(0, Math.floor(cy - r - ring));
      const y1 = Math.min(H - 1, Math.ceil(cy + r + ring));
      for (let y = y0; y <= y1; y++) {
        const dy = y - cy;
        for (let x = x0; x <= x1; x++) {
          const dx = x - cx;
          const d2 = dx * dx + dy * dy;
          let m: number | undefined;
          if (d2 >= rIn2 && d2 <= rOut2) m = ringC;
          else if (d2 < rIn2) m = fill;
          if (m !== undefined) {
            const i = (y * W + x) * 3;
            buf[i] = clampU8((buf[i] ?? 0) * (1 - alpha) + m * alpha);
            buf[i + 1] = clampU8((buf[i + 1] ?? 0) * (1 - alpha) + m * alpha);
            buf[i + 2] = clampU8((buf[i + 2] ?? 0) * (1 - alpha) + m * alpha);
          }
        }
      }
    }
  }

  await sharp(buf, { raw: { width: W, height: H, channels: 3 } })
    .jpeg({ quality: 90 })
    .toFile(filePath);
}

// ---------------------------------------------------------------------------
// Verificación de la pirámide EN DISCO
// ---------------------------------------------------------------------------

interface LevelObs {
  webpCount: number;
  missing: string[];
  unexpected: string[];
  nonWebpEntries: string[];
  badDims: string[];
  emptyFiles: string[];
  badMagic: string[];
  bytes: number;
}

function expectedNames(cols: number, rows: number): Set<string> {
  const names = new Set<string>();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      names.add(`${r}_${c}.webp`);
    }
  }
  return names;
}

/** Muestras de evidencia: 4 esquinas + centro + centro de borde superior + centro de borde izquierdo. */
function sampleNames(cols: number, rows: number): string[] {
  const mr = Math.floor(rows / 2);
  const mc = Math.floor(cols / 2);
  return [
    '0_0.webp',
    `0_${cols - 1}.webp`,
    `${rows - 1}_0.webp`,
    `${rows - 1}_${cols - 1}.webp`,
    `${mr}_${mc}.webp`,
    `0_${mc}.webp`,
    `${mr}_0.webp`,
  ];
}

async function verifyLevelOnDisk(
  sceneDir: string,
  exp: ExpectedLevel,
): Promise<LevelObs> {
  const dir = path.join(sceneDir, `l${exp.level}`);
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const nonWebpEntries = dirents.filter((d) => !d.name.endsWith('.webp')).map((d) => d.name);
  const actual = dirents.filter((d) => d.isFile() && d.name.endsWith('.webp')).map((d) => d.name);

  const expected = expectedNames(exp.cols, exp.rows);
  const missing = [...expected].filter((n) => !actual.includes(n));
  const unexpected = actual.filter((n) => !expected.has(n));

  const obs: LevelObs = {
    webpCount: actual.length,
    missing,
    unexpected,
    nonWebpEntries,
    badDims: [],
    emptyFiles: [],
    badMagic: [],
    bytes: 0,
  };

  for (const name of [...expected].filter((n) => actual.includes(n))) {
    const p = path.join(dir, name);
    const stat = await fs.stat(p);
    obs.bytes += stat.size;
    if (stat.size === 0) {
      obs.emptyFiles.push(name);
      continue;
    }
    // Cabecera WebP válida: "RIFF"...."WEBP"
    const head = new Uint8Array(await fs.readFile(p)).subarray(0, 12);
    const riff = String.fromCharCode(...head.subarray(0, 4));
    const webp = String.fromCharCode(...head.subarray(8, 12));
    if (riff !== 'RIFF' || webp !== 'WEBP') {
      obs.badMagic.push(name);
    }
    const meta = await sharp(p).metadata();
    if (meta.width !== exp.tilePx || meta.height !== exp.tilePx) {
      obs.badDims.push(`${name}: ${meta.width ?? '?'}×${meta.height ?? '?'} (esperado ${exp.tilePx}×${exp.tilePx})`);
    }
  }
  return obs;
}

// ---------------------------------------------------------------------------
// Auditoría principal
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const HERE = path.dirname(fileURLToPath(import.meta.url));
  const REPO_ROOT = path.resolve(HERE, '../../../..');

  console.log('AUDITORÍA QA DEL CORTADOR DE TILES — PanoEngine');
  console.log(`Fecha: ${new Date().toISOString()}`);
  console.log(`Node ${process.version} | cpus=${os.cpus().length} | sharp/libvips: ${JSON.stringify(sharp.versions)}`);

  // ------------------------------------------------------------------
  hr('0. CARGA DEL TILER: interop ESM de exifr bajo tsx/Node (= arranque de producción)');
  // ------------------------------------------------------------------
  // Producción arranca con "tsx src/main.ts" → Node ESM puro. exifr@7.1.3 NO tiene
  // campo "exports": Node resuelve por "main" (dist/full.umd.js, CJS sin exports
  // nombrados detectables por cjs-module-lexer), mientras que Vite/vitest resuelve por
  // "module" (dist/full.esm.mjs, ESM real con export nombrado 'gps'). El enlace
  // estático `import { gps as exifrGps } from 'exifr'` de src/processing/tiler.ts:5
  // (importado por routes.ts:24 y jobs.ts:5) es por tanto FRÁGIL: falló con SyntaxError
  // en 3 ejecuciones de esta máquina y luego pasó a enlazar de forma estable
  // (no-determinismo dependiente del estado del runtime; vitest jamás lo ve). Si falla,
  // se reporta como FALLO (bug real, NO corregido por el auditor) y se continúa la
  // auditoría con un shim que SOLO vive en este harness (redirect de 'exifr' a su build
  // ESM, exactamente lo que hace Vite). src/ queda INTACTO.
  // Canary informativo: una importación DINÁMICA de exifr bajo tsx SÍ ve 'gps'
  // (tsx envuelve el CJS con interop propia y enumera sus propiedades). Por eso
  // vitest y los import() dinámicos no delatan el problema: solo el ENLACE ESTÁTICO
  // (el que hace tiler.ts:5, y con él el arranque real del servidor) puede romperse.
  // OBSERVADO EN ESTA MÁQUINA: la carga estática falló 3 veces (SyntaxError) y luego
  // pasó a funcionar de forma estable — comportamiento NO determinista dependiente
  // del estado de la máquina (no es la compile-cache: probado en frío). Por eso se
  // sondea además con ARRANQUES LIMPIOS en procesos hijo separados.
  const exifrNs = await import('exifr');
  info(
    `import('exifr') dinámico bajo tsx → typeof gps = ${typeof exifrNs.gps} (la interop CJS de tsx lo enmascara; el enlace estático es el que puede fallar, ver abajo)`,
  );

  // Arranque de producción simulado en procesos hijo limpios (mismas cadenas de
  // cargador que "tsx src/main.ts"): la importación estática del tiler debe enlazar.
  const SERVER_DIR = path.resolve(HERE, '..');
  const TILER_ABS = path.resolve(SERVER_DIR, 'src', 'processing', 'tiler.ts');
  const CHILD_TRIES = 3;
  let childOk = 0;
  const childErrors: string[] = [];
  for (let i = 0; i < CHILD_TRIES; i++) {
    const childCode =
      `await import(${JSON.stringify(TILER_ABS)}).then(() => console.log('BOOT-OK'), ` +
      '(e) => { console.error((e && e.stack) ? e.stack : String(e)); process.exit(1); });';
    const r = spawnSync(process.execPath, ['--import', 'tsx', '--input-type=module', '-e', childCode], {
      cwd: SERVER_DIR,
      encoding: 'utf8',
    });
    if (r.status === 0 && !r.error) {
      childOk++;
    } else {
      childErrors.push((r.error?.message ?? r.stderr ?? r.stdout ?? `status=${r.status ?? '?'}`).trim());
    }
  }
  info(`arranque simulado en ${CHILD_TRIES} procesos hijo limpios (node --import tsx ≈ "tsx src/main.ts"): ${childOk}/${CHILD_TRIES} OK`);
  if (childOk === CHILD_TRIES) {
    ok('la carga estática del tiler enlaza en procesos limpios (en el estado actual de la máquina)');
  } else {
    fail(
      `la carga estática del tiler FALLÓ en ${CHILD_TRIES - childOk}/${CHILD_TRIES} arranques limpios simulados ` +
        '(bug real NO determinista de producción: exifr@7.1.3 sin campo "exports" → el enlace estático ' +
        '`import { gps } from \'exifr\'` (tiler.ts:5) depende de la interop del runtime; NO corregido por el ' +
        `auditor). Primer stack capturado:\n${childErrors[0] ?? '(sin salida)'}`,
    );
  }

  let tilerMod: typeof import('../src/processing/tiler.js');
  try {
    tilerMod = await import('../src/processing/tiler.js');
    ok('src/processing/tiler.ts carga tal cual bajo tsx/Node ESM (= arranque de producción sano)');
  } catch (e) {
    const stack = (e as Error).stack ?? String(e);
    fail(
      'src/processing/tiler.ts NO CARGA bajo tsx/Node ESM — bug real del tiler: el arranque de ' +
        'producción "tsx src/main.ts" (main.ts:10 → routes.ts:24 → tiler.ts:5) puede revientar con ' +
        'SyntaxError porque exifr@7.1.3 (sin campo "exports") se resuelve por "main" (CJS UMD) ' +
        'y cjs-module-lexer no detecta exports nombrados; vitest no lo ve porque Vite usa el ' +
        'campo "module" (dist/full.esm.mjs). NO corregido por el auditor. Stack exacto:\n' +
        stack,
    );
    const nodeRequire = createRequire(import.meta.url);
    const exifrEsmUrl = pathToFileURL(
      path.join(path.dirname(nodeRequire.resolve('exifr/package.json')), 'dist', 'full.esm.mjs'),
    ).href;
    registerHooks({
      resolve(specifier, context, nextResolve) {
        return nextResolve(specifier === 'exifr' ? exifrEsmUrl : specifier, context);
      },
    });
    info(`shim de harness registrado (src/ intacto): 'exifr' → ${exifrEsmUrl}`);
    // El intento fallido dejó el registro de módulo ESM cacheado en error: se usa un
    // specifier con query (registro fresco) construido en variable para no romper tsc.
    const tilerFresh = '../src/processing/tiler.ts?auditoria=shim';
    tilerMod = (await import(tilerFresh)) as typeof import('../src/processing/tiler.js');
    ok('tiler cargado con el shim del harness: la auditoría de disco continúa');
  }
  const { computeRevHash, generateQuickDerivatives, generateTilePyramid } = tilerMod;

  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'pano-auditoria-'));
  const tourSlug = 'auditoria-qa';
  const sceneId = 'scene-auditoria';
  const masterPath = path.join(root, 'workspace', 'tours', tourSlug, 'masters', `${sceneId}.jpg`);
  await fs.mkdir(path.dirname(masterPath), { recursive: true });

  // ------------------------------------------------------------------
  hr('1. GENERACIÓN DEL MASTER SINTÉTICO 11904×5952');
  // ------------------------------------------------------------------
  const tGen0 = performance.now();
  await crearMasterSintetico(masterPath);
  const genMs = performance.now() - tGen0;
  const masterStat = await fs.stat(masterPath);
  const masterMeta = await sharp(masterPath).metadata();
  info(`master: ${masterPath}`);
  info(`generado en ${fmtMs(genMs)} | peso ${fmtBytes(masterStat.size)} | ${masterMeta.width}×${masterMeta.height} ${masterMeta.format ?? '?'}`);
  if (masterMeta.width === MASTER_W && masterMeta.height === MASTER_H) {
    ok(`master en disco con dimensiones exactas ${MASTER_W}×${MASTER_H}`);
  } else {
    fail(`master sintético tiene ${masterMeta.width}×${masterMeta.height}, esperado ${MASTER_W}×${MASTER_H}`);
  }

  // revHash: identidad de revisión de la escena
  const revHash1 = await computeRevHash(masterPath);
  const revHash2 = await computeRevHash(masterPath);
  if (/^[0-9a-f]{10}$/.test(revHash1) && revHash1 === revHash2) {
    ok(`computeRevHash estable y de 10 hex: ${revHash1}`);
  } else {
    fail(`computeRevHash inválido o inestable: '${revHash1}' vs '${revHash2}'`);
  }
  const sceneDir = path.join(root, 'dist', 'tours', tourSlug, 'scenes', `${sceneId}-${revHash1}`);
  info(`sceneDir (layout RULES §4): ${sceneDir}`);

  // ------------------------------------------------------------------
  hr('2. FASE RÁPIDA: generateQuickDerivatives (SLA < 2000 ms)');
  // ------------------------------------------------------------------
  let quick: QuickDerivatives | undefined;
  const tQuickWall0 = performance.now();
  try {
    quick = await generateQuickDerivatives(masterPath, sceneDir);
  } catch (e) {
    fail(`generateQuickDerivatives LANZÓ EXCEPCIÓN (bug real del tiler, NO corregido por el auditor). Stack completo:\n${(e as Error).stack ?? String(e)}`);
  }
  const quickWallMs = performance.now() - tQuickWall0;

  if (quick) {
    // preview.webp EN DISCO
    const previewPath = path.join(sceneDir, 'preview.webp');
    try {
      const st = await fs.stat(previewPath);
      const meta = await sharp(previewPath).metadata();
      if (meta.width === PREVIEW_WIDTH && meta.height === PREVIEW_HEIGHT) {
        ok(`preview.webp ${meta.width}×${meta.height} EXACTAS`);
      } else {
        fail(`preview.webp mide ${meta.width}×${meta.height}, esperado EXACTO ${PREVIEW_WIDTH}×${PREVIEW_HEIGHT}`);
      }
      if (st.size <= PREVIEW_MAX_BYTES && st.size <= 40960) {
        ok(`preview.webp pesa ${fmtBytes(st.size)} ≤ 40960 B (PREVIEW_MAX_BYTES=${PREVIEW_MAX_BYTES})`);
      } else {
        fail(`preview.webp pesa ${st.size} B, supera el presupuesto de 40960 B`);
      }
      if (meta.format === 'webp') {
        ok('preview.webp es WebP válido (sharp lo decodifica)');
      } else {
        fail(`preview.webp no decodifica como WebP (formato '${meta.format ?? '?'}')`);
      }
    } catch (e) {
      fail(`preview.webp no existe en disco o no es legible: ${(e as Error).message}`);
    }

    // thumb.webp EN DISCO
    const thumbPath = path.join(sceneDir, 'thumb.webp');
    try {
      const st = await fs.stat(thumbPath);
      const meta = await sharp(thumbPath).metadata();
      if (meta.width === THUMB_WIDTH && meta.height === THUMB_HEIGHT) {
        ok(`thumb.webp ${meta.width}×${meta.height} EXACTAS`);
      } else {
        fail(`thumb.webp mide ${meta.width}×${meta.height}, esperado EXACTO ${THUMB_WIDTH}×${THUMB_HEIGHT}`);
      }
      if (st.size <= THUMB_MAX_BYTES && st.size <= 20480) {
        ok(`thumb.webp pesa ${fmtBytes(st.size)} ≤ 20480 B (THUMB_MAX_BYTES=${THUMB_MAX_BYTES})`);
      } else {
        fail(`thumb.webp pesa ${st.size} B, supera el presupuesto de 20480 B`);
      }
      if (meta.format === 'webp') {
        ok('thumb.webp es WebP válido (sharp lo decodifica)');
      } else {
        fail(`thumb.webp no decodifica como WebP (formato '${meta.format ?? '?'}')`);
      }
    } catch (e) {
      fail(`thumb.webp no existe en disco o no es legible: ${(e as Error).message}`);
    }

    // Duración vs SLA
    info(`duración FASE RÁPIDA: ${fmtMs(quick.durationMs)} (tiler) | ${fmtMs(quickWallMs)} (muro) — SLA ${QUICK_SLA_MS} ms`);
    if (quick.durationMs < QUICK_SLA_MS) {
      ok(`FASE RÁPIDA dentro del SLA (< ${QUICK_SLA_MS} ms)`);
    } else {
      fail(`FASE RÁPIDA excede el SLA: ${Math.round(quick.durationMs)} ms ≥ ${QUICK_SLA_MS} ms (RULES §3: "ambos en < 2 s, bloqueante en el editor")`);
    }
    info(`GPS del EXIF: lat=${String(quick.lat)} lng=${String(quick.lng)} (sintético: se espera undefined)`);
  }

  // ------------------------------------------------------------------
  hr('3. PIRÁMIDE: generateTilePyramid (168 tiles, 3 niveles)');
  // ------------------------------------------------------------------
  let progressEvents = 0;
  const progressByLevel = new Map<number, { events: number; maxDone: number }>();
  let lastPctLogged = -25;
  let progressTotalWrong = 0;
  const onProgress = (p: PyramidProgress): void => {
    progressEvents++;
    if (p.total !== RULES_TOTAL_TILES) progressTotalWrong++;
    const agg = progressByLevel.get(p.level) ?? { events: 0, maxDone: 0 };
    agg.events++;
    agg.maxDone = Math.max(agg.maxDone, p.done);
    progressByLevel.set(p.level, agg);
    const pct = Math.floor((p.done / RULES_TOTAL_TILES) * 100);
    if (pct - lastPctLogged >= 25 || p.done === RULES_TOTAL_TILES) {
      lastPctLogged = pct;
      info(`  progreso: ${p.done}/${p.total} (${pct}%) — nivel l${p.level}`);
    }
  };

  let pyramid: Awaited<ReturnType<typeof generateTilePyramid>> | undefined;
  const tPyrWall0 = performance.now();
  try {
    pyramid = await generateTilePyramid(masterPath, sceneDir, onProgress);
  } catch (e) {
    fail(`generateTilePyramid LANZÓ EXCEPCIÓN (bug real del tiler, NO corregido por el auditor). Stack completo:\n${(e as Error).stack ?? String(e)}`);
  }
  const pyrWallMs = performance.now() - tPyrWall0;

  const obsByLevel = new Map<number, LevelObs>();
  if (pyramid) {
    for (const exp of RULES_EXPECTED) {
      const obs = await verifyLevelOnDisk(sceneDir, exp);
      obsByLevel.set(exp.level, obs);

      const dirLabel = `l${exp.level} (${exp.width}×${exp.height}, ${exp.cols}×${exp.rows} tiles de ${exp.tilePx}px)`;
      if (obs.webpCount === exp.count) {
        ok(`${dirLabel}: ${obs.webpCount} archivos .webp EXACTOS`);
      } else {
        fail(`${dirLabel}: ${obs.webpCount} archivos .webp en disco, esperados EXACTOS ${exp.count}`);
      }
      if (obs.missing.length === 0) {
        ok(`${dirLabel}: nomenclatura {row}_{col}.webp completa (row 0..${exp.rows - 1}, col 0..${exp.cols - 1}), sin huecos`);
      } else {
        fail(`${dirLabel}: faltan ${obs.missing.length} tiles: ${obs.missing.slice(0, 8).join(', ')}${obs.missing.length > 8 ? '…' : ''}`);
      }
      if (obs.unexpected.length > 0) {
        fail(`${dirLabel}: archivos extraños: ${obs.unexpected.join(', ')}`);
      }
      if (obs.nonWebpEntries.length > 0) {
        fail(`${dirLabel}: entradas no-.webp: ${obs.nonWebpEntries.join(', ')}`);
      }
      if (obs.emptyFiles.length > 0) {
        fail(`${dirLabel}: tiles vacíos (0 B): ${obs.emptyFiles.join(', ')}`);
      }
      if (obs.badMagic.length > 0) {
        fail(`${dirLabel}: cabecera no RIFF/WEBP: ${obs.badMagic.join(', ')}`);
      }
      if (obs.badDims.length > 0) {
        fail(`${dirLabel}: dimensiones erróneas en ${obs.badDims.length} tiles: ${obs.badDims.slice(0, 5).join(' | ')}`);
      } else if (obs.webpCount === exp.count && obs.missing.length === 0) {
        ok(`${dirLabel}: los ${exp.count} tiles verificados UNO A UNO — WebP válido, no vacío, ${exp.tilePx}×${exp.tilePx} EXACTAS`);
      }
      // Muestras de evidencia (esquina/centro/borde) con dimensiones explícitas
      const samples: string[] = [];
      for (const name of [...new Set(sampleNames(exp.cols, exp.rows))]) {
        const meta = await sharp(path.join(sceneDir, `l${exp.level}`, name)).metadata();
        samples.push(`${name}=${meta.width}×${meta.height}`);
      }
      info(`    muestras ${dirLabel}: ${samples.join(' ')}`);
      info(`    peso nivel: ${fmtBytes(obs.bytes)}`);
    }

    // Conteo y contabilidad del tiler vs disco
    if (pyramid.tiles === RULES_TOTAL_TILES && pyramid.tiles === TOTAL_TILES_PER_SCENE) {
      ok(`pirámide reporta ${pyramid.tiles} tiles (= TOTAL_TILES_PER_SCENE=${TOTAL_TILES_PER_SCENE} = RULES 168)`);
    } else {
      fail(`pirámide reporta ${pyramid.tiles} tiles, esperado 168 (TOTAL_TILES_PER_SCENE=${TOTAL_TILES_PER_SCENE})`);
    }
    const diskBytes = [...obsByLevel.values()].reduce((a, o) => a + o.bytes, 0);
    if (diskBytes === pyramid.bytes) {
      ok(`contabilidad de bytes del tiler coincide con el disco: ${fmtBytes(diskBytes)}`);
    } else {
      fail(`contabilidad de bytes difiere: tiler=${pyramid.bytes} B vs disco=${diskBytes} B`);
    }
    // Eventos de progreso
    const ev0 = progressByLevel.get(0)?.events ?? 0;
    const ev1 = progressByLevel.get(1)?.events ?? 0;
    const ev2 = progressByLevel.get(2)?.events ?? 0;
    if (progressEvents === RULES_TOTAL_TILES && ev0 === 8 && ev1 === 32 && ev2 === 128 && progressTotalWrong === 0) {
      ok(`progreso SSE verificado: ${progressEvents} eventos (l0:8 l1:32 l2:128), último done=${progressByLevel.get(2)?.maxDone}`);
    } else {
      fail(`progreso anómalo: eventos=${progressEvents} (l0:${ev0} l1:${ev1} l2:${ev2}), total incorrecto en ${progressTotalWrong} eventos`);
    }
    info(`duración PIRÁMIDE: ${fmtMs(pyramid.durationMs)} (tiler) | ${fmtMs(pyrWallMs)} (muro, ${os.cpus().length} núcleos)`);
  }

  // Contenido del directorio de escena: exactamente preview, thumb, l0, l1, l2
  try {
    const entries = (await fs.readdir(sceneDir)).sort();
    const quickOk = quick !== undefined;
    const expectedEntries = quickOk
      ? ['l0', 'l1', 'l2', 'preview.webp', 'thumb.webp']
      : ['l0', 'l1', 'l2'];
    if (entries.join(',') === expectedEntries.join(',')) {
      ok(`layout de sceneDir exacto (RULES §4): ${entries.join(', ')}`);
    } else {
      fail(`layout de sceneDir inesperado: [${entries.join(', ')}], esperado [${expectedEntries.join(', ')}]`);
    }
  } catch (e) {
    fail(`no se pudo listar sceneDir: ${(e as Error).message}`);
  }

  // ------------------------------------------------------------------
  hr('4. CONSISTENCIA DE CONTRATO: código ↔ RULES.md §3 ↔ disco');
  // ------------------------------------------------------------------

  // 4a) RULES.md declara la rejilla legal vigente
  try {
    const rulesRaw = await fs.readFile(path.join(REPO_ROOT, 'RULES.md'), 'utf8');
    const normalized = rulesRaw.replace(/\*/g, '').replace(/[ \t]+/g, ' ');
    for (const phrase of RULES_PHRASES) {
      if (normalized.includes(phrase)) {
        ok(`RULES.md §3 declara: "${phrase}"`);
      } else {
        fail(`RULES.md §3 YA NO declara: "${phrase}" (deriva del documento normativo)`);
      }
    }
  } catch (e) {
    fail(`no se pudo leer RULES.md: ${(e as Error).message}`);
  }

  // 4b) TILE_LEVELS (@panoengine/schema) ↔ RULES §3
  const pow2 = (n: number): boolean => n >= 1 && (n & (n - 1)) === 0;
  if (TILE_LEVELS.length === RULES_EXPECTED.length) {
    ok(`TILE_LEVELS tiene ${TILE_LEVELS.length} niveles (l0..l${TILE_LEVELS.length - 1})`);
  } else {
    fail(`TILE_LEVELS tiene ${TILE_LEVELS.length} niveles, esperados ${RULES_EXPECTED.length}`);
  }
  for (let i = 0; i < RULES_EXPECTED.length; i++) {
    const exp = RULES_EXPECTED[i] as ExpectedLevel;
    const got = TILE_LEVELS[i];
    if (!got) {
      fail(`TILE_LEVELS[${i}] no existe`);
      continue;
    }
    const diffs: string[] = [];
    if (got.level !== exp.level) diffs.push(`level ${got.level}≠${exp.level}`);
    if (got.width !== exp.width) diffs.push(`width ${got.width}≠${exp.width}`);
    if (got.height !== exp.height) diffs.push(`height ${got.height}≠${exp.height}`);
    if (got.cols !== exp.cols) diffs.push(`cols ${got.cols}≠${exp.cols}`);
    if (got.rows !== exp.rows) diffs.push(`rows ${got.rows}≠${exp.rows}`);
    if (got.tilePx !== exp.tilePx) diffs.push(`tilePx ${got.tilePx}≠${exp.tilePx}`);
    if (diffs.length === 0) {
      ok(`TILE_LEVELS l${exp.level}: ${got.width}×${got.height} ${got.cols}×${got.rows} tilePx=${got.tilePx} — coincide con RULES §3`);
    } else {
      fail(`TILE_LEVELS l${exp.level} diverge de RULES §3: ${diffs.join('; ')}`);
    }
    // Invariantes matemáticos del contrato del adaptador (potencias de 2, cols≤64, rows≤32)
    if (!pow2(got.cols) || !pow2(got.rows)) {
      fail(`TILE_LEVELS l${got.level}: cols=${got.cols}/rows=${got.rows} NO son potencias de 2 → PSVError("Panorama cols and rows must be powers of 2.")`);
    } else {
      ok(`TILE_LEVELS l${exp.level}: cols=${got.cols} y rows=${got.rows} son potencias de 2 (requisito del adaptador 5.15.1)`);
    }
    if (got.cols > 64 || got.rows > 32) {
      fail(`TILE_LEVELS l${got.level}: excede límites del adaptador (cols≤64, rows≤32)`);
    }
    if (got.tilePx !== got.width / got.cols || got.tilePx !== got.height / got.rows) {
      fail(`TILE_LEVELS l${got.level}: tilePx=${got.tilePx} no cuadra con width/cols=${got.width / got.cols} ni height/rows=${got.height / got.rows} (habría tiles parciales)`);
    }
  }
  const constTotal = TILE_LEVELS.reduce((a, l) => a + l.cols * l.rows, 0);
  if (TOTAL_TILES_PER_SCENE === RULES_TOTAL_TILES && constTotal === RULES_TOTAL_TILES) {
    ok(`TOTAL_TILES_PER_SCENE=${TOTAL_TILES_PER_SCENE} (suma de rejillas = ${constTotal} = RULES 168)`);
  } else {
    fail(`TOTAL_TILES_PER_SCENE=${TOTAL_TILES_PER_SCENE}, suma real de rejillas=${constTotal}, RULES declara ${RULES_TOTAL_TILES}`);
  }
  if (MASTER_WIDTH === RULES_MASTER_W && MASTER_HEIGHT === RULES_MASTER_H) {
    ok(`MASTER_WIDTH/HEIGHT=${MASTER_WIDTH}×${MASTER_HEIGHT} = downscale Lanczos3 de RULES §3`);
  } else {
    fail(`MASTER_WIDTH/HEIGHT=${MASTER_WIDTH}×${MASTER_HEIGHT} ≠ RULES §3 (${RULES_MASTER_W}×${RULES_MASTER_H})`);
  }

  // 4c) Disco ↔ RULES §3
  for (const exp of RULES_EXPECTED) {
    const obs = obsByLevel.get(exp.level);
    if (!obs) {
      fail(`disco l${exp.level}: no verificado (la pirámide falló)`);
      continue;
    }
    if (obs.webpCount === exp.count && obs.missing.length === 0 && obs.unexpected.length === 0 && obs.badDims.length === 0) {
      ok(`disco l${exp.level} ↔ RULES §3: ${exp.count} tiles ${exp.tilePx}×${exp.tilePx} completos y exactos`);
    } else {
      fail(`disco l${exp.level} ↔ RULES §3: count=${obs.webpCount}/${exp.count}, faltan=${obs.missing.length}, extra=${obs.unexpected.length}, dimsMal=${obs.badDims.length}`);
    }
  }

  // ------------------------------------------------------------------
  hr('5. SPOT-CHECK DE CONTENIDO: l0/0_0.webp vs recorte del master');
  // ------------------------------------------------------------------
  // NOTA DE HARNESS: sharp `.stats()` computa estadísticas de la IMAGEN DE ENTRADA,
  // ignorando resize()/extract() del pipeline (verificado: devuelve la media global
  // del master). La referencia se calcula por tanto vía raw decodificado y media
  // manual del recorte, replicando el pipeline documentado en RULES §3:
  // master → Lanczos3 11264×5632 (raw) → Lanczos3 2048×1024 → recorte 512×512.
  const l0 = RULES_EXPECTED[0] as ExpectedLevel;
  try {
    const tileStats = await sharp(path.join(sceneDir, 'l0', '0_0.webp')).stats();
    const masterRawRef = await sharp(masterPath)
      .resize(RULES_MASTER_W, RULES_MASTER_H, { fit: 'fill', kernel: 'lanczos3' })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const refCrop = await sharp(masterRawRef.data, {
      raw: { width: RULES_MASTER_W, height: RULES_MASTER_H, channels: 3 },
    })
      .resize(l0.width, l0.height, { fit: 'fill', kernel: 'lanczos3' })
      .extract({ left: 0, top: 0, width: l0.tilePx, height: l0.tilePx })
      .raw()
      .toBuffer({ resolveWithObject: true });
    if (tileStats.channels.length !== 3 || refCrop.info.channels !== 3) {
      fail(`spot-check: canales inesperados (tile=${tileStats.channels.length}, ref=${refCrop.info.channels})`);
    } else {
      const px = refCrop.info.width * refCrop.info.height;
      const refMeans = [0, 0, 0].map((_, ch) => {
        let s = 0;
        for (let p = 0; p < px; p++) s += refCrop.data[p * 3 + ch] ?? 0;
        return s / px;
      });
      const labels = ['R', 'G', 'B'];
      let worst = 0;
      let allOk = true;
      const parts: string[] = [];
      for (let ch = 0; ch < 3; ch++) {
        const mTile = tileStats.channels[ch]?.mean ?? 0;
        const mRef = refMeans[ch] ?? 0;
        const d = Math.abs(mTile - mRef);
        worst = Math.max(worst, d);
        if (d > 12) allOk = false;
        parts.push(`${labels[ch]}: tile=${mTile.toFixed(1)} ref=${mRef.toFixed(1)} Δ=${d.toFixed(1)}`);
      }
      info(`    medias por canal (tolerancia ±12): ${parts.join(' | ')}`);
      if (allOk) {
        ok(`l0/0_0.webp corresponde al recorte superior-izquierdo ${l0.tilePx}×${l0.tilePx} del master (pipeline RULES §3: 11904→11264→${l0.width}); peor desviación ${worst.toFixed(1)}`);
      } else {
        fail(`l0/0_0.webp NO corresponde al recorte esperado (peor desviación ${worst.toFixed(1)} > 12)`);
      }
    }
  } catch (e) {
    fail(`spot-check de contenido no pudo ejecutarse: ${(e as Error).message}`);
  }

  // ------------------------------------------------------------------
  hr('6. REPORTE FINAL');
  // ------------------------------------------------------------------
  const diskBytes = [...obsByLevel.values()].reduce((a, o) => a + o.bytes, 0);
  const diskCount = [...obsByLevel.values()].reduce((a, o) => a + o.webpCount, 0);
  const b0 = obsByLevel.get(0)?.bytes ?? 0;
  const b1 = obsByLevel.get(1)?.bytes ?? 0;
  const b2 = obsByLevel.get(2)?.bytes ?? 0;
  const quickPreviewBytes = quick ? (await fs.stat(path.join(sceneDir, 'preview.webp')).catch(() => null))?.size : undefined;
  const quickThumbBytes = quick ? (await fs.stat(path.join(sceneDir, 'thumb.webp')).catch(() => null))?.size : undefined;

  console.log(`  Master sintético : ${MASTER_W}×${MASTER_H} JPG, ${fmtBytes(masterStat.size)}, generado en ${fmtMs(genMs)}`);
  console.log(`  revHash          : ${revHash1} (10 hex, estable)`);
  console.log(`  FASE RÁPIDA      : ${quick ? `${fmtMs(quick.durationMs)} (tiler) / ${fmtMs(quickWallMs)} (muro), SLA 2000 ms` : 'FALLÓ (excepción)'}`);
  console.log(`  preview.webp     : ${quickPreviewBytes !== undefined ? `${fmtBytes(quickPreviewBytes)} @1024×512 (≤40960 B)` : 'n/d'}`);
  console.log(`  thumb.webp       : ${quickThumbBytes !== undefined ? `${fmtBytes(quickThumbBytes)} @300×150 (≤20480 B)` : 'n/d'}`);
  console.log(`  PIRÁMIDE         : ${pyramid ? `${fmtMs(pyramid.durationMs)} (tiler) / ${fmtMs(pyrWallMs)} (muro) sobre ${os.cpus().length} núcleos` : 'FALLÓ (excepción)'}`);
  console.log(`  Tiles en disco   : ${diskCount} (l0: ${obsByLevel.get(0)?.webpCount ?? 0} + l1: ${obsByLevel.get(1)?.webpCount ?? 0} + l2: ${obsByLevel.get(2)?.webpCount ?? 0} = esperado 168)`);
  console.log(`  Peso total tiles : ${fmtBytes(diskBytes)} (l0 ${fmtBytes(b0)} | l1 ${fmtBytes(b1)} | l2 ${fmtBytes(b2)} | media ${Math.round(diskBytes / Math.max(1, diskCount))} B/tile)`);
  console.log(`  Contrato         : TILE_LEVELS=${JSON.stringify(TILE_LEVELS.map((l) => [l.cols, l.rows, l.tilePx]))} vs RULES §3 4×2/8×4/16×8=168`);
  console.log(`  Evidencia en disco conservada en: ${root}`);
  if (warnings.length > 0) {
    console.log(`  Avisos (${warnings.length}):`);
    for (const w of warnings) console.log(`    - ${w}`);
  }
  if (failures.length === 0) {
    console.log('\n  VEREDICTO: PASA — las 168 tiles, la fase rápida, el contrato y el spot-check cumplen RULES.md §3.');
    process.exitCode = 0;
  } else {
    console.log(`\n  VEREDICTO: FALLA — ${failures.length} fallo(s):`);
    for (let i = 0; i < failures.length; i++) {
      console.log(`    ${i + 1}. ${failures[i]}`);
    }
    process.exitCode = 1;
  }
}

main().catch((e: unknown) => {
  console.error('\nERROR INESPERADO DEL SCRIPT DE AUDITORÍA (no necesariamente del tiler):');
  console.error((e as Error).stack ?? String(e));
  process.exitCode = 1;
});
