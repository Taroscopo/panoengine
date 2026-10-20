import { migrateTourDraft } from '@panoengine/schema';
import { Hono } from 'hono';
import { evaluateGate } from './gate.js';
import { immutableHeaders, isSafeSceneAssetPath, normalizeEtag, SLUG_PATTERN } from './http.js';
import { gatePageHtml, invalidTourPageHtml, notFoundPageHtml } from './pages.js';
import { formatContentRange, parseRangeHeader } from './range.js';

/**
 * Worker maestro de PanoEngine (RULES.md §2, §4, §5):
 * - NUNCA procesa imágenes: los cuerpos de R2 se transmiten en streaming.
 * - NUNCA lee tour.json en la ruta de tiles (solo en /tours/:slug y /tours/:slug/tour.json).
 * - Tiles: Cache-Control inmutable + Range 206.
 */
export type Env = { Bindings: { TOURS: R2Bucket; ASSETS: Fetcher } };

const app = new Hono<Env>();

/**
 * Cabeceras de seguridad (H1, orden del propietario — propuesta auditada por
 * Cloudy): en TODAS las respuestas (HTML, JSON, tiles, 206/304/416 incluidos).
 * No tocan Cache-Control/ETag/Accept-Ranges. frame-ancestors queda pendiente
 * de decisión (bloquearía embeber tours en webs de clientes).
 */
app.use('*', async (c, next) => {
  await next();
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
});

function htmlResponse(html: string, status: number): Response {
  return new Response(html, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

interface LoadedTour {
  text: string;
  etag: string;
  hostingStatus: unknown;
  hostingExpiresAt: unknown;
}

/** El get condicional de R2 devuelve R2Object (sin cuerpo) cuando la condición no aplica. */
function hasBody(obj: R2Object | R2ObjectBody | null): obj is R2ObjectBody {
  return obj !== null && 'body' in obj;
}

type LoadResult =
  | { kind: 'ok'; tour: LoadedTour }
  | { kind: 'not-found' }
  | { kind: 'invalid' }
  | { kind: 'not-modified'; etag: string };

async function loadTourJson(
  bucket: R2Bucket,
  slug: string,
  ifNoneMatch: string | undefined,
): Promise<LoadResult> {
  const obj =
    ifNoneMatch !== undefined
      ? await bucket.get(`tours/${slug}/tour.json`, {
          onlyIf: { etagDoesNotMatch: ifNoneMatch },
        })
      : await bucket.get(`tours/${slug}/tour.json`);
  if (obj === null) {
    return { kind: 'not-found' };
  }
  if (!hasBody(obj)) {
    return { kind: 'not-modified', etag: obj.httpEtag };
  }
  const text = await obj.text();
  let hostingStatus: unknown;
  let hostingExpiresAt: unknown;
  try {
    // Validación completa del contrato (Q13): zod embebido, error explícito si es inválido.
    const tour = migrateTourDraft(JSON.parse(text));
    hostingStatus = tour.hostingStatus;
    hostingExpiresAt = tour.hostingExpiresAt;
  } catch {
    return { kind: 'invalid' };
  }
  return { kind: 'ok', tour: { text, etag: obj.httpEtag, hostingStatus, hostingExpiresAt } };
}

/** Gate + carga común. Devuelve Response de error (404/402/410/304/500) o el tour activo. */
async function gateTour(
  bucket: R2Bucket,
  slug: string,
  ifNoneMatch: string | undefined,
): Promise<{ error: Response } | { tour: LoadedTour }> {
  const result = await loadTourJson(bucket, slug, ifNoneMatch);
  switch (result.kind) {
    case 'not-found':
      return { error: htmlResponse(notFoundPageHtml(), 404) };
    case 'invalid':
      return { error: htmlResponse(invalidTourPageHtml(), 500) };
    case 'not-modified':
      return {
        error: new Response(null, {
          status: 304,
          headers: { ETag: result.etag, 'Cache-Control': 'no-cache, must-revalidate' },
        }),
      };
    case 'ok': {
      const gate = evaluateGate(result.tour.hostingStatus, result.tour.hostingExpiresAt, new Date());
      if (gate.kind !== 'active') {
        return { error: htmlResponse(gatePageHtml(gate.kind), gate.kind === 'suspended' ? 402 : 410) };
      }
      return { tour: result.tour };
    }
  }
}

app.get('/tours/:slug/tour.json', async (c) => {
  const slug = c.req.param('slug');
  if (!SLUG_PATTERN.test(slug)) {
    return htmlResponse(notFoundPageHtml(), 404);
  }
  const gated = await gateTour(c.env.TOURS, slug, normalizeEtag(c.req.header('if-none-match')));
  if ('error' in gated) {
    return gated.error;
  }
  return new Response(gated.tour.text, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, must-revalidate',
      ETag: gated.tour.etag,
    },
  });
});

