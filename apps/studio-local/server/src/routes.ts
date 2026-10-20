import fs from 'node:fs/promises';
import path from 'node:path';
import {
  autoRotateSchema,
  createTilesDescriptor,
  defaultViewSchema,
  gsvSchema,
  hotspotSchema,
  newScene,
  PREVIEW_MAX_BYTES,
  patchSchema,
  sceneAudioSchema,
  slugSchema,
  sphereCorrectionSchema,
  THUMB_MAX_BYTES,
  tourDraftSchema,
  tourSchema,
  ulidSchema,
  zoomLimitSchema,
} from '@panoengine/schema';
import type { FastifyInstance } from 'fastify';
import { ulid } from 'ulid';
import { z } from 'zod';
import type { StudioConfig } from './config.js';
import type { ProcessingQueue } from './processing/jobs.js';
import { computeRevHash, generateQuickDerivatives, type QuickDerivatives } from './processing/tiler.js';
import type { R2Publisher } from './r2.js';
import type { WorkspaceStore } from './store.js';

export interface RouteDeps {
  store: WorkspaceStore;
  queue: ProcessingQueue;
  config: StudioConfig;
  publisher: R2Publisher | undefined;
}

function errorReply(message: string): { error: string } {
  return { error: message };
}

const createTourBody = z.object({
  slug: slugSchema,
  title: z.string().min(1).max(120),
  clientName: z.string().max(120).optional(),
  whatsappNumber: z
    .string()
    .regex(/^\+?[0-9][0-9\s-]{6,19}$/)
    .optional(),
  whatsappDefaultText: z.string().max(500).optional(),
  hostingExpiresAt: z.string().datetime({ offset: true }).optional(),
});

const patchTourBody = z.object({
  title: z.string().min(1).max(120).optional(),
  clientName: z.string().max(120).nullable().optional(),
  whatsappNumber: z
    .string()
    .regex(/^\+?[0-9][0-9\s-]{6,19}$/)
    .nullable()
    .optional(),
  whatsappDefaultText: z.string().max(500).nullable().optional(),
  hostingStatus: z.enum(['active', 'suspended']).optional(),
  hostingExpiresAt: z.string().datetime({ offset: true }).nullable().optional(),
  defaultSceneId: ulidSchema.nullable().optional(),
  autoRotate: autoRotateSchema.partial().optional(),
  littlePlanetIntro: z.boolean().optional(),
  /** Gestión de grupos del editor: lista completa de grupos (sustituye la actual). */
  groups: z
    .array(
      z.object({
        id: ulidSchema,
        name: z.string().min(1).max(120),
      }),
    )
    .optional(),
  /** Orden y agrupación de escenas: permutación EXACTA de los id actuales. */
  sceneOrder: z
    .array(
      z.object({
        id: ulidSchema,
        groupId: ulidSchema.nullable(),
      }),
    )
    .optional(),
});

const patchSceneBody = z.object({
  name: z.string().min(1).max(120).optional(),
  defaultView: defaultViewSchema.partial().optional(),
  /** Nivelar horizonte (E4): objeto COMPLETO {pan,tilt,roll} en grados; null lo quita. */
  sphereCorrection: sphereCorrectionSchema.nullable().optional(),
  zoomLimit: zoomLimitSchema.partial().optional(),
  lat: z.number().min(-90).max(90).nullable().optional(),
  lng: z.number().min(-180).max(180).nullable().optional(),
  audio: sceneAudioSchema.nullable().optional(),
  gsv: gsvSchema.nullable().optional(),
  hotspots: z.array(hotspotSchema).optional(),
  patches: z.array(patchSchema).optional(),
});

/** Aplica un parche "clave presente": null borra el campo opcional. */
function applyNullable<T extends object>(target: T, key: keyof T, value: unknown): void {
  if (value === null) {
    delete target[key];
  } else if (value !== undefined) {
    (target as Record<string, unknown>)[key as string] = value;
  }
}

/** Params de ruta válidos según el contrato: slug kebab-case y sceneId ULID. */
function paramsValidos(slug: string, sceneId?: string): boolean {
  return (
    slugSchema.safeParse(slug).success && (sceneId === undefined || ulidSchema.safeParse(sceneId).success)
  );
}

function paramInvalido(reply: { code: (c: number) => { send: (b: unknown) => unknown } }): unknown {
  return reply.code(400).send(errorReply('Parámetros de ruta inválidos (slug o sceneId)'));
}

