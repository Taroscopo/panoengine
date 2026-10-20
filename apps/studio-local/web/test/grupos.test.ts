import type { Scene, SceneGroup } from '@panoengine/schema';
import { describe, expect, it } from 'vitest';
import { agruparEscenas, moverEscena } from '../src/grupos.js';

const AHORA = '2026-10-20T12:00:00.000Z';
const escena = (id: string, groupId?: string): Scene =>
  ({
    id,
    name: id,
    revHash: 'aaaaaaaaaa',
    ...(groupId !== undefined ? { groupId } : {}),
    tiles: {
      width: 11264,
      cols: 16,
      rows: 8,
      nbLevels: 3,
      baseUrl: `scenes/${id}-aaaaaaaaaa/preview.webp`,
      tileUrlTemplate: `scenes/${id}-aaaaaaaaaa/l{level}/{row}_{col}.webp`,
      levels: [],
    },
    defaultView: { yaw: 0, pitch: 0, fov: 90 },
    zoomLimit: { min: 60, max: 150 },
    hotspots: [],
    patches: [],
    createdAt: AHORA,
    updatedAt: AHORA,
  }) as unknown as Scene;

const G1: SceneGroup = { id: '01G1', name: 'Piso 1' };
const G2: SceneGroup = { id: '01G2', name: 'Piso 2' };

describe('agruparEscenas', () => {
  it('sin grupos: todo en «Sin grupo», en el orden de tour.scenes', () => {
    const vista = agruparEscenas([escena('a'), escena('b')], []);
    expect(vista).toHaveLength(1);
    expect(vista[0]?.id).toBeNull();
    expect(vista[0]?.escenas.map((e) => e.id)).toEqual(['a', 'b']);
  });

  it('reparte por groupId y los huérfanos caen en Sin grupo', () => {
    const vista = agruparEscenas(
      [escena('a', '01G1'), escena('b'), escena('c', '01G2'), escena('d', 'grupo-borrado')],
      [G1, G2],
    );
    expect(vista.map((g) => g.nombre)).toEqual(['Sin grupo', 'Piso 1', 'Piso 2']);
    expect(vista[0]?.escenas.map((e) => e.id)).toEqual(['b', 'd']);
    expect(vista[1]?.escenas.map((e) => e.id)).toEqual(['a']);
    expect(vista[2]?.escenas.map((e) => e.id)).toEqual(['c']);
  });
});

describe('moverEscena', () => {
  it('mover a otro grupo (al final) devuelve el orden completo', () => {
    const escenas = [escena('a'), escena('b'), escena('c', '01G1')];
    const orden = moverEscena(escenas, [G1], 'a', { groupId: '01G1', antesDe: null });
    expect(orden).toEqual([
      { id: 'b', groupId: null },
      { id: 'c', groupId: '01G1' },
      { id: 'a', groupId: '01G1' },
    ]);
  });

  it('insertar antes de otra escena dentro del mismo grupo', () => {
    const escenas = [escena('a', '01G1'), escena('b', '01G1')];
    const orden = moverEscena(escenas, [G1], 'b', { groupId: '01G1', antesDe: 'a' });
    expect(orden).toEqual([
      { id: 'b', groupId: '01G1' },
      { id: 'a', groupId: '01G1' },
    ]);
  });

  it('sacar de un grupo hacia Sin grupo', () => {
    const escenas = [escena('a', '01G1'), escena('b')];
    const orden = moverEscena(escenas, [G1], 'a', { groupId: null, antesDe: 'b' });
    expect(orden).toEqual([
      { id: 'a', groupId: null },
      { id: 'b', groupId: null },
    ]);
  });
});
