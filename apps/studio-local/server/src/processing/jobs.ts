import { EventEmitter } from 'node:events';
import { TOTAL_TILES_PER_SCENE } from '@panoengine/schema';
import pLimit from 'p-limit';
import { generateTilePyramid } from './tiler.js';

export type JobStatus = 'queued' | 'running' | 'done' | 'error';

export interface SceneJob {
  tourSlug: string;
  sceneId: string;
  status: JobStatus;
  done: number;
  total: number;
  level: number;
  error: string | undefined;
  startedAt: string;
  finishedAt: string | undefined;
}

/**
 * Cola de procesamiento: máximo 2 escenas en paralelo, tiles en paralelo dentro
 * de cada escena según núcleos. Emite 'progress' (SceneJob) para el stream SSE.
 */
export class ProcessingQueue extends EventEmitter {
  private readonly jobs = new Map<string, SceneJob>();
  private readonly sceneLimit = pLimit(2);

  private key(tourSlug: string, sceneId: string): string {
    return `${tourSlug}/${sceneId}`;
  }

  enqueue(tourSlug: string, sceneId: string, masterPath: string, sceneDistDir: string): void {
    const k = this.key(tourSlug, sceneId);
    const existing = this.jobs.get(k);
    if (existing && (existing.status === 'running' || existing.status === 'queued')) {
      return;
    }
    const job: SceneJob = {
      tourSlug,
      sceneId,
      status: 'queued',
      done: 0,
      total: TOTAL_TILES_PER_SCENE,
      level: 0,
      error: undefined,
      startedAt: new Date().toISOString(),
      finishedAt: undefined,
    };
    this.jobs.set(k, job);

    void this.sceneLimit(async () => {
      job.status = 'running';
      this.emitProgress(job);
      try {
        const result = await generateTilePyramid(masterPath, sceneDistDir, (p) => {
          job.done = p.done;
          job.total = p.total;
          job.level = p.level;
          this.emitProgress(job);
        });
        job.done = result.tiles;
        job.status = 'done';
        job.finishedAt = new Date().toISOString();
        this.emitProgress(job);
      } catch (err) {
        job.status = 'error';
        job.error = err instanceof Error ? err.message : String(err);
        job.finishedAt = new Date().toISOString();
        this.emitProgress(job);
      }
    });
  }

  private emitProgress(job: SceneJob): void {
    this.emit('progress', { ...job });
  }

  get(tourSlug: string, sceneId: string): SceneJob | undefined {
    return this.jobs.get(this.key(tourSlug, sceneId));
  }

  snapshot(tourSlug?: string): SceneJob[] {
    const all = [...this.jobs.values()];
    return tourSlug ? all.filter((j) => j.tourSlug === tourSlug) : all;
  }

  /** ¿Hay trabajos sin terminar para este tour? (bloquea publicar) */
  hasPending(tourSlug: string): boolean {
    return this.snapshot(tourSlug).some((j) => j.status === 'queued' || j.status === 'running');
  }

  isRunning(tourSlug: string, sceneId: string): boolean {
    const job = this.get(tourSlug, sceneId);
    return job?.status === 'running' || job?.status === 'queued';
  }
}
