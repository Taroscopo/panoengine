import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { Viewer } from '@photo-sphere-viewer/core';
import { EquirectangularTilesAdapter } from '@photo-sphere-viewer/equirectangular-tiles-adapter';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import type { MarkerConfig } from '@photo-sphere-viewer/markers-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import type {
  VirtualTourLink,
  VirtualTourNode,
  VirtualTourTransitionOptions,
} from '@photo-sphere-viewer/virtual-tour-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';
import '@photo-sphere-viewer/gallery-plugin/index.css';
import type { Hotspot, Scene, Tour } from '@panoengine/schema';
import { fovToZoomLvl, zoomLimitToPsv } from '@panoengine/schema';
import { crearContexto, expandirTileUrl, ICONOS, rad } from './estado.js';
import { type CapaPatches, crearCapaPatches } from './patches.js';
import { instalarUI, type UI } from './ui.js';

/** Datos que viajan dentro de cada link (vista destino del hotspot nav). */
interface DatoLink {
  targetYaw?: number | undefined;
  targetPitch?: number | undefined;
  targetFov?: number | undefined;
  transitionEffect: 'blend' | 'fade' | 'none';
  transitionDurationMs: number;
}

interface DatoNodo {
  escena: Scene;
}

export function iniciarTour(tour: Tour, slug: string): void {
  const ctx = crearContexto(tour, slug);
  const escenas = new Map(tour.scenes.map((s) => [s.id, s]));
  const escenaInicial = tour.defaultSceneId ? escenas.get(tour.defaultSceneId) : undefined;
  const primera = escenaInicial ?? tour.scenes[0];
  if (!primera) {
    return;
  }

  const viewer = new Viewer({
    container: 'pano',
    adapter: [EquirectangularTilesAdapter, { showErrorTile: false }],
    caption: tour.title,
    navbar: ['zoom', 'move', 'gallery', 'autorotate', 'caption', 'fullscreen'],
    lang: {
      zoom: 'Zoom',
      move: 'Mover',
      gallery: 'Galería',
      autorotate: 'Rotación automática',
      caption: tour.title,
      fullscreen: 'Pantalla completa',
      loading: 'Cargando…',
    },
    minFov: zoomLimitToPsv(primera.zoomLimit).minFov,
    maxFov: zoomLimitToPsv(primera.zoomLimit).maxFov,
    defaultYaw: rad(primera.defaultView.yaw),
    defaultPitch: rad(primera.defaultView.pitch),
    defaultZoomLvl: fovToZoomLvl(primera.defaultView.fov),
    loadingTxt: 'Cargando el tour…',
    defaultTransition: { speed: 1200, effect: 'fade' },
    plugins: [
      [AutorotatePlugin, configurarAutorotate(tour)],
      [MarkersPlugin, { clickEventOnMarker: false }],
      [
        VirtualTourPlugin,
        {
          dataMode: 'client',
          positionMode: 'manual',
          renderMode: '3d',
          startNodeId: primera.id,
          linksOnCompass: false,
          showLinkTooltip: true,
          transitionOptions: (
            hacia: VirtualTourNode,
            _desde?: VirtualTourNode,
            porLink?: VirtualTourLink,
          ): VirtualTourTransitionOptions => {
            const datoLink = porLink?.data as DatoLink | undefined;
            const datoNodo = hacia.data as DatoNodo | undefined;
            let rotateTo: { yaw: number; pitch: number } | undefined;
            let zoomTo: number | undefined;
            if (datoLink) {
              const pos = porLink?.position as { yaw?: number; pitch?: number } | undefined;
              rotateTo = {
                yaw: rad(datoLink.targetYaw ?? pos?.yaw ?? 0),
                pitch: rad(datoLink.targetPitch ?? pos?.pitch ?? 0),
              };
              if (datoLink.targetFov !== undefined) {
                zoomTo = fovToZoomLvl(datoLink.targetFov);
              }
            } else if (datoNodo) {
              rotateTo = {
                yaw: rad(datoNodo.escena.defaultView.yaw),
                pitch: rad(datoNodo.escena.defaultView.pitch),
              };
              zoomTo = fovToZoomLvl(datoNodo.escena.defaultView.fov);
            }
            return {
              effect: efectoPsv(datoLink?.transitionEffect),
              speed: datoLink?.transitionDurationMs ?? 1200,
              rotation: rotateTo !== undefined,
              ...(rotateTo !== undefined ? { rotateTo } : {}),
              ...(zoomTo !== undefined ? { zoomTo } : {}),
            };
          },
        },
      ],
      [GalleryPlugin, { visibleOnLoad: true, thumbnailSize: { width: 300, height: 150 } }],
    ],
  });

  const markers = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);
  const virtualTour = viewer.getPlugin<VirtualTourPlugin>(VirtualTourPlugin);
  const gallery = viewer.getPlugin<GalleryPlugin>(GalleryPlugin);

  // ---- Nodos del tour a partir de las escenas ----
  // El objeto panorama se construye UNA vez por escena: lo consumen los nodos del
  // tour virtual Y los ítems de la galería (GalleryPlugin exige panorama presente
  // aunque el clic se maneje con handler propio — validación en runtime).
  const panoramaDe = (escena: Scene): Record<string, unknown> => ({
    baseUrl: ctx.url(escena.tiles.baseUrl),
    width: escena.tiles.width,
    cols: escena.tiles.cols,
    rows: escena.tiles.rows,
    levels: escena.tiles.levels.map((l) => ({ width: l.width, cols: l.cols, rows: l.rows })),
    tileUrl: (col: number, row: number, level: number): string | null => {
      const nivel = escena.tiles.levels[level];
      if (!nivel || col >= nivel.cols || row >= nivel.rows) {
        return null;
      }
      return ctx.url(expandirTileUrl(escena.tiles.tileUrlTemplate, level, row, col));
    },
  });

  const nodos: VirtualTourNode[] = tour.scenes.map((escena) => ({
    id: escena.id,
    name: escena.name,
    caption: `${tour.title} — ${escena.name}`,
    thumbnail: ctx.url(rutaThumb(escena)),
    panorama: panoramaDe(escena),
    links: escena.hotspots
      .filter((h): h is Extract<Hotspot, { type: 'nav' }> => h.type === 'nav')
      .filter((h) => escenas.has(h.targetSceneId))
      .map((h) => ({
        nodeId: h.targetSceneId,
        position: { yaw: rad(h.yaw), pitch: rad(h.pitch) },
        data: {
          targetYaw: h.targetYaw,
          targetPitch: h.targetPitch,
          targetFov: h.targetFov,
          transitionEffect: h.transitionEffect,
          transitionDurationMs: h.transitionDurationMs,
        } satisfies DatoLink,
      })),
    markers: marcadoresDeEscena(escena),
    // sphereCorrection (Q4): el esquema guarda grados, PSV espera radianes
    // (SphereCorrection = { pan?, tilt?, roll? } en rad — verificado en .d.ts).
    ...(escena.sphereCorrection !== undefined
      ? {
          sphereCorrection: {
            pan: rad(escena.sphereCorrection.pan),
            tilt: rad(escena.sphereCorrection.tilt),
            roll: rad(escena.sphereCorrection.roll),
          },
        }
      : {}),
    data: { escena } satisfies DatoNodo,
  }));

  virtualTour.setNodes(nodos, primera.id);
  gallery.setItems(
    nodos.map((n) => {
      const dato = n.data as DatoNodo | undefined;
      return {
        id: n.id,
        panorama: dato ? panoramaDe(dato.escena) : null,
        ...(n.name !== undefined ? { name: n.name } : {}),
        ...(n.thumbnail !== undefined ? { thumbnail: n.thumbnail } : {}),
      };
    }),
    (id: string | number) => {
      void virtualTour.setCurrentNode(String(id));
    },
  );

  // ---- UI propia (WhatsApp, audio, panel info, precarga) ----
  let ui: UI | undefined;
  let patches: CapaPatches | undefined;

  // Clic en hotspots info/link (los nav son flechas del plugin de tour virtual).
  markers.addEventListener('select-marker', (e) => {
    const nodo = virtualTour.getCurrentNode();
    const dato = nodo?.data as DatoNodo | undefined;
    const hotspot = dato?.escena.hotspots.find((h) => `h-${h.id}` === e.marker.id);
    if (!hotspot) {
      return;
    }
    if (hotspot.type === 'info') {
      ui?.mostrarInfo(hotspot.title ?? 'Información', hotspot.content);
    } else if (hotspot.type === 'link') {
      if (hotspot.action === 'new-tab') {
        window.open(hotspot.url, '_blank', 'noopener');
      } else {
        location.href = hotspot.url;
      }
    }
  });

  // Cambio de escena (carga inicial incluida).
  let escenaActualId: string | undefined;
  const alCambiarEscena = (): void => {
    const nodo = virtualTour.getCurrentNode();
    const dato = nodo?.data as DatoNodo | undefined;
    if (!dato || escenaActualId === dato.escena.id) {
      return;
    }
    escenaActualId = dato.escena.id;
    const { minFov, maxFov } = zoomLimitToPsv(dato.escena.zoomLimit);
    viewer.setOptions({ minFov, maxFov });
    if (!ui) {
      ui = instalarUI(ctx);
    }
    ui.actualizarEscena(dato.escena, nodo?.id);
    ui.precargarVecinos(dato.escena, escenas, ctx);

    patches?.destruir();
    patches = crearCapaPatches(viewer, ctx, dato.escena);
  };
  // 'node-changed' del plugin es la señal fiable (la carga inicial no siempre
  // dispara 'panorama-loaded' del core — bisección 2/3 con smoke test ×3 FALLA).
  virtualTour.addEventListener('node-changed', alCambiarEscena);

  // Visibilidad de marcadores info/link según zoomRange del hotspot.
  viewer.addEventListener('zoom-updated', (e) => {
    const nodo = virtualTour.getCurrentNode();
    const dato = nodo?.data as DatoNodo | undefined;
    if (!dato) {
      return;
    }
    for (const hotspot of dato.escena.hotspots) {
      if (hotspot.type === 'nav' || !hotspot.zoomRange) {
        continue;
      }
      const visible = e.zoomLevel >= hotspot.zoomRange.min && e.zoomLevel <= hotspot.zoomRange.max;
      try {
        if (visible) {
          markers.showMarker(`h-${hotspot.id}`);
        } else {
          markers.hideMarker(`h-${hotspot.id}`);
        }
      } catch {
        // el marcador puede no existir todavía; se ignora
      }
    }
  });

  // Intro "planeta enano" opcional.
  if (tour.littlePlanetIntro) {
    viewer.addEventListener('ready', () => {
      try {
        viewer.setOptions({ fisheye: 2 });
        viewer.rotate({ yaw: 0, pitch: -Math.PI / 2 });
        viewer.zoom(0);
        window.setTimeout(() => {
          void viewer.animate({
            yaw: rad(primera.defaultView.yaw),
            pitch: rad(primera.defaultView.pitch),
            zoom: fovToZoomLvl(primera.defaultView.fov),
            speed: '4rpm',
          });
          viewer.setOptions({ fisheye: false });
        }, 900);
      } catch {
        // la intro nunca debe romper el tour
      }
    });
  }
}

