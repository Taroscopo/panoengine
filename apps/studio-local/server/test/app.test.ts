import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import type { StudioConfig } from '../src/config.js';

let config: StudioConfig;
let limpiar: () => Promise<void>;

beforeAll(async () => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'app-test-'));
  await fs.mkdir(path.join(dataDir, 'tours'), { recursive: true });
  config = { port: 0, dataDir, r2: undefined, edgeBaseUrl: undefined };
  limpiar = async () => {
    await fs.rm(dataDir, { recursive: true, force: true });
  };
});

afterAll(async () => {
  await limpiar();
});

describe('endurecimiento local del estudio (A3)', () => {
  it('slug inválido en la URL → 400 (también bloquea path traversal)', async () => {
    const app = buildApp(config);
    for (const ruta of ['/api/tours/Mayusculas', '/api/tours/a--b', '/api/tours/slug%20con%20espacio']) {
      const res = await app.inject({ method: 'GET', url: ruta });
      expect(res.statusCode, ruta).toBe(400);
    }
  });

  it('sceneId inválido → 400 en PATCH/DELETE de escena', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'PATCH',
      url: '/api/tours/valido/scenes/no-es-ulid',
      payload: {},
    });
    expect(res.statusCode).toBe(400);
  });

  it('Host ajeno → 403 en cualquier ruta', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'GET',
      url: '/api/tours',
      headers: { host: 'example.com' },
    });
    expect(res.statusCode).toBe(403);
  });

  it('Origin ajeno → 403 en POST; Origin local pasa el hook', async () => {
    const app = buildApp(config);
    const malo = await app.inject({
      method: 'POST',
      url: '/api/tours',
      headers: { origin: 'https://evil.example' },
      payload: { slug: 'buen-slug', title: 'T' },
    });
    expect(malo.statusCode).toBe(403);

    // mismo origen (editor): el hook lo deja pasar y llega a la validación de cuerpo
    const cuerpoVacio = await app.inject({
      method: 'POST',
      url: '/api/tours',
      headers: { origin: 'http://127.0.0.1:5173' },
      payload: { title: 'sin slug' },
    });
    expect(cuerpoVacio.statusCode).toBe(400);
  });

  it('GET con Origin ajeno NO se bloquea (solo mutaciones)', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'GET',
      url: '/api/tours',
      headers: { origin: 'https://cualquiera.example' },
    });
    expect(res.statusCode).toBe(200);
  });
});
