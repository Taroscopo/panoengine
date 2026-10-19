export type EstadoTour = 'activo' | 'por-vencer' | 'vencido' | 'suspendido';

export interface ResumenTour {
  hostingStatus: 'active' | 'suspended';
  hostingExpiresAt?: string | undefined;
}

const DIA_MS = 24 * 60 * 60 * 1000;
/** Umbral «Por vencer»: faltan ≤ 30 días (orden del propietario). */
export const DIAS_POR_VENCER = 30;

/**
 * Estado derivado de un tour para la lista:
 * suspendido (estado manual) · vencido (fecha pasada) · por-vencer (≤30 días) · activo.
 * La suspensión manual tiene prioridad sobre el vencimiento (igual que el Worker).
 */
export function estadoTour(resumen: ResumenTour, ahora: Date = new Date()): EstadoTour {
  if (resumen.hostingStatus === 'suspended') {
    return 'suspendido';
  }
  if (resumen.hostingExpiresAt === undefined) {
    return 'activo';
  }
  const t = Date.parse(resumen.hostingExpiresAt);
  if (Number.isNaN(t)) {
    return 'activo';
  }
  const dias = (t - ahora.getTime()) / DIA_MS;
  if (dias < 0) {
    return 'vencido';
  }
  return dias <= DIAS_POR_VENCER ? 'por-vencer' : 'activo';
}

/** Texto de vencimiento para la tarjeta: null si no hay fecha. */
export function textoVence(resumen: ResumenTour, ahora: Date = new Date()): string | null {
  if (resumen.hostingExpiresAt === undefined) {
    return null;
  }
  const t = Date.parse(resumen.hostingExpiresAt);
  if (Number.isNaN(t)) {
    return null;
  }
  const fraccion = (t - ahora.getTime()) / DIA_MS;
  if (fraccion < 0) {
    const dias = Math.ceil(Math.abs(fraccion));
    return `Venció hace ${dias} ${dias === 1 ? 'día' : 'días'}`;
  }
  if (fraccion < 1) {
    return 'Vence hoy';
  }
  const dias = Math.ceil(fraccion);
  return `Vence en ${dias} ${dias === 1 ? 'día' : 'días'}`;
}

export const FILTROS = [
  { id: 'todos', titulo: 'Todos' },
  { id: 'activos', titulo: 'Activos' },
  { id: 'por-vencer', titulo: 'Por vencer' },
  { id: 'suspendidos', titulo: 'Suspendidos' },
] as const;

export type FiltroLista = (typeof FILTROS)[number]['id'];

/** ¿Pasa el tour por el filtro? («vencido» solo aparece en Todos). */
export function pasaFiltro(estado: EstadoTour, filtro: FiltroLista): boolean {
  switch (filtro) {
    case 'todos':
      return true;
    case 'activos':
      return estado === 'activo';
    case 'por-vencer':
      return estado === 'por-vencer';
    case 'suspendidos':
      return estado === 'suspendido';
  }
}
