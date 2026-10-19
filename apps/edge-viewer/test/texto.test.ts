import { describe, expect, it } from 'vitest';
import { textoCompuesto } from '../viewer/texto.js';

describe('texto compuesto sin duplicados (punto 3)', () => {
  it('une dos partes distintas con « — »', () => {
    expect(textoCompuesto('¡Hola! Quiero reservar', 'Living')).toBe('¡Hola! Quiero reservar — Living');
  });

  it('título y escena iguales → una sola vez (adiós «Horizonte — Horizonte»)', () => {
    expect(textoCompuesto('Horizonte', 'Horizonte')).toBe('Horizonte');
  });

  it('sin texto por defecto → solo el nombre de la escena (comportamiento del botón WhatsApp)', () => {
    expect(textoCompuesto(undefined, 'Horizonte')).toBe('Horizonte');
  });

  it('sin escena → solo el texto por defecto; sin nada → vacío', () => {
    expect(textoCompuesto('¡Hola!', undefined)).toBe('¡Hola!');
    expect(textoCompuesto(undefined, undefined)).toBe('');
    expect(textoCompuesto('  ', ' ')).toBe('');
  });
});
