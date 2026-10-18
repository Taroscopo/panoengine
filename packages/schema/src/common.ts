import { z } from 'zod';

/** ULID canónico (Crockford Base32, 26 caracteres). */
export const ulidSchema = z.string().regex(/^[0-9A-HJKMNP-TV-Z]{26}$/, 'ULID inválido');

/** Slug comercial legible: minúsculas, dígitos y guiones (/tours/mi-casa-2026). */
export const slugSchema = z
  .string()
  .min(1)
  .max(64)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug inválido (kebab-case)');

export const isoDateTimeSchema = z.string().datetime({ offset: true });

export const yawSchema = z.number().min(-180).max(180);
export const pitchSchema = z.number().min(-90).max(90);
/** FOV horizontal en grados, convención krpano (60 = muy zoom, 150 = muy abierto). */
export const fovSchema = z.number().min(30).max(150);

export const zoomRangeSchema = z.object({
  min: z.number().min(0).max(100),
  max: z.number().min(0).max(100),
});

export const colorSchema = z.string().regex(/^(?:#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))$/, 'Color CSS inválido');
