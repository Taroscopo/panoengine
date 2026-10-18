import { describe, expect, it } from 'vitest';
import { fovToZoomLvl, zoomLimitToPsv, zoomLvlToFov } from '../src/fov.js';

describe('conversión fov ↔ zoomLvl', () => {
  it('fov 30 → zoomLvl 0 (máximo zoom) y fov 90 → 100 (máxima apertura)', () => {
    expect(fovToZoomLvl(30)).toBe(0);
    expect(fovToZoomLvl(90)).toBe(100);
  });

  it('fov 60 (por defecto krpano) cae en el medio', () => {
    expect(fovToZoomLvl(60)).toBe(50);
  });

  it('recorta valores fuera de rango', () => {
    expect(fovToZoomLvl(10)).toBe(0);
    expect(fovToZoomLvl(150)).toBe(100);
  });

  it('es inversa dentro del rango', () => {
    for (const lvl of [0, 25, 50, 75, 100]) {
      expect(fovToZoomLvl(zoomLvlToFov(lvl))).toBe(lvl);
    }
  });

  it('zoomLimit 60–150 se recorta a límites PSV válidos', () => {
    const { minFov, maxFov } = zoomLimitToPsv({ min: 60, max: 150 });
    expect(minFov).toBe(60);
    expect(maxFov).toBe(90);
    expect(minFov).toBeLessThan(maxFov);
  });
});
