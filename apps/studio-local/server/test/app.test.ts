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

describe('borrar escena (A4) y relación 2:1 estricta (A6)', () => {
  function multipart(nombre: string, datos: Buffer): { headers: Record<string, string>; payload: Buffer } {
    const limite = 'pano-test-limite';
    const partes = [
      Buffer.from(
        `--${limite}\r\nContent-Disposition: form-data; name="file"; filename="${nombre}"\r\nContent-Type: image/jpeg\r\n\r\n`,
      ),
      datos,
      Buffer.from(`\r\n--${limite}--\r\n`),
    ];
    return {
      headers: { 'content-type': `multipart/form-data; boundary=${limite}` },
      payload: Buffer.concat(partes),
    };
  }

  async function jpgDimensiones(w: number, h: number): Promise<Buffer> {
    const sharp = (await import('sharp')).default;
    return sharp({
      create: { width: w, height: h, channels: 3, background: { r: 90, g: 120, b: 160 } },
    })
      .jpeg({ quality: 85 })
      .toBuffer();
  }

  it('rechaza 422 una foto 3:2 (no equirectangular)', async () => {
    const app = buildApp(config);
    const crear = await app.inject({
      method: 'POST',
      url: '/api/tours',
      payload: { slug: 'relacion-estricta', title: 'T' },
    });
    expect(crear.statusCode).toBe(201);
    const { headers, payload } = multipart('normal.jpg', await jpgDimensiones(6000, 4000));
    const res = await app.inject({
      method: 'POST',
      url: '/api/tours/relacion-estricta/scenes',
      headers,
      payload,
    });
    expect(res.statusCode).toBe(422);
    expect(res.json().error).toContain('2:1');
  });

  it('admite 2:1 exacto del X5 (11904×5952) y al borrar la escena elimina su carpeta dist/', async () => {
    const app = buildApp(config);
    await app.inject({
      method: 'POST',
      url: '/api/tours',
      payload: { slug: 'borrado-dist', title: 'T' },
    });
    const { headers, payload } = multipart('pano.jpg', await jpgDimensiones(11904, 5952));
    const subida = await app.inject({
      method: 'POST',
      url: '/api/tours/borrado-dist/scenes',
      headers,
      payload,
    });
    expect(subida.statusCode).toBe(201);
    const escena = subida.json().scene as { id: string; revHash: string };

    // esperar la pirámide para poder borrar (409 si está corriendo)
    let lista: { jobs: { status: string }[] };
    for (let i = 0; i < 100; i++) {
      await new Promise((r) => setTimeout(r, 300));
      lista = await app.inject({ method: 'GET', url: '/api/tours/borrado-dist' }).then((r) => r.json());
      if (!lista.jobs.some((j) => j.status === 'running' || j.status === 'queued')) {
        break;
      }
    }

    const dirEscena = `${config.dataDir}/tours/borrado-dist/dist/tours/borrado-dist/scenes/${escena.id}-${escena.revHash}`;
    const existe = async () =>
      (await import('node:fs/promises')).stat(dirEscena).then(
        () => true,
        () => false,
      );
    expect(await existe()).toBe(true);

    const borrado = await app.inject({
      method: 'DELETE',
      url: `/api/tours/borrado-dist/scenes/${escena.id}`,
    });
    expect(borrado.statusCode).toBe(200);
    expect(borrado.json().nota).toContain('eliminada');
    expect(await existe()).toBe(false);
    // el master sigue (fuente de verdad)
    const masterExiste = await (await import('node:fs/promises'))
      .stat(`${config.dataDir}/tours/borrado-dist/masters/${escena.id}.jpg`)
      .then(
        () => true,
        () => false,
      );
    expect(masterExiste).toBe(true);
  }, 180_000);
});
