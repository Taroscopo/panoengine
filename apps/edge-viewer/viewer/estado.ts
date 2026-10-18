/** Utilidades del visor: sin dependencias de zod (solo tipos de @panoengine/schema). */
import type { Hotspot, Tour } from '@panoengine/schema';

export const DEG2RAD = Math.PI / 180;
export const rad = (deg: number): number => deg * DEG2RAD;

export interface TourContext {
  tour: Tour;
  /** Prefijo público de assets del tour: /tours/{slug} */
  base: string;
  url(rel: string): string;
}

export function crearContexto(tour: Tour, slug: string): TourContext {
  const base = `/tours/${encodeURIComponent(slug)}`;
  return {
    tour,
    base,
    url: (rel: string) => `${base}/${rel.replace(/^\//, '')}`,
  };
}

/** Sustituye los tokens {level} {row} {col} de la plantilla de tiles. */
export function expandirTileUrl(plantilla: string, level: number, row: number, col: number): string {
  return plantilla
    .replaceAll('{level}', String(level))
    .replaceAll('{row}', String(row))
    .replaceAll('{col}', String(col));
}

export type EstadoPantalla =
  | { clase: 'cargando' }
  | { clase: 'gate'; estado: 402 | 410 }
  | { clase: 'no-encontrado' }
  | { clase: 'error'; detalle: string };

export function mostrarEstado(estado: EstadoPantalla): void {
  const cont = document.getElementById('estado');
  const insignia = document.getElementById('estado-insignia');
  const titulo = document.getElementById('estado-titulo');
  const mensaje = document.getElementById('estado-mensaje');
  const boton = document.getElementById('estado-reintentar');
  if (!cont || !insignia || !titulo || !mensaje || !boton) {
    return;
  }
  cont.hidden = false;
  cont.classList.toggle('estado--girando', estado.clase === 'cargando');
  const textos: Record<EstadoPantalla['clase'], [string, string, string]> = {
    cargando: ['Cargando', 'Preparando el tour…', 'Un momento por favor.'],
    gate: [
      'Pausado',
      'Tour pausado',
      estado.clase === 'gate' && estado.estado === 410
        ? 'El periodo de alojamiento de este tour ha finalizado.'
        : 'Este tour está temporalmente pausado por el administrador.',
    ],
    'no-encontrado': ['404', 'Tour no encontrado', 'Este tour virtual no existe o fue retirado.'],
    error: ['Error', 'No se pudo cargar el tour', estado.clase === 'error' ? estado.detalle : ''],
  };
  const [ins, tit, msg] = textos[estado.clase];
  insignia.textContent = ins;
  titulo.textContent = tit;
  mensaje.textContent = msg;
  const reintentar = estado.clase === 'error' || estado.clase === 'no-encontrado';
  boton.hidden = !reintentar;
}

export function ocultarEstado(): void {
  const cont = document.getElementById('estado');
  if (cont) {
    cont.hidden = true;
  }
}

/** Extrae el slug de /tours/{slug} o /tours/{slug}/... */
export function extraerSlug(): string | null {
  const partes = location.pathname.replace(/\/+$/, '').split('/');
  const idx = partes.lastIndexOf('tours');
  if (idx === -1 || idx + 1 >= partes.length) {
    return null;
  }
  return partes[idx + 1] ?? null;
}

export function esMovil(): boolean {
  return window.matchMedia('(pointer: coarse)').matches;
}

/** Iconos SVG inline de los marcadores (sin dependencias externas). */
export const ICONOS: Record<Hotspot['type'], string> = {
  nav: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4.5 20.3l1.4 1.4L12 18.7l6.1 3 1.4-1.4z"/></svg>',
  info: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v2h-2zm0 4h2v6h-2z"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z"/></svg>',
};

export const ICONO_WHATSAPP =
  '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.5 5.8L4 29l8.4-1.5c1.7.8 3.6 1.2 5.6 1.2h.1c6.6 0 11.9-5.4 11.9-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.3l-.4-.2-4.9.9.9-4.8-.3-.5A9.9 9.9 0 0 1 6.1 15c0-5.5 4.5-9.9 10-9.9 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.5-4.5 10-10 9.8zm5.5-7.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2.1c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6s0-.4 0-.6-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4a3.7 3.7 0 0 0-1.2 2.8c0 1.6 1.2 3.2 1.4 3.5a12 12 0 0 0 4.6 4c2.6 1 3.1.8 3.7.8s1.9-.8 2.2-1.5.3-1.4.2-1.5l-.1-.1z"/></svg>';