app.get('/tours/:slug', async (c) => {
  const slug = c.req.param('slug');
  if (!SLUG_PATTERN.test(slug)) {
    return htmlResponse(notFoundPageHtml(), 404);
  }
  const gated = await gateTour(c.env.TOURS, slug, undefined);
  if ('error' in gated) {
    return gated.error;
  }
  // Activo: servimos el HTML del visor desde los Static Assets (bundle Vite).
  const assetUrl = new URL('/index.html', c.req.url).toString();
  const asset = await c.env.ASSETS.fetch(new Request(assetUrl, { method: 'GET' }));
  if (!asset.ok || asset.body === null) {
    return htmlResponse(invalidTourPageHtml(), 500);
  }
  return new Response(asset.body, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' },
  });
});

app.on(['GET', 'HEAD'], '/tours/:slug/*', async (c) => {
  const slug = c.req.param('slug');
  if (!SLUG_PATTERN.test(slug)) {
    return htmlResponse(notFoundPageHtml(), 404);
  }
  let pathname: string;
  try {
    pathname = decodeURIComponent(new URL(c.req.url).pathname);
  } catch {
    return new Response('Ruta inválida', { status: 400 });
  }
  const prefix = `/tours/${slug}/`;
  const rest = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : '';
  if (rest === '' || !isSafeSceneAssetPath(rest)) {
    return new Response('No encontrado', { status: 404 });
  }
  const key = `tours/${slug}/${rest}`;
  const bucket = c.env.TOURS;
  const rangeHeader = c.req.header('range');

  if (c.req.method === 'HEAD') {
    const obj = await bucket.head(key);
    if (obj === null) {
      return new Response(null, { status: 404 });
    }
    const headHeaders = immutableHeaders(key, obj.httpEtag);
    headHeaders['Content-Length'] = String(obj.size);
    // Nota: un HEAD a /tours/:slug/tour.json cae a esta ruta y responde 404
    // (la ruta específica del gate solo registra GET); comportamiento defensivo documentado.
    return new Response(null, { status: 200, headers: headHeaders });
  }

  if (rangeHeader !== undefined) {
    const head = await bucket.head(key);
    if (head === null) {
      return new Response(null, { status: 404 });
    }
    const parsed = parseRangeHeader(rangeHeader, head.size);
    if (parsed.kind === 'unsatisfiable') {
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': `bytes */${head.size}` },
      });
    }
    if (parsed.kind === 'range') {
      const obj = await bucket.get(key, { range: { offset: parsed.offset, length: parsed.length } });
      if (obj === null || !('body' in obj)) {
        return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${head.size}` } });
      }
      const headers = immutableHeaders(key, obj.httpEtag);
      headers['Content-Length'] = String(parsed.length);
      headers['Content-Range'] = formatContentRange(parsed.offset, parsed.length, head.size);
      return new Response(obj.body, { status: 206, headers });
    }
    // 'invalid' → ignoramos el Range y servimos el objeto completo.
  }

  const obj = await bucket.get(key);
  if (obj === null || !('body' in obj)) {
    return new Response(null, { status: 404 });
  }
  const headers = immutableHeaders(key, obj.httpEtag);
  headers['Content-Length'] = String(obj.size);
  return new Response(obj.body, { status: 200, headers });
});

app.get('/healthz', (c) => c.json({ ok: true, service: 'panoengine-edge-viewer' }));

app.notFound((c) => {
  if (c.req.path.startsWith('/api/')) {
    return c.json({ error: 'No encontrado' }, 404);
  }
  return htmlResponse(notFoundPageHtml(), 404);
});

export default app;
