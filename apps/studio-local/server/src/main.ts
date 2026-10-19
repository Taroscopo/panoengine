import { buildApp } from './app.js';
import { loadConfig } from './config.js';
import { WorkspaceStore } from './store.js';

async function main(): Promise<void> {
  const config = loadConfig();
  const store = new WorkspaceStore(config.dataDir);
  await store.ensureDirs();

  const app = buildApp(config);
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
