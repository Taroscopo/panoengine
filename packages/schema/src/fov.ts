/**
 * Conversión entre FOV en grados (convención krpano guardada en tour.json) y
 * zoomLvl 0–100 de Photo Sphere Viewer.
 *
 * DIRECCIÓN REAL DE PSV (corregida en E3b-fix — era el error de fondo del
 * editor): nivel 0 = maxFov (máxima apertura, 90°) y nivel 100 = minFov
 * (máximo zoom, 30°). Es la ley interna de PSV 5.15.1 (DataHelper):
 *   zoomLevelToFov:  fov = maxFov − nivel/100 · (maxFov − minFov)
 *   fovToZoomLevel:  nivel = recortar(100 − redondear((fov−minFov)/(maxFov−minFov)·100), 0, 100)
 *
 * TABLA_FOV_MEDIDA la valida contra lo MEDIDO en Chromium real con el mismo
 * @photo-sphere-viewer/core que usa el estudio (apps/studio-local/web):
 * generada por packages/schema/tools/medir-fov.mjs (core 5.15.1, three
 * 0.185.1, límites 30–90 y 60–90, paso 5). Los tests fallan si esta fórmula
 * se desvía de la tabla medida.
 *
 * WYSIWYG: las conversiones aceptan los límites ACTIVOS del visor (los de
 * zoomLimitToPsv de la escena) porque PSV interpola el nivel entre el
 * minFov/maxFov en vigor; convertir con 30/90 cuando la escena recorta a
 * 60/90 rompe la igualdad editor ↔ visor público.
 */
export const PSV_MIN_FOV = 30;
export const PSV_MAX_FOV = 90;

/** FOV medido por nivel de zoom (límites 30–90). Proveniencia: tools/medir-fov.mjs. */
export const TABLA_FOV_MEDIDA: Readonly<Record<number, number>> = {
  0: 90,
  5: 87,
  10: 84,
  15: 81,
  20: 78,
  25: 75,
  30: 72,
  35: 69,
  40: 66,
  45: 63,
  50: 60,
  55: 57,
  60: 54,
  65: 51,
  70: 48,
  75: 45,
  80: 42,
  85: 39,
  90: 36,
  95: 33,
  100: 30,
};

export function fovToZoomLvl(fov: number, minFov = PSV_MIN_FOV, maxFov = PSV_MAX_FOV): number {
  const temp = Math.round(((fov - minFov) / (maxFov - minFov)) * 100);
  // Reflejo sobre 50, idéntico a PSV: más apertura (fov alto) = menos nivel.
  return Math.min(Math.max(100 - temp, 0), 100);
}

export function zoomLvlToFov(zoomLvl: number, minFov = PSV_MIN_FOV, maxFov = PSV_MAX_FOV): number {
  const lvl = Math.min(Math.max(zoomLvl, 0), 100);
  return maxFov - (lvl / 100) * (maxFov - minFov);
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
