/**
 * Conversión entre FOV en grados (convención krpano guardada en tour.json) y
 * zoomLvl 0–100 de Photo Sphere Viewer (0 = minFov = máximo zoom).
 * PSV usa minFov=30 y maxFov=90 por defecto; el visor fija esos mismos límites.
 */
export const PSV_MIN_FOV = 30;
export const PSV_MAX_FOV = 90;

export function fovToZoomLvl(fov: number, minFov = PSV_MIN_FOV, maxFov = PSV_MAX_FOV): number {
  const clamped = Math.min(Math.max(fov, minFov), maxFov);
  const lvl = ((clamped - minFov) / (maxFov - minFov)) * 100;
  return Math.round(Math.min(Math.max(lvl, 0), 100));
}

export function zoomLvlToFov(zoomLvl: number, minFov = PSV_MIN_FOV, maxFov = PSV_MAX_FOV): number {
  const clamped = Math.min(Math.max(zoomLvl, 0), 100);
  return minFov + (clamped / 100) * (maxFov - minFov);
}

/**
 * ZoomLimit del esquema (fov 60–150) a límites PSV: recorta al rango [30,90]
 * y garantiza min < max.
 */
export function zoomLimitToPsv(limit: { min: number; max: number }): { minFov: number; maxFov: number } {
  const minFov = Math.min(Math.max(Math.min(limit.min, limit.max), PSV_MIN_FOV), PSV_MAX_FOV - 1);
  const maxFov = Math.min(Math.max(Math.max(limit.min, limit.max), minFov + 1), PSV_MAX_FOV);
  return { minFov, maxFov };
}
