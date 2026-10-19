/**
 * Conversión de vista del visor PSV a los grados del schema.
 * MISMA matemática que el edge-viewer al aplicar defaultView (fovToZoomLvl /
 * zoomLvlToFov del paquete schema, con minFov=30/maxFov=90): este módulo importa
 * zoomLvlToFov para garantizar que el estudio y el visor público hablan el mismo
 * idioma. Tests en test/vista.test.ts prueban el round-trip contra fovToZoomLvl.
 */
import { fovToZoomLvl, zoomLvlToFov } from '@panoengine/schema';

const RAD2DEG = 180 / Math.PI;

export interface VistaGrados {
  /** Giro en grados, normalizado a −180..180 (p. ej. 190 → −170). */
  giro: number;
  /** Altura de la mirada en grados, recortada a −90..90. */
  altura: number;
  /** Zoom (FOV) en grados, mismo dominio que defaultView.fov del schema. */
  zoom: number;
}

export function radANormalizadoGiroGrados(yawRad: number): number {
  const bruto = yawRad * RAD2DEG;
  let g = bruto % 360;
  if (g > 180) g -= 360;
  if (g < -180) g += 360;
  return Math.round(g * 100) / 100;
}

export function radAAlturaGrados(pitchRad: number): number {
  const bruto = pitchRad * RAD2DEG;
  return Math.round(Math.min(90, Math.max(-90, bruto)) * 100) / 100;
}

/** zoomLvl del visor PSV → FOV en grados (idéntico al visor público). */
export function zoomLvlAFovGrados(zoomLvl: number): number {
  return Math.round(zoomLvlToFov(zoomLvl) * 10) / 10;
}

/** Vista completa del visor en grados del schema. */
export function vistaAGrados(pos: { yaw: number; pitch: number }, zoomLvl: number): VistaGrados {
  return {
    giro: radANormalizadoGiroGrados(pos.yaw),
    altura: radAAlturaGrados(pos.pitch),
    zoom: zoomLvlAFovGrados(zoomLvl),
  };
}

export { fovToZoomLvl };
