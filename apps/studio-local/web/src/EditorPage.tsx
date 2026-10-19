import type { Hotspot, Scene, Tour } from '@panoengine/schema';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ulid } from 'ulid';
import { api, type SceneJob } from './api.js';
import { Boton } from './componentes/Boton.js';
import { Icono } from './componentes/Icono.js';
import { Insignia } from './componentes/Insignia.js';
import { Pestanas } from './componentes/Pestanas.js';
import { avisoBorradoDist } from './mensaje-borrado.js';
import { PanoPreview } from './PanoPreview.js';

interface Props {
  slug: string;
  onVolver: () => void;
}

const AHORA = (): string => new Date().toISOString();

export function EditorPage({ slug, onVolver }: Props): React.JSX.Element {
  const [tour, setTour] = useState<Tour | null>(null);
  const [jobs, setJobs] = useState<SceneJob[]>([]);
  const [escenaId, setEscenaId] = useState<string | null>(null);
  const [hotspotSel, setHotspotSel] = useState<string | null>(null);
  const [modoAgregar, setModoAgregar] = useState<'nav' | 'info' | 'link' | null>(null);
  const [mensaje, setMensaje] = useState('');
  const [subiendo, setSubiendo] = useState(false);
  const [publicando, setPublicando] = useState(false);
  const [resultadoPublicar, setResultadoPublicar] = useState<string | null>(null);
  const [pestana, setPestana] = useState<'editor' | 'contacto' | 'ajustes'>('editor');
  const archivoRef = useRef<HTMLInputElement>(null);

  const recargar = useCallback(async (): Promise<void> => {
    const res = await api.leerTour(slug);
    setTour(res.tour);
    setJobs(res.jobs);
    setEscenaId((actual) => actual ?? res.tour.defaultSceneId ?? res.tour.scenes[0]?.id ?? null);
  }, [slug]);

  useEffect(() => {
    void recargar();
  }, [recargar]);

  // Progreso en vivo vía SSE.
  useEffect(() => {
    const fuente = new EventSource(`/api/tours/${slug}/events`);
    fuente.onmessage = (ev) => {
      const dato = JSON.parse(ev.data) as
        | { type: 'snapshot'; jobs: SceneJob[] }
        | { type: 'job'; job: SceneJob };
      if (dato.type === 'snapshot') {
        setJobs(dato.jobs);
      } else {
        setJobs((prev) => {
          const otros = prev.filter((j) => j.sceneId !== dato.job.sceneId);
          return [...otros, dato.job];
        });
      }
    };
    fuente.onerror = () => setJobs((prev) => prev);
    return () => fuente.close();
  }, [slug]);

  const escena: Scene | undefined = useMemo(
    () => tour?.scenes.find((s) => s.id === escenaId),
    [tour, escenaId],
  );
  const jobDeEscena = jobs.find((j) => j.sceneId === escenaId);

  const guardarTour = async (cambios: Record<string, unknown>): Promise<void> => {
    try {
      setTour(await api.parchearTour(slug, cambios));
      setMensaje('Tour guardado');
    } catch (err) {
      setMensaje(err instanceof Error ? err.message : 'Error al guardar');
    }
  };

  const guardarEscena = async (cambios: Record<string, unknown>): Promise<void> => {
    if (!escena) {
      return;
    }
    try {
      const actualizada = await api.parchearEscena(slug, escena.id, cambios);
      setTour((prev) =>
        prev
          ? { ...prev, scenes: prev.scenes.map((s) => (s.id === actualizada.id ? actualizada : s)) }
          : prev,
      );
      setMensaje('Escena guardada');
    } catch (err) {
      setMensaje(err instanceof Error ? err.message : 'Error al guardar la escena');
    }
  };

  const subir = async (archivos: FileList | null): Promise<void> => {
    if (!archivos || archivos.length === 0) {
      return;
    }
    setSubiendo(true);
    try {
      for (const archivo of Array.from(archivos)) {
        const { scene, warnings } = await api.subirEscena(slug, archivo);
        setMensaje(
          `Escena «${scene.name}» añadida${warnings.length > 0 ? ` · Avisos: ${warnings.join('; ')}` : ''}`,
        );
        await recargar();
      }
    } catch (err) {
      setMensaje(err instanceof Error ? err.message : 'Error subiendo la panorámica');
    } finally {
      setSubiendo(false);
      if (archivoRef.current) {
        archivoRef.current.value = '';
      }
    }
  };

  const borrarEscena = async (): Promise<void> => {
    if (!escena) {
      return;
    }
    if (!window.confirm(`¿Eliminar la escena «${escena.name}» del tour?`)) {
      return;
    }
    const respuesta = await api.borrarEscena(slug, escena.id);
    const aviso = avisoBorradoDist(respuesta);
    if (aviso !== null) {
      setMensaje(aviso);
    }
    setEscenaId(null);
    setHotspotSel(null);
    await recargar();
  };

  const agregarHotspot = async (yaw: number, pitch: number): Promise<void> => {
    if (!escena || !modoAgregar || !tour) {
      return;
    }
    const base = {
      id: ulid(),
      title: `Hotspot ${modoAgregar}`,
      yaw: Math.round(yaw * 100) / 100,
      pitch: Math.round(pitch * 100) / 100,
      createdAt: AHORA(),
      updatedAt: AHORA(),
    };
    let nuevo: Hotspot;
    if (modoAgregar === 'nav') {
      nuevo = {
        ...base,
        type: 'nav',
        targetSceneId: tour.scenes.find((s) => s.id !== escena.id)?.id ?? escena.id,
        transitionEffect: 'blend',
        transitionDurationMs: 750,
      };
    } else if (modoAgregar === 'info') {
      nuevo = { ...base, type: 'info', content: 'Escribe aquí la información.' };
    } else {
      nuevo = { ...base, type: 'link', url: 'https://wa.me/', action: 'new-tab' };
    }
    await guardarEscena({ hotspots: [...escena.hotspots, nuevo] });
    setHotspotSel(nuevo.id);
    setModoAgregar(null);
  };

  const actualizarHotspot = async (id: string, cambios: Partial<Hotspot>): Promise<void> => {
    if (!escena) {
      return;
    }
    const hotspots = escena.hotspots.map((h) =>
      h.id === id ? ({ ...h, ...cambios, updatedAt: AHORA() } as Hotspot) : h,
    );
    await guardarEscena({ hotspots });
  };

  const borrarHotspot = async (id: string): Promise<void> => {
    if (!escena) {
      return;
    }
    await guardarEscena({ hotspots: escena.hotspots.filter((h) => h.id !== id) });
    setHotspotSel(null);
  };

  const publicar = async (): Promise<void> => {
    setPublicando(true);
    setResultadoPublicar(null);
    try {
      const res = await api.publicar(slug);
      if (res.localOnly) {
        setResultadoPublicar(res.mensaje ?? 'Generado dist/ local (R2 sin configurar).');
      } else if (res.ok) {
        setResultadoPublicar(
          `Publicado: ${res.stats?.uploaded ?? 0} subidos, ${res.stats?.skipped ?? 0} sin cambios, ${res.stats?.deleted ?? 0} borrados.`,
        );
      } else {
        setResultadoPublicar(`Publicación con errores: ${res.stats?.errors.join('; ')}`);
      }
    } catch (err) {
      setResultadoPublicar(err instanceof Error ? err.message : 'Error al publicar');
    } finally {
      setPublicando(false);
    }
  };

  if (!tour) {
    return <main className="grid h-full place-items-center text-slate-400">Cargando el tour…</main>;
  }
  const hotspotActual = escena?.hotspots.find((h) => h.id === hotspotSel);

  return (
    <main className="flex h-full flex-col">
      <header className="flex items-stretch gap-4 border-b border-linea bg-panel px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onVolver}
            className="inline-flex items-center gap-1.5 text-sm text-texto-suave hover:text-texto"
          >
            <Icono nombre="volver" />
            Tours
          </button>
          <h1 className="text-base font-semibold">{tour.title}</h1>
          <Insignia tono={tour.hostingStatus === 'suspended' ? 'rojo' : 'verde'}>
            {tour.hostingStatus === 'suspended' ? 'Suspendido' : 'Activo'}
          </Insignia>
        </div>
        <nav className="mx-auto self-stretch">
          <Pestanas
            etiqueta="Secciones del tour"
            pestanas={[
              { id: 'editor', titulo: 'Editor' },
              { id: 'contacto', titulo: 'Contacto y marca' },
              { id: 'ajustes', titulo: 'Ajustes' },
            ]}
            valor={pestana}
            onChange={setPestana}
          />
        </nav>
        <div className="flex items-center gap-2 py-2.5">
          {mensaje && (
            <span className="inline-flex items-center gap-1.5 text-sm text-texto-suave" role="status">
              <Icono nombre="check" className="h-3.5 w-3.5 text-verde" />
              {mensaje}
            </span>
          )}
          <Boton variante="secundario" icono="ojo" disabled title="Disponible en una etapa posterior">
            Vista previa
          </Boton>
          <Boton variante="primario" icono="nube" disabled={publicando} onClick={() => void publicar()}>
            {publicando ? 'Publicando…' : 'Publicar'}
          </Boton>
        </div>
      </header>
      {resultadoPublicar && (
        <div className="flex items-center gap-2 border-b border-ambar/40 bg-ambar/10 px-6 py-2 text-sm text-ambar">
          <Icono nombre="alerta" />
          {resultadoPublicar}
        </div>
      )}

      {pestana === 'editor' && (
        <div
          id="panel-editor"
          role="tabpanel"
          aria-labelledby="pestana-editor"
          className="grid min-h-0 flex-1 grid-cols-[260px_1fr_340px]"
        >
          {/* ---------- Columna escenas ---------- */}
          <aside className="flex min-h-0 flex-col border-r border-slate-800">
            <div className="border-b border-slate-800 p-3">
              <input
                ref={archivoRef}
                type="file"
                accept="image/jpeg"
                multiple
                className="hidden"
                onChange={(e) => void subir(e.target.files)}
              />
              <button
                type="button"
                disabled={subiendo}
                className="w-full rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold disabled:opacity-50"
                onClick={() => archivoRef.current?.click()}
              >
                {subiendo ? 'Procesando…' : '⬆ Subir panorámica JPG'}
              </button>
              <p className="mt-2 text-xs text-slate-500">
                Insta360 X5 (11904×5952). El preview queda listo en segundos; los tiles se cortan en segundo
                plano.
              </p>
            </div>
            <ul className="min-h-0 flex-1 overflow-y-auto p-2">
              {tour.scenes.map((s) => {
                const job = jobs.find((j) => j.sceneId === s.id);
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      className={`mb-2 flex w-full items-center gap-3 rounded-lg border p-2 text-left ${
                        s.id === escenaId
                          ? 'border-amber-500 bg-slate-900'
                          : 'border-slate-800 hover:border-slate-600'
                      }`}
                      onClick={() => {
                        setEscenaId(s.id);
                        setHotspotSel(null);
                      }}
                    >
                      <img
                        src={api.archivoEscena(slug, s, 'thumb.webp')}
                        alt=""
                        className="h-10 w-20 flex-none rounded object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">{s.name}</span>
                        {job && job.status !== 'done' ? (
                          <span className="mt-1 block">
                            <progress className="h-1.5 w-full" value={job.done} max={job.total} />
                            <span className="text-xs text-slate-500">
                              {job.status === 'error'
                                ? `Error: ${job.error}`
                                : `${job.done}/${job.total} tiles (L${job.level})`}
                            </span>
                          </span>
                        ) : (
                          <span className="text-xs text-emerald-500">✓ 168 tiles</span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* ---------- Visor ---------- */}
          <section className="min-h-0 p-3">
            {escena ? (
              <div className="flex h-full flex-col gap-2">
                <div className="flex items-center gap-2">
                  {(['nav', 'info', 'link'] as const).map((tipo) => (
                    <button
                      key={tipo}
                      type="button"
                      className={`rounded-lg px-3 py-1.5 text-sm ${
                        modoAgregar === tipo
                          ? 'bg-amber-500 font-semibold text-slate-950'
                          : 'bg-slate-800 hover:bg-slate-700'
                      }`}
                      onClick={() => setModoAgregar(modoAgregar === tipo ? null : tipo)}
                    >
                      + {tipo === 'nav' ? 'navegación' : tipo === 'info' ? 'info' : 'enlace'}
                    </button>
                  ))}
                  <span className="ml-auto text-xs text-slate-500">
                    Escena: {escena.name} · rev {escena.revHash}
                  </span>
                </div>
                <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-slate-800">
                  <PanoPreview
                    previewUrl={api.archivoEscena(slug, escena, 'preview.webp')}
                    hotspots={escena.hotspots}
                    hotspotSeleccionado={hotspotSel}
                    modoAgregar={modoAgregar}
                    onAgregar={(yaw, pitch) => void agregarHotspot(yaw, pitch)}
                    onSeleccionar={setHotspotSel}
                  />
                </div>
              </div>
            ) : (
              <div className="grid h-full place-items-center text-slate-500">
                Sube la primera panorámica para empezar.
              </div>
            )}
          </section>

          {/* ---------- Inspector ---------- */}
          <aside className="min-h-0 overflow-y-auto border-l border-slate-800 p-4 text-sm">
            <DetalleTour tour={tour} onGuardar={guardarTour} />
            {escena && (
              <DetalleEscena
                escena={escena}
                tour={tour}
                job={jobDeEscena}
                onGuardar={guardarEscena}
                onBorrar={() => void borrarEscena()}
              />
            )}
            {escena && (
              <DetalleHotspots
                escena={escena}
                tour={tour}
                seleccionado={hotspotActual}
                onSeleccionar={setHotspotSel}
                onActualizar={(id, cambios) => void actualizarHotspot(id, cambios)}
                onBorrar={(id) => void borrarHotspot(id)}
              />
            )}
          </aside>
        </div>
      )}

      {pestana === 'contacto' && (
        <section
          id="panel-contacto"
          role="tabpanel"
          aria-labelledby="pestana-contacto"
          className="grid flex-1 place-items-center p-8"
        >
          <div className="rounded-tarjeta border border-linea bg-tarjeta px-8 py-6 text-center">
            <h2 className="mb-1 font-semibold">Contacto y marca</h2>
            <p className="text-sm text-texto-suave">
              Cliente, WhatsApp y aviso de mensaje — se completan en la etapa 5 del rediseño.
            </p>
          </div>
        </section>
      )}

      {pestana === 'ajustes' && (
        <section
          id="panel-ajustes"
          role="tabpanel"
          aria-labelledby="pestana-ajustes"
          className="grid flex-1 place-items-center p-8"
        >
          <div className="rounded-tarjeta border border-linea bg-tarjeta px-8 py-6 text-center">
            <h2 className="mb-1 font-semibold">Ajustes</h2>
            <p className="text-sm text-texto-suave">
              Título, estado, vencimiento y comportamiento — se completan en la etapa 5 del rediseño.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

/* ------------------------------------------------------------------ */

function Campo({ etiqueta, children }: { etiqueta: string; children: React.ReactNode }): React.JSX.Element {
  return (
    <div className="mb-2 block">
      <span className="mb-1 block text-xs uppercase tracking-wide text-slate-500">{etiqueta}</span>
      {children}
    </div>
  );
}

const inputCls =
  'w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1.5 text-sm focus:border-amber-500 focus:outline-none';

function DetalleTour({
  tour,
  onGuardar,
}: {
  tour: Tour;
  onGuardar: (cambios: Record<string, unknown>) => Promise<void>;
}): React.JSX.Element {
  const [form, setForm] = useState({
    title: tour.title,
    clientName: tour.clientName ?? '',
    whatsappNumber: tour.whatsappNumber ?? '',
    whatsappDefaultText: tour.whatsappDefaultText ?? '',
    hostingStatus: tour.hostingStatus,
    hostingExpiresAt: tour.hostingExpiresAt?.slice(0, 16) ?? '',
    autoRotateEnabled: tour.autoRotate.enabled,
    autoRotateWait: tour.autoRotate.waitTimeMs,
    littlePlanet: tour.littlePlanetIntro,
    defaultSceneId: tour.defaultSceneId ?? '',
  });
  return (
    <section className="mb-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h2 className="mb-3 font-semibold">Datos del tour</h2>
      <Campo etiqueta="Título">
        <input
          className={inputCls}
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </Campo>
      <Campo etiqueta="Cliente">
        <input
          className={inputCls}
          value={form.clientName}
          onChange={(e) => setForm({ ...form, clientName: e.target.value })}
        />
      </Campo>
      <Campo etiqueta="WhatsApp (ej. +57 301 1234567)">
        <input
          className={inputCls}
          value={form.whatsappNumber}
          onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
        />
      </Campo>
      <Campo etiqueta="Mensaje de WhatsApp por defecto">
        <input
          className={inputCls}
          value={form.whatsappDefaultText}
          onChange={(e) => setForm({ ...form, whatsappDefaultText: e.target.value })}
        />
      </Campo>
      {form.whatsappNumber.trim() !== '' && form.whatsappDefaultText.trim() === '' && (
        <p className="mb-2 rounded-lg border border-amber-700/60 bg-amber-950/40 px-3 py-2 text-xs text-amber-300">
          ⚠ Sin mensaje, el botón solo mostrará el nombre de la escena.
        </p>
      )}
      <div className="grid grid-cols-2 gap-2">
        <Campo etiqueta="Estado de alojamiento">
          <select
            className={inputCls}
            value={form.hostingStatus}
            onChange={(e) => setForm({ ...form, hostingStatus: e.target.value as Tour['hostingStatus'] })}
          >
            <option value="active">activo</option>
            <option value="suspended">suspendido</option>
          </select>
        </Campo>
        <Campo etiqueta="Anualidad vence">
          <input
            type="datetime-local"
            className={inputCls}
            value={form.hostingExpiresAt}
            onChange={(e) => setForm({ ...form, hostingExpiresAt: e.target.value })}
          />
        </Campo>
      </div>
      <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <label className="flex items-center gap-1.5">
          <input
            type="checkbox"
            checked={form.autoRotateEnabled}
            onChange={(e) => setForm({ ...form, autoRotateEnabled: e.target.checked })}
          />
          Rotación automática
        </label>
        <label className="flex items-center gap-1.5">
          Espera (ms)
          <input
            className="w-20 rounded border border-slate-700 bg-slate-950 px-2 py-0.5"
            type="number"
            value={form.autoRotateWait}
            onChange={(e) => setForm({ ...form, autoRotateWait: Number(e.target.value) })}
          />
        </label>
        <label className="flex items-center gap-1.5">
          <input
            type="checkbox"
            checked={form.littlePlanet}
            onChange={(e) => setForm({ ...form, littlePlanet: e.target.checked })}
          />
          Intro planeta
        </label>
      </div>
      <Campo etiqueta="Escena inicial">
        <select
          className={inputCls}
          value={form.defaultSceneId}
          onChange={(e) => setForm({ ...form, defaultSceneId: e.target.value })}
        >
          {tour.scenes.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </Campo>
      <button
        type="button"
        className="mt-2 w-full rounded-lg bg-slate-700 py-1.5 font-medium hover:bg-slate-600"
        onClick={() =>
          void onGuardar({
            title: form.title,
            clientName: form.clientName || null,
            whatsappNumber: form.whatsappNumber || null,
            whatsappDefaultText: form.whatsappDefaultText || null,
            hostingStatus: form.hostingStatus,
            hostingExpiresAt: form.hostingExpiresAt ? new Date(form.hostingExpiresAt).toISOString() : null,
            autoRotate: { enabled: form.autoRotateEnabled, waitTimeMs: form.autoRotateWait },
            littlePlanetIntro: form.littlePlanet,
            defaultSceneId: form.defaultSceneId || null,
          })
        }
      >
        Guardar tour
      </button>
    </section>
  );
}

function DetalleEscena({
  escena,
  tour,
  job,
  onGuardar,
  onBorrar,
}: {
  escena: Scene;
  tour: Tour;
  job: SceneJob | undefined;
  onGuardar: (cambios: Record<string, unknown>) => Promise<void>;
  onBorrar: () => void;
}): React.JSX.Element {
  const [form, setForm] = useState({
    name: escena.name,
    yaw: escena.defaultView.yaw,
    pitch: escena.defaultView.pitch,
    fov: escena.defaultView.fov,
    zoomMin: escena.zoomLimit.min,
    zoomMax: escena.zoomLimit.max,
    lat: escena.lat?.toString() ?? '',
    lng: escena.lng?.toString() ?? '',
    gsvId: escena.gsv?.gsvId ?? '',
    gsvUrl: escena.gsv?.gsvUrl ?? '',
  });
  useEffect(() => {
    setForm({
      name: escena.name,
      yaw: escena.defaultView.yaw,
      pitch: escena.defaultView.pitch,
      fov: escena.defaultView.fov,
      zoomMin: escena.zoomLimit.min,
      zoomMax: escena.zoomLimit.max,
      lat: escena.lat?.toString() ?? '',
      lng: escena.lng?.toString() ?? '',
      gsvId: escena.gsv?.gsvId ?? '',
      gsvUrl: escena.gsv?.gsvUrl ?? '',
    });
  }, [escena]);
  return (
    <section className="mb-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h2 className="mb-3 font-semibold">Escena</h2>
      <Campo etiqueta="Nombre">
        <input
          className={inputCls}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </Campo>
      <div className="grid grid-cols-3 gap-2">
        <Campo etiqueta="Yaw °">
          <input
            type="number"
            step="0.1"
            className={inputCls}
            value={form.yaw}
            onChange={(e) => setForm({ ...form, yaw: Number(e.target.value) })}
          />
        </Campo>
        <Campo etiqueta="Pitch °">
          <input
            type="number"
            step="0.1"
            className={inputCls}
            value={form.pitch}
            onChange={(e) => setForm({ ...form, pitch: Number(e.target.value) })}
          />
        </Campo>
        <Campo etiqueta="FOV °">
          <input
            type="number"
            className={inputCls}
            value={form.fov}
            onChange={(e) => setForm({ ...form, fov: Number(e.target.value) })}
          />
        </Campo>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Campo etiqueta="Zoom mín (FOV)">
          <input
            type="number"
            className={inputCls}
            value={form.zoomMin}
            onChange={(e) => setForm({ ...form, zoomMin: Number(e.target.value) })}
          />
        </Campo>
        <Campo etiqueta="Zoom máx (FOV)">
          <input
            type="number"
            className={inputCls}
            value={form.zoomMax}
            onChange={(e) => setForm({ ...form, zoomMax: Number(e.target.value) })}
          />
        </Campo>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Campo etiqueta="Latitud">
          <input
            className={inputCls}
            value={form.lat}
            onChange={(e) => setForm({ ...form, lat: e.target.value })}
          />
        </Campo>
        <Campo etiqueta="Longitud">
          <input
            className={inputCls}
            value={form.lng}
            onChange={(e) => setForm({ ...form, lng: e.target.value })}
          />
        </Campo>
      </div>
      <Campo etiqueta="GSV ID">
        <input
          className={inputCls}
          value={form.gsvId}
          onChange={(e) => setForm({ ...form, gsvId: e.target.value })}
        />
      </Campo>
      <div className="flex gap-2">
        <button
          type="button"
          className="flex-1 rounded-lg bg-slate-700 py-1.5 font-medium hover:bg-slate-600"
          onClick={() =>
            void onGuardar({
              name: form.name,
              defaultView: { yaw: form.yaw, pitch: form.pitch, fov: form.fov },
              zoomLimit: { min: form.zoomMin, max: form.zoomMax },
              ...(form.lat !== '' ? { lat: Number(form.lat) } : {}),
              ...(form.lng !== '' ? { lng: Number(form.lng) } : {}),
              ...(form.gsvId !== '' || form.gsvUrl !== ''
                ? {
                    gsv: {
                      ...(form.gsvId !== '' ? { gsvId: form.gsvId } : {}),
                      ...(form.gsvUrl !== '' ? { gsvUrl: form.gsvUrl } : {}),
                    },
                  }
                : {}),
            })
          }
        >
          Guardar escena
        </button>
        <button
          type="button"
          className="rounded-lg border border-red-800 px-3 py-1.5 text-red-300 hover:bg-red-950"
          onClick={onBorrar}
          disabled={tour.scenes.length <= 1 || job?.status === 'running'}
        >
          Eliminar
        </button>
      </div>
    </section>
  );
}

function DetalleHotspots({
  escena,
  tour,
  seleccionado,
  onSeleccionar,
  onActualizar,
  onBorrar,
}: {
  escena: Scene;
  tour: Tour;
  seleccionado: Hotspot | undefined;
  onSeleccionar: (id: string) => void;
  onActualizar: (id: string, cambios: Partial<Hotspot>) => void;
  onBorrar: (id: string) => void;
}): React.JSX.Element {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h2 className="mb-3 font-semibold">Hotspots ({escena.hotspots.length})</h2>
      <ul className="mb-3 space-y-1">
        {escena.hotspots.map((h) => (
          <li key={h.id}>
            <button
              type="button"
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-1.5 text-left ${
                seleccionado?.id === h.id ? 'border-amber-500 bg-slate-900' : 'border-slate-800'
              }`}
              onClick={() => onSeleccionar(h.id)}
            >
              <span className="truncate">
                <span
                  className={`mr-2 rounded px-1.5 py-0.5 text-[10px] uppercase ${h.type === 'nav' ? 'bg-red-900/70 text-red-300' : h.type === 'info' ? 'bg-blue-900/70 text-blue-300' : 'bg-emerald-900/70 text-emerald-300'}`}
                >
                  {h.type}
                </span>
                {h.title ?? h.id}
              </span>
              <span className="text-xs text-slate-500">
                {h.yaw.toFixed(0)}°/{h.pitch.toFixed(0)}°
              </span>
            </button>
          </li>
        ))}
        {escena.hotspots.length === 0 && (
          <li className="text-xs text-slate-500">Sin hotspots. Usa los botones «+» sobre el visor.</li>
        )}
      </ul>

      {seleccionado && (
        <div className="rounded-lg border border-amber-900/60 bg-amber-950/20 p-3">
          <h3 className="mb-2 text-xs uppercase tracking-wide text-amber-400">
            Editando hotspot {seleccionado.type}
          </h3>
          <Campo etiqueta="Título">
            <input
              className={inputCls}
              defaultValue={seleccionado.title ?? ''}
              onBlur={(e) => onActualizar(seleccionado.id, { title: e.target.value })}
            />
          </Campo>
          <div className="grid grid-cols-2 gap-2">
            <Campo etiqueta="Yaw °">
              <input
                type="number"
                step="0.1"
                className={inputCls}
                defaultValue={seleccionado.yaw}
                onBlur={(e) => onActualizar(seleccionado.id, { yaw: Number(e.target.value) })}
              />
            </Campo>
            <Campo etiqueta="Pitch °">
              <input
                type="number"
                step="0.1"
                className={inputCls}
                defaultValue={seleccionado.pitch}
                onBlur={(e) => onActualizar(seleccionado.id, { pitch: Number(e.target.value) })}
              />
            </Campo>
          </div>
          {seleccionado.type === 'nav' && (
            <>
              <Campo etiqueta="Escena destino">
                <select
                  className={inputCls}
                  value={seleccionado.targetSceneId}
                  onChange={(e) => onActualizar(seleccionado.id, { targetSceneId: e.target.value })}
                >
                  {tour.scenes
                    .filter((s) => s.id !== escena.id)
                    .map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                </select>
              </Campo>
              <div className="grid grid-cols-3 gap-2">
                <Campo etiqueta="T. Yaw °">
                  <input
                    type="number"
                    className={inputCls}
                    defaultValue={seleccionado.targetYaw ?? 0}
                    onBlur={(e) => onActualizar(seleccionado.id, { targetYaw: Number(e.target.value) })}
                  />
                </Campo>
                <Campo etiqueta="T. Pitch °">
                  <input
                    type="number"
                    className={inputCls}
                    defaultValue={seleccionado.targetPitch ?? 0}
                    onBlur={(e) => onActualizar(seleccionado.id, { targetPitch: Number(e.target.value) })}
                  />
                </Campo>
                <Campo etiqueta="T. FOV °">
                  <input
                    type="number"
                    className={inputCls}
                    defaultValue={seleccionado.targetFov ?? 90}
                    onBlur={(e) => onActualizar(seleccionado.id, { targetFov: Number(e.target.value) })}
                  />
                </Campo>
              </div>
              <Campo etiqueta="Transición">
                <select
                  className={inputCls}
                  value={seleccionado.transitionEffect}
                  onChange={(e) =>
                    onActualizar(seleccionado.id, {
                      transitionEffect: e.target.value as 'blend' | 'fade' | 'none',
                    })
                  }
                >
                  <option value="blend">blend (fundido)</option>
                  <option value="fade">fade</option>
                  <option value="none">ninguna</option>
                </select>
              </Campo>
            </>
          )}
          {seleccionado.type === 'info' && (
            <Campo etiqueta="Contenido">
              <textarea
                className={`${inputCls} h-24`}
                defaultValue={seleccionado.content}
                onBlur={(e) => onActualizar(seleccionado.id, { content: e.target.value })}
              />
            </Campo>
          )}
          {seleccionado.type === 'link' && (
            <>
              <Campo etiqueta="URL">
                <input
                  className={inputCls}
                  defaultValue={seleccionado.url}
                  onBlur={(e) => onActualizar(seleccionado.id, { url: e.target.value })}
                />
              </Campo>
              <Campo etiqueta="Abrir en">
                <select
                  className={inputCls}
                  value={seleccionado.action}
                  onChange={(e) =>
                    onActualizar(seleccionado.id, { action: e.target.value as 'new-tab' | 'same-tab' })
                  }
                >
                  <option value="new-tab">pestaña nueva</option>
                  <option value="same-tab">misma pestaña</option>
                </select>
              </Campo>
            </>
          )}
          <button
            type="button"
            className="mt-1 w-full rounded-lg border border-red-800 py-1.5 text-red-300 hover:bg-red-950"
            onClick={() => onBorrar(seleccionado.id)}
          >
            Eliminar hotspot
          </button>
        </div>
      )}
    </section>
  );
}
