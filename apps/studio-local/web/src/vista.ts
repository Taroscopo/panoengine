/**
 * Conversión de vista del visor PSV a los grados del schema.
 * MISMA matemática que el edge-viewer al aplicar defaultView/targetFov
 * (fovToZoomLvl / zoomLvlToFov de @panoengine/schema): nivel 0 = 90° (máxima
 * apertura) y nivel 100 = 30° (máximo zoom), dirección MEDIDA de PSV
 * (E3b-fix). Las funciones aceptan los límites ACTIVOS de la escena
 * (zoomLimitToPsv) para que el estudio muestre y guarde exactamente lo que
 * el visor público reproducirá. Tests en test/vista.test.ts.
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

/** Límites de FOV activos (los de zoomLimitToPsv de la escena). */
export interface LimitesFov {
  minFov: number;
  maxFov: number;
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
export function zoomLvlAFovGrados(zoomLvl: number, limites?: LimitesFov): number {
  return Math.round(zoomLvlToFov(zoomLvl, limites?.minFov, limites?.maxFov) * 10) / 10;
}

/** Vista completa del visor en grados del schema. */
export function vistaAGrados(
  pos: { yaw: number; pitch: number },
  zoomLvl: number,
  limites?: LimitesFov,
): VistaGrados {
  return {
    giro: radANormalizadoGiroGrados(pos.yaw),
    altura: radAAlturaGrados(pos.pitch),
    zoom: zoomLvlAFovGrados(zoomLvl, limites),
  };
}

export { fovToZoomLvl };
