import { describe, expect, it } from 'vitest';
import { fovToZoomLvl, TABLA_FOV_MEDIDA, zoomLimitToPsv, zoomLvlToFov } from '../src/fov.js';

describe('conversión fov ↔ zoomLvl (dirección PSV medida, E3b-fix)', () => {
  it('nivel 0 = máxima apertura (fov 90) y nivel 100 = máximo zoom (fov 30)', () => {
    expect(fovToZoomLvl(90)).toBe(0);
    expect(fovToZoomLvl(30)).toBe(100);
    expect(zoomLvlToFov(0)).toBe(90);
    expect(zoomLvlToFov(100)).toBe(30);
  });

  it('fov 60 (por defecto krpano) cae en el nivel 50', () => {
    expect(fovToZoomLvl(60)).toBe(50);
    expect(zoomLvlToFov(50)).toBe(60);
  });

  it('recorta valores fuera de rango: fov 10 → 100 (máximo zoom), fov 150 → 0', () => {
    expect(fovToZoomLvl(10)).toBe(100);
    expect(fovToZoomLvl(150)).toBe(0);
  });

  it('es inversa dentro del rango', () => {
    for (const lvl of [0, 25, 50, 75, 100]) {
      expect(fovToZoomLvl(zoomLvlToFov(lvl))).toBe(lvl);
    }
  });

  it('usa los límites ACTIVOS: con 60–90, fov 75 → nivel 50 (no el 75 de 30–90)', () => {
    expect(fovToZoomLvl(75, 60, 90)).toBe(50);
    expect(zoomLvlToFov(50, 60, 90)).toBe(75);
    expect(zoomLvlToFov(0, 60, 90)).toBe(90);
    expect(zoomLvlToFov(100, 60, 90)).toBe(60);
  });

  it('coincide con la tabla MEDIDA en Chromium (tolerancia 0.5°)', () => {
    for (const [nivel, fovMedido] of Object.entries(TABLA_FOV_MEDIDA)) {
      expect(Math.abs(zoomLvlToFov(Number(nivel)) - fovMedido)).toBeLessThanOrEqual(0.5);
    }
  });

  it('zoomLimit 60–150 se recorta a límites PSV válidos', () => {
    const { minFov, maxFov } = zoomLimitToPsv({ min: 60, max: 150 });
    expect(minFov).toBe(60);
    expect(maxFov).toBe(90);
    expect(minFov).toBeLessThan(maxFov);
  });
});
