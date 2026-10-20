/**
 * Lista de escenas del editor (columna izquierda, orden de Andrés):
 * - Grupos plegables (crear / renombrar / borrar; «Sin grupo» fijo).
 * - Arrastrar y soltar para reordenar y mover entre grupos (HTML5 nativo).
 * - Renombrado inline de escenas y un botón para SUSTITUIR la foto de una
 *   escena conservando sus puntos, nombre y grupo.
 */
import type { Scene, Tour } from '@panoengine/schema';
import { useRef, useState } from 'react';
import { ulid } from 'ulid';
import { api, type SceneJob } from './api.js';
import { Boton } from './componentes/Boton.js';
import { Icono } from './componentes/Icono.js';
import { agruparEscenas, moverEscena } from './grupos.js';

interface Props {
  slug: string;
  tour: Tour;
  jobs: SceneJob[];
  escenaId: string | null;
  subiendo: boolean;
  onSubir: (archivos: FileList | null) => void;
  onSeleccionar: (id: string) => void;
  onTourCambiado: (tour: Tour) => void;
  onEscenaCambiada: (escena: Scene) => void;
  onMensaje: (texto: string, tipo: 'ok' | 'error' | 'aviso') => void;
}

interface Destino {
  groupId: string | null;
  antesDe: string | null;
}

