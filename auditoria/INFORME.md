# Informe de entrega — Estudio v2 · E3b «Usar la vista actual»

- **Commit auditado:** `642676c6e844328fce59a439db0087d4e5fabca2` (E3b). Ya estaba en `origin/main` desde el push autorizado para auditoría; reverificado con `git ls-remote origin main` → `642676c6e844328fce59a439db0087d4e5fabca2 refs/heads/main`. Este informe viaja en el commit inmediatamente posterior (primera entrega bajo la orden permanente: commit + push por etapa).
- **Fecha:** 2026-10-18
- **Árbol durante el verify:** limpio en `642676c` (sin cambios locales).

## Qué cambió (puntos)

1. `apps/studio-local/web/src/vista.ts` (nuevo): tipo `VistaGrados` y `vistaAGrados` — normalización de giro (190° → −170°), límite ±90° en altura de la mirada, y conversión de zoom que REUTILIZA `fovToZoomLvl` de `@panoengine/schema` (estudio y visor comparten la MISMA conversión, demostrado por test de round-trip).
2. `apps/studio-local/web/src/test/vista.test.ts` (nuevo, 4 tests): normalización 190→−170, recorte a ±90, round-trip de zoom contra `schema.fovToZoomLvl`, composición.
3. `PanoPreview.tsx`: callbacks `onVistaActual` (position-updated / zoom-updated / ready) y `onVistaGuardar`; botón flotante «Usar esta vista como inicio» (oculto mientras `modoAgregar`) que hace PATCH de `defaultView` al instante y confirma con «Vista inicial guardada».
4. `EditorPage.tsx`: estado `vistaActual`; tarjeta «Vista inicial» de solo lectura (3 filas de valores + «Usar la vista actual» + texto de ayuda; inputs numéricos fuera); títulos de punto por defecto «Ir a otra escena» / «Información» / «Enlace».
5. Marcadores neutrales en el visor del editor: círculo oscuro con borde blanco (`.pe-marker-edit`); el azul queda SOLO para selección (`.pe-marker-edit--sel`).
6. Chips de tipo de punto neutrales (borde `linea`, texto `texto-suave`).
7. Mensajes ok/aviso autodescartables a los 4 s (el error persiste); temporizador limpiado al desmontar.

## Salida literal de `pnpm verify` (sin `| tail`; exit 0)

