import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { newScene, newTour, type TourDraft } from '@panoengine/schema';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import type { StudioConfig } from '../src/config.js';

const NOW = '2026-10-20T12:00:00.000Z';

let config: StudioConfig;
let limpiar: () => Promise<void>;
let escenaId = '';

beforeAll(async () => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'nivelar-'));
  config = { port: 0, dataDir, r2: undefined, edgeBaseUrl: undefined };
  const tour: TourDraft = newTour({ slug: 'nivelar', title: 'Nivelar', now: NOW });
  const escena = newScene({ name: 'Sala', revHash: 'aaaaaaaaaa', now: NOW });
  escenaId = escena.id;
  tour.scenes.push(escena);
  tour.defaultSceneId = escena.id;
  const dir = path.join(dataDir, 'tours', 'nivelar');
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, 'tour.json'), JSON.stringify(tour));
  limpiar = async () => {
    await fs.rm(dataDir, { recursive: true, force: true });
  };
});

afterAll(async () => {
  await limpiar();
});

describe('nivelar horizonte (E4) — PATCH /scenes/:id', () => {
  it('guarda sphereCorrection válida (pan −180..180) y persiste en tour.json', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'PATCH',
      url: `/api/tours/nivelar/scenes/${escenaId}`,
      payload: { sphereCorrection: { pan: 40, tilt: 20, roll: -15 } },
    });
    expect(res.statusCode).toBe(200);
    expect(res.json().scene.sphereCorrection).toEqual({ pan: 40, tilt: 20, roll: -15 });
    const enDisco = JSON.parse(
      await fs.readFile(path.join(config.dataDir, 'tours', 'nivelar', 'tour.json'), 'utf8'),
    );
    expect(enDisco.scenes[0].sphereCorrection.roll).toBe(-15);
  });

  it('fuera de rango (pan 181, tilt −181) → 400 sin tocar el tour', async () => {
    const app = buildApp(config);
    const antes = JSON.parse(
      await fs.readFile(path.join(config.dataDir, 'tours', 'nivelar', 'tour.json'), 'utf8'),
    );
    for (const cuerpo of [
      { sphereCorrection: { pan: 181, tilt: 0, roll: 0 } },
      { sphereCorrection: { pan: 0, tilt: -181, roll: 0 } },
      { sphereCorrection: { pan: 0, tilt: 0, roll: 999 } },
    ]) {
      const res = await app.inject({
        method: 'PATCH',
        url: `/api/tours/nivelar/scenes/${escenaId}`,
        payload: cuerpo,
      });
      expect(res.statusCode).toBe(400);
    }
    const despues = JSON.parse(
      await fs.readFile(path.join(config.dataDir, 'tours', 'nivelar', 'tour.json'), 'utf8'),
    );
    expect(despues.scenes[0].sphereCorrection).toEqual(antes.scenes[0].sphereCorrection);
  });

  it('null quita la corrección (Restablecer)', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'PATCH',
      url: `/api/tours/nivelar/scenes/${escenaId}`,
      payload: { sphereCorrection: null },
    });
    expect(res.statusCode).toBe(200);
    expect(res.json().scene.sphereCorrection).toBeUndefined();
  });

  it('los límites exactos ±180 son válidos', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'PATCH',
      url: `/api/tours/nivelar/scenes/${escenaId}`,
      payload: { sphereCorrection: { pan: -180, tilt: 180, roll: 0 } },
    });
    expect(res.statusCode).toBe(200);
  });
});
