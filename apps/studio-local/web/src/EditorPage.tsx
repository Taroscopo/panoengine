import type { Hotspot, Scene, Tour } from '@panoengine/schema';
import { zoomLimitToPsv } from '@panoengine/schema';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ulid } from 'ulid';
import { api, type SceneJob } from './api.js';
import { Boton } from './componentes/Boton.js';
import { Campo, inputCls } from './componentes/Campo.js';
import { Icono } from './componentes/Icono.js';
import { Insignia } from './componentes/Insignia.js';
import { Pestanas } from './componentes/Pestanas.js';
import { Segmentado } from './componentes/Segmentado.js';
import { avisoBorradoDist } from './mensaje-borrado.js';
import { PanoPreview } from './PanoPreview.js';
import type { VistaGrados } from './vista.js';

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
  const [mensaje, setMensaje] = useState<{ texto: string; tipo: 'ok' | 'error' | 'aviso' } | null>(null);
  const [subiendo, setSubiendo] = useState(false);
  const [publicando, setPublicando] = useState(false);
  const [resultadoPublicar, setResultadoPublicar] = useState<string | null>(null);
  const [pestana, setPestana] = useState<'editor' | 'contacto' | 'ajustes'>('editor');
  const [panelDerecho, setPanelDerecho] = useState<'escena' | 'punto'>('escena');
  const [vistaActual, setVistaActual] = useState<VistaGrados | null>(null);
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

  // ok/aviso desaparecen solos a los ~4 s; el error se queda hasta la siguiente acción.
  useEffect(() => {
    if (mensaje === null || mensaje.tipo === 'error') {
      return;
    }
    const t = window.setTimeout(() => setMensaje(null), 4000);
    return () => window.clearTimeout(t);
  }, [mensaje]);

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
      setMensaje({ texto: 'Tour guardado', tipo: 'ok' });
    } catch (err) {
      setMensaje({ texto: err instanceof Error ? err.message : 'Error al guardar', tipo: 'error' });
    }
  };

  const guardarVistaInicio = async (vista: VistaGrados): Promise<void> => {
    if (!escena) {
      return;
    }
    try {
      const actualizada = await api.parchearEscena(slug, escena.id, {
        defaultView: { yaw: vista.giro, pitch: vista.altura, fov: vista.zoom },
      });
      setTour((prev) =>
        prev
          ? { ...prev, scenes: prev.scenes.map((sc) => (sc.id === actualizada.id ? actualizada : sc)) }
          : prev,
      );
      setMensaje({ texto: 'Vista inicial guardada', tipo: 'ok' });
    } catch (err) {
      setMensaje({ texto: err instanceof Error ? err.message : 'Error al guardar la vista', tipo: 'error' });
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
      setMensaje({ texto: 'Escena guardada', tipo: 'ok' });
    } catch (err) {
      setMensaje({ texto: err instanceof Error ? err.message : 'Error al guardar la escena', tipo: 'error' });
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
        setMensaje({
          texto: `Escena «${scene.name}» añadida${warnings.length > 0 ? ` · Avisos: ${warnings.join('; ')}` : ''}`,
          tipo: 'ok',
        });
        await recargar();
      }
    } catch (err) {
      setMensaje({
        texto: err instanceof Error ? err.message : 'Error subiendo la panorámica',
        tipo: 'error',
      });
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
      setMensaje({ texto: aviso, tipo: 'aviso' });
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
      title: modoAgregar === 'nav' ? 'Ir a otra escena' : modoAgregar === 'info' ? 'Información' : 'Enlace',
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
        <nav className="mx-auto flex self-stretch">
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
            <span
              className={`inline-flex items-center gap-1.5 text-sm ${
                mensaje.tipo === 'ok'
                  ? 'text-texto-suave'
                  : mensaje.tipo === 'error'
                    ? 'text-rojo'
                    : 'text-ambar'
              }`}
              role="status"
            >
              <Icono
                nombre={mensaje.tipo === 'ok' ? 'check' : 'alerta'}
                className={`h-3.5 w-3.5 ${mensaje.tipo === 'ok' ? 'text-verde' : ''}`}
              />
              {mensaje.texto}
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
          className="grid min-h-0 flex-1 grid-cols-[264px_1fr_320px]"
        >
          {/* ---------- Columna escenas ---------- */}
          <aside className="flex min-h-0 flex-col border-r border-linea bg-panel">
            <div className="border-b border-linea p-3">
              <input
                ref={archivoRef}
                type="file"
                accept="image/jpeg"
                multiple
                className="hidden"
                onChange={(e) => void subir(e.target.files)}
              />
              <Boton
                variante="secundario"
                icono="subir"
                disabled={subiendo}
                className="w-full"
                onClick={() => archivoRef.current?.click()}
              >
                {subiendo ? 'Procesando…' : 'Subir panorámicas 360°'}
              </Boton>
            </div>
            <ul className="min-h-0 flex-1 overflow-y-auto p-2">
              {tour.scenes.map((s) => {
                const job = jobs.find((j) => j.sceneId === s.id);
                const enCurso = job !== undefined && (job.status === 'running' || job.status === 'queued');
                const porcentaje = job && job.total > 0 ? Math.round((job.done / job.total) * 100) : 0;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      className={`mb-1.5 flex w-full items-center gap-2.5 rounded-control border p-2 text-left transition-colors ${
                        s.id === escenaId ? 'border-azul bg-azul/10' : 'border-transparent hover:bg-tarjeta'
                      }`}
                      onClick={() => {
                        setEscenaId(s.id);
                        setHotspotSel(null);
                        setPanelDerecho('escena');
                      }}
                    >
                      <img
                        src={api.archivoEscena(slug, s, 'thumb.webp')}
                        alt=""
                        className="h-9 w-16 flex-none rounded-control border border-linea object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">{s.name}</span>
                        {job?.status === 'error' ? (
                          <span className="mt-0.5 block text-xs text-rojo">Error: {job.error}</span>
                        ) : enCurso ? (
                          <span className="mt-0.5 block text-xs text-ambar">Procesando… {porcentaje} %</span>
                        ) : (
                          <span className="mt-0.5 block text-xs text-verde">Lista</span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* ---------- Vista 360° ---------- */}
          <section className="flex min-h-0 flex-col">
            <div className="flex items-center gap-2 border-b border-linea bg-panel px-4 py-2">
              <span className="text-xs text-texto-tenue">Añadir punto:</span>
              {(
                [
                  { tipo: 'nav', titulo: 'Ir a otra escena', icono: 'flecha' },
                  { tipo: 'info', titulo: 'Información', icono: 'info' },
                  { tipo: 'link', titulo: 'Enlace', icono: 'enlace' },
                ] as const
              ).map(({ tipo, titulo, icono }) => (
                <button
                  key={tipo}
                  type="button"
                  aria-pressed={modoAgregar === tipo}
                  onClick={() => setModoAgregar(modoAgregar === tipo ? null : tipo)}
                  className={`inline-flex items-center gap-1.5 rounded-control border px-2.5 py-1 text-sm transition-colors ${
                    modoAgregar === tipo
                      ? 'border-azul/60 bg-azul/10 text-azul'
                      : 'border-linea text-texto-suave hover:text-texto'
                  }`}
                >
                  <Icono nombre={icono} className="h-3.5 w-3.5" />
                  {titulo}
                </button>
              ))}
              {escena && (
                <span className="ml-auto truncate text-xs text-texto-tenue">Escena: {escena.name}</span>
              )}
            </div>
            <div className="min-h-0 flex-1 p-3">
              {escena ? (
                <div className="h-full overflow-hidden rounded-tarjeta border border-linea">
                  <PanoPreview
                    previewUrl={api.archivoEscena(slug, escena, 'preview.webp')}
                    hotspots={escena.hotspots}
                    hotspotSeleccionado={hotspotSel}
                    modoAgregar={modoAgregar}
                    limitesZoom={zoomLimitToPsv(escena.zoomLimit)}
                    onAgregar={(yaw, pitch) => void agregarHotspot(yaw, pitch)}
                    onSeleccionar={(id) => {
                      setHotspotSel(id);
                      setPanelDerecho('punto');
                    }}
                    onVistaActual={setVistaActual}
                    onVistaGuardar={(v) => void guardarVistaInicio(v)}
                  />
                </div>
              ) : (
                <div className="grid h-full place-items-center text-texto-tenue">
                  Sube la primera panorámica para empezar.
                </div>
              )}
            </div>
          </section>

          {/* ---------- Panel derecho ---------- */}
          <aside className="flex min-h-0 flex-col border-l border-linea bg-panel">
            <div className="border-b border-linea p-3">
              <Segmentado
                etiqueta="Panel de edición"
                opciones={[
                  { id: 'escena', titulo: 'Escena' },
                  { id: 'punto', titulo: 'Punto' },
                ]}
                valor={panelDerecho}
                onChange={setPanelDerecho}
              />
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-4 text-sm">
              {panelDerecho === 'escena'
                ? escena && (
                    <DetalleEscena
                      escena={escena}
                      job={jobDeEscena}
                      vistaActual={vistaActual}
                      onGuardar={guardarEscena}
                      onBorrar={() => void borrarEscena()}
                    />
                  )
                : escena && (
                    <DetalleHotspots
                      escena={escena}
                      tour={tour}
                      seleccionado={hotspotActual}
                      onSeleccionar={setHotspotSel}
                      onActualizar={(id, cambios) => void actualizarHotspot(id, cambios)}
                      onBorrar={(id) => void borrarHotspot(id)}
                    />
                  )}
            </div>
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
          className="mx-auto w-full max-w-xl overflow-y-auto p-8"
        >
          <p className="mb-4 flex items-center gap-2 rounded-control border border-linea bg-tarjeta px-3 py-2 text-xs text-texto-suave">
            <Icono nombre="alerta" className="h-3.5 w-3.5" />
            Campos del tour alojados aquí provisionalmente; se reorganizan en Contacto y marca / Ajustes en la
            etapa 5.
          </p>
          <DetalleTour tour={tour} onGuardar={guardarTour} />
        </section>
      )}
    </main>
  );
}

/* ------------------------------------------------------------------ */

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
          Sin mensaje, el botón solo mostrará el nombre de la escena.
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
  job,
  vistaActual,
  onGuardar,
  onBorrar,
}: {
  escena: Scene;
  job: SceneJob | undefined;
  vistaActual: VistaGrados | null;
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
    <div>
      <Campo id="esc-nombre" etiqueta="Nombre">
        <input
          id="esc-nombre"
          className={inputCls}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </Campo>

      <div className="mb-4 rounded-tarjeta border border-linea bg-tarjeta p-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-texto-tenue">Vista inicial</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-semibold">{form.yaw.toFixed(0)}°</p>
            <p className="text-xs text-texto-tenue">Giro</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{form.pitch.toFixed(0)}°</p>
            <p className="text-xs text-texto-tenue">Altura de la mirada</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{form.fov.toFixed(0)}°</p>
            <p className="text-xs text-texto-tenue">Zoom</p>
          </div>
        </div>
        <Boton
          variante="secundario"
          className="mt-3 w-full"
          onClick={() =>
            vistaActual !== null &&
            void onGuardar({
              defaultView: { yaw: vistaActual.giro, pitch: vistaActual.altura, fov: vistaActual.zoom },
            })
          }
        >
          Usar la vista actual
        </Boton>
        <p className="mt-2 text-xs text-texto-tenue">
          Mueve la vista hasta donde quieres que empiece el visitante y pulsa el botón.
        </p>
      </div>

      <details className="mb-4 rounded-control border border-linea bg-tarjeta px-3 py-2">
        <summary className="cursor-pointer text-sm text-texto-suave">Avanzado</summary>
        <div className="mt-3">
          <div className="grid grid-cols-2 gap-2">
            <label className="text-xs text-texto-tenue">
              Zoom mínimo
              <input
                type="number"
                className="mt-0.5 w-full rounded-control border border-linea bg-fondo px-2 py-1 text-sm text-texto"
                value={form.zoomMin}
                onChange={(e) => setForm({ ...form, zoomMin: Number(e.target.value) })}
              />
            </label>
            <label className="text-xs text-texto-tenue">
              Zoom máximo
              <input
                type="number"
                className="mt-0.5 w-full rounded-control border border-linea bg-fondo px-2 py-1 text-sm text-texto"
                value={form.zoomMax}
                onChange={(e) => setForm({ ...form, zoomMax: Number(e.target.value) })}
              />
            </label>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <label className="text-xs text-texto-tenue">
              Latitud
              <input
                className="mt-0.5 w-full rounded-control border border-linea bg-fondo px-2 py-1 text-sm text-texto"
                value={form.lat}
                onChange={(e) => setForm({ ...form, lat: e.target.value })}
              />
            </label>
            <label className="text-xs text-texto-tenue">
              Longitud
              <input
                className="mt-0.5 w-full rounded-control border border-linea bg-fondo px-2 py-1 text-sm text-texto"
                value={form.lng}
                onChange={(e) => setForm({ ...form, lng: e.target.value })}
              />
            </label>
          </div>
          <label className="mt-2 block text-xs text-texto-tenue">
            ID de Street View
            <input
              className="mt-0.5 w-full rounded-control border border-linea bg-fondo px-2 py-1 text-sm text-texto"
              value={form.gsvId}
              onChange={(e) => setForm({ ...form, gsvId: e.target.value })}
            />
          </label>
        </div>
      </details>

      <Boton
        variante="primario"
        className="mb-6 w-full"
        disabled={job?.status === 'running' || job?.status === 'queued'}
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
      </Boton>
      <Boton variante="peligro" icono="papelera" className="w-full" onClick={onBorrar}>
        Eliminar escena
      </Boton>
    </div>
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
  const TIPO_PUNTO: Record<
    Hotspot['type'],
    { titulo: string; icono: 'flecha' | 'info' | 'enlace'; tono: string }
  > = {
    nav: { titulo: 'Ir a otra escena', icono: 'flecha', tono: 'border-rojo/40 text-rojo' },
    info: { titulo: 'Información', icono: 'info', tono: 'border-azul/40 text-azul' },
    link: { titulo: 'Enlace', icono: 'enlace', tono: 'border-verde/40 text-verde' },
  };
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-texto">Puntos ({escena.hotspots.length})</h2>
      <ul className="mb-3 space-y-1">
        {escena.hotspots.map((h) => {
          const tipo = TIPO_PUNTO[h.type];
          return (
            <li key={h.id}>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-control border px-2.5 py-1.5 text-left transition-colors ${
                  seleccionado?.id === h.id
                    ? 'border-azul bg-azul/10'
                    : 'border-linea hover:border-texto-tenue'
                }`}
                onClick={() => onSeleccionar(h.id)}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className="inline-flex flex-none items-center gap-1 rounded-full border border-linea px-1.5 py-0.5 text-[10px] font-medium text-texto-suave">
                    <Icono nombre={tipo.icono} className="h-2.5 w-2.5" />
                    {tipo.titulo}
                  </span>
                  <span className="truncate text-sm">{h.title ?? h.id}</span>
                </span>
                <span className="flex-none pl-2 text-xs text-texto-tenue">
                  {h.yaw.toFixed(0)}° / {h.pitch.toFixed(0)}°
                </span>
              </button>
            </li>
          );
        })}
        {escena.hotspots.length === 0 && (
          <li className="text-xs text-texto-tenue">
            Sin puntos. Usa los botones de «Añadir punto» sobre el visor.
          </li>
        )}
      </ul>

      {seleccionado && (
        <div className="rounded-tarjeta border border-linea bg-tarjeta p-3">
          <h3 className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-texto-suave">
            <Icono nombre={TIPO_PUNTO[seleccionado.type].icono} className="h-3.5 w-3.5 text-texto-suave" />
            Editando punto · {TIPO_PUNTO[seleccionado.type].titulo}
          </h3>
          <Campo etiqueta="Título">
            <input
              className={inputCls}
              defaultValue={seleccionado.title ?? ''}
              onBlur={(e) => onActualizar(seleccionado.id, { title: e.target.value })}
            />
          </Campo>
          <div className="grid grid-cols-2 gap-2">
            <Campo etiqueta="Giro">
              <input
                type="number"
                step="0.1"
                className={inputCls}
                defaultValue={seleccionado.yaw}
                onBlur={(e) => onActualizar(seleccionado.id, { yaw: Number(e.target.value) })}
              />
            </Campo>
            <Campo etiqueta="Altura de la mirada">
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
              <Campo etiqueta="Destino">
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
                <Campo etiqueta="Giro al llegar">
                  <input
                    type="number"
                    className={inputCls}
                    defaultValue={seleccionado.targetYaw ?? 0}
                    onBlur={(e) => onActualizar(seleccionado.id, { targetYaw: Number(e.target.value) })}
                  />
                </Campo>
                <Campo etiqueta="Altura al llegar">
                  <input
                    type="number"
                    className={inputCls}
                    defaultValue={seleccionado.targetPitch ?? 0}
                    onBlur={(e) => onActualizar(seleccionado.id, { targetPitch: Number(e.target.value) })}
                  />
                </Campo>
                <Campo etiqueta="Zoom al llegar">
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
                  <option value="blend">Fundido</option>
                  <option value="fade">Desvanecer</option>
                  <option value="none">Ninguna</option>
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
                  <option value="new-tab">Pestaña nueva</option>
                  <option value="same-tab">Misma pestaña</option>
                </select>
              </Campo>
            </>
          )}
          <Boton
            variante="peligro"
            icono="papelera"
            className="mt-1 w-full"
            onClick={() => onBorrar(seleccionado.id)}
          >
            Eliminar punto
          </Boton>
        </div>
      )}
    </div>
  );
}
