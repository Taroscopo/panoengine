import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const serverDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(serverDir, '../../..');

// Carga .env del servidor si existe (las claves NUNCA se suben a R2 — RULES.md §9).
const envPath = path.join(serverDir, '.env');
if (fs.existsSync(envPath)) {
  process.loadEnvFile(envPath);
}

const envSchema = z.object({
  STUDIO_PORT: z.coerce.number().int().min(1).max(65_535).default(5175),
  STUDIO_DATA_DIR: z.string().optional(),
  R2_ACCOUNT_ID: z.string().min(1).optional(),
  R2_ACCESS_KEY_ID: z.string().min(1).optional(),
  R2_SECRET_ACCESS_KEY: z.string().min(1).optional(),
  R2_BUCKET: z.string().min(1).default('panoengine-tours'),
  EDGE_BASE_URL: z.string().optional(),
});

export interface R2Config {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
}

export interface StudioConfig {
  port: number;
  dataDir: string;
  r2: R2Config | undefined;
  edgeBaseUrl: string | undefined;
}

export function loadConfig(): StudioConfig {
  const env = envSchema.parse(process.env);
  const r2Complete =
    env.R2_ACCOUNT_ID !== undefined &&
    env.R2_ACCESS_KEY_ID !== undefined &&
    env.R2_SECRET_ACCESS_KEY !== undefined;
  return {
    port: env.STUDIO_PORT,
    dataDir: path.resolve(env.STUDIO_DATA_DIR ?? path.join(repoRoot, 'workspace')),
    r2: r2Complete
      ? {
          accountId: env.R2_ACCOUNT_ID as string,
          accessKeyId: env.R2_ACCESS_KEY_ID as string,
          secretAccessKey: env.R2_SECRET_ACCESS_KEY as string,
          bucket: env.R2_BUCKET,
        }
      : undefined,
    edgeBaseUrl: env.EDGE_BASE_URL,
  };
}
