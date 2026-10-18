import { describe, expect, it } from 'vitest';
import { evaluateGate, gateStatusCode } from '../src/worker/gate.js';
import {
  IMMUTABLE_CACHE,
  immutableHeaders,
  isSafeSceneAssetPath,
  normalizeEtag,
  SLUG_PATTERN,
  TOUR_JSON_CACHE,
} from '../src/worker/http.js';
import { gatePageHtml, notFoundPageHtml } from '../src/worker/pages.js';
import { formatContentRange, parseRangeHeader } from '../src/worker/range.js';

describe('corta-corriente (gate)', () => {
  const now = new Date('2026-10-18T12:00:00.000Z');

  it('activo por defecto', () => {
    expect(evaluateGate('active', undefined, now)).toEqual({ kind: 'active' });
    expect(evaluateGate(undefined, undefined, now)).toEqual({ kind: 'active' });
  });

  it('suspendido manual → 402', () => {
    const state = evaluateGate('suspended', '2099-01-01T00:00:00.000Z', now);
    expect(state).toEqual({ kind: 'suspended' });
    expect(gateStatusCode(state)).toBe(402);
  });

  it('anualidad vencida → 410 (aunque hostingStatus sea active)', () => {
    const state = evaluateGate('active', '2026-01-01T00:00:00.000Z', now);
    expect(state).toEqual({ kind: 'expired' });
    expect(gateStatusCode(state)).toBe(410);
  });

  it('suspendido tiene prioridad sobre vencido', () => {
    expect(evaluateGate('suspended', '2020-01-01T00:00:00.000Z', now)).toEqual({ kind: 'suspended' });
  });

  it('fecha inválida o ausente no bloquea (fail-open)', () => {
    expect(evaluateGate('active', 'fecha-invalida', now)).toEqual({ kind: 'active' });
    expect(evaluateGate('active', 42, now)).toEqual({ kind: 'active' });
  });

  it('límite exacto: vence exactamente ahora → expirado', () => {
    expect(evaluateGate('active', '2026-10-18T12:00:00.000Z', now)).toEqual({ kind: 'expired' });
  });

  it('las páginas del gate están en español con el estado correcto', () => {
    const suspended = gatePageHtml('suspended');
    expect(suspended).toContain('Tour pausado');
    expect(suspended).toContain('402');
    const expired = gatePageHtml('expired');
    expect(expired).toContain('Tour expirado');
    expect(expired).toContain('410');
    expect(notFoundPageHtml()).toContain('Tour no encontrado');
  });
});

describe('parsing de Range', () => {
  it('sin cabecera → none', () => {
    expect(parseRangeHeader(undefined, 1000)).toEqual({ kind: 'none' });
    expect(parseRangeHeader('', 1000)).toEqual({ kind: 'none' });
  });

  it('bytes=0-499 → offset 0, length 500', () => {
    expect(parseRangeHeader('bytes=0-499', 1000)).toEqual({ kind: 'range', offset: 0, length: 500 });
  });

  it('bytes=200- → hasta el final', () => {
    expect(parseRangeHeader('bytes=200-', 1000)).toEqual({ kind: 'range', offset: 200, length: 800 });
  });

  it('bytes=-500 → últimos 500', () => {
    expect(parseRangeHeader('bytes=-500', 1000)).toEqual({ kind: 'range', offset: 500, length: 500 });
  });

  it('end recortado al tamaño del objeto', () => {
    expect(parseRangeHeader('bytes=900-5000', 1000)).toEqual({ kind: 'range', offset: 900, length: 100 });
  });

  it('offset fuera de rango → unsatisfiable', () => {
    expect(parseRangeHeader('bytes=1000-', 1000)).toEqual({ kind: 'unsatisfiable' });
    expect(parseRangeHeader('bytes=-0', 1000)).toEqual({ kind: 'unsatisfiable' });
  });

  it('sintaxis inválida → invalid (se sirve 200 completo)', () => {
    expect(parseRangeHeader('bytes=abc', 1000)).toEqual({ kind: 'invalid' });
    expect(parseRangeHeader('items=0-10', 1000)).toEqual({ kind: 'invalid' });
    expect(parseRangeHeader('bytes=500-100', 1000)).toEqual({ kind: 'invalid' });
  });

  it('múltiples rangos: usa solo el primero', () => {
    expect(parseRangeHeader('bytes=0-99,200-299', 1000)).toEqual({
      kind: 'range',
      offset: 0,
      length: 100,
    });
  });

  it('Content-Range formateado', () => {
    expect(formatContentRange(200, 500, 1000)).toBe('bytes 200-699/1000');
  });
});

describe('cabeceras y seguridad de rutas', () => {
  it('tiles: Cache-Control inmutable + Accept-Ranges + ETag', () => {
    const headers = immutableHeaders('tours/x/scenes/a-b/l2/7_15.webp', '"abc"');
    expect(headers['Cache-Control']).toBe(IMMUTABLE_CACHE);
    expect(IMMUTABLE_CACHE).toBe('public, max-age=31536000, immutable');
    expect(headers['Accept-Ranges']).toBe('bytes');
    expect(headers.ETag).toBe('"abc"');
    expect(headers['Content-Type']).toBe('image/webp');
  });

  it('content types por extensión', () => {
    expect(immutableHeaders('a/b.mp4')['Content-Type']).toBe('video/mp4');
    expect(immutableHeaders('a/b.json')['Content-Type']).toBe('application/json; charset=utf-8');
    expect(immutableHeaders('a/b.xyz')['Content-Type']).toBe('application/octet-stream');
  });

  it('slugs válidos e inválidos', () => {
    expect(SLUG_PATTERN.test('los-choquitos')).toBe(true);
    expect(SLUG_PATTERN.test('casa-2026')).toBe(true);
    expect(SLUG_PATTERN.test('Mi-Casa')).toBe(false);
    expect(SLUG_PATTERN.test('a--b')).toBe(false);
    expect(SLUG_PATTERN.test('a/b')).toBe(false);
    expect(SLUG_PATTERN.test('.env')).toBe(false);
  });

  it('rutas de escena: bloquea .., tour.json y caracteres raros', () => {
    expect(isSafeSceneAssetPath('scenes/01J-abc-0123/l2/7_15.webp')).toBe(true);
    expect(isSafeSceneAssetPath('scenes/a-b/preview.webp')).toBe(true);
    expect(isSafeSceneAssetPath('scenes/a-b/patches/p.png')).toBe(true);
    expect(isSafeSceneAssetPath('tour.json')).toBe(false);
    expect(isSafeSceneAssetPath('../otros/tour.json')).toBe(false);
    expect(isSafeSceneAssetPath('a/%20b.webp')).toBe(false);
    expect(isSafeSceneAssetPath('a/')).toBe(false);
    expect(isSafeSceneAssetPath('')).toBe(false);
  });
});

describe('tour.json: cabeceras y revalidación 304', () => {
  it('Cache-Control del tour.json es no-cache + must-revalidate (no immutable)', () => {
    expect(TOUR_JSON_CACHE).toBe('no-cache, must-revalidate');
  });

  it('normalizeEtag quita comillas y W/ (R2 exige sin comillas)', () => {
    expect(normalizeEtag('"abc123"')).toBe('abc123');
    expect(normalizeEtag('W/"abc123"')).toBe('abc123');
    expect(normalizeEtag('abc123')).toBe('abc123');
    expect(normalizeEtag('*')).toBe('*');
    expect(normalizeEtag(undefined)).toBeUndefined();
    // varias etags separadas por coma: se usa la primera
    expect(normalizeEtag('"a", "b"')).toBe('a');
  });
});
