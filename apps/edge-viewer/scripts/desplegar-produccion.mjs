#!/usr/bin/env node
/**
 * FRENO ANTI-PRODUCCIÓN (H1, orden del propietario).
 *
 * El config de producción se llamó «wrangler.produccion.jsonc» para que un
 * `wrangler deploy` desnudo dentro de apps/edge-viewer FALLE (no hay config
 * por defecto). Este script es la ÚNICA vía local de despliegue a producción y
 * exige una confirmación explícita por variable de entorno:
 *
 *   PANOENGINE_ORDEN_PRODUCCION=CONFIRMADO pnpm deploy:produccion
 *
 * Sin ella se detiene sin tocar nada. (El CI de GitHub solo despliega staging
 * con wrangler.staging.jsonc; producción será manual y con aprobación.)
 */
import { execFileSync } from 'node:child_process';
import { ordenExplicita } from './freno.ts';

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  if (!ordenExplicita()) {
    console.error(
      [
        '✋ FRENO ANTI-PRODUCCIÓN: el despliegue a producción exige orden expresa del propietario.',
        '',
        '   Si Andrés lo ordenó, ejecuta:',
        '   PANOENGINE_ORDEN_PRODUCCION=CONFIRMADO pnpm --filter @panoengine/edge-viewer deploy:produccion',
        '',
        '   (Nada se ha desplegado. Staging sigue disponible vía CI con wrangler.staging.jsonc.)',
      ].join('\n'),
    );
    process.exit(1);
  }
  console.log('Desplegando a PRODUCCIÓN por orden expresa (PANOENGINE_ORDEN_PRODUCCION=CONFIRMADO)…');
  execFileSync('pnpm', ['exec', 'wrangler', 'deploy', '--config', 'wrangler.produccion.jsonc'], {
    cwd: new URL('..', import.meta.url).pathname,
    stdio: 'inherit',
  });
}
