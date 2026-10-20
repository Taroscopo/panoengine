import { describe, expect, it } from 'vitest';
import { ordenExplicita } from '../scripts/freno.js';

describe('freno anti-producción (H1)', () => {
  it('sin la variable de orden expresa NO se permite desplegar', () => {
    expect(ordenExplicita({})).toBe(false);
    expect(ordenExplicita({ PANOENGINE_ORDEN_PRODUCCION: '' })).toBe(false);
    expect(ordenExplicita({ PANOENGINE_ORDEN_PRODUCCION: 'si' })).toBe(false);
  });

  it('solo PANOENGINE_ORDEN_PRODUCCION=CONFIRMADO permite desplegar', () => {
    expect(ordenExplicita({ PANOENGINE_ORDEN_PRODUCCION: 'CONFIRMADO' })).toBe(true);
  });
});
