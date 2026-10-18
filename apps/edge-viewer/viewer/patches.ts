import type { Scene } from '@panoengine/schema';
import type { Viewer } from '@photo-sphere-viewer/core';
import * as THREE from 'three';
import { rad, type TourContext } from './estado.js';

export interface CapaPatches {
  destruir(): void;
}

/** Radio de la esfera de PSV: 100; los parches flotan ligeramente por dentro. */
const DISTANCIA_PATCH = 95;

/**
 * Parches 2D anclados en 3D (hallazgo "patch" de Panoee — RULES.md §2.7):
 * un plano texturizado orientado al centro de la esfera en (yaw, pitch).
 * NO re-tilea la escena base.
 */
export function crearCapaPatches(viewer: Viewer, ctx: TourContext, escena: Scene): CapaPatches {
  const grupo = new THREE.Group();
  const loader = new THREE.TextureLoader();
  const materiales: THREE.MeshBasicMaterial[] = [];
  let destruido = false;

  for (const patch of escena.patches) {
    const textura = loader.load(ctx.url(patch.src));
    const anchoMundo = rad(patch.widthDeg) * DISTANCIA_PATCH;
    const altoMundo = anchoMundo / patch.aspectRatio;
    const geometria = new THREE.PlaneGeometry(anchoMundo, altoMundo);
    const material = new THREE.MeshBasicMaterial({
      map: textura,
      transparent: true,
      opacity: patch.opacity,
      side: THREE.DoubleSide,
    });
    const malla = new THREE.Mesh(geometria, material);
    const posicion = viewer.dataHelper.sphericalCoordsToVector3(
      { yaw: rad(patch.yaw), pitch: rad(patch.pitch) },
      new THREE.Vector3(),
      DISTANCIA_PATCH,
    );
    malla.position.copy(posicion);
    malla.lookAt(0, 0, 0);
    malla.rotateZ(rad(patch.rotationDeg));
    grupo.add(malla);
    materiales.push(material);
  }

  viewer.renderer.addObject(grupo);

  return {
    destruir() {
      if (destruido) {
        return;
      }
      destruido = true;
      try {
        viewer.renderer.removeObject(grupo);
      } catch {
        // si el viewer ya se destruyó, nada que limpiar
      }
      for (const material of materiales) {
        material.map?.dispose();
        material.dispose();
      }
      for (const hijo of grupo.children) {
        if (hijo instanceof THREE.Mesh) {
          hijo.geometry.dispose();
        }
      }
      grupo.clear();
    },
  };
}
