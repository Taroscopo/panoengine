import { describe, expect, it } from 'vitest';
import { estadoTour, pasaFiltro, textoVence } from '../src/estado-tour.js';

const AHORA = new Date('2026-10-18T12:00:00.000Z');
const DIA = 24 * 60 * 60 * 1000;
const en = (dias: number): string => new Date(AHORA.getTime() + dias * DIA).toISOString();

describe('estadoTour (E2)', () => {
  it('sin fecha y activo → activo; suspendido manda aunque haya fecha', () => {
    expect(estadoTour({ hostingStatus: 'active' }, AHORA)).toBe('activo');
    expect(estadoTour({ hostingStatus: 'suspended' }, AHORA)).toBe('suspendido');
    expect(estadoTour({ hostingStatus: 'suspended', hostingExpiresAt: en(1) }, AHORA)).toBe('suspendido');
  });

  it('por vencer = faltan ≤ 30 días (30 incluido, 31 ya no)', () => {
    expect(estadoTour({ hostingStatus: 'active', hostingExpiresAt: en(30) }, AHORA)).toBe('por-vencer');
    expect(estadoTour({ hostingStatus: 'active', hostingExpiresAt: en(0.5) }, AHORA)).toBe('por-vencer');
    expect(estadoTour({ hostingStatus: 'active', hostingExpiresAt: en(31) }, AHORA)).toBe('activo');
  });

  it('fecha pasada → vencido; fecha inválida → activo (fail-open como el Worker)', () => {
    expect(estadoTour({ hostingStatus: 'active', hostingExpiresAt: en(-1) }, AHORA)).toBe('vencido');
    expect(estadoTour({ hostingStatus: 'active', hostingExpiresAt: 'fecha-rara' }, AHORA)).toBe('activo');
  });
});

describe('textoVence (E2)', () => {
  it('sin fecha → null; «Vence en N días» con singular/plural', () => {
    expect(textoVence({ hostingStatus: 'active' }, AHORA)).toBeNull();
    expect(textoVence({ hostingStatus: 'active', hostingExpiresAt: en(1) }, AHORA)).toBe('Vence en 1 día');
    expect(textoVence({ hostingStatus: 'active', hostingExpiresAt: en(15) }, AHORA)).toBe('Vence en 15 días');
  });

  it('hoy y vencido', () => {
    expect(textoVence({ hostingStatus: 'active', hostingExpiresAt: en(0.25) }, AHORA)).toBe('Vence hoy');
    expect(textoVence({ hostingStatus: 'active', hostingExpiresAt: en(-3) }, AHORA)).toBe(
      'Venció hace 3 días',
    );
  });
});

describe('pasaFiltro (E2)', () => {
  it('vencido solo aparece en Todos', () => {
    expect(pasaFiltro('vencido', 'todos')).toBe(true);
    expect(pasaFiltro('vencido', 'activos')).toBe(false);
    expect(pasaFiltro('vencido', 'por-vencer')).toBe(false);
    expect(pasaFiltro('vencido', 'suspendidos')).toBe(false);
  });

  it('cubos disjuntos', () => {
    expect(pasaFiltro('activo', 'activos')).toBe(true);
    expect(pasaFiltro('por-vencer', 'por-vencer')).toBe(true);
    expect(pasaFiltro('suspendido', 'suspendidos')).toBe(true);
    expect(pasaFiltro('activo', 'por-vencer')).toBe(false);
  });
});
