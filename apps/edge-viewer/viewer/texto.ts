/**
 * Texto compuesto «principal — secundario» sin duplicados:
 * si solo hay una parte (o ambas coinciden), se muestra una sola vez.
 * Punto 3 de auditoría: elimina «Horizonte — Horizonte» cuando el título del
 * tour y el nombre de la escena coinciden.
 */
export function textoCompuesto(principal: string | undefined, secundario: string | undefined): string {
  const partes = [principal?.trim(), secundario?.trim()].filter(
    (parte): parte is string => parte !== undefined && parte.length > 0,
  );
  if (partes.length === 2 && partes[0] === partes[1]) {
    return partes[0] ?? '';
  }
  return partes.join(' — ');
}
