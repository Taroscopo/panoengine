import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { WorkspaceStore } from '../src/store.js';

let dataDir: string;
const ULID_ESCENA = '01M5ST0REM1N1ATRA0000000'.padEnd(26, '0');

beforeAll(async () => {
  dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'store-mini-'));
  const tourDir = path.join(dataDir, 'tours', 'demo');
  await fs.mkdir(tourDir, { recursive: true });
  await fs.writeFile(
    path.join(tourDir, 'tour.json'),
    JSON.stringify({
      schemaVersion: 1,
      id: '01M5ST0RET0BR00000000000'.padEnd(26, '0'),
      slug: 'demo',
      title: 'Demo',
      hostingStatus: 'active',
      createdAt: '2026-10-18T00:00:00.000Z',
      updatedAt: '2026-10-18T00:00:00.000Z',
      autoRotate: { enabled: false, waitTimeMs: 4000, speedDegPerSec: 2 },
      littlePlanetIntro: false,
      defaultSceneId: ULID_ESCENA,
      scenes: [
        {
          id: ULID_ESCENA,
          name: 'Escena',
          revHash: 'aaaaa12345',
          tiles: {
            width: 11264,
            cols: 16,
            rows: 8,
            nbLevels: 3,
            baseUrl: `scenes/${ULID_ESCENA}-aaaaa12345/preview.webp`,
            tileUrlTemplate: `scenes/${ULID_ESCENA}-aaaaa12345/l{level}/{row}_{col}.webp`,
            levels: [
              { width: 2048, cols: 4, rows: 2 },
              { width: 5120, cols: 8, rows: 4 },
              { width: 11264, cols: 16, rows: 8 },
            ],
          },
          defaultView: { yaw: 0, pitch: 0, fov: 90 },
          zoomLimit: { min: 60, max: 150 },
          hotspots: [],
          patches: [],
          createdAt: '2026-10-18T00:00:00.000Z',
          updatedAt: '2026-10-18T00:00:00.000Z',
        },
      ],
      plugins: {},
    }),
    'utf8',
  );
});

afterAll(async () => {
  await fs.rm(dataDir, { recursive: true, force: true });
});

describe('listTours calcula miniatura (E2b)', () => {
  it('devuelve la ruta exacta del thumb de la primera escena', async () => {
    const store = new WorkspaceStore(dataDir);
    const resumenes = await store.listTours();
    expect(resumenes).toHaveLength(1);
    expect(resumenes[0]?.miniatura).toBe(
      `/files/tours/demo/dist/tours/demo/scenes/${ULID_ESCENA}-aaaaa12345/thumb.webp`,
    );
  });
});
