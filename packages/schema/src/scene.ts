import { z } from 'zod';
import {
  colorSchema,
  fovSchema,
  isoDateTimeSchema,
  pitchSchema,
  ulidSchema,
  yawSchema,
  zoomRangeSchema,
} from './common.js';

/* ------------------------------------------------------------------ */
/* Tiles                                                               */
/* ------------------------------------------------------------------ */

/**
 * Descriptor de la pirámide de tiles de una escena.
 * `tileUrlTemplate` usa los tokens {level} {row} {col} (relativos a la raíz del tour).
 * `cols`/`rows` corresponden al nivel MÁXIMO (16×8, potencia de 2 obligatoria del
 * adaptador) y `width` al ancho del nivel máximo. `levels` es la pirámide completa
 * (orden ascendente por ancho, como la exige EquirectangularTilesAdapter).
 */
export const tileLevelDescriptorSchema = z.object({
  width: z.number().int().positive(),
  cols: z.number().int().positive(),
  rows: z.number().int().positive(),
});
export type TileLevelDescriptor = z.infer<typeof tileLevelDescriptorSchema>;

export const tilesDescriptorSchema = z.object({
  width: z.number().int().positive(),
  cols: z.number().int().positive(),
  rows: z.number().int().positive(),
  nbLevels: z.number().int().positive(),
  baseUrl: z.string().min(1),
  tileUrlTemplate: z.string().min(1),
  levels: z.array(tileLevelDescriptorSchema),
});
export type TilesDescriptor = z.infer<typeof tilesDescriptorSchema>;

/** Sustituye los tokens {level} {row} {col} de una plantilla de URL. */
export function expandTileUrl(template: string, level: number, row: number, col: number): string {
  return template
    .replaceAll('{level}', String(level))
    .replaceAll('{row}', String(row))
    .replaceAll('{col}', String(col));
}

/* ------------------------------------------------------------------ */
/* Hotspots                                                            */
/* ------------------------------------------------------------------ */

export const hotspotStyleSchema = z.object({
  icon: z.enum(['arrow', 'circle', 'info', 'whatsapp', 'star']).default('arrow'),
  bgColor: colorSchema.default('#d63031'),
  opacity: z.number().min(0.1).max(1).default(0.9),
  /** Tamaño angular del marcador en grados sobre la esfera. */
  sizeDeg: z.number().min(1).max(20).default(5),
});
export type HotspotStyle = z.infer<typeof hotspotStyleSchema>;

const hotspotBase = {
  id: ulidSchema,
  title: z.string().min(1).max(120).optional(),
  yaw: yawSchema,
  pitch: pitchSchema,
  zoomRange: zoomRangeSchema.optional(),
  style: hotspotStyleSchema.optional(),
  createdAt: isoDateTimeSchema,
  updatedAt: isoDateTimeSchema,
} as const;

export const hotspotSchema = z.discriminatedUnion('type', [
  z.object({
    ...hotspotBase,
    type: z.literal('nav'),
    targetSceneId: ulidSchema,
    targetYaw: yawSchema.optional(),
    targetPitch: pitchSchema.optional(),
    targetFov: fovSchema.optional(),
    transitionEffect: z.enum(['blend', 'fade', 'none']).default('blend'),
    transitionDurationMs: z.number().int().min(0).max(5000).default(750),
  }),
  z.object({
    ...hotspotBase,
    type: z.literal('info'),
    content: z.string().min(1).max(4000),
  }),
  z.object({
    ...hotspotBase,
    type: z.literal('link'),
    url: z.string().url().max(2000),
    action: z.enum(['new-tab', 'same-tab']).default('new-tab'),
  }),
]);
export type Hotspot = z.infer<typeof hotspotSchema>;
export type NavHotspot = Extract<Hotspot, { type: 'nav' }>;

/* ------------------------------------------------------------------ */
/* Patches (hallazgo "patch" de Panoee: capa 2D anclada en la esfera)  */
/* ------------------------------------------------------------------ */

export const patchSchema = z.object({
  id: ulidSchema,
  yaw: yawSchema,
  pitch: pitchSchema,
  /** Ancho angular del parche sobre la esfera, en grados. */
  widthDeg: z.number().min(1).max(120),
  /** Relación ancho/alto del recurso (w/h). */
  aspectRatio: z.number().min(0.1).max(10),
  /** Ruta relativa a la raíz del tour (p. ej. scenes/{id}-{rev}/patches/{id}.webp). */
  src: z.string().min(1).max(500),
  opacity: z.number().min(0.1).max(1).default(1),
  rotationDeg: z.number().min(-180).max(180).default(0),
  createdAt: isoDateTimeSchema,
  updatedAt: isoDateTimeSchema,
});
export type Patch = z.infer<typeof patchSchema>;

/* ------------------------------------------------------------------ */
/* Escena                                                              */
/* ------------------------------------------------------------------ */

export const defaultViewSchema = z.object({
  yaw: yawSchema.default(0),
  pitch: pitchSchema.default(0),
  fov: fovSchema.default(90),
});
export type DefaultView = z.infer<typeof defaultViewSchema>;

export const zoomLimitSchema = z.object({
  min: fovSchema.default(60),
  max: fovSchema.default(150),
});

export const sceneAudioSchema = z.object({
  /** Ruta relativa a la raíz del tour. */
  url: z.string().min(1).max(500),
  volume: z.number().min(0).max(1).default(0.8),
});

export const gsvSchema = z.object({
  gsvId: z.string().max(500).optional(),
  gsvUrl: z.string().url().max(2000).optional(),
  gsvHeading: z.number().min(-360).max(360).optional(),
});

/**
 * Corrección angular de la esfera por escena (Q4): pan/tilt/roll en GRADOS.
 * El visor convierte a radianes al pasarlo a PSV (`SphereCorrection` de PSV v5
 * es { pan?, tilt?, roll? } en radianes — verificado en sus .d.ts).
 */
export const sphereCorrectionSchema = z.object({
  pan: z.number().min(-360).max(360).default(0),
  tilt: z.number().min(-180).max(180).default(0),
  roll: z.number().min(-180).max(180).default(0),
});
export type SphereCorrectionDeg = z.infer<typeof sphereCorrectionSchema>;

export const sceneSchema = z.object({
  id: ulidSchema,
  name: z.string().min(1).max(120),
  /** Hash corto del contenido de los tiles: cambia al re-tilear (carpeta nueva). */
  revHash: z.string().regex(/^[0-9a-f]{10}$/),
  tiles: tilesDescriptorSchema,
  lat: z.number().min(-90).max(90).optional(),
  lng: z.number().min(-180).max(180).optional(),
  defaultView: defaultViewSchema,
  zoomLimit: zoomLimitSchema,
  audio: sceneAudioSchema.optional(),
  gsv: gsvSchema.optional(),
  sphereCorrection: sphereCorrectionSchema.optional(),
  hotspots: z.array(hotspotSchema).default([]),
  patches: z.array(patchSchema).default([]),
  createdAt: isoDateTimeSchema,
  updatedAt: isoDateTimeSchema,
});
export type Scene = z.infer<typeof sceneSchema>;
