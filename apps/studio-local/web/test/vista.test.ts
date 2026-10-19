import { fovToZoomLvl } from '@panoengine/schema';
import { describe, expect, it } from 'vitest';
import {
  radAAlturaGrados,
  radANormalizadoGiroGrados,
  vistaAGrados,
  zoomLvlAFovGrados,
} from '../src/vista.js';

const DEG = Math.PI / 180;

describe('vista → grados (E3b)', () => {
  it('normaliza el giro: 190° → −170°, −190° → 170°, 370° → 10°', () => {
    expect(radANormalizadoGiroGrados(190 * DEG)).toBe(-170);
    expect(radANormalizadoGiroGrados(-190 * DEG)).toBe(170);
    expect(radANormalizadoGiroGrados(370 * DEG)).toBe(10);
    expect(radANormalizadoGiroGrados(180 * DEG)).toBe(180);
    expect(radANormalizadoGiroGrados(-180 * DEG)).toBe(-180);
  });

  it('recorta la altura a ±90 y redondea a 2 decimales', () => {
    expect(radAAlturaGrados(45.1234 * DEG)).toBe(45.12);
    expect(radAAlturaGrados(120 * DEG)).toBe(90);
    expect(radAAlturaGrados(-120 * DEG)).toBe(-90);
  });

  it('la conversión de zoom es EXACTAMENTE la del visor (schema.fovToZoomLvl/zoomLvlToFov)', () => {
    for (const lvl of [0, 25, 50, 75, 100]) {
      const fov = zoomLvlAFovGrados(lvl);
      // el round-trip devuelve el nivel original (mismo dominio que defaultView.fov)
      expect(fovToZoomLvl(fov)).toBe(lvl);
    }
    expect(zoomLvlAFovGrados(50)).toBe(60);
  });

  it('vistaAGrados compone giro+altura+zoom', () => {
    const v = vistaAGrados({ yaw: 190 * DEG, pitch: 45 * DEG }, 50);
    expect(v).toEqual({ giro: -170, altura: 45, zoom: 60 });
  });
});
