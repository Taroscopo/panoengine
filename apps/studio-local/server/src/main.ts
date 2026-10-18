import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fastifyMultipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';
import { loadConfig } from './config.js';
import { ProcessingQueue } from './processing/jobs.js';
import { R2Publisher } from './r2.js';
import { registerRoutes } from './routes.js';
import { WorkspaceStore } from './store.js';

const serverDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const webDistDir = path.resolve(serverDir, '../web/dist');

async function main(): Promise<void> {
  const config = loadConfig();
  const store = new WorkspaceStore(config.dataDir);
  await store.ensureDirs();
  const queue = new ProcessingQueue();
  const publisher = config.r2 ? new R2Publisher(config.r2) : undefined;

  const app = Fastify({ logger: false });
  await app.register(fastifyMultipart, {
    limits: { fileSize: 90 * 1024 * 1024, files: 1 },
  });
  await app.register(fastifyStatic, {
    root: config.dataDir,
    prefix: '/files/',
    decorateReply: false,
  });

  if (fs.existsSync(webDistDir)) {
    await app.register(fastifyStatic, {
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

  await app.listen({ port: config.port, host: '127.0.0.1' });
  console.log(`🏛  PanoEngine Studio → http://127.0.0.1:${config.port}`);
  console.log(`   Workspace: ${config.dataDir}`);
  console.log(
    config.r2
      ? `   R2: bucket «${config.r2.bucket}» configurado (publicación habilitada)`
      : '   R2: NO configurado (.env) — la publicación solo escribe dist/ local',
  );
}

main().catch((err) => {
  console.error('Error fatal arrancando el estudio:', err);
  process.exit(1);
});