export function ListaEscenas(props: Props): React.JSX.Element {
  const { slug, tour, jobs, escenaId, onSubir, onSeleccionar, onTourCambiado, onEscenaCambiada, onMensaje } =
    props;

  const [plegados, setPlegados] = useState<Set<string>>(new Set());
  const [renombrandoEscena, setRenombrandoEscena] = useState<string | null>(null);
  const [renombrandoGrupo, setRenombrandoGrupo] = useState<string | null>(null);
  const [arrastrando, setArrastrando] = useState<string | null>(null);
  const [destino, setDestino] = useState<Destino | null>(null);
  const [sustituyendo, setSustituyendo] = useState<string | null>(null);

  const subirRef = useRef<HTMLInputElement>(null);
  const sustituirRef = useRef<HTMLInputElement>(null);
  const sustituirObjetivo = useRef<string | null>(null);

  const grupos = tour.groups;
  const vista = agruparEscenas(tour.scenes, grupos);

  const togglePlegado = (id: string | null): void => {
    const clave = id ?? 'sin-grupo';
    setPlegados((prev) => {
      const next = new Set(prev);
      if (next.has(clave)) {
        next.delete(clave);
      } else {
        next.add(clave);
      }
      return next;
    });
  };

  // ---- Orden (arrastrar y soltar) ----
  const soltar = (e: React.DragEvent, groupId: string | null, antesDe: string | null): void => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.dataTransfer.getData('text/plain');
    setDestino(null);
    setArrastrando(null);
    if (!id || id === antesDe) {
      return;
    }
    const orden = moverEscena(tour.scenes, grupos, id, { groupId, antesDe });
    const sinCambios =
      orden.length === tour.scenes.length &&
      orden.every((o, i) => {
        const actual = tour.scenes[i];
        return o.id === actual?.id && o.groupId === (actual?.groupId ?? null);
      });
    if (sinCambios) {
      return;
    }
    api
      .parchearTour(slug, { sceneOrder: orden })
      .then(onTourCambiado)
      .catch((err: Error) => onMensaje(err.message, 'error'));
  };

  // ---- Grupos ----
  const crearGrupo = (): void => {
    const nuevo = { id: ulid(), name: `Grupo ${grupos.length + 1}` };
    api
      .parchearTour(slug, { groups: [...grupos, nuevo] })
      .then((t) => {
        onTourCambiado(t);
        setRenombrandoGrupo(nuevo.id); // que el nombre se edite al momento
      })
      .catch((err: Error) => onMensaje(err.message, 'error'));
  };

  const renombrarGrupo = (id: string, name: string): void => {
    const limpio = name.trim();
    setRenombrandoGrupo(null);
    if (!limpio) {
      return;
    }
    const grupo = grupos.find((g) => g.id === id);
    if (!grupo || grupo.name === limpio) {
      return;
    }
    api
      .parchearTour(slug, { groups: grupos.map((g) => (g.id === id ? { ...g, name: limpio } : g)) })
      .then(onTourCambiado)
      .catch((err: Error) => onMensaje(err.message, 'error'));
  };

  const borrarGrupo = (id: string): void => {
    const sceneOrder = tour.scenes.map((s) => ({
      id: s.id,
      groupId: s.groupId === id ? null : (s.groupId ?? null),
    }));
    api
      .parchearTour(slug, { groups: grupos.filter((g) => g.id !== id), sceneOrder })
      .then((t) => {
        onTourCambiado(t);
        onMensaje('Grupo eliminado; sus escenas pasaron a «Sin grupo»', 'ok');
      })
      .catch((err: Error) => onMensaje(err.message, 'error'));
  };

  // ---- Escenas ----
  const renombrarEscena = (id: string, name: string): void => {
    const limpio = name.trim();
    setRenombrandoEscena(null);
    const escena = tour.scenes.find((s) => s.id === id);
    if (!limpio || !escena || escena.name === limpio) {
      return;
    }
    api
      .parchearEscena(slug, id, { name: limpio })
      .then((s) => {
        onEscenaCambiada(s);
        onMensaje('Nombre actualizado', 'ok');
      })
      .catch((err: Error) => onMensaje(err.message, 'error'));
  };

  const pedirSustitucion = (id: string): void => {
    sustituirObjetivo.current = id;
    sustituirRef.current?.click();
  };

  const sustituir = (archivos: FileList | null): void => {
    const archivo = archivos?.[0];
    const id = sustituirObjetivo.current;
    sustituirObjetivo.current = null;
    if (sustituirRef.current) {
      sustituirRef.current.value = ''; // permitir re-elegir el mismo archivo
    }
    if (!archivo || !id) {
      return;
    }
    setSustituyendo(id);
    api
      .sustituirEscena(slug, id, archivo)
      .then((res) => {
        onEscenaCambiada(res.scene);
        onMensaje(
          res.nota ?? 'Panorámica sustituida; generando los tiles de nuevo…',
          res.nota ? 'aviso' : 'ok',
        );
      })
      .catch((err: Error) => onMensaje(err.message, 'error'))
      .finally(() => setSustituyendo(null));
  };

  return (
    <>
      <div className="space-y-2 border-b border-linea p-3">
        <input
          ref={sustituirRef}
          type="file"
          accept="image/jpeg"
          className="hidden"
          onChange={(e) => sustituir(e.target.files)}
        />
        <input
          ref={subirRef}
          type="file"
          accept="image/jpeg"
          multiple
          className="hidden"
          onChange={(e) => onSubir(e.target.files)}
        />
        <Boton
          variante="secundario"
          icono="subir"
          disabled={props.subiendo}
          className="w-full"
          onClick={() => subirRef.current?.click()}
        >
          {props.subiendo ? 'Procesando…' : 'Subir panorámicas 360°'}
        </Boton>
        <Boton variante="fantasma" icono="mas" className="w-full" onClick={crearGrupo}>
          Nuevo grupo
        </Boton>
      </div>

      {/* biome-ignore lint/a11y/noStaticElementInteractions: zona de suelta global del arrastre de escenas */}
      <div
        className="min-h-0 flex-1 overflow-y-auto p-2"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => soltar(e, null, null)}
      >
        {vista.map((grupo) => {
          const clave = grupo.id ?? 'sin-grupo';
          const plegado = plegados.has(clave);
          const esDestino = destino?.groupId === grupo.id && destino.antesDe === null;
          return (
            <section key={clave} className="mb-3">
              {/* biome-ignore lint/a11y/noStaticElementInteractions: cabecera = destino de suelta del grupo */}
              <header
                className={`group flex items-center gap-1 rounded-control px-1.5 py-1 text-xs font-medium uppercase tracking-wide text-texto-tenue transition-colors ${
                  esDestino ? 'bg-azul/15 ring-1 ring-azul/60' : ''
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDestino({ groupId: grupo.id, antesDe: null });
                }}
                onDrop={(e) => soltar(e, grupo.id, null)}
              >
                <button
                  type="button"
                  aria-label={plegado ? 'Desplegar grupo' : 'Plegar grupo'}
                  aria-expanded={!plegado}
                  onClick={() => togglePlegado(grupo.id)}
                  className="rounded-control p-0.5 hover:bg-tarjeta"
                >
                  <Icono
                    nombre="chevron"
                    className={`h-3.5 w-3.5 transition-transform ${plegado ? '-rotate-90' : ''}`}
                  />
                </button>
                {renombrandoGrupo === grupo.id && grupo.id !== null ? (
                  <input
                    // biome-ignore lint/a11y/noAutofocus: el renombrado inline debe tomar el foco al aparecer
                    autoFocus
                    defaultValue={grupo.nombre}
                    className="min-w-0 flex-1 rounded-control border border-azul/60 bg-fondo px-1.5 py-0.5 text-xs normal-case text-texto focus:outline-none"
                    onBlur={(e) => renombrarGrupo(grupo.id ?? '', e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') renombrarGrupo(grupo.id ?? '', e.currentTarget.value);
                      if (e.key === 'Escape') setRenombrandoGrupo(null);
                    }}
                  />
                ) : grupo.id === null ? (
                  <span className="min-w-0 flex-1 truncate">{grupo.nombre}</span>
                ) : (
                  <button
                    type="button"
                    className="min-w-0 flex-1 truncate text-left hover:text-texto-suave"
                    onClick={() => setRenombrandoGrupo(grupo.id)}
                    title="Renombrar grupo"
                  >
                    {grupo.nombre}
                  </button>
                )}
                <span className="tabular-nums">{grupo.escenas.length}</span>
                {grupo.id !== null && renombrandoGrupo !== grupo.id && (
                  <>
                    <button
                      type="button"
                      aria-label="Renombrar grupo"
                      className="rounded-control p-1 text-texto-tenue opacity-0 transition-opacity hover:bg-tarjeta hover:text-texto focus-visible:opacity-100 group-hover:opacity-100"
                      onClick={() => setRenombrandoGrupo(grupo.id)}
                    >
                      <Icono nombre="lapiz" className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Eliminar grupo (las escenas pasan a Sin grupo)"
                      className="rounded-control p-1 text-texto-tenue opacity-0 transition-opacity hover:bg-tarjeta hover:text-rojo focus-visible:opacity-100 group-hover:opacity-100"
                      onClick={() => grupo.id !== null && borrarGrupo(grupo.id)}
                    >
                      <Icono nombre="papelera" className="h-3.5 w-3.5" />
                    </button>
                  </>
                )}
              </header>

              {!plegado && (
                <ul className="mt-1 space-y-0.5">
                  {grupo.escenas.map((escena) => {
                    const job = jobs.find((j) => j.sceneId === escena.id);
                    const enCurso =
                      job !== undefined && (job.status === 'running' || job.status === 'queued');
                    const porcentaje = job && job.total > 0 ? Math.round((job.done / job.total) * 100) : 0;
                    const esDestinoFila = destino?.groupId === grupo.id && destino.antesDe === escena.id;
                    let estado: React.ReactNode;
                    if (sustituyendo === escena.id) {
                      estado = <span className="mt-0.5 block text-xs text-ambar">Sustituyendo…</span>;
                    } else if (job?.status === 'error') {
                      estado = (
                        <span className="mt-0.5 block truncate text-xs text-rojo" title={job.error}>
                          Error: {job.error}
                        </span>
                      );
                    } else if (enCurso) {
                      estado = (
                        <span className="mt-0.5 block text-xs text-ambar">Procesando… {porcentaje} %</span>
                      );
                    } else {
                      estado = <span className="mt-0.5 block text-xs text-verde">Lista</span>;
                    }
                    return (
                      <li
                        key={escena.id}
                        draggable
                        onDragStart={(e) => {
                          e.dataTransfer.setData('text/plain', escena.id);
                          e.dataTransfer.effectAllowed = 'move';
                          setArrastrando(escena.id);
                        }}
                        onDragEnd={() => {
                          setArrastrando(null);
                          setDestino(null);
                        }}
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setDestino({ groupId: grupo.id, antesDe: escena.id });
                        }}
                        onDrop={(e) => soltar(e, grupo.id, escena.id)}
                        className={`group flex cursor-grab items-center gap-2 rounded-control border p-2 transition-colors active:cursor-grabbing ${
                          escena.id === escenaId
                            ? 'border-azul bg-azul/10'
                            : esDestinoFila
                              ? 'border-azul/60 bg-azul/5'
                              : 'border-transparent hover:bg-tarjeta'
                        } ${arrastrando === escena.id ? 'opacity-40' : ''}`}
                      >
                        <button
                          type="button"
                          className="flex min-w-0 flex-1 items-center gap-2 text-left"
                          onClick={() => onSeleccionar(escena.id)}
                          aria-current={escena.id === escenaId ? 'true' : undefined}
                        >
                          <img
                            src={api.archivoEscena(slug, escena, 'thumb.webp')}
                            alt=""
                            className="h-9 w-16 flex-none rounded-control border border-linea object-cover"
                            draggable={false}
                          />
                          <span className="min-w-0 flex-1">
                            {renombrandoEscena === escena.id ? (
                              <input
                                // biome-ignore lint/a11y/noAutofocus: el renombrado inline debe tomar el foco al aparecer
                                autoFocus
                                defaultValue={escena.name}
                                className="w-full rounded-control border border-azul/60 bg-fondo px-1.5 py-0.5 text-sm text-texto focus:outline-none"
                                onClick={(e) => e.stopPropagation()}
                                onBlur={(e) => renombrarEscena(escena.id, e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') renombrarEscena(escena.id, e.currentTarget.value);
                                  if (e.key === 'Escape') setRenombrandoEscena(null);
                                }}
                              />
                            ) : (
                              <span className="block truncate text-sm font-medium">{escena.name}</span>
                            )}
                            {estado}
                          </span>
                        </button>
                        <span className="flex flex-none flex-col gap-0.5 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100">
                          <button
                            type="button"
                            aria-label={`Renombrar ${escena.name}`}
                            className="rounded-control p-1 text-texto-tenue hover:bg-fondo hover:text-texto"
                            onClick={(e) => {
                              e.stopPropagation();
                              setRenombrandoEscena(escena.id);
                            }}
                          >
                            <Icono nombre="lapiz" className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            aria-label={`Sustituir la foto de ${escena.name}`}
                            disabled={enCurso || sustituyendo === escena.id}
                            title={
                              enCurso
                                ? 'Espera a que termine el procesamiento'
                                : 'Sustituir esta panorámica por otra foto (conserva los puntos)'
                            }
                            className="rounded-control p-1 text-texto-tenue hover:bg-fondo hover:text-texto disabled:cursor-not-allowed disabled:opacity-40"
                            onClick={(e) => {
                              e.stopPropagation();
                              pedirSustitucion(escena.id);
                            }}
                          >
                            <Icono nombre="intercambiar" className="h-3.5 w-3.5" />
                          </button>
                        </span>
                      </li>
                    );
                  })}
                  {grupo.escenas.length === 0 && (
                    <li
                      className={`rounded-control border border-dashed px-2 py-3 text-center text-xs text-texto-tenue ${
                        esDestino ? 'border-azul/60 text-texto-suave' : 'border-linea/60'
                      }`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDestino({ groupId: grupo.id, antesDe: null });
                      }}
                      onDrop={(e) => soltar(e, grupo.id, null)}
                    >
                      {grupo.id === null
                        ? 'Sube panorámicas para empezar'
                        : 'Arrastra aquí escenas de este grupo'}
                    </li>
                  )}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