function configurarAutorotate(tour: Tour): Record<string, unknown> {
  const rpm = ((tour.autoRotate.speedDegPerSec * 60) / 360).toFixed(3);
  return {
    autorotateSpeed: `${rpm}rpm`,
    autostartDelay: tour.autoRotate.enabled ? tour.autoRotate.waitTimeMs : 86_400_000,
    autostartOnIdle: tour.autoRotate.enabled,
  };
}

function efectoPsv(efecto: DatoLink['transitionEffect'] | undefined): 'none' | 'fade' {
  return efecto === 'none' ? 'none' : 'fade';
}

/** thumb.webp público de una escena (para galería). */
function rutaThumb(escena: Scene): string {
  return escena.tiles.baseUrl.replace(/\/preview\.webp$/, '/thumb.webp');
}

/** Convierte los hotspots info/link de la escena en MarkerConfig (los nav son links VT). */
function marcadoresDeEscena(escena: Scene): MarkerConfig[] {
  return escena.hotspots
    .filter((h) => h.type !== 'nav')
    .map((h) => ({
      id: `h-${h.id}`,
      position: { yaw: rad(h.yaw), pitch: rad(h.pitch) },
      html: `<div class="pe-marker pe-marker--${h.type}" title="${escapar(h.title ?? '')}">${ICONOS[h.type]}</div>`,
      size: { width: 44, height: 44 },
      ...(h.title
        ? { tooltip: { content: escapar(h.title), position: 'top center', trigger: 'hover' } }
        : {}),
      visible: true,
    }));
}

function escapar(texto: string): string {
  return texto
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
