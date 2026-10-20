import { describe, expect, it } from 'vitest';
import app from '../src/worker/index.js';

/** R2 de mentira: el tour no existe → 404 de página, sin cuerpo de tour. */
const TOURS = {
  get: async () => null,
  head: async () => null,
} as unknown as R2Bucket;

const ASSETS = {
  fetch: async () =>
    new Response('<!doctype html><title>visor</title>', {
      status: 200,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    }),
} as unknown as Fetcher;

const env = { TOURS, ASSETS } as unknown as Parameters<typeof app.request>[2];

describe('cabeceras de seguridad del Worker (H1) — primera suite HTTP de la app', () => {
  it('healthz responde 200 con nosniff, referrer y permissions policy', async () => {
    const res = await app.request('/healthz', undefined, env);
    expect(res.status).toBe(200);
    expect(res.headers.get('x-content-type-options')).toBe('nosniff');
    expect(res.headers.get('referrer-policy')).toBe('strict-origin-when-cross-origin');
    expect(res.headers.get('permissions-policy')).toContain('geolocation=()');
    await expect(res.json()).resolves.toMatchObject({ ok: true });
  });

  it('tour inexistente → 404 HTML sin caché y CON las cabeceras de seguridad', async () => {
    const res = await app.request('/tours/no-existe', undefined, env);
    expect(res.status).toBe(404);
    expect(res.headers.get('content-type')).toContain('text/html');
    expect(res.headers.get('cache-control')).toBe('no-store');
    expect(res.headers.get('x-content-type-options')).toBe('nosniff');
  });

  it('path de escena con «..» codificado → 404 y también lleva nosniff', async () => {
    const res = await app.request('/tours/x/%2e%2e/%2e%2e/masters/secret.jpg', undefined, env);
    expect([400, 404]).toContain(res.status);
    expect(res.headers.get('x-content-type-options')).toBe('nosniff');
  });
});
