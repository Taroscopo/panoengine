import { describe, expect, it } from 'vitest';
import { MASTER_HEIGHT, MASTER_WIDTH, TILE_LEVELS, TOTAL_TILES_PER_SCENE } from '../src/constants.js';
import { expandTileUrl } from '../src/scene.js';

describe('matemática de la pirámide', () => {
  it('el master es 2:1 y divisible exactamente en su rejilla', () => {
    expect(MASTER_WIDTH / MASTER_HEIGHT).toBe(2);
    const top = TILE_LEVELS[TILE_LEVELS.length - 1];
    expect(top).toBeDefined();
    if (!top) return;
    expect(MASTER_WIDTH / top.cols).toBe(top.tilePx);
    expect(MASTER_HEIGHT / top.rows).toBe(top.tilePx);
    expect(MASTER_WIDTH % top.cols).toBe(0);
    expect(MASTER_HEIGHT % top.rows).toBe(0);
  });

  it('cols y rows de cada nivel son potencias de 2 (requisito del adaptador PSV)', () => {
    const isPow2 = (n: number): boolean => n >= 1 && (n & (n - 1)) === 0;
    for (const level of TILE_LEVELS) {
      expect(isPow2(level.cols)).toBe(true);
      expect(isPow2(level.rows)).toBe(true);
      expect(level.cols).toBeLessThanOrEqual(64);
      expect(level.rows).toBeLessThanOrEqual(32);
      expect(level.width / level.cols).toBe(level.tilePx);
      expect(level.height / level.rows).toBe(level.tilePx);
      expect(level.width / level.height).toBe(2);
    }
  });

  it('los niveles son exactamente 4×2, 8×4 y 16×8 (168 tiles)', () => {
    expect(TILE_LEVELS.map((l) => [l.cols, l.rows, l.tilePx])).toEqual([
      [4, 2, 512],
      [8, 4, 640],
      [16, 8, 704],
    ]);
    expect(TOTAL_TILES_PER_SCENE).toBe(168);
  });

  it('expande las plantillas de URL de tiles', () => {
    const url = expandTileUrl('scenes/01J-abc-0123456789/l{level}/{row}_{col}.webp', 2, 7, 15);
    expect(url).toBe('scenes/01J-abc-0123456789/l2/7_15.webp');
  });
});
