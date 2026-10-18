import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import type { Hotspot } from '@panoengine/schema';
import { useEffect, useRef } from 'react';

const RAD2DEG = 180 / Math.PI;

interface Props {
  previewUrl: string;
  hotspots: Hotspot[];
  hotspotSeleccionado: string | null;
  modoAgregar: 'nav' | 'info' | 'link' | null;
  onAgregar: (yawDeg: number, pitchDeg: number) => void;
  onSeleccionar: (hotspotId: string) => void;
}

const ICONOS: Record<Hotspot['type'], string> = {
  nav: '<svg viewBox="0 0 24 24"><path fill="#fff" d="M12 2 4.5 20.3l1.4 1.4L12 18.7l6.1 3 1.4-1.4z"/></svg>',
  info: '<svg viewBox="0 0 24 24"><path fill="#fff" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v2h-2zm0 4h2v6h-2z"/></svg>',
  link: '<svg viewBox="0 0 24 24"><path fill="#fff" d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z"/></svg>',
};

export function PanoPreview(props: Props): React.JSX.Element {
  const contenedor = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const markersRef = useRef<MarkersPlugin | null>(null);
  const callbacks = useRef(props);
  callbacks.current = props;

  // (Re)crear el visor al cambiar de escena.
  useEffect(() => {
    if (!contenedor.current) {
      return;
    }
    const viewer = new Viewer({
      container: contenedor.current,
      panorama: props.previewUrl,
      navbar: ['zoom', 'move', 'fullscreen'],
      lang: { zoom: 'Zoom', move: 'Mover', fullscreen: 'Pantalla completa', loading: 'Cargando…' },
      mousewheelCtrlKey: true,
      plugins: [[MarkersPlugin, { clickEventOnMarker: true }]],
    });
    viewerRef.current = viewer;
    markersRef.current = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);

    viewer.addEventListener('click', (e) => {
      const { modoAgregar, onAgregar } = callbacks.current;
      if (modoAgregar) {
        onAgregar(e.data.yaw * RAD2DEG, e.data.pitch * RAD2DEG);
      }
    });
    markersRef.current.addEventListener('select-marker', (e) => {
      callbacks.current.onSeleccionar(e.marker.id.replace(/^h-/, ''));
    });

    return () => {
      viewer.destroy();
      viewerRef.current = null;
      markersRef.current = null;
    };
  }, [props.previewUrl]);

  // Refrescar marcadores cuando cambian los hotspots o la selección.
  // previewUrl es dependencia deliberada: al recrear el visor hay que repintar los
  // marcadores sobre la nueva instancia del plugin.
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
        html: `<div class="pe-marker-edit pe-marker-edit--${h.type}${props.hotspotSeleccionado === h.id ? ' pe-marker-edit--sel' : ''}">${ICONOS[h.type]}</div>`,
        size: { width: 34, height: 34 },
        ...(h.title ? { tooltip: { content: h.title, position: 'top center' } } : {}),
      })),
    );
  }, [props.hotspots, props.hotspotSeleccionado, props.previewUrl]);

  return (
    <div className="relative h-full w-full">
      <div ref={contenedor} className="h-full w-full rounded-xl" />
      {props.modoAgregar && (
        <div className="pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1.5 text-sm font-semibold text-slate-950">
          Haz clic en la panorámica para colocar el hotspot «{props.modoAgregar}»
        </div>
      )}
    </div>
  );
}
