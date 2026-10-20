import { ulid } from 'ulid';
import { DEFAULT_ZOOM_LIMIT, MASTER_WIDTH, TILE_LEVELS } from './constants.js';
import type { DefaultView, Scene, TilesDescriptor } from './scene.js';
import { defaultViewSchema } from './scene.js';
import type { TourDraft } from './tour.js';

/** Carpeta versionada de una escena: {sceneId}-{revHash}. */
export function sceneDir(sceneId: string, revHash: string): string {
  return `scenes/${sceneId}-${revHash}`;
}

/** Descriptor de tiles estándar de PanoEngine para una escena versionada. */
export function createTilesDescriptor(sceneId: string, revHash: string): TilesDescriptor {
  const base = sceneDir(sceneId, revHash);
  const top = TILE_LEVELS[TILE_LEVELS.length - 1];
  if (!top) {
    throw new Error('TILE_LEVELS vacío');
  }
  return {
    width: MASTER_WIDTH,
    cols: top.cols,
    rows: top.rows,
    nbLevels: TILE_LEVELS.length,
    baseUrl: `${base}/preview.webp`,
    tileUrlTemplate: `${base}/l{level}/{row}_{col}.webp`,
    levels: TILE_LEVELS.map((l) => ({ width: l.width, cols: l.cols, rows: l.rows })),
  };
}

export interface NewSceneInput {
  /** Id explícito (ULID). Si se omite, se genera uno nuevo. */
  id?: string | undefined;
  name: string;
  revHash: string;
  lat?: number | undefined;
  lng?: number | undefined;
  defaultView?: Partial<DefaultView> | undefined;
  now?: string | undefined;
}

export function newScene(input: NewSceneInput): Scene {
  const now = input.now ?? new Date().toISOString();
  const id = input.id ?? ulid();
  return {
    id,
    name: input.name,
    revHash: input.revHash,
    tiles: createTilesDescriptor(id, input.revHash),
    ...(input.lat !== undefined ? { lat: input.lat } : {}),
    ...(input.lng !== undefined ? { lng: input.lng } : {}),
    defaultView: defaultViewSchema.parse(input.defaultView ?? {}),
    zoomLimit: { ...DEFAULT_ZOOM_LIMIT },
    hotspots: [],
    patches: [],
    createdAt: now,
    updatedAt: now,
  };
}

export interface NewTourInput {
  slug: string;
  title: string;
  clientName?: string | undefined;
  whatsappNumber?: string | undefined;
  whatsappDefaultText?: string | undefined;
  hostingExpiresAt?: string | undefined;
  now?: string | undefined;
}

export function newTour(input: NewTourInput): TourDraft {
  const now = input.now ?? new Date().toISOString();
  return {
    schemaVersion: 1,
    id: ulid(),
    slug: input.slug,
    title: input.title,
    ...(input.clientName !== undefined ? { clientName: input.clientName } : {}),
    ...(input.whatsappNumber !== undefined ? { whatsappNumber: input.whatsappNumber } : {}),
    ...(input.whatsappDefaultText !== undefined ? { whatsappDefaultText: input.whatsappDefaultText } : {}),
    hostingStatus: 'active',
    ...(input.hostingExpiresAt !== undefined ? { hostingExpiresAt: input.hostingExpiresAt } : {}),
    createdAt: now,
    updatedAt: now,
    autoRotate: { enabled: false, waitTimeMs: 4000, speedDegPerSec: 2 },
    littlePlanetIntro: false,
    groups: [],
    scenes: [],
    plugins: {},
  };
}
