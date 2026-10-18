import type { TourSummary } from '@panoengine/schema';
import { useEffect, useState } from 'react';
import { api, type TourResponse } from './api.js';

interface Props {
  onAbrir: (slug: string) => void;
  onCrear: (datos: { slug: string; title: string; clientName?: string }) => Promise<unknown>;
}

export function ToursPage({ onAbrir, onCrear }: Props): React.JSX.Element {
  const [tours, setTours] = useState<TourSummary[] | null>(null);
  const [error, setError] = useState('');
  const [creando, setCreando] = useState(false);
  const [form, setForm] = useState({ slug: '', title: '', clientName: '' });
  const [creandoTour, setCreandoTour] = useState(false);

  useEffect(() => {
    api
      .listarTours()
      .then(setTours)
      .catch((err: Error) => setError(err.message));
  }, []);

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
    <main className="mx-auto max-w-4xl p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">🏛 PanoEngine Studio</h1>
        <button
          type="button"
          className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-400"
          onClick={() => setCreando((v) => !v)}
        >
          + Nuevo tour
        </button>
      </header>

      {creando && (
        <section className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="text-sm">
              Slug (URL pública)
              <input
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                placeholder="los-choquitos"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value.trim().toLowerCase() })}
              />
            </label>
            <label className="text-sm">
              Título
              <input
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                placeholder="Los Choquitos"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </label>
            <label className="text-sm">
              Cliente
              <input
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
                placeholder="Nombre del cliente"
                value={form.clientName}
                onChange={(e) => setForm({ ...form, clientName: e.target.value })}
              />
            </label>
          </div>
          <button
            type="button"
            disabled={creandoTour}
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 font-semibold disabled:opacity-50"
            onClick={() => void crear()}
          >
            {creandoTour ? 'Creando…' : 'Crear tour'}
          </button>
        </section>
      )}

      {error && (
        <p className="mb-6 rounded-lg border border-red-900 bg-red-950/60 px-4 py-3 text-red-200">{error}</p>
      )}

      {tours === null ? (
        <p className="text-slate-400">Cargando tours…</p>
      ) : tours.length === 0 ? (
        <p className="text-slate-400">Todavía no hay tours. Crea el primero.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {tours.map((tour: TourSummary) => (
            <li key={tour.slug}>
              <button
                type="button"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 p-5 text-left hover:border-amber-500/60"
                onClick={() => onAbrir(tour.slug)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{tour.title}</span>
                  <span
                    className={
                      tour.hostingStatus === 'active'
                        ? 'rounded-full bg-emerald-900/70 px-2 py-0.5 text-xs text-emerald-300'
                        : 'rounded-full bg-red-900/70 px-2 py-0.5 text-xs text-red-300'
                    }
                  >
                    {tour.hostingStatus === 'active' ? 'activo' : 'suspendido'}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">
                  /tours/{tour.slug} · {tour.sceneCount} escena(s)
                  {tour.clientName ? ` · ${tour.clientName}` : ''}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Actualizado {new Date(tour.updatedAt).toLocaleString('es')}
                </p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export type { TourResponse };
