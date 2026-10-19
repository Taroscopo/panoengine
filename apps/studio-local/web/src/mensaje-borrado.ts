export interface RespuestaBorrado {
  ok: boolean;
  nota?: string;
}

/**
 * Decide el aviso a mostrar al borrar una escena (detalle d):
 * si la respuesta trae la nota de fallo del borrado de dist/, se muestra;
 * en borrado limpio no se molesta al usuario (nada que avisar).
 */
export function avisoBorradoDist(respuesta: RespuestaBorrado): string | null {
  const nota = respuesta.nota?.trim();
  if (nota === undefined || nota.length === 0) {
    return null;
  }
  return nota.includes('no se pudo borrar') ? `⚠ ${nota}` : null;
}
