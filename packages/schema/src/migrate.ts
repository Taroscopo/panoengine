import type { Tour, TourDraft } from './tour.js';
import { tourDraftSchema } from './tour.js';

export const CURRENT_SCHEMA_VERSION = 1 as const;

export class MigrationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MigrationError';
  }
}

/**
 * Migra y valida un tour.json crudo (desconocido) a la versión actual del esquema.
 * Cada versión futura añade su paso aquí: migrateV1toV2(raw) → migrateV2toV3...
 */
export function migrateTourDraft(raw: unknown): TourDraft {
  if (typeof raw !== 'object' || raw === null) {
    throw new MigrationError('tour.json debe ser un objeto');
  }
  const version = (raw as { schemaVersion?: unknown }).schemaVersion;
  if (version === undefined) {
    throw new MigrationError('tour.json sin schemaVersion');
  }
  if (version === 1) {
    const parsed = tourDraftSchema.safeParse(raw);
    if (!parsed.success) {
      throw new MigrationError(`tour.json v1 inválido: ${parsed.error.message}`);
    }
    return parsed.data;
  }
  throw new MigrationError(`schemaVersion ${String(version)} no soportado (actual: 1)`);
}

export type { Tour };
