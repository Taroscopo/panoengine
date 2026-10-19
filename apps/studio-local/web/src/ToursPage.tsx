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

  // Lógica intacta (aprobada en E2): solo se reorganiza para el resumen y los contadores.
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

  const resumen = useMemo(() => {
    const partes = [`${contadores.todos} ${contadores.todos === 1 ? 'tour' : 'tours'}`];
    if (contadores.activos > 0) {
      partes.push(`${contadores.activos} ${contadores.activos === 1 ? 'activo' : 'activos'}`);
    }
    if (contadores['por-vencer'] > 0) {
      partes.push(
        `${contadores['por-vencer']} ${contadores['por-vencer'] === 1 ? 'vence pronto' : 'vencen pronto'}`,
      );
    }
    if (contadores.suspendidos > 0) {
      partes.push(`${contadores.suspendidos} ${contadores.suspendidos === 1 ? 'suspendido' : 'suspendidos'}`);
    }
    return partes.join(' · ');
  }, [contadores]);

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
    <div className="min-h-full">
      <div className="border-b border-linea bg-panel px-8 py-2 text-sm text-texto-tenue">
        PanoEngine <span className="mx-1">/</span> <span className="text-texto-suave">Tours</span>
      </div>
      <main className="mx-auto max-w-6xl px-8 py-8">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Tours</h1>
            <p className="mt-1 text-sm text-texto-suave">{resumen}</p>
          </div>
          <Boton variante="primario" icono="mas" onClick={() => setCreando((v) => !v)}>
            Nuevo tour
          </Boton>
        </header>

        {creando && (
          <section className="mb-6 rounded-tarjeta border border-linea bg-tarjeta p-5">
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

        <fieldset aria-label="Filtrar tours" className="mb-6 border-b border-linea">
          <div className="flex gap-6">
            {FILTROS.map((f) => {
              const activo = f.id === filtro;
              const n = contadores[f.id];
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={activo}
                  onClick={() => setFiltro(f.id)}
                  className={`-mb-px flex items-center gap-1.5 border-b-2 px-1 pb-2.5 text-sm transition-colors ${
                    activo
                      ? 'border-texto text-texto'
                      : 'border-transparent text-texto-suave hover:text-texto'
                  }`}
                >
                  {f.titulo}
                  <span
                    className={`rounded-full px-1.5 text-xs ${activo ? 'bg-tarjeta' : 'bg-tarjeta text-texto-tenue'}`}
                  >
                    {n}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {tours === null ? (
          <p className="text-texto-suave">Cargando tours…</p>
        ) : visibles.length === 0 ? (
          <p className="text-texto-suave">
            {tours.length === 0 ? 'Todavía no hay tours. Crea el primero.' : 'Ningún tour en este filtro.'}
          </p>
        ) : (
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {visibles.map(({ tour, estado }) => {
              const etiqueta = ETIQUETA_ESTADO[estado];
              const vence = textoVence(tour);
              return (
                <li key={tour.slug}>
                  <button
                    type="button"
                    onClick={() => onAbrir(tour.slug)}
                    className="block w-full overflow-hidden rounded-tarjeta border border-linea bg-tarjeta text-left transition-colors hover:border-texto-tenue"
                  >
                    <span className="relative block h-[168px] bg-fondo">
                      {tour.miniatura ? (
                        <img src={tour.miniatura} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <span className="grid h-full w-full place-items-center text-texto-tenue">
                          <Icono nombre="ojo" className="h-6 w-6" />
                        </span>
                      )}
                      <span className="absolute bottom-2 left-2 rounded-full bg-fondo/85 px-2 py-0.5 text-xs text-texto-suave">
                        {tour.sceneCount === 0
                          ? 'Sin escenas'
                          : `${tour.sceneCount} ${tour.sceneCount === 1 ? 'escena' : 'escenas'}`}
                      </span>
                    </span>
                    <span className="block p-4">
                      <span className="flex items-center justify-between gap-2">
                        <span className="truncate font-medium">{tour.title}</span>
                        <Insignia tono={etiqueta.tono}>{etiqueta.texto}</Insignia>
                      </span>
                      {tour.clientName && (
                        <span className="mt-0.5 block truncate text-sm text-texto-suave">
                          {tour.clientName}
                        </span>
                      )}
                      <span className="mt-3 block border-t border-linea pt-2 text-xs text-texto-tenue">
                        Editado {new Date(tour.updatedAt).toLocaleDateString('es')}
                        {vence !== null && (
                          <span
                            className={estado === 'por-vencer' || estado === 'vencido' ? ' text-ambar' : ''}
                          >
                            {' '}
                            · {vence}
                          </span>
                        )}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}
