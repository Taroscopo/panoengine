import { Viewer, type ViewerConfig } from '@photo-sphere-viewer/core';
import { EquirectangularTilesAdapter } from '@photo-sphere-viewer/equirectangular-tiles-adapter';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import type { Hotspot } from '@panoengine/schema';
import { useEffect, useRef } from 'react';
import {
  type LimitesFov,
  radAAlturaGrados,
  radANormalizadoGiroGrados,
  type VistaGrados,
  vistaAGrados,
} from './vista.js';

interface Props {
  previewUrl: string;
  /**
   * Panorama de tiles de máxima resolución (api.panoramaTiles) cuando el job de
   * la pirámide terminó; null mientras procesa → se muestra el preview rápido.
   */
  panoTiles: Record<string, unknown> | null;
  hotspots: Hotspot[];
  hotspotSeleccionado: string | null;
  modoAgregar: 'nav' | 'info' | 'link' | null;
  /** Límites activos de la escena (zoomLimitToPsv): los mismos que el visor público (WYSIWYG). */
  limitesZoom: LimitesFov;
  onAgregar: (yawDeg: number, pitchDeg: number) => void;
  onSeleccionar: (hotspotId: string) => void;
  onVistaActual?: (vista: VistaGrados) => void;
  onVistaGuardar?: (vista: VistaGrados) => void;
}

// Ícono blanco (el color del círculo lo pone el CSS del marcador neutro).
const ICONOS: Record<Hotspot['type'], string> = {
  nav: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>',
};

export function PanoPreview(props: Props): React.JSX.Element {
  const contenedor = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const markersRef = useRef<MarkersPlugin | null>(null);
  const callbacks = useRef(props);
  callbacks.current = props;

  // (Re)crear el visor al cambiar de escena o al terminar el job de tiles
  // (null → objeto): con tiles pinta a resolución MÁXIMA (orden del
  // propietario); sin tiles, el preview rápido mientras procesa.
  const conTiles = props.panoTiles !== null;
  // biome-ignore lint/correctness/useExhaustiveDependencies: limitesZoom NO recrea el visor; se aplica en vivo con setOptions en el efecto dedicado
  useEffect(() => {
    if (!contenedor.current) {
      return;
    }
    const comun: ViewerConfig = {
      container: contenedor.current,
      navbar: ['zoom', 'move', 'fullscreen'],
      lang: { zoom: 'Zoom', move: 'Mover', fullscreen: 'Pantalla completa', loading: 'Cargando…' },
      // Sin mousewheelCtrlKey: zoom nativo con la rueda del mouse (orden del propietario).
      minFov: props.limitesZoom.minFov,
      maxFov: props.limitesZoom.maxFov,
      plugins: [[MarkersPlugin, { clickEventOnMarker: true }]],
    };
    const viewer = new Viewer(
      conTiles
        ? {
            ...comun,
            adapter: [EquirectangularTilesAdapter, { showErrorTile: false }],
            // El adaptador de tiles consume el objeto {baseUrl, width, cols, rows,
            // levels, tileUrl}; el tipo string es el del adaptador por defecto.
            panorama: props.panoTiles as unknown as string,
          }
        : { ...comun, panorama: props.previewUrl },
    );
    viewerRef.current = viewer;
    markersRef.current = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);

    viewer.addEventListener('click', (e) => {
      const { modoAgregar, onAgregar } = callbacks.current;
      if (modoAgregar) {
        // PSV puede devolver yaw en [0, 2π] (p. ej. 360°) o pitch fuera de ±90:
        // sin normalizar, el punto cae fuera del rango del schema y el PATCH
        // rebota con 400 (bug hallado por el testeo E2E del 2026-10-20).
        onAgregar(radANormalizadoGiroGrados(e.data.yaw), radAAlturaGrados(e.data.pitch));
      }
    });
    markersRef.current.addEventListener('select-marker', (e) => {
      callbacks.current.onSeleccionar(e.marker.id.replace(/^h-/, ''));
    });

    // Vista actual en grados del schema, notificada en cada actualización.
    const notificar = (): void => {
      const { onVistaActual, limitesZoom } = callbacks.current;
      if (onVistaActual && viewerRef.current) {
        onVistaActual(
          vistaAGrados(viewerRef.current.getPosition(), viewerRef.current.getZoomLevel(), limitesZoom),
        );
      }
    };
    viewer.addEventListener('position-updated', notificar);
    viewer.addEventListener('zoom-updated', notificar);
    viewer.addEventListener('ready', notificar);

    return () => {
      viewer.destroy();
      viewerRef.current = null;
      markersRef.current = null;
    };
  }, [props.previewUrl, conTiles]);

  // Al cambiar el zoomLimit de la escena (panel Avanzado) el visor del editor
  // adopta en vivo los mismos límites que tendrá el visor público (WYSIWYG).
  useEffect(() => {
    viewerRef.current?.setOptions({
      minFov: props.limitesZoom.minFov,
      maxFov: props.limitesZoom.maxFov,
    });
  }, [props.limitesZoom.minFov, props.limitesZoom.maxFov]);

  // Refrescar marcadores cuando cambian los hotspots o la selección.
  // previewUrl y conTiles son dependencias deliberadas: al recrear el visor
  // (cambio de escena o fin del job de tiles) hay que repintar los marcadores
  // sobre la nueva instancia del plugin.
  // biome-ignore lint/correctness/useExhaustiveDependencies: dependencia intencional
  useEffect(() => {
    const markers = markersRef.current;
    if (!markers) {
      return;
    }
    markers.setMarkers(
      props.hotspots.map((h) => ({
        id: `h-${h.id}`,
        position: { yaw: (h.yaw * Math.PI) / 180, pitch: (h.pitch * Math.PI) / 180 },
        html: `<div class="pe-marker-edit${props.hotspotSeleccionado === h.id ? ' pe-marker-edit--sel' : ''}">${ICONOS[h.type]}</div>`,
        size: { width: 34, height: 34 },
        ...(h.title ? { tooltip: { content: h.title, position: 'top center' } } : {}),
      })),
    );
  }, [props.hotspots, props.hotspotSeleccionado, props.previewUrl, conTiles]);

  const usarVistaInicio = (): void => {
    const viewer = viewerRef.current;
    const { onVistaGuardar, limitesZoom } = callbacks.current;
    if (viewer && onVistaGuardar) {
      onVistaGuardar(vistaAGrados(viewer.getPosition(), viewer.getZoomLevel(), limitesZoom));
    }
  };

  return (
    <div className="relative h-full w-full">
      <div ref={contenedor} className="h-full w-full" />
      {props.modoAgregar && (
        <div className="pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full border border-ambar/50 bg-fondo/90 px-4 py-1.5 text-sm text-ambar">
          Haz clic en la panorámica para colocar el punto «
          {props.modoAgregar === 'nav'
            ? 'Ir a otra escena'
            : props.modoAgregar === 'info'
              ? 'Información'
              : 'Enlace'}
          »
        </div>
      )}
      {props.onVistaGuardar && !props.modoAgregar && (
        /* bottom-14: flotando SOBRE la navbar de PSV (40 px) sin taparla (E3b-fix). */
        <button
          type="button"
          onClick={usarVistaInicio}
          className="absolute bottom-14 left-1/2 z-10 -translate-x-1/2 rounded-control border border-transparent bg-texto px-4 py-2 text-sm font-medium text-[#15171B] transition-colors hover:bg-texto-suave"
        >
          Usar esta vista como inicio
        </button>
      )}
    </div>
  );
}
