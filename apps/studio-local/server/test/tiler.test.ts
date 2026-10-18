import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { PREVIEW_MAX_BYTES, TILE_LEVELS, TOTAL_TILES_PER_SCENE } from '@panoengine/schema';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import { computeRevHash, generateQuickDerivatives, generateTilePyramid } from '../src/processing/tiler.js';

/** Panorama sintético con gradiente+detalles: comprueba presupuesto de KB y conteo de tiles. */
async function crearMasterSintetico(width: number, height: number, filePath: string): Promise<void> {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0b3d91"/>
        <stop offset="50%" stop-color="#e8a33d"/>
        <stop offset="100%" stop-color="#2e7d32"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    ${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * width) / 40 + width / 80}" cy="${(i * height) % height}" r="${height / 60}" fill="rgba(255,255,255,0.65)"/>`).join('')}
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(filePath);
}

describe('cortador sharp (imagen sintética)', () => {
  it('computeRevHash devuelve 10 hex estables', async () => {
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'pano-t-'));
    const master = path.join(dir, 'm.jpg');
    await crearMasterSintetico(2048, 1024, master);
    const h1 = await computeRevHash(master);
    const h2 = await computeRevHash(master);
    expect(h1).toMatch(/^[0-9a-f]{10}$/);
    expect(h2).toBe(h1);
  });

  it('quick derivatives cumplen presupuestos (<40KB preview, <20KB thumb)', async () => {
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'pano-t-'));
    const master = path.join(dir, 'm.jpg');
    await crearMasterSintetico(4096, 2048, master);
    const quick = await generateQuickDerivatives(master, dir);
    expect(quick.previewBytes).toBeLessThanOrEqual(PREVIEW_MAX_BYTES);
    expect(quick.thumbBytes).toBeLessThanOrEqual(20 * 1024);
    const meta = await sharp(path.join(dir, 'preview.webp')).metadata();
    expect(meta.width).toBe(1024);
    expect(meta.height).toBe(512);
  }, 30_000);

  it('la pirámide genera exactamente 168 tiles con las dimensiones de nivel correctas', async () => {
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'pano-t-'));
    const master = path.join(dir, 'm.jpg');
    await crearMasterSintetico(2048, 1024, master); // se reescala a 11264×5632 internamente
    const progresos: number[] = [];
    const result = await generateTilePyramid(master, dir, (p) => progresos.push(p.done));
    expect(result.tiles).toBe(TOTAL_TILES_PER_SCENE);
    expect(result.tiles).toBe(168);
    expect(progresos.at(-1)).toBe(168);
    for (const level of TILE_LEVELS) {
      const files = await fs.readdir(path.join(dir, `l${level.level}`));
      expect(files.length).toBe(level.cols * level.rows);
      const tile = await sharp(path.join(dir, `l${level.level}`, '0_0.webp')).metadata();
      expect(tile.width).toBe(level.tilePx);
      expect(tile.height).toBe(level.tilePx);
    }
  }, 120_000);
});
