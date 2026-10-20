import { fovToZoomLvl } from '@panoengine/schema';
import { describe, expect, it } from 'vitest';
import {
  radAAlturaGrados,
  radANormalizadoGiroGrados,
  vistaAGrados,
  zoomLvlAFovGrados,
} from '../src/vista.js';

const DEG = Math.PI / 180;
const LIMITES_60_90 = { minFov: 60, maxFov: 90 };

describe('vista → grados (E3b / E3b-fix)', () => {
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

  it('zoom: nivel 0 = 90° (abierta) y nivel 100 = 30° (cerrada) — dirección medida de PSV', () => {
    expect(zoomLvlAFovGrados(0)).toBe(90);
    expect(zoomLvlAFovGrados(100)).toBe(30);
    expect(zoomLvlAFovGrados(50)).toBe(60);
  });

  it('respeta los límites ACTIVOS de la escena (60–90): nivel 50 = 75°, nivel 100 = 60°', () => {
    expect(zoomLvlAFovGrados(50, LIMITES_60_90)).toBe(75);
    expect(zoomLvlAFovGrados(0, LIMITES_60_90)).toBe(90);
    expect(zoomLvlAFovGrados(100, LIMITES_60_90)).toBe(60);
  });

  it('round-trip con la MISMA función del visor (schema.fovToZoomLvl), con y sin límites', () => {
    for (const lvl of [0, 25, 50, 75, 100]) {
      expect(fovToZoomLvl(zoomLvlAFovGrados(lvl))).toBe(lvl);
    }
    for (const lvl of [0, 50, 100]) {
      expect(fovToZoomLvl(zoomLvlAFovGrados(lvl, LIMITES_60_90), 60, 90)).toBe(lvl);
    }
  });

  it('vistaAGrados compone giro+altura+zoom (con y sin límites)', () => {
    expect(vistaAGrados({ yaw: 190 * DEG, pitch: 45 * DEG }, 50)).toEqual({
      giro: -170,
      altura: 45,
      zoom: 60,
    });
    expect(vistaAGrados({ yaw: 0, pitch: 0 }, 50, LIMITES_60_90)).toEqual({
      giro: 0,
      altura: 0,
      zoom: 75,
    });
  });
});