```text
$ pnpm -r --if-present typecheck && pnpm -r --if-present test && pnpm lint && pnpm -r --if-present build
packages/schema typecheck$ tsc -p tsconfig.json
packages/schema typecheck: Done
apps/studio-local/server typecheck$ tsc -p tsconfig.json
apps/edge-viewer typecheck$ tsc -p tsconfig.worker.json && tsc -p tsconfig.viewer.json
apps/studio-local/web typecheck$ tsc -p tsconfig.json
apps/studio-local/server typecheck: Done
apps/studio-local/web typecheck: Done
apps/edge-viewer typecheck: Done
Scope: 4 of 5 workspace projects
packages/schema test$ vitest run
packages/schema test: 
packages/schema test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/packages/schema
packages/schema test: 
packages/schema test:  ✓ test/fov.test.ts (5 tests) 3ms
packages/schema test:  ✓ test/constants.test.ts (4 tests) 3ms
packages/schema test:  ✓ test/tour.test.ts (12 tests) 14ms
packages/schema test: 
packages/schema test:  Test Files  3 passed (3)
packages/schema test:       Tests  21 passed (21)
packages/schema test:    Start at  11:31:05
packages/schema test:    Duration  358ms (transform 106ms, setup 0ms, collect 175ms, tests 20ms, environment 0ms, prepare 185ms)
packages/schema test: 
packages/schema test: Done
apps/edge-viewer test$ vitest run
apps/studio-local/server test$ vitest run
apps/studio-local/web test$ vitest run
apps/edge-viewer test: 
apps/edge-viewer test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/edge-viewer
apps/edge-viewer test: 
apps/studio-local/web test: 
apps/studio-local/web test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/studio-local/web
apps/studio-local/web test: 
apps/studio-local/server test: 
apps/studio-local/server test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/studio-local/server
apps/studio-local/server test: 
apps/edge-viewer test:  ✓ test/texto.test.ts (4 tests) 3ms
apps/studio-local/web test:  ✓ test/estado-tour.test.ts (7 tests) 5ms
apps/studio-local/web test:  ✓ test/mensaje-borrado.test.ts (3 tests) 3ms
apps/edge-viewer test:  ✓ test/worker.test.ts (22 tests) 7ms
apps/edge-viewer test: 
apps/edge-viewer test:  Test Files  2 passed (2)
apps/edge-viewer test:       Tests  26 passed (26)
apps/edge-viewer test:    Start at  11:31:06
apps/edge-viewer test:    Duration  811ms (transform 199ms, setup 0ms, collect 230ms, tests 10ms, environment 0ms, prepare 324ms)
apps/edge-viewer test: 
apps/studio-local/web test:  ✓ test/vista.test.ts (4 tests) 4ms
apps/studio-local/web test: 
apps/studio-local/web test:  Test Files  3 passed (3)
apps/studio-local/web test:       Tests  14 passed (14)
apps/studio-local/web test:    Start at  11:31:06
apps/studio-local/web test:    Duration  943ms (transform 251ms, setup 0ms, collect 302ms, tests 12ms, environment 1ms, prepare 639ms)
apps/studio-local/web test: 
apps/edge-viewer test: Done
apps/studio-local/server test:  ✓ test/store-miniatura.test.ts (1 test) 13ms
apps/studio-local/web test: Done
apps/studio-local/server test:  ✓ test/r2.test.ts (6 tests) 126ms
apps/studio-local/server test: stderr | test/borrar-escena-error.test.ts > punto 1: fs.rm falla al borrar escena — sin 500, con aviso y tour ya guardado > responde 200 + aviso de carpeta no borrada, y el tour.json ya no contiene la escena
apps/studio-local/server test: [borrar escena] no se pudo eliminar la carpeta dist de 01M5RMFA11A000000000000000: EACCES simulado: rm bloqueado
apps/studio-local/server test: 
apps/studio-local/server test:  ✓ test/borrar-escena-error.test.ts (1 test) 103ms
apps/studio-local/server test:  ✓ test/app.test.ts (9 tests) 2465ms
apps/studio-local/server test:    ✓ borrar escena (A4) y relación 2:1 estricta (A6) > admite 2:1 exacto del X5 (11904×5952) y al borrar la escena elimina su carpeta dist/  2169ms
apps/studio-local/server test:  ✓ test/tiler.test.ts (5 tests) 3347ms
apps/studio-local/server test:    ✓ cortador sharp (imagen sintética) > la pirámide genera exactamente 168 tiles con las dimensiones de nivel correctas  3113ms
apps/studio-local/server test: 
apps/studio-local/server test:  Test Files  5 passed (5)
apps/studio-local/server test:       Tests  22 passed (22)
apps/studio-local/server test:    Start at  11:31:06
apps/studio-local/server test:    Duration  4.43s (transform 549ms, setup 0ms, collect 1.67s, tests 6.05s, environment 1ms, prepare 516ms)
apps/studio-local/server test: 
apps/studio-local/server test: Done
$ biome check .
apps/studio-local/web/src/EditorPage.tsx:650:3 lint/correctness/noUnusedFunctionParameters ━━━━━━━━━━

  ! This parameter tour is unused.
  
    648 │ function DetalleEscena({
    649 │   escena,
  > 650 │   tour,
        │   ^^^^
    651 │   job,
    652 │   vistaActual,
  
  i Unused parameters might be the result of an incomplete refactoring.
  

Checked 80 files in 31ms. No fixes applied.
Found 1 warning.
packages/schema build$ tsc -p tsconfig.json
packages/schema build: Done
apps/edge-viewer build$ pnpm build:viewer && tsc -p tsconfig.worker.json && wrangler deploy --dry-run --outdir dist-worker
apps/studio-local/server build$ tsc -p tsconfig.json
apps/studio-local/web build$ vite build
apps/edge-viewer build: $ vite build
apps/edge-viewer build: vite v7.3.7 building client environment for production...
apps/edge-viewer build: transforming...
apps/studio-local/web build: vite v7.3.7 building client environment for production...
apps/studio-local/web build: transforming...
apps/edge-viewer build: ✓ 40 modules transformed.
apps/edge-viewer build: rendering chunks...
apps/edge-viewer build: computing gzip size...
apps/edge-viewer build: ../dist-viewer/index.html                   1.04 kB │ gzip:   0.49 kB
apps/edge-viewer build: ../dist-viewer/assets/index-CXpuqP9x.css   18.42 kB │ gzip:   4.36 kB
apps/edge-viewer build: ../dist-viewer/assets/index-_qa26ZeC.js   803.12 kB │ gzip: 211.43 kB
apps/edge-viewer build: 
apps/edge-viewer build: (!) Some chunks are larger than 500 kB after minification. Consider:
apps/edge-viewer build: - Using dynamic import() to code-split the application
apps/edge-viewer build: - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
apps/edge-viewer build: - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
apps/edge-viewer build: ✓ built in 1.75s
apps/studio-local/server build: Done
apps/studio-local/web build: ✓ 67 modules transformed.
apps/studio-local/web build: rendering chunks...
apps/studio-local/web build: computing gzip size...
apps/studio-local/web build: dist/index.html                   0.40 kB │ gzip:   0.27 kB
apps/studio-local/web build: dist/assets/index-DfaN45ut.css   28.70 kB │ gzip:   6.77 kB
apps/studio-local/web build: dist/assets/index-fOz3OBZk.js   989.13 kB │ gzip: 269.28 kB
apps/studio-local/web build: 
apps/studio-local/web build: (!) Some chunks are larger than 500 kB after minification. Consider:
apps/studio-local/web build: - Using dynamic import() to code-split the application
apps/studio-local/web build: - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
apps/studio-local/web build: - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
apps/studio-local/web build: ✓ built in 2.29s
apps/studio-local/web build: Done
apps/edge-viewer build: 
apps/edge-viewer build:  ⛅️ wrangler 4.151.1
apps/edge-viewer build: ────────────────────
apps/edge-viewer build: ✨ Read 4 files from the assets directory /home/leo/Música/360 MOTOR TOURS/apps/edge-viewer/dist-viewer
apps/edge-viewer build: Total Upload: 204.01 KiB / gzip: 41.02 KiB
apps/edge-viewer build: Your Worker has access to the following bindings:
apps/edge-viewer build: Binding                            Resource       
apps/edge-viewer build: env.TOURS (panoengine-tours)       R2 Bucket      
apps/edge-viewer build: env.ASSETS                         Assets         
apps/edge-viewer build: 
apps/edge-viewer build: --dry-run: exiting now.
apps/edge-viewer build: Done
VERIFY_EXIT=0
```

- **Exit:** 0 (última línea del bloque: `VERIFY_EXIT=0`).
- **Tests:** 83 en total, todos en verde — schema 21, edge-viewer 26, web 14, server 22.
- **Biome:** 1 aviso NO bloqueante (`noUnusedFunctionParameters`: parámetro `tour` sin usar en `DetalleEscena`, `apps/studio-local/web/src/EditorPage.tsx:650`), heredado del refactor E3a/E3b. Esta entrega no toca código; queda señalizado para el auditor.

## Capturas (dentro del commit 642676c)

- `auditoria/estudio-v2-e3b.png` — editor con el botón flotante «Usar esta vista como inicio».
- `auditoria/estudio-v2-e3b-punto.png` — punto seleccionado: marcador neutro con anillo azul de selección y panel de detalle.

## Qué NO se hizo

- E4 («Nivelar horizonte») NO empezado — prohibido hasta el OK del auditor.
- Sin cambios en `RULES.md`, sin Vertientes, sin despliegues, sin `wrangler deploy`, sin push forzado.
- A2 sigue bloqueada: falta `.env` con token R2 S3 en `apps/studio-local/server/`.
- El repo sigue en `Taroscopo/panoengine` (mudanza a `trespa.paginas` pendiente de decisión del propietario).
