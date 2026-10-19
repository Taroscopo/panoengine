import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { buildApp } from '../src/app.js';
import type { StudioConfig } from '../src/config.js';

// Mock parcial con importOriginal: SOLO fs.rm falla; el resto de fs es el real.
// El código del servidor (routes.ts) recibe este mock; el test usa fsReal.
vi.mock(import('node:fs/promises'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    default: {
      ...actual,
      rm: () => {
        throw new Error('EACCES simulado: rm bloqueado');
      },
    },
  };
});

const fsReal = await vi.importActual<typeof import('node:fs/promises')>('node:fs/promises');

let config: StudioConfig;
const ULID_ESCENA = '01M5RMFA11A00000000000000'.padEnd(26, '0');

beforeAll(async () => {
  const dataDir = await fsReal.mkdtemp('/tmp/borrar-error-');
  await fsReal.mkdir(path.join(dataDir, 'tours'), { recursive: true });
  config = { port: 0, dataDir, r2: undefined, edgeBaseUrl: undefined };

  const tour = {
    schemaVersion: 1,
    id: '01M5RMTEST000000000000000'.padEnd(26, '0'),
    slug: 'rm-falla',
    title: 'T',
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
        revHash: 'aaaaaaaaaa',
        tiles: {
          width: 11264,
          cols: 16,
          rows: 8,
          nbLevels: 3,
          baseUrl: `scenes/${ULID_ESCENA}-aaaaaaaaaa/preview.webp`,
          tileUrlTemplate: `scenes/${ULID_ESCENA}-aaaaaaaaaa/l{level}/{row}_{col}.webp`,
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
  };
  await fsReal.mkdir(path.join(dataDir, 'tours/rm-falla'), { recursive: true });
  await fsReal.writeFile(path.join(dataDir, 'tours/rm-falla/tour.json'), JSON.stringify(tour));
  await fsReal.mkdir(
    path.join(dataDir, 'tours/rm-falla/dist/tours/rm-falla/scenes', `${ULID_ESCENA}-aaaaaaaaaa`),
    { recursive: true },
  );
});

afterAll(async () => {
  await fsReal.rm(config.dataDir, { recursive: true, force: true });
});

describe('punto 1: fs.rm falla al borrar escena — sin 500, con aviso y tour ya guardado', () => {
  it('responde 200 + aviso de carpeta no borrada, y el tour.json ya no contiene la escena', async () => {
    const app = buildApp(config);
    const res = await app.inject({ method: 'DELETE', url: `/api/tours/rm-falla/scenes/${ULID_ESCENA}` });

    expect(res.statusCode).toBe(200);
    const cuerpo = res.json() as { ok: boolean; nota: string };
    expect(cuerpo.ok).toBe(true);
    expect(cuerpo.nota).toContain('no se pudo borrar');
    expect(cuerpo.nota).toContain('se volvería a subir');

    const tourTras = JSON.parse(
      await fsReal.readFile(path.join(config.dataDir, 'tours/rm-falla/tour.json'), 'utf8'),
    ) as { scenes: unknown[]; defaultSceneId?: string };
    expect(tourTras.scenes).toHaveLength(0);
    expect(tourTras.defaultSceneId).toBeUndefined();
  });
});
