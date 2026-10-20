/**
 * Agrupación y orden de escenas del editor (orden de Andrés): funciones PURAS
 * para la lista de la izquierda. El orden global real es el de tour.scenes;
 * la vista agrupa: primero «Sin grupo», luego cada grupo en su orden.
 */
import type { Scene, SceneGroup } from '@panoengine/schema';

export interface GrupoVista {
  /** null = sección «Sin grupo» (siempre presente, no se puede borrar). */
  id: string | null;
  nombre: string;
  escenas: Scene[];
}

/** Agrupa las escenas según su groupId; el orden interno es el de tour.scenes. */
export function agruparEscenas(escenas: Scene[], grupos: SceneGroup[]): GrupoVista[] {
  const vista: GrupoVista[] = [{ id: null, nombre: 'Sin grupo', escenas: [] }];
  for (const grupo of grupos) {
    vista.push({ id: grupo.id, nombre: grupo.name, escenas: [] });
  }
  for (const escena of escenas) {
    const grupo = escena.groupId !== undefined ? vista.find((g) => g.id === escena.groupId) : undefined;
    if (grupo) {
      grupo.escenas.push(escena);
    } else {
      // groupId huérfano (grupo borrado) → cae en Sin grupo.
      vista[0]?.escenas.push(escena);
    }
  }
  return vista;
}

/**
 * Mueve una escena (arrastrar y soltar) y devuelve el NUEVO orden completo
 * para PATCH /api/tours/:slug { sceneOrder }: la escena pasa al grupo de
 * destino, insertándose antes de `antesDe` (o al final del grupo si es null).
 */
export function moverEscena(
  escenas: Scene[],
  grupos: SceneGroup[],
  sceneId: string,
  destino: { groupId: string | null; antesDe: string | null },
): { id: string; groupId: string | null }[] {
  const vista = agruparEscenas(escenas, grupos);
  for (const grupo of vista) {
    grupo.escenas = grupo.escenas.filter((e) => e.id !== sceneId);
    if (grupo.id === destino.groupId) {
      const idx = destino.antesDe !== null ? grupo.escenas.findIndex((e) => e.id === destino.antesDe) : -1;
      const escena = escenas.find((e) => e.id === sceneId);
      if (escena) {
        if (idx === -1) {
          grupo.escenas.push(escena);
        } else {
          grupo.escenas.splice(idx, 0, escena);
        }
      }
    }
  }
  return vista.flatMap((grupo) => grupo.escenas.map((e) => ({ id: e.id, groupId: grupo.id })));
}
