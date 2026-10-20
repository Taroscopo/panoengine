import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { newScene, newTour, type TourDraft } from '@panoengine/schema';
import { ulid } from 'ulid';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import type { StudioConfig } from '../src/config.js';

const NOW = '2026-10-20T12:00:00.000Z';

let config: StudioConfig;
let limpiar: () => Promise<void>;

beforeAll(async () => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'orden-grupos-'));
  await fs.mkdir(path.join(dataDir, 'tours'), { recursive: true });
  config = { port: 0, dataDir, r2: undefined, edgeBaseUrl: undefined };
  limpiar = async () => {
    await fs.rm(dataDir, { recursive: true, force: true });
  };
});

afterAll(async () => {
  await limpiar();
});

/** Siembra un tour.json con N escenas (sin imágenes: el orden no las necesita). */
async function sembrarTour(slug: string, nombres: string[]): Promise<TourDraft> {
  const tour = newTour({ slug, title: `Tour ${slug}`, now: NOW });
  for (const nombre of nombres) {
    tour.scenes.push(newScene({ name: nombre, revHash: 'aaaaaaaaaa', now: NOW }));
  }
  tour.defaultSceneId = tour.scenes[0]?.id;
  const dir = path.join(config.dataDir, 'tours', slug);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, 'tour.json'), JSON.stringify(tour));
  return tour;
}

describe('grupos y orden de escenas (orden de Andrés)', () => {
  it('PATCH con groups + sceneOrder reordena y agrupa (permutación exacta)', async () => {
    const app = buildApp(config);
    const tour = await sembrarTour('orden-ok', ['A', 'B', 'C']);
    const [a, b, c] = tour.scenes;
    if (!a || !b || !c) throw new Error('fixture incompleto');
    const idGrupo = ulid();
    const res = await app.inject({
      method: 'PATCH',
      url: '/api/tours/orden-ok',
      payload: {
        groups: [{ id: idGrupo, name: 'Piso 1' }],
        sceneOrder: [
          { id: c.id, groupId: idGrupo },
          { id: a.id, groupId: null },
          { id: b.id, groupId: idGrupo },
        ],
      },
    });
    expect(res.statusCode).toBe(200);
    const body = res.json().tour as TourDraft;
    expect(body.scenes.map((s) => s.name)).toEqual(['C', 'A', 'B']);
    expect(body.scenes.find((s) => s.id === c.id)?.groupId).toBe(idGrupo);
    expect(body.scenes.find((s) => s.id === b.id)?.groupId).toBe(idGrupo);
    expect(body.scenes.find((s) => s.id === a.id)?.groupId).toBeUndefined();
    expect(body.groups).toEqual([{ id: idGrupo, name: 'Piso 1' }]);
  });

  it('sceneOrder que repite o falta una escena → 400', async () => {
    const app = buildApp(config);
    const tour = await sembrarTour('orden-mal', ['A', 'B']);
    const [a, b] = tour.scenes;
    if (!a || !b) throw new Error('fixture incompleto');
    const repite = await app.inject({
      method: 'PATCH',
      url: '/api/tours/orden-mal',
      payload: {
        sceneOrder: [
          { id: a.id, groupId: null },
          { id: a.id, groupId: null },
        ],
      },
    });
    expect(repite.statusCode).toBe(400);
    const falta = await app.inject({
      method: 'PATCH',
      url: '/api/tours/orden-mal',
      payload: { sceneOrder: [{ id: a.id, groupId: null }] },
    });
    expect(falta.statusCode).toBe(400);
    expect(b).toBeDefined();
  });

  it('sceneOrder hacia un grupo que no existe → 400', async () => {
    const app = buildApp(config);
    const tour = await sembrarTour('grupo-mal', ['A']);
    const a = tour.scenes[0];
    if (!a) throw new Error('fixture incompleto');
    const res = await app.inject({
      method: 'PATCH',
      url: '/api/tours/grupo-mal',
      payload: { sceneOrder: [{ id: a?.id, groupId: ulid() }] },
    });
    expect(res.statusCode).toBe(400);
    expect(res.json().error).toContain('no existe');
  });

  it('borrar un grupo manda sus escenas a Sin grupo (groups + sceneOrder juntos)', async () => {
    const app = buildApp(config);
    const tour = await sembrarTour('borrar-grupo', ['A', 'B']);
    const [a, b] = tour.scenes;
    if (!a || !b) throw new Error('fixture incompleto');
    const idGrupo = ulid();
    await app.inject({
      method: 'PATCH',
      url: '/api/tours/borrar-grupo',
      payload: {
        groups: [{ id: idGrupo, name: 'Piso 1' }],
        sceneOrder: [
          { id: a.id, groupId: idGrupo },
          { id: b.id, groupId: null },
        ],
      },
    });
    const res = await app.inject({
      method: 'PATCH',
      url: '/api/tours/borrar-grupo',
      payload: {
        groups: [],
        sceneOrder: [
          { id: a.id, groupId: null },
          { id: b.id, groupId: null },
        ],
      },
    });
    expect(res.statusCode).toBe(200);
    const body = res.json().tour as TourDraft;
    expect(body.groups).toEqual([]);
    expect(body.scenes.every((s) => s.groupId === undefined)).toBe(true);
  });
});
