import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fastifyMultipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import Fastify, { type FastifyInstance } from 'fastify';
import type { StudioConfig } from './config.js';
import { ProcessingQueue } from './processing/jobs.js';
import { R2Publisher } from './r2.js';
import { registerRoutes } from './routes.js';
import { WorkspaceStore } from './store.js';

const serverDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const webDistDir = path.resolve(serverDir, '../web/dist');

const HOSTS_LOCALES = new Set(['127.0.0.1', 'localhost', '[::1]']);

/**
 * H1 (orden del propietario): /files solo sirve el CONTENIDO PUBLICABLE de
 * dist/ — nunca los masters originales (RULES.md §4: masters no salen del
 * disco local por HTTP). Patrón: /files/tours/{slug}/dist/…
 */
const RUTA_FILES_VALIDA = /^\/files\/tours\/[a-z0-9]+(?:-[a-z0-9]+)*\/dist(?:\/|$)/;

function rutaFilesPermitida(url: string | undefined): boolean {
  if (url === undefined) {
    return true; // no es /files → el guard no aplica
  }
  if (!url.startsWith('/files/')) {
    return true;
  }
  try {
    return RUTA_FILES_VALIDA.test(decodeURIComponent(url.split('?')[0] ?? ''));
  } catch {
    return false; // URL malformada (%ZZ) → bloqueada
  }
}

function hostLocal(valor: string | undefined): boolean {
  if (valor === undefined) {
    return true; // curl y clientes sin Host explícito anómalo
  }
  // IPv6 entre corchetes: «[::1]:5199» → «[::1]» (split(':')[0] daría «[»).
  if (valor.startsWith('[')) {
    const cierre = valor.indexOf(']');
    const host = cierre === -1 ? valor : valor.slice(0, cierre + 1);
    return HOSTS_LOCALES.has(host);
  }
  const host = valor.split(':')[0] ?? '';
  return HOSTS_LOCALES.has(host);
}

/** Origin llega como URL completa (http://127.0.0.1:5173); se permite por hostname. */
function originLocal(origin: string | undefined): boolean {
  if (origin === undefined) {
    return true; // peticiones sin Origin (curl, mismo origen en algunos navegadores)
  }
  try {
    return HOSTS_LOCALES.has(new URL(origin).hostname);
  } catch {
    return false; // Origin malformado o 'null' (sandbox) → se rechaza
  }
}

/**
 * Construye la app Fastify del estudio (sin escuchar; main.ts la arranca y
 * los tests la inyectan con fastify.inject).
 *
 * Endurecimiento (auditoría A3):
 * - Hook onRequest: rechaza Host que no sea 127.0.0.1/localhost/[::1] y
 *   Origin ajeno en POST/PATCH/DELETE (el estudio es SOLO local, RULES.md §2).
 * - Las rutas validan slug y sceneId contra los schemas del contrato.
 */
export function buildApp(config: StudioConfig): FastifyInstance {
  const store = new WorkspaceStore(config.dataDir);
  const queue = new ProcessingQueue();
  const publisher = config.r2 ? new R2Publisher(config.r2) : undefined;

  const app = Fastify({ logger: false });

  app.addHook('onRequest', async (req, reply) => {
    if (!hostLocal(req.headers.host)) {
      await reply
        .code(403)
        .send({ error: 'El estudio solo acepta peticiones locales (127.0.0.1/localhost)' });
      return;
    }
    if (!rutaFilesPermitida(req.raw.url)) {
      await reply.code(404).send({ error: 'Archivo no encontrado' });
      return;
    }
    const mutacion = ['POST', 'PATCH', 'DELETE'].includes(req.method);
    if (mutacion && !originLocal(req.headers.origin)) {
      await reply.code(403).send({ error: 'Origin no permitido para operaciones de escritura' });
    }
  });

  void app.register(fastifyMultipart, {
    limits: { fileSize: 90 * 1024 * 1024, files: 1 },
  });
  void app.register(fastifyStatic, {
    root: config.dataDir,
    prefix: '/files/',
    decorateReply: false,
  });

  if (fs.existsSync(webDistDir)) {
    void app.register(fastifyStatic, {
      root: webDistDir,
      prefix: '/',
    });
    app.setNotFoundHandler((req, reply) => {
      if (req.raw.url?.startsWith('/files/')) {
        return reply.code(404).send({ error: 'Archivo no encontrado' });
      }
      return reply.sendFile('index.html');
    });
  } else {
    app.get('/', async () => ({
      mensaje:
        'PanoEngine Studio. El frontend no está compilado: ejecuta «pnpm --filter @panoengine/studio-web build» o «pnpm dev:web».',
    }));
  }

  registerRoutes(app, { store, queue, config, publisher });
  return app;
}
