export const IMMUTABLE_CACHE = 'public, max-age=31536000, immutable' as const;
export const TOUR_JSON_CACHE = 'no-cache, must-revalidate' as const;

const CONTENT_TYPES: Record<string, string> = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.json': 'application/json; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
};

export function contentTypeFor(key: string): string {
  const dot = key.lastIndexOf('.');
  const ext = dot === -1 ? '' : key.slice(dot).toLowerCase();
  return CONTENT_TYPES[ext] ?? 'application/octet-stream';
}

/** Cabeceras de un asset inmutable (tiles/preview/thumb por revisión). */
export function immutableHeaders(key: string, etag?: string): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': contentTypeFor(key),
    'Cache-Control': IMMUTABLE_CACHE,
    'Accept-Ranges': 'bytes',
  };
  if (etag) {
    headers.ETag = etag;
  }
  return headers;
}

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Claves R2 válidas bajo scenes/: solo caracteres seguros, sin '..' ni 'tour.json'. */
export function isSafeSceneAssetPath(rest: string): boolean {
  return (
    /^[A-Za-z0-9._/-]+$/.test(rest) &&
    !rest.includes('..') &&
    !rest.endsWith('/') &&
    rest !== 'tour.json' &&
    !rest.endsWith('/tour.json')
  );
}

/**
 * Normaliza un If-None-Match para el condicional de R2: sin comillas y sin prefijo W/
 * (R2 lanza TypeError si el ETag condicional llega entrecomillado).
 */
export function normalizeEtag(value: string | undefined): string | undefined {
  if (value === undefined || value === '*') {
    return value;
  }
  // Si llegan varias ETags separadas por coma, se compara con la primera.
  const first = value.split(',')[0]?.trim() ?? '';
  return first.replaceAll('W/', '').replace(/^"+|"+$/g, '');
}
