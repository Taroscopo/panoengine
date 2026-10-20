import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'node',
    // Los tests de este paquete procesan imágenes REALES con sharp (subida,
    // sustitución y pirámide de 168 tiles): en el runner de 2 núcleos de
    // GitHub Actions superan con facilidad los 5 s por defecto de vitest
    // (fallo del CI del 2026-10-20 en sustituir.test.ts).
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
});
