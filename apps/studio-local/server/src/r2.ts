import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { DeleteObjectsCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import type { R2Config } from './config.js';
import type { PublishManifest } from './store.js';

export interface PublishStats {
  uploaded: number;
  skipped: number;
  deleted: number;
  errors: string[];
  totalBytes: number;
}

/** Interfaz mínima del cliente S3 que usa el publicador (permite simularlo en tests). */
export interface S3Envio {
  send(command: unknown): Promise<unknown>;
}

const CONTENT_TYPES: Record<string, string> = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.json': 'application/json; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
};

async function* walkFiles(dir: string): AsyncGenerator<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkFiles(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

async function sha256File(filePath: string): Promise<string> {
  const hash = createHash('sha256');
  await new Promise<void>((resolve, reject) => {
    const stream = createReadStream(filePath);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => resolve());
    stream.on('error', reject);
  });
  return hash.digest('hex');
}

/**
 * Publica el contenido de dist/ en R2 con diff incremental.
 *
 * Contrato (auditoría):
 * 1. Sube PRIMERO todo excepto tour.json.
 * 2. tour.json se sube AL FINAL y SOLO si no hubo ningún error hasta entonces
 *    (un tour.json nuevo que apunte a tiles ausentes rompería el tour público).
 * 3. El manifiesto registra SOLO lo confirmado en el bucket: subidas con éxito
 *    y archivos verificados como idénticos (skip). Una subida fallida queda fuera.
 * 4. Los objetos viejos se borran DESPUÉS, y solo si no hubo errores; si hubo,
 *    el manifiesto previo se conserva (refleja el estado real del bucket).
 *
 * Los masters JAMÁS se suben (RULES.md §4) — dist/ no los contiene.
 */
export class R2Publisher {
  private readonly client: S3Envio;

  constructor(
    private readonly cfg: R2Config,
    cliente?: S3Envio,
  ) {
    this.client =
      cliente ??
      new S3Client({
        region: 'auto',
        endpoint: `https://${cfg.accountId}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: cfg.accessKeyId,
          secretAccessKey: cfg.secretAccessKey,
        },
      });
  }

  async publishDist(distRoot: string, previous: PublishManifest | null): Promise<PublishStats> {
    const stats: PublishStats = {
      uploaded: 0,
      skipped: 0,
      deleted: 0,
      errors: [],
      totalBytes: 0,
    };
    const nextFiles: PublishManifest['files'] = {};
    const localFiles: { key: string; filePath: string; sha: string; size: number }[] = [];

    for await (const filePath of walkFiles(distRoot)) {
      const key = path.relative(distRoot, filePath).split(path.sep).join('/');
      const info = await fs.stat(filePath);
      const sha = await sha256File(filePath);
      localFiles.push({ key, filePath, sha, size: info.size });
    }

    const esTourJson = (key: string): boolean => /(^|\/)tour\.json$/.test(key);

    const subir = async (archivo: {
      key: string;
      filePath: string;
      sha: string;
      size: number;
    }): Promise<boolean> => {
      const prev = previous?.files[archivo.key];
      if (prev && prev.sha256 === archivo.sha && prev.size === archivo.size) {
        stats.skipped++;
        nextFiles[archivo.key] = { sha256: archivo.sha, size: archivo.size };
        return true;
      }
      try {
        await this.client.send(
          new PutObjectCommand({
            Bucket: this.cfg.bucket,
            Key: archivo.key,
            Body: createReadStream(archivo.filePath),
            ContentType:
              CONTENT_TYPES[path.extname(archivo.filePath).toLowerCase()] ?? 'application/octet-stream',
          }),
        );
        stats.uploaded++;
        stats.totalBytes += archivo.size;
        nextFiles[archivo.key] = { sha256: archivo.sha, size: archivo.size };
        return true;
      } catch (err) {
        stats.errors.push(`${archivo.key}: ${err instanceof Error ? err.message : String(err)}`);
        return false;
      }
    };

    // Fase 1: todo excepto tour.json.
    for (const archivo of localFiles) {
      if (esTourJson(archivo.key)) {
        continue;
      }
      await subir(archivo);
    }

    // Fase 2: tour.json al final, solo si no hubo errores.
    const tourJson = localFiles.find((archivo) => esTourJson(archivo.key));
    if (tourJson && stats.errors.length === 0) {
      await subir(tourJson);
    } else if (tourJson && stats.errors.length > 0) {
      stats.errors.push('tour.json: no se subió porque hubo errores en los tiles');
    }

    // Fase 3: borrados (solo en publicación limpia).
    if (stats.errors.length === 0 && previous) {
      const toDelete = Object.keys(previous.files).filter((key) => !(key in nextFiles));
      for (let i = 0; i < toDelete.length; i += 1000) {
        const batch = toDelete.slice(i, i + 1000);
        try {
          await this.client.send(
            new DeleteObjectsCommand({
              Bucket: this.cfg.bucket,
              Delete: { Objects: batch.map((Key) => ({ Key })) },
            }),
          );
          stats.deleted += batch.length;
        } catch (err) {
          stats.errors.push(`borrado lote: ${err instanceof Error ? err.message : String(err)}`);
        }
      }
    }

    // El manifiesto solo se reescribe si todo salió bien; si falló algo, el
    // manifiesto previo sigue reflejando el bucket real (nada se corrompe).
    if (stats.errors.length === 0) {
      await fs.writeFile(
        path.join(distRoot, '..', 'manifest.json'),
        `${JSON.stringify({ files: nextFiles, publishedAt: new Date().toISOString() }, null, 2)}\n`,
        'utf8',
      );
    }

    return stats;
  }
}