export function registerRoutes(app: FastifyInstance, deps: RouteDeps): void {
  const { store, queue, config, publisher } = deps;

  app.get('/api/health', async () => ({ ok: true, r2: config.r2 !== undefined }));

  app.get('/api/tours', async () => ({ tours: await store.listTours() }));

  app.post('/api/tours', async (req, reply) => {
    const parsed = createTourBody.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send(errorReply('Datos del tour inválidos'));
    }
    if (await store.tourExists(parsed.data.slug)) {
      return reply.code(409).send(errorReply(`Ya existe un tour con el slug «${parsed.data.slug}»`));
    }
    const draft = await store.createTour(parsed.data);
    return reply.code(201).send({ tour: draft });
  });

  app.get('/api/tours/:slug', async (req, reply) => {
    const { slug } = req.params as { slug: string };
    if (!paramsValidos(slug)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    return { tour: draft, jobs: queue.snapshot(slug) };
  });

  app.patch('/api/tours/:slug', async (req, reply) => {
    const { slug } = req.params as { slug: string };
    if (!paramsValidos(slug)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    const parsed = patchTourBody.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send(errorReply('Cuerpo de edición inválido'));
    }
    const body = parsed.data;
    if (body.title !== undefined) draft.title = body.title;
    applyNullable(draft, 'clientName', body.clientName);
    applyNullable(draft, 'whatsappNumber', body.whatsappNumber);
    applyNullable(draft, 'whatsappDefaultText', body.whatsappDefaultText);
    if (body.hostingStatus !== undefined) draft.hostingStatus = body.hostingStatus;
    applyNullable(draft, 'hostingExpiresAt', body.hostingExpiresAt);
    if (body.defaultSceneId !== undefined) {
      if (body.defaultSceneId === null) {
        draft.defaultSceneId = undefined;
      } else if (!draft.scenes.some((s) => s.id === body.defaultSceneId)) {
        return reply.code(400).send(errorReply('defaultSceneId no corresponde a ninguna escena'));
      } else {
        draft.defaultSceneId = body.defaultSceneId;
      }
    }
    if (body.autoRotate !== undefined) {
      draft.autoRotate = autoRotateSchema.parse({ ...draft.autoRotate, ...body.autoRotate });
    }
    if (body.littlePlanetIntro !== undefined) draft.littlePlanetIntro = body.littlePlanetIntro;
    if (body.groups !== undefined) {
      const gruposNuevos = body.groups;
      if (new Set(gruposNuevos.map((g) => g.id)).size !== gruposNuevos.length) {
        return reply.code(400).send(errorReply('Grupos con id duplicado'));
      }
      draft.groups = gruposNuevos;
    }
    if (body.sceneOrder !== undefined) {
      // Permutación exacta: mismos id, sin repetir, sin faltantes.
      const actuales = draft.scenes.map((s) => s.id);
      const llegan = body.sceneOrder.map((o) => o.id);
      if (
        llegan.length !== actuales.length ||
        new Set(llegan).size !== llegan.length ||
        !llegan.every((id) => actuales.includes(id))
      ) {
        return reply
          .code(400)
          .send(errorReply('sceneOrder debe contener exactamente las escenas actuales, sin repetir'));
      }
      const porId = new Map(draft.scenes.map((s) => [s.id, s]));
      const gruposValidos = new Set(draft.groups.map((g) => g.id));
      for (const orden of body.sceneOrder) {
        const escena = porId.get(orden.id);
        if (!escena) {
          continue; // cubierto por la validación de permutación
        }
        if (orden.groupId !== null && !gruposValidos.has(orden.groupId)) {
          return reply.code(400).send(errorReply(`El grupo ${orden.groupId} no existe en este tour`));
        }
      }
      draft.scenes = body.sceneOrder.map((orden) => {
        const escena = porId.get(orden.id) as (typeof draft.scenes)[number];
        if (orden.groupId === null) {
          delete escena.groupId;
        } else {
          escena.groupId = orden.groupId;
        }
        return escena;
      });
    }

    const validated = tourDraftSchema.safeParse(draft);
    if (!validated.success) {
      return reply.code(400).send(errorReply(`Tour inválido: ${validated.error.message}`));
    }
    await store.writeTour(validated.data);
    return { tour: validated.data };
  });

  app.post('/api/tours/:slug/scenes', async (req, reply) => {
    const { slug } = req.params as { slug: string };
    if (!paramsValidos(slug)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    const file = await req.file({ limits: { fileSize: 90 * 1024 * 1024 } });
    if (!file) {
      return reply.code(400).send(errorReply('Falta el archivo del panorama'));
    }
    if (file.mimetype !== 'image/jpeg') {
      return reply.code(415).send(errorReply('Solo se aceptan JPG equirectangulares del Insta360 X5'));
    }
    const warnings: string[] = [];
    // El id de la escena nace AQUÍ y es el mismo para master, dist, cola y draft
    // (bug corregido: antes newScene() generaba un segundo id distinto).
    const sceneId = ulid();
    const masterPath = store.masterPath(slug, sceneId);
    const buffer = await file.toBuffer();

    // Validación de imagen REAL antes de tocar el disco (punto 6): un archivo
    // corrupto o disfrazado de .jpg se rechaza con 415 sin dejar master huérfano.
    const { default: sharp } = await import('sharp');
    let meta: import('sharp').Metadata;
    try {
      meta = await sharp(buffer).metadata();
      if (meta.format !== 'jpeg') {
        return reply.code(415).send(errorReply('El archivo no es un JPG válido'));
      }
    } catch {
      return reply.code(415).send(errorReply('El archivo no es una imagen válida'));
    }

    await fs.writeFile(masterPath, buffer);
    if ((meta.width ?? 0) < 4000 || (meta.height ?? 0) < 2000) {
      await fs.unlink(masterPath).catch(() => undefined);
      return reply
        .code(422)
        .send(
          errorReply(
            `La imagen es demasiado pequeña (${meta.width}×${meta.height}); se esperaba un panorama 2:1 de al menos 4000 px de ancho`,
          ),
        );
    }
    // Equirectangular estricto: banda [1.95, 2.05] admite el X5 (11904×5952 = 2.0 exacto)
    // y rechaza fotos normales (4:3, 3:2, 16:9…) con 422 (auditoría A6).
    const ratio = (meta.width ?? 1) / (meta.height ?? 1);
    if (ratio < 1.95 || ratio > 2.05) {
      await fs.unlink(masterPath).catch(() => undefined);
      return reply
        .code(422)
        .send(
          errorReply(
            `La imagen no es equirectangular 2:1 (relación ${ratio.toFixed(3)}:1, ${meta.width}×${meta.height}); ` +
              'exporta el panorama 360 desde Insta360 e inténtalo de nuevo',
          ),
        );
    }

    const revHash = await computeRevHash(masterPath);
    const sceneDistDir = store.distSceneDir(slug, sceneId, revHash);

    // FASE RÁPIDA: preview + thumb + GPS antes de responder. Si el procesamiento
    // falla, se limpia el master para no dejar huérfanos (punto 6).
    let quick: QuickDerivatives;
    try {
      quick = await generateQuickDerivatives(masterPath, sceneDistDir);
    } catch (err) {
      await fs.rm(masterPath, { force: true }).catch(() => undefined);
      await fs.rm(sceneDistDir, { recursive: true, force: true }).catch(() => undefined);
      return reply
        .code(500)
        .send(
          errorReply(`Fallo procesando la panorámica: ${err instanceof Error ? err.message : String(err)}`),
        );
    }
    if (quick.previewBytes > PREVIEW_MAX_BYTES) {
      warnings.push(`preview.webp supera el presupuesto: ${(quick.previewBytes / 1024).toFixed(1)} KB`);
    }
    if (quick.thumbBytes > THUMB_MAX_BYTES) {
      warnings.push(`thumb.webp supera el presupuesto: ${(quick.thumbBytes / 1024).toFixed(1)} KB`);
    }

    const nameFrom = path.parse(file.filename).name.replace(/[_-]+/g, ' ').trim();
    const scene = newScene({
      id: sceneId,
      name: nameFrom.length > 0 ? nameFrom.slice(0, 120) : `Escena ${draft.scenes.length + 1}`,
      revHash,
      ...(quick.lat !== undefined ? { lat: quick.lat } : {}),
      ...(quick.lng !== undefined ? { lng: quick.lng } : {}),
    });
    draft.scenes.push(scene);
    if (draft.defaultSceneId === undefined) {
      draft.defaultSceneId = scene.id;
    }
    await store.writeTour(draft);

    queue.enqueue(slug, sceneId, masterPath, sceneDistDir);

    return reply.code(201).send({
      scene,
      quick: {
        previewBytes: quick.previewBytes,
        thumbBytes: quick.thumbBytes,
        durationMs: quick.durationMs,
        warnings,
      },
      job: queue.get(slug, sceneId),
    });
  });

  app.patch('/api/tours/:slug/scenes/:sceneId', async (req, reply) => {
    const { slug, sceneId } = req.params as { slug: string; sceneId: string };
    if (!paramsValidos(slug, sceneId)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    const scene = draft.scenes.find((s) => s.id === sceneId);
    if (!scene) {
      return reply.code(404).send(errorReply('No existe la escena'));
    }
    const parsed = patchSceneBody.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send(errorReply('Cuerpo de escena inválido'));
    }
    const body = parsed.data;
    const sceneIds = new Set(draft.scenes.map((s) => s.id));
    if (body.hotspots !== undefined) {
      for (const hs of body.hotspots) {
        if (hs.type === 'nav' && !sceneIds.has(hs.targetSceneId)) {
          return reply
            .code(400)
            .send(errorReply(`Hotspot «${hs.title ?? hs.id}» apunta a una escena inexistente`));
        }
      }
    }
    if (body.name !== undefined) scene.name = body.name;
    if (body.defaultView !== undefined) {
      scene.defaultView = defaultViewSchema.parse({ ...scene.defaultView, ...body.defaultView });
    }
    // Nivelar horizonte (E4): el visor convierte grados → radianes al renderizar.
    applyNullable(scene, 'sphereCorrection', body.sphereCorrection);
    if (body.zoomLimit !== undefined) {
      scene.zoomLimit = zoomLimitSchema.parse({ ...scene.zoomLimit, ...body.zoomLimit });
    }
    applyNullable(scene, 'lat', body.lat);
    applyNullable(scene, 'lng', body.lng);
    applyNullable(scene, 'audio', body.audio);
    applyNullable(scene, 'gsv', body.gsv);
    if (body.hotspots !== undefined) scene.hotspots = body.hotspots;
    if (body.patches !== undefined) scene.patches = body.patches;
    scene.updatedAt = new Date().toISOString();

    const validated = tourDraftSchema.safeParse(draft);
    if (!validated.success) {
      return reply.code(400).send(errorReply(`Tour inválido: ${validated.error.message}`));
    }
    await store.writeTour(validated.data);
    return { scene: validated.data.scenes.find((s) => s.id === sceneId) };
  });

  // Sustituir la FOTO de una escena (orden de Andrés): conserva id, nombre,
  // grupo, puntos, vista inicial y ajustes; solo cambian la imagen, su revHash
  // (carpeta dist nueva), el GPS re-extraído y el reprocesado de la pirámide.
  app.post('/api/tours/:slug/scenes/:sceneId/replace', async (req, reply) => {
    const { slug, sceneId } = req.params as { slug: string; sceneId: string };
    if (!paramsValidos(slug, sceneId)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    const escena = draft.scenes.find((s) => s.id === sceneId);
    if (!escena) {
      return reply.code(404).send(errorReply('No existe la escena'));
    }
    if (queue.isRunning(slug, sceneId)) {
      return reply
        .code(409)
        .send(errorReply('La escena está procesándose; espera a que termine para sustituirla'));
    }
    const file = await req.file({ limits: { fileSize: 90 * 1024 * 1024 } });
    if (!file) {
      return reply.code(400).send(errorReply('Falta el archivo del panorama'));
    }
    if (file.mimetype !== 'image/jpeg') {
      return reply.code(415).send(errorReply('Solo se aceptan JPG equirectangulares del Insta360 X5'));
    }
    const buffer = await file.toBuffer();
    const { default: sharp } = await import('sharp');
    let meta: import('sharp').Metadata;
    try {
      meta = await sharp(buffer).metadata();
      if (meta.format !== 'jpeg') {
        return reply.code(415).send(errorReply('El archivo no es un JPG válido'));
      }
    } catch {
      return reply.code(415).send(errorReply('El archivo no es una imagen válida'));
    }
    if ((meta.width ?? 0) < 4000 || (meta.height ?? 0) < 2000) {
      return reply
        .code(422)
        .send(
          errorReply(
            `La imagen es demasiado pequeña (${meta.width}×${meta.height}); se esperaba un panorama 2:1 de al menos 4000 px de ancho`,
          ),
        );
    }
    const ratio = (meta.width ?? 1) / (meta.height ?? 1);
    if (ratio < 1.95 || ratio > 2.05) {
      return reply
        .code(422)
        .send(
          errorReply(
            `La imagen no es equirectangular 2:1 (relación ${ratio.toFixed(3)}:1, ${meta.width}×${meta.height}); ` +
              'exporta el panorama 360 desde Insta360 e inténtalo de nuevo',
          ),
        );
    }

    const masterPath = store.masterPath(slug, sceneId);
    const respaldoMaster = `${masterPath}.prev`;
    const revViejo = escena.revHash;
    const distViejo = store.distSceneDir(slug, sceneId, revViejo);
    const warnings: string[] = [];

    // Respaldo del master anterior: si la fase rápida falla, se restaura y la
    // escena queda intacta apuntando a su revisión anterior.
    await fs.copyFile(masterPath, respaldoMaster).catch(() => undefined);
    await fs.writeFile(masterPath, buffer);

    const revHash = await computeRevHash(masterPath);
    const distNuevo = store.distSceneDir(slug, sceneId, revHash);
    let quick: QuickDerivatives;
    try {
      quick = await generateQuickDerivatives(masterPath, distNuevo);
    } catch (err) {
      await fs.rm(distNuevo, { recursive: true, force: true }).catch(() => undefined);
      await fs.rename(respaldoMaster, masterPath).catch(() => undefined);
      return reply
        .code(500)
        .send(
          errorReply(`Fallo procesando la panorámica: ${err instanceof Error ? err.message : String(err)}`),
        );
    }
    await fs.rm(respaldoMaster, { force: true }).catch(() => undefined);
    if (quick.previewBytes > PREVIEW_MAX_BYTES) {
      warnings.push(`preview.webp supera el presupuesto: ${(quick.previewBytes / 1024).toFixed(1)} KB`);
    }
    if (quick.thumbBytes > THUMB_MAX_BYTES) {
      warnings.push(`thumb.webp supera el presupuesto: ${(quick.thumbBytes / 1024).toFixed(1)} KB`);
    }

    // Solo cambian imagen + revisión + GPS; TODO lo demás (nombre, grupo,
    // puntos, vista, límites) se conserva: para eso se sustituye en lugar de
    // borrar y re-subir.
    escena.revHash = revHash;
    escena.tiles = createTilesDescriptor(sceneId, revHash);
    if (quick.lat !== undefined) {
      escena.lat = quick.lat;
    } else {
      delete escena.lat;
    }
    if (quick.lng !== undefined) {
      escena.lng = quick.lng;
    } else {
      delete escena.lng;
    }
    escena.updatedAt = new Date().toISOString();

    const validated = tourDraftSchema.safeParse(draft);
    if (!validated.success) {
      return reply.code(400).send(errorReply(`Tour inválido: ${validated.error.message}`));
    }
    await store.writeTour(validated.data);

    queue.enqueue(slug, sceneId, masterPath, distNuevo);

    // La revisión anterior queda obsoleta: se elimina su carpeta de dist para
    // que la próxima publicación no la vuelva a subir (patrón del DELETE).
    const nota = await fs
      .rm(distViejo, { recursive: true, force: true })
      .then(() => undefined)
      .catch((err: unknown) => {
        const detalle = err instanceof Error ? err.message : String(err);
        console.warn(
          `[sustituir escena] no se pudo eliminar la carpeta dist vieja de ${sceneId}: ${detalle}`,
        );
        return `La carpeta de la revisión anterior no se pudo eliminar (${detalle}); se reintentará al publicar.`;
      });

    return reply.code(200).send({
      scene: validated.data.scenes.find((s) => s.id === sceneId),
      quick: {
        previewBytes: quick.previewBytes,
        thumbBytes: quick.thumbBytes,
        durationMs: quick.durationMs,
        warnings,
      },
      job: queue.get(slug, sceneId),
      ...(nota !== undefined ? { nota } : {}),
    });
  });

  app.delete('/api/tours/:slug/scenes/:sceneId', async (req, reply) => {
    const { slug, sceneId } = req.params as { slug: string; sceneId: string };
    if (!paramsValidos(slug, sceneId)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    if (queue.isRunning(slug, sceneId)) {
      return reply.code(409).send(errorReply('La escena está procesándose; espera a que termine'));
    }
    const idx = draft.scenes.findIndex((s) => s.id === sceneId);
    if (idx === -1) {
      return reply.code(404).send(errorReply('No existe la escena'));
    }
    const escena = draft.scenes[idx];
    if (!escena) {
      return reply.code(404).send(errorReply('No existe la escena'));
    }
    // Primero el estado (tour.json), después el disco (punto 5): si el rm falla,
    // el tour ya no referencia la escena, pero la carpeta huérfana SÍ se
    // re-subiría en la siguiente publicación (walkFiles(dist) la incluye aunque
    // el draft ya no la cite). Por eso se captura el error: log + aviso en la
    // respuesta, sin 500 con el tour ya guardado.
    draft.scenes.splice(idx, 1);
    if (draft.defaultSceneId === sceneId) {
      draft.defaultSceneId = draft.scenes[0]?.id;
    }
    await store.writeTour(draft);
    // Se elimina su carpeta de dist/ (tiles/preview/thumb de esa revisión) para
    // que la próxima publicación no los vuelva a subir. El master se conserva
    // (fuente de verdad, RULES.md §3).
    const avisos: string[] = [];
    try {
      await fs.rm(store.distSceneDir(slug, escena.id, escena.revHash), {
        recursive: true,
        force: true,
      });
    } catch (err) {
      const detalle = err instanceof Error ? err.message : String(err);
      console.warn(`[borrar escena] no se pudo eliminar la carpeta dist de ${sceneId}: ${detalle}`);
      avisos.push(
        'La escena se eliminó del tour, pero su carpeta en dist/ no se pudo borrar ' +
          'y se volvería a subir en la próxima publicación; elimínala a mano o repite el borrado',
      );
    }
    return {
      ok: true,
      nota:
        avisos.length > 0
          ? `${avisos.join('; ')}; el master se conserva en masters/`
          : 'Carpeta de la escena en dist/ eliminada; el master se conserva en masters/',
    };
  });

  app.post('/api/tours/:slug/publish', async (req, reply) => {
    const { slug } = req.params as { slug: string };
    if (!paramsValidos(slug)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    if (queue.hasPending(slug)) {
      return reply.code(409).send(errorReply('Hay escenas todavía procesando tiles; espera a que terminen'));
    }
    const published = tourSchema.safeParse(draft);
    if (!published.success) {
      return reply
        .code(400)
        .send(errorReply(`El tour no cumple el contrato publicado: ${published.error.message}`));
    }
    const distJsonPath = store.distTourJsonPath(slug);
    await fs.mkdir(path.dirname(distJsonPath), { recursive: true });
    await fs.writeFile(distJsonPath, `${JSON.stringify(published.data, null, 2)}\n`, 'utf8');

    if (!publisher || !config.r2) {
      return {
        ok: true,
        localOnly: true,
        mensaje: 'dist/ generado. R2 no está configurado (.env): solo se escribió el dist local.',
        edgeUrl: config.edgeBaseUrl ? `${config.edgeBaseUrl}/tours/${slug}` : null,
      };
    }
    const manifest = await store.readManifest(slug);
    const stats = await publisher.publishDist(store.distRoot(slug), manifest);
    return {
      ok: stats.errors.length === 0,
      stats,
      edgeUrl: config.edgeBaseUrl ? `${config.edgeBaseUrl}/tours/${slug}` : null,
    };
  });

  // Stream SSE del progreso de procesamiento (en vivo hacia el editor).
  app.get('/api/tours/:slug/events', async (req, reply) => {
    const { slug } = req.params as { slug: string };
    if (!paramsValidos(slug)) {
      return paramInvalido(reply);
    }
    const draft = await store.readTour(slug);
    if (!draft) {
      return reply.code(404).send(errorReply(`No existe el tour «${slug}»`));
    }
    reply.hijack();
    reply.raw.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });
    const send = (data: unknown): void => {
      reply.raw.write(`data: ${JSON.stringify(data)}\n\n`);
    };
    send({ type: 'snapshot', jobs: queue.snapshot(slug) });
    const onProgress = (job: { tourSlug: string }): void => {
      if (job.tourSlug === slug) {
        send({ type: 'job', job });
      }
    };
    queue.on('progress', onProgress);
    const heartbeat = setInterval(() => reply.raw.write(': ping\n\n'), 15_000);
    req.raw.on('close', () => {
      clearInterval(heartbeat);
      queue.off('progress', onProgress);
    });
  });
}
