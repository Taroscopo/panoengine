import { ulid } from 'ulid';
import { describe, expect, it } from 'vitest';
import { newScene, newTour } from '../src/helpers.js';
import { MigrationError, migrateTourDraft } from '../src/migrate.js';
import { sceneSchema } from '../src/scene.js';
import { tourSchema } from '../src/tour.js';

const NOW = '2026-10-18T12:00:00.000Z';

function escenaValida(revHash = '0123456789') {
  return newScene({ name: 'Fogata', revHash, now: NOW });
}

describe('schema del tour', () => {
  it('crea un borrador válido con factory', () => {
    const tour = newTour({ slug: 'los-choquitos', title: 'Los Choquitos', now: NOW });
    const parsed = tourSchema.safeParse(tour);
    expect(parsed.success).toBe(false); // 0 escenas: no es publicable todavía
  });

  it('un tour con escenas y defaultSceneId válido pasa el contrato publicado', () => {
    const tour = newTour({ slug: 'los-choquitos', title: 'Los Choquitos', now: NOW });
    const escena = escenaValida();
    tour.scenes.push(escena);
    tour.defaultSceneId = escena.id;
    expect(tourSchema.parse(tour).slug).toBe('los-choquitos');
  });

  it('rechaza defaultSceneId huérfano', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    tour.scenes.push(escenaValida());
    tour.defaultSceneId = '01JD2Q5VHWXQZSYWX8NTC3EZWAAABA'; // ULID no existente
    const parsed = tourSchema.safeParse(tour);
    expect(parsed.success).toBe(false);
  });

  it('rechaza slugs no kebab-case', () => {
    const tour = newTour({ slug: 'Mi Casa', title: 'x', now: NOW });
    const parsed = tourSchema.safeParse(tour);
    expect(parsed.success).toBe(false);
  });

  it('valida hotspots nav con vista destino', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    const a = escenaValida();
    const b = newScene({ name: 'Cocina', revHash: 'aaaaaaaaaa', now: NOW });
    a.hotspots.push({
      type: 'nav',
      id: b.id,
      title: 'Ir a cocina',
      yaw: 45.5,
      pitch: -10,
      targetSceneId: b.id,
      targetYaw: 12.5,
      targetPitch: 3,
      targetFov: 95,
      transitionEffect: 'blend',
      transitionDurationMs: 750,
      createdAt: NOW,
      updatedAt: NOW,
    });
    tour.scenes.push(a, b);
    tour.defaultSceneId = a.id;
    const parsed = tourSchema.parse(tour);
    const hs = parsed.scenes[0]?.hotspots[0];
    expect(hs?.type).toBe('nav');
    if (hs?.type === 'nav') {
      expect(hs.targetFov).toBe(95);
      expect(hs.transitionEffect).toBe('blend');
    }
  });

  it('acepta sphereCorrection opcional por escena (pan/tilt/roll en grados, con defaults)', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    const escena = escenaValida();
    escena.sphereCorrection = { pan: 12.5, tilt: -5, roll: 2.5 };
    tour.scenes.push(escena);
    tour.defaultSceneId = escena.id;
    const parsed = tourSchema.parse(tour);
    expect(parsed.scenes[0]?.sphereCorrection).toEqual({ pan: 12.5, tilt: -5, roll: 2.5 });
  });

  it('completa los defaults de sphereCorrection cuando faltan campos', () => {
    const crudo = JSON.parse(JSON.stringify(escenaValida())) as Record<string, unknown>;
    crudo.sphereCorrection = { tilt: 3 };
    const parsed = sceneSchema.parse(crudo);
    expect(parsed.sphereCorrection).toEqual({ pan: 0, tilt: 3, roll: 0 });
  });

  it('rechaza sphereCorrection fuera de rango: pan ±180 exactos son válidos, ±181 rechazados (orden del propietario)', () => {
    const construir = (pan: number) => {
      const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
      const escena = escenaValida();
      escena.sphereCorrection = { pan, tilt: 0, roll: 0 };
      tour.scenes.push(escena);
      tour.defaultSceneId = escena.id;
      return tour;
    };
    expect(tourSchema.safeParse(construir(180)).success).toBe(true);
    expect(tourSchema.safeParse(construir(-180)).success).toBe(true);
    expect(tourSchema.safeParse(construir(181)).success).toBe(false);
    expect(tourSchema.safeParse(construir(-181)).success).toBe(false);
    // el rechazo histórico de valores absurdos sigue cubierto
    expect(tourSchema.safeParse(construir(999)).success).toBe(false);
  });

  it('compatibilidad: tour sin sphereCorrection o con pan 0 valida igual que siempre', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    const escena = escenaValida();
    tour.scenes.push(escena);
    tour.defaultSceneId = escena.id;
    expect(tourSchema.safeParse(tour).success).toBe(true);

    const tourPan0 = newTour({ slug: 'casa2', title: 'Casa 2', now: NOW });
    const escenaPan0 = escenaValida();
    escenaPan0.sphereCorrection = { pan: 0, tilt: 0, roll: 0 };
    tourPan0.scenes.push(escenaPan0);
    tourPan0.defaultSceneId = escenaPan0.id;
    const parsed = tourSchema.safeParse(tourPan0);
    expect(parsed.success).toBe(true);
  });

  it('sin sphereCorrection el campo queda ausente (opcional real)', () => {
    const escena = escenaValida();
    expect(escena.sphereCorrection).toBeUndefined();
  });
});

describe('migraciones', () => {
  it('migra un v1 crudo y válido', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    const result = migrateTourDraft(JSON.parse(JSON.stringify(tour)));
    expect(result.schemaVersion).toBe(1);
  });

  it('lanza MigrationError con versiones desconocidas', () => {
    expect(() => migrateTourDraft({ schemaVersion: 2 })).toThrow(MigrationError);
    expect(() => migrateTourDraft({})).toThrow(/schemaVersion/);
    expect(() => migrateTourDraft('no-objeto')).toThrow(MigrationError);
  });
});

describe('grupos de escenas (orden de Andrés)', () => {
  it('tour nuevo nace con groups: [] y escenas sin groupId', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    expect(tour.groups).toEqual([]);
    expect(tour.scenes).toEqual([]);
  });

  it('tour v1 SIN groups migra con groups: [] (sin bump de schemaVersion)', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    tour.scenes.push(escenaValida());
    const crudo = JSON.parse(JSON.stringify(tour)) as Record<string, unknown>;
    delete crudo.groups;
    const migrado = migrateTourDraft({ ...crudo, schemaVersion: 1 });
    expect(migrado.groups).toEqual([]);
  });

  it('acepta groups y scene.groupId coherentes en el contrato publicado', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    const a = escenaValida();
    const b = newScene({ name: 'Cocina', revHash: 'aaaaaaaaaa', now: NOW });
    const idGrupo = ulid();
    tour.groups.push({ id: idGrupo, name: 'Piso 1' });
    a.groupId = idGrupo;
    tour.scenes.push(a, b);
    tour.defaultSceneId = a.id;
    expect(tourSchema.parse(tour).groups).toHaveLength(1);
  });

  it('rechaza scene.groupId que no corresponde a ningún grupo', () => {
    const tour = newTour({ slug: 'casa', title: 'Casa', now: NOW });
    const a = escenaValida();
    a.groupId = ulid(); // ULID válido pero de un grupo inexistente
    tour.scenes.push(a);
    tour.defaultSceneId = a.id;
    expect(tourSchema.safeParse(tour).success).toBe(false);
  });
});
