#!/usr/bin/env node
import { existsSync, readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
/**
 * HERRAMIENTA MANUAL DE MEDICIÓN — tabla de FOV medida de Photo Sphere Viewer.
 *
 * Instancia el MISMO paquete @photo-sphere-viewer/core que usa el estudio
 * (apps/studio-local/web) en un Chromium real y mide, para cada nivel de zoom
 * 0–100 (paso 5), el FOV vertical que devuelve viewer.getFov(). Se mide con
 * dos juegos de límites: minFov/maxFov 30/90 (por defecto de PSV) y 60/90
 * (el recorte que produce el zoomLimit por defecto 60–150 del schema).
 *
 * La salida (JSON) alimenta TABLA_FOV_MEDIDA en packages/schema/src/fov.ts:
 * la conversión fov ↔ zoomLvl del paquete debe coincidir con lo MEDIDO, no
 * con una fórmula asumida.
 *
 * Uso (desde la raíz del repo):  node packages/schema/tools/medir-fov.mjs
 * Requiere: Chromium (variable PANO_CHROME_PATH, caché de Playwright o del
 * sistema). Sin Chromium → se omite con código 77 (como el smoke del visor).
 */
import { createRequire } from 'node:module';
import { homedir, tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const require = createRequire(import.meta.url);

const { chromium } = require(path.join(repoRoot, 'apps/edge-viewer/node_modules/playwright-core'));
const sharp = require(path.join(repoRoot, 'apps/studio-local/server/node_modules/sharp'));

const DEPS = path.join(repoRoot, 'apps/studio-local/web/node_modules');
const CORE = path.join(DEPS, '@photo-sphere-viewer/core/index.module.js');
const THREE_DIR = path.join(DEPS, 'three/build');

function versionDe(pkg) {
  return require(path.join(DEPS, pkg, 'package.json')).version;
}

function buscarChromium() {
  if (process.env.PANO_CHROME_PATH && existsSync(process.env.PANO_CHROME_PATH)) {
    return process.env.PANO_CHROME_PATH;
  }
  const cache = path.join(homedir(), '.cache/ms-playwright');
  if (existsSync(cache)) {
    for (const d of readdirSync(cache)
      .filter((x) => /^chromium-\d+/.test(x))
      .sort()
      .reverse()) {
      for (const sub of ['chrome-linux64/chrome', 'chrome-linux/chrome']) {
        const p = path.join(cache, d, sub);
        if (existsSync(p)) return p;
      }
    }
  }
  for (const p of ['/usr/bin/google-chrome', '/usr/bin/chromium-browser', '/usr/bin/chromium']) {
    if (existsSync(p)) return p;
  }
  return null;
}

const MIME = {
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.html': 'text/html',
};

async function main() {
  const chrome = buscarChromium();
  if (!chrome) {
    console.error('[medir-fov] sin Chromium: omite con 77');
    process.exit(77);
  }

  // Panorámica sintética 2:1 (colores planos: la textura basta para medir FOV).
  const pano = path.join(tmpdir(), 'medir-fov-pano.jpg');
  await sharp({ create: { width: 2048, height: 1024, channels: 3, background: { r: 90, g: 120, b: 150 } } })
    .jpeg({ quality: 80 })
    .toFile(pano);

  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<link rel="stylesheet" href="/core.css">
<style>html,body{margin:0;height:100%}#pano{position:absolute;inset:0}</style>
<script type="importmap">
{ "imports": {
  "three": "/three/three.module.js",
  "@photo-sphere-viewer/core": "/core.js"
} }
</script></head><body>
<div id="pano"></div>
<script type="module">
import { Viewer } from '@photo-sphere-viewer/core';

async function medir(minFov, maxFov) {
  const cont = document.getElementById('pano');
  cont.innerHTML = '';
  const v = new Viewer({
    container: cont,
    panorama: '/pano.jpg',
    minFov,
    maxFov,
    navbar: null,
    mousewheel: false,
  });
  await new Promise((res) => v.addEventListener('ready', res, { once: true }));
  const tabla = {};
  for (let lvl = 0; lvl <= 100; lvl += 5) {
    await new Promise((res) => {
      const fin = setTimeout(res, 400); // respaldo si el nivel no cambia
      v.addEventListener(
        'zoom-updated',
        () => {
          clearTimeout(fin);
          setTimeout(res, 30);
        },
        { once: true },
      );
      v.zoom(lvl);
    });
    tabla[String(lvl)] = Math.round(v.state.vFov * 100) / 100;
  }
  v.destroy();
  return tabla;
}

try {
  window.__resultado = { '30-90': await medir(30, 90), '60-90': await medir(60, 90) };
  document.title = 'MEDIDO';
} catch (err) {
  window.__error = String(err);
  document.title = 'FALLO';
}
</script></body></html>`;

  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', 'http://127.0.0.1');
      let file = null;
      if (url.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
        return;
      }
      if (url.pathname === '/core.js') file = CORE;
      else if (url.pathname === '/core.css') file = path.join(DEPS, '@photo-sphere-viewer/core/index.css');
      else if (url.pathname === '/pano.jpg') file = pano;
      else if (url.pathname.startsWith('/three/')) {
        file = path.join(THREE_DIR, url.pathname.slice('/three/'.length));
      }
      if (!file) {
        res.writeHead(404).end();
        return;
      }
      const cuerpo = await readFile(file);
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' });
      res.end(cuerpo);
    } catch {
      res.writeHead(500).end();
    }
  });
  await new Promise((res) => server.listen(0, '127.0.0.1', res));
  const puerto = server.address().port;
  const origen = `http://127.0.0.1:${puerto}`;

  const navegador = await chromium.launch({
    executablePath: chrome,
    headless: true,
    args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader'],
  });
  try {
    const page = await navegador.newPage({ viewport: { width: 900, height: 500 } });
    page.on('console', (m) => {
      if (m.type() === 'error') console.error('[browser]', m.text());
    });
    await page.goto(origen);
    await page.waitForFunction(() => document.title === 'MEDIDO' || document.title === 'FALLO', null, {
      timeout: 90_000,
    });
    const fallo = await page.evaluate(() => window.__error);
    if (fallo) {
      console.error('[medir-fov] error del visor:', fallo);
      process.exit(1);
    }
    const resultado = await page.evaluate(() => window.__resultado);
    console.log(
      JSON.stringify(
        {
          herramienta: 'packages/schema/tools/medir-fov.mjs',
          fecha: new Date().toISOString().slice(0, 10),
          core: versionDe('@photo-sphere-viewer/core'),
          three: versionDe('three'),
          limitePorNivelDe: 5,
          medidas: resultado,
        },
        null,
        2,
      ),
    );
  } finally {
    await navegador.close();
    server.close();
  }
}

main().catch((err) => {
  console.error('[medir-fov]', err);
  process.exit(1);
});
