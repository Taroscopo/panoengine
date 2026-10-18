/**
 * Parsing de cabecera HTTP Range (bytes) para soporte 206 Partial Content
 * en la ruta de tiles/videos (RULES.md §2.22 — futuro MP4 de pantalla verde).
 * Solo se soporta el PRIMER rango si llegan varios (los navegadores envían uno).
 */
export type ParsedRange =
  | { kind: 'none' }
  | { kind: 'invalid' }
  | { kind: 'unsatisfiable' }
  | { kind: 'range'; offset: number; length: number };

export function parseRangeHeader(header: string | undefined, size: number): ParsedRange {
  if (header === undefined || header.trim() === '') {
    return { kind: 'none' };
  }
  const first = header.split(',')[0];
  if (first === undefined) {
    return { kind: 'invalid' };
  }
  const match = /^bytes\s*=\s*(\d*)\s*-\s*(\d*)\s*$/.exec(first.trim());
  if (!match || (match[1] === '' && match[2] === '')) {
    return { kind: 'invalid' };
  }
  const startStr = match[1] ?? '';
  const endStr = match[2] ?? '';

  if (startStr === '') {
    // bytes=-N → últimos N bytes
    const suffix = Number.parseInt(endStr, 10);
    if (suffix === 0) {
      return { kind: 'unsatisfiable' };
    }
    const length = Math.min(suffix, size);
    if (size === 0) {
      return { kind: 'unsatisfiable' };
    }
    return { kind: 'range', offset: size - length, length };
  }
  const start = Number.parseInt(startStr, 10);
  if (start >= size) {
    return { kind: 'unsatisfiable' };
  }
  if (endStr === '') {
    return { kind: 'range', offset: start, length: size - start };
  }
  const end = Number.parseInt(endStr, 10);
  if (end < start) {
    return { kind: 'invalid' };
  }
  return { kind: 'range', offset: start, length: Math.min(end - start + 1, size - start) };
}

export function formatContentRange(offset: number, length: number, size: number): string {
  return `bytes ${offset}-${offset + length - 1}/${size}`;
}
