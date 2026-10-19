import { describe, expect, it } from 'vitest';
import { avisoBorradoDist } from '../src/mensaje-borrado.js';

describe('aviso del borrado de escena (detalle d)', () => {
  it('nota de fallo de dist/ → aviso visible (el icono lo aporta la interfaz)', () => {
    const aviso = avisoBorradoDist({
      ok: true,
      nota:
        'La escena se eliminó del tour, pero su carpeta en dist/ no se pudo borrar ' +
        'y se volvería a subir en la próxima publicación; elimínala a mano o repite el borrado',
    });
    expect(aviso).not.toBeNull();
    expect(aviso).not.toContain('⚠');
    expect(aviso).toContain('no se pudo borrar');
  });

  it('borrado limpio → sin aviso (la nota de éxito no molesta)', () => {
    expect(
      avisoBorradoDist({
        ok: true,
        nota: 'Carpeta de la escena en dist/ eliminada; el master se conserva en masters/',
      }),
    ).toBeNull();
  });

  it('respuestas sin nota o vacías → sin aviso', () => {
    expect(avisoBorradoDist({ ok: true })).toBeNull();
    expect(avisoBorradoDist({ ok: true, nota: '   ' })).toBeNull();
  });
});
