import { z } from 'zod';
import { isoDateTimeSchema, slugSchema, ulidSchema } from './common.js';
import { sceneSchema } from './scene.js';

export const autoRotateSchema = z.object({
  enabled: z.boolean().default(false),
  /** Espera tras interacción antes de reanudar (ms). */
  waitTimeMs: z.number().int().min(0).max(60_000).default(4000),
  /** Velocidad en grados/segundo. */
  speedDegPerSec: z.number().min(0.1).max(30).default(2),
});

/** Borrador de edición: puede tener 0 escenas mientras se construye el tour. */
export const tourDraftSchema = z.object({
  schemaVersion: z.literal(1),
  id: ulidSchema,
  slug: slugSchema,
  title: z.string().min(1).max(120),
  clientName: z.string().max(120).optional(),
  whatsappNumber: z
    .string()
    .regex(/^\+?[0-9][0-9\s-]{6,19}$/, 'Número de WhatsApp inválido')
    .optional(),
  whatsappDefaultText: z.string().max(500).optional(),
  hostingStatus: z.enum(['active', 'suspended']).default('active'),
  hostingExpiresAt: isoDateTimeSchema.optional(),
  createdAt: isoDateTimeSchema,
  updatedAt: isoDateTimeSchema,
  defaultSceneId: ulidSchema.optional(),
  autoRotate: autoRotateSchema,
  littlePlanetIntro: z.boolean().default(false),
  scenes: z.array(sceneSchema),
  plugins: z.record(z.string(), z.unknown()).default({}),
});
export type TourDraft = z.infer<typeof tourDraftSchema>;

/** Contrato publicado: al menos 1 escena y defaultSceneId válido. */
export const tourSchema = tourDraftSchema.superRefine((tour, ctx) => {
  if (tour.scenes.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['scenes'],
      message: 'Un tour publicado necesita al menos 1 escena',
    });
    return;
  }
  const first = tour.scenes[0];
  const fallback = first?.id;
  const defaultId = tour.defaultSceneId ?? fallback;
  if (defaultId && !tour.scenes.some((s) => s.id === defaultId)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['defaultSceneId'],
      message: 'defaultSceneId no corresponde a ninguna escena',
    });
  }
  const ids = new Set<string>();
  for (const [index, scene] of tour.scenes.entries()) {
    if (ids.has(scene.id)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['scenes', index, 'id'],
        message: `Escena duplicada: ${scene.id}`,
      });
    }
    ids.add(scene.id);
  }
});
export type Tour = z.infer<typeof tourSchema>;

/** Resumen ligero de un tour para listados (sin tiles ni hotspots). */
export const tourSummarySchema = z.object({
  slug: slugSchema,
  title: z.string(),
  clientName: z.string().optional(),
  hostingStatus: z.enum(['active', 'suspended']),
  hostingExpiresAt: isoDateTimeSchema.optional(),
  sceneCount: z.number().int().min(0),
  updatedAt: isoDateTimeSchema,
});
export type TourSummary = z.infer<typeof tourSummarySchema>;
