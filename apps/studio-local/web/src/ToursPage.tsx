import type { TourSummary } from '@panoengine/schema';
import { useEffect, useMemo, useState } from 'react';
import { api } from './api.js';
import { Boton } from './componentes/Boton.js';
import { Campo, inputCls } from './componentes/Campo.js';
import { Icono } from './componentes/Icono.js';
import { Insignia } from './componentes/Insignia.js';
import { estadoTour, FILTROS, type FiltroLista, pasaFiltro, textoVence } from './estado-tour.js';

interface Props {
  onAbrir: (slug: string) => void;
  onCrear: (datos: { slug: string; title: string; clientName?: string }) => Promise<unknown>;
}

type Estado = ReturnType<typeof estadoTour>;
const ETIQUETA_ESTADO: Record<Estado, { texto: string; tono: 'verde' | 'ambar' | 'rojo' }> = {
  activo: { texto: 'Activo', tono: 'verde' },
  'por-vencer': { texto: 'Por vencer', tono: 'ambar' },
  vencido: { texto: 'Vencido', tono: 'rojo' },
  suspendido: { texto: 'Suspendido', tono: 'rojo' },
};

export function ToursPage({ onAbrir, onCrear }: Props): React.JSX.Element {
  const [tours, setTours] = useState<TourSummary[] | null>(null);
  const [error, setError] = useState('');
  const [creando, setCreando] = useState(false);
  const [form, setForm] = useState({ slug: '', title: '', clientName: '' });
  const [creandoTour, setCreandoTour] = useState(false);
  const [filtro, setFiltro] = useState<FiltroLista>('todos');

  useEffect(() => {
    api
      .listarTours()
      .then(setTours)
      .catch((err: Error) => setError(err.message));
  }, []);

  const conEstado = useMemo(() => (tours ?? []).map((t) => ({ tour: t, estado: estadoTour(t) })), [tours]);
  const contadores = useMemo(() => {
    const base: Record<FiltroLista, number> = { todos: 0, activos: 0, 'por-vencer': 0, suspendidos: 0 };
    for (const { estado } of conEstado) {
      base.todos++;
      if (pasaFiltro(estado, 'activos')) base.activos++;
      if (pasaFiltro(estado, 'por-vencer')) base['por-vencer']++;
      if (pasaFiltro(estado, 'suspendidos')) base.suspendidos++;
    }
    return base;
  }, [conEstado]);
  const visibles = conEstado.filter(({ estado }) => pasaFiltro(estado, filtro));

  const crear = async (): Promise<void> => {
    setError('');
    if (!form.slug || !form.title) {
      setError('El slug y el título son obligatorios');
      return;
    }
    setCreandoTour(true);
    try {
      await onCrear({
        slug: form.slug,
        title: form.title,
        ...(form.clientName ? { clientName: form.clientName } : {}),
      });
      setForm({ slug: '', title: '', clientName: '' });
      setCreando(false);
      setTours(await api.listarTours());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error creando el tour');
    } finally {
      setCreandoTour(false);
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-8 py-10">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tours</h1>
        <Boton variante="primario" icono="mas" onClick={() => setCreando((v) => !v)}>
          Nuevo tour
        </Boton>
      </header>

      {creando && (
        <section className="mb-8 rounded-tarjeta border border-linea bg-tarjeta p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <Campo id="nuevo-slug" etiqueta="Slug (URL pública)">
              <input
                id="nuevo-slug"
                className={inputCls}
                placeholder="los-choquitos"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value.trim().toLowerCase() })}
              />
            </Campo>
            <Campo id="nuevo-titulo" etiqueta="Título">
              <input
                id="nuevo-titulo"
                className={inputCls}
                placeholder="Los Choquitos"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Campo>
            <Campo id="nuevo-cliente" etiqueta="Cliente">
              <input
                id="nuevo-cliente"
                className={inputCls}
                placeholder="Nombre del cliente"
                value={form.clientName}
                onChange={(e) => setForm({ ...form, clientName: e.target.value })}
              />
            </Campo>
          </div>
          <Boton variante="primario" disabled={creandoTour} onClick={() => void crear()}>
            {creandoTour ? 'Creando…' : 'Crear tour'}
          </Boton>
        </section>
      )}

      {error && (
        <p className="mb-6 flex items-center gap-2 rounded-control border border-rojo/40 bg-rojo/10 px-4 py-3 text-sm text-rojo">
          <Icono nombre="alerta" />
          {error}
        </p>
      )}

      <fieldset aria-label="Filtrar tours" className="mb-6 flex gap-2">
        {FILTROS.map((f) => {
          const activo = f.id === filtro;
          const n = contadores[f.id];
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={activo}
              onClick={() => setFiltro(f.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition-colors ${
                activo
                  ? 'border-azul/60 bg-azul/10 text-azul'
                  : 'border-linea text-texto-suave hover:text-texto'
              }`}
            >
              {f.titulo}
              <span
                className={`rounded-full px-1.5 text-xs ${activo ? 'bg-azul/20' : 'bg-fondo text-texto-tenue'}`}
              >
                {n}
              </span>
            </button>
          );
        })}
      </fieldset>

      {tours === null ? (
        <p className="text-texto-suave">Cargando tours…</p>
      ) : visibles.length === 0 ? (
        <p className="text-texto-suave">
          {tours.length === 0 ? 'Todavía no hay tours. Crea el primero.' : 'Ningún tour en este filtro.'}
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {visibles.map(({ tour, estado }) => {
            const etiqueta = ETIQUETA_ESTADO[estado];
            const vence = textoVence(tour);
            return (
              <li key={tour.slug}>
                <button
                  type="button"
                  onClick={() => onAbrir(tour.slug)}
                  className="flex w-full gap-4 rounded-tarjeta border border-linea bg-tarjeta p-4 text-left transition-colors hover:border-texto-tenue"
                >
                  {tour.miniatura ? (
                    <img
                      src={tour.miniatura}
                      alt=""
                      className="h-16 w-28 flex-none rounded-control border border-linea object-cover"
                    />
                  ) : (
                    <span className="grid h-16 w-28 flex-none place-items-center rounded-control border border-linea bg-fondo text-texto-tenue">
                      <Icono nombre="ojo" className="h-5 w-5" />
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate font-medium">{tour.title}</span>
                      <Insignia tono={etiqueta.tono}>{etiqueta.texto}</Insignia>
                    </span>
                    <span className="mt-1 block truncate text-sm text-texto-suave">
                      /tours/{tour.slug}
                      {tour.clientName ? ` · ${tour.clientName}` : ''} · {tour.sceneCount}{' '}
                      {tour.sceneCount === 1 ? 'escena' : 'escenas'}
                    </span>
                    <span className="mt-1 block text-xs text-texto-tenue">
                      {vence !== null && (
                        <span className={estado === 'por-vencer' || estado === 'vencido' ? 'text-ambar' : ''}>
                          {vence} ·{' '}
                        </span>
                      )}
                      Actualizado {new Date(tour.updatedAt).toLocaleString('es')}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
