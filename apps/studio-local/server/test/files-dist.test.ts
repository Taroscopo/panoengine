import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import type { StudioConfig } from '../src/config.js';

let config: StudioConfig;
let limpiar: () => Promise<void>;

beforeAll(async () => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'files-dist-'));
  config = { port: 0, dataDir, r2: undefined, edgeBaseUrl: undefined };
  // Fixture: un master (PROHIBIDO por /files) y un thumb de dist (permitido).
  const tourDir = path.join(dataDir, 'tours', 'demo-files');
  await fs.mkdir(path.join(tourDir, 'masters'), { recursive: true });
  await fs.mkdir(path.join(tourDir, 'dist', 'tours', 'demo-files', 'scenes', '01A-rev01'), {
    recursive: true,
  });
  await fs.writeFile(path.join(tourDir, 'masters', '01A.jpg'), 'jpg-de-prueba');
  await fs.writeFile(
    path.join(tourDir, 'dist', 'tours', 'demo-files', 'scenes', '01A-rev01', 'thumb.webp'),
    'webp-de-prueba',
  );
  limpiar = async () => {
    await fs.rm(dataDir, { recursive: true, force: true });
  };
});

afterAll(async () => {
  await limpiar();
});

describe('/files solo sirve dist/ (H1)', () => {
  it('el master NO se sirve por HTTP (404)', async () => {
    const app = buildApp(config);
    const res = await app.inject({ method: 'GET', url: '/files/tours/demo-files/masters/01A.jpg' });
    expect(res.statusCode).toBe(404);
  });

  it('un archivo de dist/ SÍ se sirve', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'GET',
      url: '/files/tours/demo-files/dist/tours/demo-files/scenes/01A-rev01/thumb.webp',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe('webp-de-prueba');
  });

  it('cualquier otra ruta bajo /files queda bloqueada (404), incluso con slug válido', async () => {
    const app = buildApp(config);
    for (const url of [
      '/files/tours/demo-files/tour.json',
      '/files/tours/demo-files/manifest.json',
      '/files/otro/README',
      '/files/tours/Demo-Files/dist/x',
    ]) {
      const res = await app.inject({ method: 'GET', url });
      expect(res.statusCode, url).toBe(404);
    }
  });

  it('H1-fix: el bypass con «..» codificado NO colma masters ni tour.json (404)', async () => {
    const app = buildApp(config);
    for (const url of [
      '/files/tours/demo-files/dist/..%2fmasters/01A.jpg',
      '/files/tours/demo-files/dist/%2e%2e%2fmasters/01A.jpg',
      '/files/tours/demo-files/dist/..%2ftour.json',
      '/files/tours/demo-files/dist/%2e%2e/tour.json',
      '/files/tours/demo-files/dist/../masters/01A.jpg',
      // slug distinto con traversal (segunda barrera con path.resolve)
      '/files/tours/demo-files/dist/..%2f..%2fotro-tour/masters/x.jpg',
      '/files/tours/demo-files/dist/tours/..%2f..%2f..%2fmasters/01A.jpg',
      // segmentos raros: barra invertida, NUL, dobles barras
      '/files/tours/demo-files/dist%5C..%5Cmasters/01A.jpg',
      '/files/tours/demo-files/dist//..%2fmasters/01A.jpg',
    ]) {
      const res = await app.inject({ method: 'GET', url });
      expect(res.statusCode, url).toBe(404);
    }
  });

  it('H1-fix: el archivo legítimo de dist sigue sirviéndose (200)', async () => {
    const app = buildApp(config);
    const res = await app.inject({
      method: 'GET',
      url: '/files/tours/demo-files/dist/tours/demo-files/scenes/01A-rev01/thumb.webp',
    });
    expect(res.statusCode).toBe(200);
  });
});
