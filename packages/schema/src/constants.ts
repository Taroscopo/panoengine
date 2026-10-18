/**
 * Constantes matemáticas de la pirámide de tiles (RULES.md §3).
 * El master equirectangular se normaliza a 11264×5632.
 *
 * ⚠️ CONTRATO VERIFICADO contra @photo-sphere-viewer/equirectangular-tiles-adapter
 * 5.15.1 (auditoría de .d.ts + index.module.js): `cols` y `rows` de cada nivel
 * DEBEN ser potencias de 2 (cols ≤ 64, rows ≤ 32) o el visor lanza
 * "Panorama cols and rows must be powers of 2." Por eso la rejilla es
 * 16×8 / 8×4 / 4×2 (NO 22×11 / 10×5, matemáticamente prohibidas por el adaptador).
 * El tamaño en píxeles de cada tile = width/cols (704 / 640 / 512).
 */
/**
 * Versión del pipeline de procesamiento (cortador + codificador). Se mezcla en el
 * revHash de cada escena: cualquier cambio de la matemática/codec de la pirámide
 * exige bump ⇒ todos los re-procesos generan carpetas de tiles nuevas (caché
 * inmutable jamás intoxicada). Cambios de tour.json (p. ej. sphereCorrection) NO
 * la tocan: son de render, no de píxeles.
 */
export const PIPELINE_VERSION = 1 as const;

export const MASTER_WIDTH = 11264 as const;
export const MASTER_HEIGHT = 5632 as const;

export interface TileLevel {
  /** Índice del nivel (0 = menor resolución; el adaptador ordena `levels` ascendente). */
  level: number;
  width: number;
  height: number;
  cols: number;
  rows: number;
  /** Ancho/alto en píxeles de cada tile de este nivel (width/cols). */
  tilePx: number;
}

export const TILE_LEVELS: readonly TileLevel[] = [
  { level: 0, width: 2048, height: 1024, cols: 4, rows: 2, tilePx: 512 },
  { level: 1, width: 5120, height: 2560, cols: 8, rows: 4, tilePx: 640 },
  { level: 2, width: 11264, height: 5632, cols: 16, rows: 8, tilePx: 704 },
] as const;

export const TOTAL_TILES_PER_SCENE = TILE_LEVELS.reduce((acc, l) => acc + l.cols * l.rows, 0); // 168

export const PREVIEW_WIDTH = 1024 as const;
export const PREVIEW_HEIGHT = 512 as const;
export const PREVIEW_MAX_BYTES = 40 * 1024;

export const THUMB_WIDTH = 300 as const;
export const THUMB_HEIGHT = 150 as const;
export const THUMB_MAX_BYTES = 20 * 1024;

export const TILE_WEBP_QUALITY = 80 as const;
export const TILE_WEBP_EFFORT = 4 as const;

/** Límites de FOV por defecto de una escena (estilo krpano 60–150). */
export const DEFAULT_ZOOM_LIMIT = { min: 60, max: 150 } as const;
