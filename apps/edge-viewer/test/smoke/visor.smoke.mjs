/**
 * SMOKE TEST DEL VISOR (gate nuevo, auditoría Q4).
 *
 * Verifica de extremo a extremo, contra el Worker real arrancado con
 * `wrangler dev --local` y datos sembrados en el R2 local, que el visor
 * público DIBUJA la panorámica: mide los píxeles del canvas renderizado
 * y falla si solo se ve el color de fondo (#0b0f14).
 *
 * Requisitos: Chromium (caché de Playwright o del sistema) y sesión gráfica
 * (arranca headful para que WebGL use la GPU real). Sin navegador → se omite
 * con código 77 (no cuenta como fallo).
 *
 * Uso: pnpm --filter @panoengine/edge-viewer test:smoke
 */
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';

const PUERTO = 8789;
const FIXTURES = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');
const PAQUETE = path.resolve(FIXTURES, '../../..'); // apps/edge-viewer (donde vive wrangler.jsonc)

function log(msg) {
  console.log(`[smoke] ${msg}`);
}

function buscarChromium() {
  if (process.env.PANO_CHROME_PATH && existsSync(process.env.PANO_CHROME_PATH)) {
    return process.env.PANO_CHROME_PATH;
  }
  const cache = path.join(homedir(), '.cache/ms-playwright');
  if (existsSync(cache)) {
    const dirs = readdirSync(cache)
      .filter((d) => /^chromium-\d+/.test(d))
      .sort();
    for (const d of dirs.reverse()) {
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

function ejecutar(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { cwd: PAQUETE, encoding: 'utf8', stdio: 'pipe', ...opts });
}

async function esperar(fn, ms, descripcion) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    if (await fn()) return true;
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Timeout esperando: ${descripcion}`);
}

// ---- 1. Sembrar el R2 local con los fixtures ----
const claveEscena = 'scenes/01M582WR15T76JNXH97VA5XF9C-0000000001';
for (const [destino, origen] of [
  ['tours/smoke-tour/tour.json', 'tour.json'],
  [`tours/smoke-tour/${claveEscena}/preview.webp`, 'preview.webp'],
  [`tours/smoke-tour/${claveEscena}/thumb.webp`, 'thumb.webp'],
]) {
  ejecutar('pnpm', [
    'exec',
    'wrangler',
    'r2',
    'object',
    'put',
    `panoengine-tours/${destino}`,
    '--file',
    path.join(FIXTURES, origen),
    '--local',
    '--content-type',
    origen.endsWith('.json') ? 'application/json; charset=utf-8' : 'image/webp',
  ]);
}
log('R2 local sembrado (tour.json + preview + thumb)');

// ---- 2. Arrancar el Worker ----
const worker = spawn('pnpm', ['exec', 'wrangler', 'dev', '--port', String(PUERTO), '--local'], {
  cwd: PAQUETE,
  stdio: ['ignore', 'pipe', 'pipe'],
  detached: true, // grupo propio: se puede matar el árbol completo (pnpm→wrangler→workerd)
});
worker.stdout.on('data', (d) => process.env.PANO_SMOKE_VERBOSE && process.stderr.write(d));
worker.stderr.on('data', (d) => process.env.PANO_SMOKE_VERBOSE && process.stderr.write(d));
const matarArbol = () => {
  try {
    process.kill(-worker.pid, 'SIGKILL');
  } catch {
    worker.kill('SIGKILL');
  }
};
process.on('exit', matarArbol);

try {
  await esperar(
    async () => {
      try {
        const r = await fetch(`http://127.0.0.1:${PUERTO}/healthz`);
        return r.ok;
      } catch {
        return false;
      }
    },
    30000,
    'wrangler dev listo',
  );
  log(`Worker listo en :${PUERTO}`);

  // ---- 3. Abrir el visor y renderizar ----
  const chromium = buscarChromium();
  if (!chromium) {
    console.error('[smoke] OMITIDO: no hay Chromium disponible (código 77)');
    process.exit(77);
  }
  const { default: playwright } = await import('playwright-core');
  const navegador = await playwright.chromium.launch({
    executablePath: chromium,
    headless: false,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  try {
    const pagina = await navegador.newPage({ viewport: { width: 1280, height: 720 } });
    const erroresPagina = [];
    pagina.on('pageerror', (e) => erroresPagina.push(e.message));
    await pagina.goto(`http://127.0.0.1:${PUERTO}/tours/smoke-tour`, {
      waitUntil: 'networkidle',
      timeout: 60000,
    });
    // El visor está vivo cuando aparece el botón de WhatsApp (handler de node-changed).
    await pagina.waitForSelector('.pe-whatsapp', { timeout: 30000 });
    await pagina.waitForTimeout(2500);
    const captura = await pagina.screenshot();

    // ---- 4. Analizar píxeles: el canvas NO puede ser el color de fondo ----
    const png = PNG.sync.read(captura);
    let sumaCanal = [0, 0, 0];
    let muestras = 0;
    let pixelFondo = 0;
    const FONDO = [11, 15, 20];
    for (let y = 160; y < 560; y += 8) {
      for (let x = 240; x < 1040; x += 8) {
        const i = (y * png.width + x) * 4;
        const px = [png.data[i], png.data[i + 1], png.data[i + 2]];
        sumaCanal = sumaCanal.map((s, k) => s + px[k]);
        muestras++;
        if (
          Math.abs(px[0] - FONDO[0]) <= 2 &&
          Math.abs(px[1] - FONDO[1]) <= 2 &&
          Math.abs(px[2] - FONDO[2]) <= 2
        ) {
          pixelFondo++;
        }
      }
    }
    const media = sumaCanal.map((s) => s / muestras);
    // Varianza sobre una submuestra (bandas naranjas vs azul → media canal R alta y variable)
    let varianzaR = 0;
    let n2 = 0;
    for (let y = 160; y < 560; y += 16) {
      for (let x = 240; x < 1040; x += 16) {
        const i = (y * png.width + x) * 4;
        varianzaR += (png.data[i] - media[0]) ** 2;
        n2++;
      }
    }
    const desviacionR = Math.sqrt(varianzaR / n2);
    const proporcionFondo = pixelFondo / muestras;
    log(
      `media RGB=(${media.map((m) => m.toFixed(0)).join(',')}) desviaciónR=${desviacionR.toFixed(1)} fondo=${(proporcionFondo * 100).toFixed(1)}%`,
    );

    const fallos = [];
    if (proporcionFondo > 0.5)
      fallos.push(
        `el ${(proporcionFondo * 100).toFixed(0)}% del área central es color de fondo (¿overlay tapando o canvas sin dibujar?)`,
      );
    if (desviacionR < 8)
      fallos.push(
        `canvas casi uniforme (desviación R=${desviacionR.toFixed(1)} < 8): no hay panorámica renderizada`,
      );
    if (erroresPagina.length > 0) fallos.push(`errores de página: ${erroresPagina.join(' | ')}`);
    if (fallos.length > 0) {
      console.error(`[smoke] FALLO:\n  - ${fallos.join('\n  - ')}`);
      process.exit(1);
    }
    console.log('[smoke] PASA: el visor renderiza la panorámica (canvas ≠ fondo)');
  } finally {
    await navegador.close();
  }
} finally {
  matarArbol();
}
