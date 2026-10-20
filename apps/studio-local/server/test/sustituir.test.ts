import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { ulid } from 'ulid';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import type { StudioConfig } from '../src/config.js';

let config: StudioConfig;
let limpiar: () => Promise<void>;

beforeAll(async () => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'sustituir-'));
  await fs.mkdir(path.join(dataDir, 'tours'), { recursive: true });
  config = { port: 0, dataDir, r2: undefined, edgeBaseUrl: undefined };
  limpiar = async () => {
    await fs.rm(dataDir, { recursive: true, force: true });
  };
});

afterAll(async () => {
  await limpiar();
});

/** JPG sintético 2:1 con un color plano distinguible por versión. */
async function jpg(color: { r: number; g: number; b: number }): Promise<Buffer> {
  const sharp = (await import('sharp')).default;
  const w = 4096;
  const h = 2048;
  const raw = Buffer.alloc(w * h * 3);
  for (let i = 0; i < w * h; i++) {
    raw[i * 3] = color.r;
    raw[i * 3 + 1] = color.g;
    raw[i * 3 + 2] = color.b;
  }
  return sharp(raw, { raw: { width: w, height: h, channels: 3 } })
    .jpeg({ quality: 85 })
    .toBuffer();
}

function multipart(nombre: string, datos: Buffer): { headers: Record<string, string>; payload: Buffer } {
  const limite = '----panoengine';
  const cuerpo = Buffer.concat([
    Buffer.from(
      `--${limite}\r\ncontent-disposition: form-data; name="file"; filename="${nombre}"\r\ncontent-type: image/jpeg\r\n\r\n`,
    ),
    datos,
    Buffer.from(`\r\n--${limite}--\r\n`),
  ]);
  return { headers: { 'content-type': `multipart/form-data; boundary=${limite}` }, payload: cuerpo };
}

async function esperarCola(app: ReturnType<typeof buildApp>, slug: string): Promise<void> {
  for (let i = 0; i < 150; i++) {
    await new Promise((r) => setTimeout(r, 300));
    const res = await app.inject({ method: 'GET', url: `/api/tours/${slug}` });
    const jobs = res.json().jobs as { status: string }[];
    if (!jobs.some((j) => j.status === 'running' || j.status === 'queued')) {
      return;
    }
  }
  throw new Error('la cola no terminó');
}

describe('sustituir la foto de una escena (orden de Andrés)', () => {
  it('conserva id, nombre, grupo y hotspots; cambia revHash y limpia la revisión vieja', async () => {
    const app = buildApp(config);
    await app.inject({ method: 'POST', url: '/api/tours', payload: { slug: 'sustituir-ok', title: 'T' } });

    const subida = await app.inject({
      method: 'POST',
      url: '/api/tours/sustituir-ok/scenes',
      ...multipart('pano.jpg', await jpg({ r: 10, g: 60, b: 120 })),
    });
    expect(subida.statusCode).toBe(201);
    const escena = subida.json().scene as { id: string; revHash: string };

    // Grupo + hotspot + nombre personalizado: TODO debe sobrevivir al sustituir.
    const idGrupo = ulid();
    const parche = await app.inject({
      method: 'PATCH',
      url: `/api/tours/sustituir-ok/scenes/${escena.id}`,
      payload: { name: 'Salón principal' },
    });
    expect(parche.statusCode).toBe(200);
    const conGrupo = await app.inject({
      method: 'PATCH',
      url: '/api/tours/sustituir-ok',
      payload: {
        groups: [{ id: idGrupo, name: 'Piso 1' }],
        sceneOrder: [{ id: escena.id, groupId: idGrupo }],
      },
    });
    expect(conGrupo.statusCode).toBe(200);
    const hotspots = [
      {
        type: 'info',
        id: ulid(),
        title: 'Información',
        content: 'Detalle',
        yaw: 12,
        pitch: -3,
        createdAt: '2026-10-20T10:00:00.000Z',
        updatedAt: '2026-10-20T10:00:00.000Z',
      },
    ];
    const conPunto = await app.inject({
      method: 'PATCH',
      url: `/api/tours/sustituir-ok/scenes/${escena.id}`,
      payload: { hotspots },
    });
    expect(conPunto.statusCode).toBe(200);

    await esperarCola(app, 'sustituir-ok');

    const revVieja = escena.revHash;
    const res = await app.inject({
      method: 'POST',
      url: `/api/tours/sustituir-ok/scenes/${escena.id}/replace`,
      ...multipart('pano2.jpg', await jpg({ r: 200, g: 120, b: 30 })),
    });
    expect(res.statusCode).toBe(200);
    const nueva = res.json().scene as {
      id: string;
      revHash: string;
      name: string;
      groupId?: string;
      hotspots: unknown[];
    };
    expect(nueva.id).toBe(escena.id);
    expect(nueva.revHash).not.toBe(revVieja);
    expect(nueva.name).toBe('Salón principal');
    expect(nueva.groupId).toBe(idGrupo);
    expect(nueva.hotspots).toHaveLength(1);

    // La carpeta de la revisión vieja se elimina; la nueva existe.
    const raiz = `${config.dataDir}/tours/sustituir-ok/dist/tours/sustituir-ok/scenes`;
    const existe = async (dir: string) =>
      fs.stat(dir).then(
        () => true,
        () => false,
      );
    expect(await existe(path.join(raiz, `${escena.id}-${revVieja}`))).toBe(false);
    expect(await existe(path.join(raiz, `${escena.id}-${nueva.revHash}`))).toBe(true);
  });

  it('rechaza con 415 un reemplazo que no es JPG', async () => {
    const app = buildApp(config);
    await app.inject({ method: 'POST', url: '/api/tours', payload: { slug: 'sustituir-mal', title: 'T' } });
    const subida = await app.inject({
      method: 'POST',
      url: '/api/tours/sustituir-mal/scenes',
      ...multipart('pano.jpg', await jpg({ r: 5, g: 50, b: 90 })),
    });
    expect(subida.statusCode).toBe(201);
    const escena = subida.json().scene as { id: string };
    await esperarCola(app, 'sustituir-mal');

    const pngFake = Buffer.from('no-es-una-imagen');
    const res = await app.inject({
      method: 'POST',
      url: `/api/tours/sustituir-mal/scenes/${escena.id}/replace`,
      ...multipart('pano.png', pngFake),
    });
    expect(res.statusCode).toBe(415);
  });

  it('404 al sustituir una escena inexistente', async () => {
    const app = buildApp(config);
    await app.inject({ method: 'POST', url: '/api/tours', payload: { slug: 'sustituir-404', title: 'T' } });
    const res = await app.inject({
      method: 'POST',
      url: `/api/tours/sustituir-404/scenes/${ulid()}/replace`,
      ...multipart('pano.jpg', await jpg({ r: 1, g: 2, b: 3 })),
    });
    expect(res.statusCode).toBe(404);
  });
});
