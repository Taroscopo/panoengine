import fs from 'node:fs/promises';
import path from 'node:path';
import {
  migrateTourDraft,
  type NewTourInput,
  newTour,
  type TourDraft,
  type TourSummary,
} from '@panoengine/schema';

export interface PublishManifest {
  files: Record<string, { sha256: string; size: number }>;
  publishedAt: string;
}

/**
 * Almacén del workspace local (RULES.md §4):
 *   {dataDir}/tours/{slug}/masters/{sceneId}.jpg
 *   {dataDir}/tours/{slug}/dist/tours/{slug}/tour.json  (+ scenes/{id}-{rev}/...)
 *   {dataDir}/tours/{slug}/manifest.json
 */
export class WorkspaceStore {
  private readonly toursDir: string;

  constructor(dataDir: string) {
    this.toursDir = path.join(dataDir, 'tours');
  }

  private tourDir(slug: string): string {
    return path.join(this.toursDir, slug);
  }

  private tourJsonPath(slug: string): string {
    return path.join(this.tourDir(slug), 'tour.json');
  }

  async ensureDirs(): Promise<void> {
    await fs.mkdir(this.toursDir, { recursive: true });
  }

  async listTours(): Promise<TourSummary[]> {
    let entries: string[];
    try {
      entries = await fs.readdir(this.toursDir);
    } catch {
      return [];
    }
    const summaries: TourSummary[] = [];
    for (const entry of entries) {
      const draft = await this.readTour(entry);
      if (draft) {
        summaries.push({
          slug: draft.slug,
          title: draft.title,
          ...(draft.clientName !== undefined ? { clientName: draft.clientName } : {}),
          hostingStatus: draft.hostingStatus,
          ...(draft.hostingExpiresAt !== undefined ? { hostingExpiresAt: draft.hostingExpiresAt } : {}),
          sceneCount: draft.scenes.length,
          updatedAt: draft.updatedAt,
        });
      }
    }
    return summaries.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }

  async tourExists(slug: string): Promise<boolean> {
    try {
      await fs.access(this.tourJsonPath(slug));
      return true;
    } catch {
      return false;
    }
  }

  async readTour(slug: string): Promise<TourDraft | null> {
    try {
      const raw = await fs.readFile(this.tourJsonPath(slug), 'utf8');
      return migrateTourDraft(JSON.parse(raw));
    } catch {
      return null;
    }
  }

  async createTour(input: NewTourInput): Promise<TourDraft> {
    const draft = newTour(input);
    await fs.mkdir(path.join(this.tourDir(draft.slug), 'masters'), { recursive: true });
    await fs.mkdir(path.join(this.tourDir(draft.slug), 'dist'), { recursive: true });
    await this.writeTour(draft);
    return draft;
  }

  async writeTour(draft: TourDraft): Promise<void> {
    const next: TourDraft = { ...draft, updatedAt: new Date().toISOString() };
    await fs.mkdir(this.tourDir(next.slug), { recursive: true });
    await fs.writeFile(this.tourJsonPath(next.slug), `${JSON.stringify(next, null, 2)}\n`, 'utf8');
  }

  masterPath(slug: string, sceneId: string): string {
    return path.join(this.tourDir(slug), 'masters', `${sceneId}.jpg`);
  }

  distRoot(slug: string): string {
    return path.join(this.tourDir(slug), 'dist');
  }

  distTourJsonPath(slug: string): string {
    return path.join(this.distRoot(slug), 'tours', slug, 'tour.json');
  }

  distSceneDir(slug: string, sceneId: string, revHash: string): string {
    return path.join(this.distRoot(slug), 'tours', slug, 'scenes', `${sceneId}-${revHash}`);
  }

  manifestPath(slug: string): string {
    return path.join(this.tourDir(slug), 'manifest.json');
  }

  async readManifest(slug: string): Promise<PublishManifest | null> {
    try {
      const raw = await fs.readFile(this.manifestPath(slug), 'utf8');
      return JSON.parse(raw) as PublishManifest;
    } catch {
      return null;
    }
  }

  async writeManifest(slug: string, manifest: PublishManifest): Promise<void> {
    await fs.writeFile(this.manifestPath(slug), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  }
}
