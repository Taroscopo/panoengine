import type { Scene, Tour, TourSummary } from '@panoengine/schema';

export interface SceneJob {
  tourSlug: string;
  sceneId: string;
  status: 'queued' | 'running' | 'done' | 'error';
  done: number;
  total: number;
  level: number;
  error: string | undefined;
}

export interface TourResponse {
  tour: Tour;
  jobs: SceneJob[];
}

async function json<T>(res: Response): Promise<T> {
  const body = (await res.json()) as T & { error?: string };
  if (!res.ok) {
    throw new Error(body?.error ?? `Error HTTP ${res.status}`);
  }
  return body;
}

export const api = {
  async listarTours(): Promise<TourSummary[]> {
    const res = await fetch('/api/tours');
    const body = await json<{ tours: TourSummary[] }>(res);
    return body.tours;
  },
  async crearTour(datos: { slug: string; title: string; clientName?: string }): Promise<Tour> {
    const res = await fetch('/api/tours', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });
    return (await json<{ tour: Tour }>(res)).tour;
  },
  async leerTour(slug: string): Promise<TourResponse> {
    return json<TourResponse>(await fetch(`/api/tours/${slug}`));
  },
  async parchearTour(slug: string, cambios: Record<string, unknown>): Promise<Tour> {
    const res = await fetch(`/api/tours/${slug}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cambios),
    });
    return (await json<{ tour: Tour }>(res)).tour;
  },
  async subirEscena(slug: string, archivo: File): Promise<{ scene: Scene; warnings: string[] }> {
    const form = new FormData();
    form.append('file', archivo);
    const res = await fetch(`/api/tours/${slug}/scenes`, { method: 'POST', body: form });
    const body = await json<{ scene: Scene; quick: { warnings: string[] } }>(res);
    return { scene: body.scene, warnings: body.quick.warnings };
  },
  async parchearEscena(slug: string, sceneId: string, cambios: Record<string, unknown>): Promise<Scene> {
    const res = await fetch(`/api/tours/${slug}/scenes/${sceneId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cambios),
    });
    return (await json<{ scene: Scene }>(res)).scene;
  },
  async borrarEscena(slug: string, sceneId: string): Promise<void> {
    await json<unknown>(await fetch(`/api/tours/${slug}/scenes/${sceneId}`, { method: 'DELETE' }));
  },
  async publicar(slug: string): Promise<{
    ok: boolean;
    stats?: { uploaded: number; skipped: number; deleted: number; errors: string[] };
    localOnly?: boolean;
    mensaje?: string;
    edgeUrl: string | null;
  }> {
    return json(await fetch(`/api/tours/${slug}/publish`, { method: 'POST' }));
  },
  /** URL pública de un derivado de escena dentro del workspace (montado en /files). */
  archivoEscena(slug: string, scene: Scene, archivo: 'preview.webp' | 'thumb.webp'): string {
    return `/files/tours/${slug}/dist/tours/${slug}/scenes/${scene.id}-${scene.revHash}/${archivo}`;
  },
};
