import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { DeleteObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { describe, expect, it } from 'vitest';
import type { R2Config } from '../src/config.js';
import { R2Publisher, type S3Envio } from '../src/r2.js';
import type { PublishManifest } from '../src/store.js';

const CFG: R2Config = {
  accountId: 'cuenta',
  accessKeyId: 'ak',
  secretAccessKey: 'sk',
  bucket: 'bucket-test',
};

interface Put {
  comando: 'Put' | 'Delete';
  key: string;
}

/** Cliente S3 simulado: registra cada comando y falla las claves indicadas. */
function clienteSimulado(fallarKeys: string[] = []): { cliente: S3Envio; operaciones: Put[] } {
  const operaciones: Put[] = [];
  const cliente: S3Envio = {
    async send(comando: unknown): Promise<unknown> {
      if (comando instanceof PutObjectCommand) {
        const key = comando.input.Key ?? '';
        operaciones.push({ comando: 'Put', key });
        if (fallarKeys.includes(key)) {
          throw new Error(`fallo simulado para ${key}`);
        }
        return {};
      }
      if (comando instanceof DeleteObjectsCommand) {
        for (const obj of comando.input.Delete?.Objects ?? []) {
          operaciones.push({ comando: 'Delete', key: obj.Key ?? '' });
        }
        return {};
      }
      throw new Error('comando inesperado');
    },
  };
  return { cliente, operaciones };
}

/** Crea {temp}/dist/... y devuelve {temp}/dist; el manifiesto queda en {temp}/ (aislado). */
async function crearDist(archivos: Record<string, string>): Promise<string> {
  const padre = await fs.mkdtemp(path.join(os.tmpdir(), 'r2-test-'));
  const raiz = path.join(padre, 'dist');
  await fs.mkdir(raiz, { recursive: true });
  for (const [key, contenido] of Object.entries(archivos)) {
    const destino = path.join(raiz, key);
    await fs.mkdir(path.dirname(destino), { recursive: true });
    await fs.writeFile(destino, contenido, 'utf8');
  }
  return raiz;
}

async function leerManifiesto(raiz: string): Promise<PublishManifest | null> {
  try {
    return JSON.parse(
      await fs.readFile(path.join(path.dirname(raiz), 'manifest.json'), 'utf8'),
    ) as PublishManifest;
  } catch {
    return null;
  }
}

describe('publicador R2 (cliente S3 simulado)', () => {
  it('sube tour.json AL FINAL, tras los tiles', async () => {
    const raiz = await crearDist({
      'tours/x/tour.json': '{}',
      'tours/x/scenes/a/l2/0_0.webp': 'tile0',
      'tours/x/scenes/a/l2/0_1.webp': 'tile1',
    });
    const { cliente, operaciones } = clienteSimulado();
    const stats = await new R2Publisher(CFG, cliente).publishDist(raiz, null);

    expect(stats.errors).toEqual([]);
    const puts = operaciones.filter((o) => o.comando === 'Put').map((o) => o.key);
    expect(puts).toHaveLength(3);
    expect(puts.indexOf('tours/x/tour.json')).toBe(puts.length - 1);
  });

  it('con un tile fallido: no sube tour.json, no borra nada y el manifiesto NO registra el fallo', async () => {
    const raiz = await crearDist({
      'tours/x/tour.json': '{}',
      'tours/x/scenes/a/l2/0_0.webp': 'tile0',
      'tours/x/scenes/a/l2/0_1.webp': 'tile1',
    });
    const previo: PublishManifest = {
      files: { 'tours/x/viejo.webp': { sha256: 'aaa', size: 1 } },
      publishedAt: '2026-01-01T00:00:00.000Z',
      bucket: 'bucket-test',
      endpoint: 'https://cuenta.r2.cloudflarestorage.com',
    };
    const { cliente, operaciones } = clienteSimulado(['tours/x/scenes/a/l2/0_0.webp']);
    const stats = await new R2Publisher(CFG, cliente).publishDist(raiz, previo);

    expect(stats.errors.some((e) => e.includes('0_0.webp'))).toBe(true);
    expect(stats.errors.some((e) => e.includes('tour.json'))).toBe(true);
    const puts = operaciones.filter((o) => o.comando === 'Put').map((o) => o.key);
    expect(puts).not.toContain('tours/x/tour.json');
    expect(operaciones.some((o) => o.comando === 'Delete')).toBe(false);

    const manifiesto = await leerManifiesto(raiz);
    expect(manifiesto).toBeNull(); // no se reescribe con errores

    // reintentamos sin fallos: el tile fallido se re-sube (no quedó en manifiesto)
    const { cliente: cliente2 } = clienteSimulado();
    const stats2 = await new R2Publisher(CFG, cliente2).publishDist(raiz, previo);
    expect(stats2.errors).toEqual([]);
    expect(stats2.uploaded).toBe(3);
    expect(stats2.deleted).toBe(1); // tours/x/viejo.webp desapareció del dist
  });

  it('publicación limpia: manifiesto con lo subido, skip de lo idéntico y borrado de lo viejo después', async () => {
    const raiz = await crearDist({
      'tours/x/tour.json': '{"v":1}',
      'tours/x/scenes/a/preview.webp': 'preview',
    });
    const previo: PublishManifest = {
      files: {
        'tours/x/tour.json': { sha256: 'viejo', size: 9 },
        'tours/x/scenes/a/preview.webp': { sha256: 'otro', size: 8 },
        'tours/x/scenes/vieja-1234/thumb.webp': { sha256: 'zzz', size: 2 },
      },
      publishedAt: '2026-01-01T00:00:00.000Z',
      bucket: 'bucket-test',
      endpoint: 'https://cuenta.r2.cloudflarestorage.com',
    };
    const { cliente, operaciones } = clienteSimulado();
    const stats = await new R2Publisher(CFG, cliente).publishDist(raiz, previo);

    expect(stats.errors).toEqual([]);
    expect(stats.uploaded).toBe(2);
    expect(stats.deleted).toBe(1);

    const manifiesto = await leerManifiesto(raiz);
    expect(manifiesto).not.toBeNull();
    expect(Object.keys(mani(manifiesto).files).sort()).toEqual(
      ['tours/x/scenes/a/preview.webp', 'tours/x/tour.json'].sort(),
    );
    // el borrado ocurre tras las subidas
    const ultimaSubida = operaciones.map((o) => o.comando).lastIndexOf('Put');
    const primerBorrado = operaciones.map((o) => o.comando).indexOf('Delete');
    expect(primerBorrado).toBeGreaterThan(ultimaSubida);
  });
});

function mani(m: PublishManifest | null): PublishManifest {
  if (!m) {
    throw new Error('manifiesto nulo');
  }
  return m;
}

describe('manifiesto consciente del bucket (punto 1)', () => {
  const CFG_B: R2Config = { ...CFG, bucket: 'bucket-B' };

  it('publicar a A y luego a B sube TODO (sin skips ni borrados cruzados); mismo bucket sí hace skip', async () => {
    const raiz = await crearDist({
      'tours/x/tour.json': '{}',
      'tours/x/scenes/a/preview.webp': 'preview',
    });

    // publish 1 → bucket A (todo nuevo)
    const cA1 = clienteSimulado();
    const sA1 = await new R2Publisher(CFG, cA1.cliente).publishDist(raiz, null);
    expect(sA1.uploaded).toBe(2);

    // publish 2 → bucket B con el manifiesto de A: debe subir TODO de nuevo
    const cB = clienteSimulado();
    const sB = await new R2Publisher(CFG_B, cB.cliente).publishDist(raiz, await leerManifiesto(raiz));
    expect(sB.uploaded).toBe(2);
    expect(sB.skipped).toBe(0);
    expect(sB.deleted).toBe(0);

    // publish 3 → bucket A con el manifiesto (ahora de B): también todo nuevo
    const cA3 = clienteSimulado();
    const sA3 = await new R2Publisher(CFG, cA3.cliente).publishDist(raiz, await leerManifiesto(raiz));
    expect(sA3.uploaded).toBe(2);
    expect(sA3.skipped).toBe(0);

    // publish 4 → mismo bucket A otra vez: ahora sí, skips
    const cA4 = clienteSimulado();
    const sA4 = await new R2Publisher(CFG, cA4.cliente).publishDist(raiz, await leerManifiesto(raiz));
    expect(sA4.uploaded).toBe(0);
    expect(sA4.skipped).toBe(2);

    const manifiesto = await leerManifiesto(raiz);
    expect(manifestBucket(manifiesto)).toBe('bucket-test');
    expect(manifestEndpoint(manifiesto)).toContain('cuenta.r2.cloudflarestorage.com');
  });
});

function manifestBucket(m: PublishManifest | null): string {
  return m?.bucket ?? '(nulo)';
}
function manifestEndpoint(m: PublishManifest | null): string {
  return m?.endpoint ?? '(nulo)';
}
