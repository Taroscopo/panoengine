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
 * Publica el contenido de dist/ en R2 con diff incremental:
 * solo sube archivos nuevos o cambiados (hash sha256) y borra los que desaparecieron.
 * Los masters JAMÁS se suben (RULES.md §4) — dist/ no los contiene.
 */
export class R2Publisher {
  private readonly client: S3Client;

  constructor(private readonly cfg: R2Config) {
    this.client = new S3Client({
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
    const toDelete: string[] = [];

    for await (const filePath of walkFiles(distRoot)) {
      const key = path.relative(distRoot, filePath).split(path.sep).join('/');
      const info = await fs.stat(filePath);
      const sha = await sha256File(filePath);
      nextFiles[key] = { sha256: sha, size: info.size };
      const prev = previous?.files[key];
      if (prev && prev.sha256 === sha && prev.size === info.size) {
        stats.skipped++;
        continue;
      }
      try {
        await this.client.send(
          new PutObjectCommand({
            Bucket: this.cfg.bucket,
            Key: key,
            Body: createReadStream(filePath),
            ContentType: CONTENT_TYPES[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream',
          }),
        );
        stats.uploaded++;
        stats.totalBytes += info.size;
      } catch (err) {
        stats.errors.push(`${key}: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    if (previous) {
      for (const key of Object.keys(previous.files)) {
        if (!(key in nextFiles)) {
          toDelete.push(key);
        }
      }
    }
    // Borramos en lotes de 1000 (límite DeleteObjects). No borramos tour.json si sigue existiendo
    // (ya está cubierto: solo se borra lo que desapareció de dist/).
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

    await fs.writeFile(
      path.join(distRoot, '..', 'manifest.json'),
      `${JSON.stringify({ files: nextFiles, publishedAt: new Date().toISOString() }, null, 2)}\n`,
      'utf8',
    );

    return stats;
  }
}
