# Informe de entrega — E3b-fix (zoom WYSIWYG) + Vencidos en «Por vencer»

- **Commits de esta entrega:** `479b01add5444ac69896a60f4f6d430002b31c94` (E3b-fix — PENDIENTE DE APROBACIÓN del auditor; NO se declara completa) y `9146ab8cad9dcf000c71732410219a222139dd13` («Vencidos en Por vencer», decisión del propietario). Este informe viaja en el commit inmediatamente posterior.
- **Fecha:** 2026-10-18 · **Estado del push:** PENDIENTE — 4 commits esperan el scope `workflow` de GitHub que Andrés autorizará en el paso «subir y auditar CI/CD» (`700c653`, `678fb2f`, `479b01add5444ac69896a60f4f6d430002b31c94`, `9146ab8cad9dcf000c71732410219a222139dd13` + este informe). `origin/main` sigue en `6fb6a1e`.
- **E3b NO está aprobada** y así queda registrado; este informe nunca dice «E3b completa».

## El error de fondo de zoom (diagnóstico y prueba)

- **Diagnóstico:** la conversión de `packages/schema/src/fov.ts` estaba ESPEJADA respecto a Photo Sphere Viewer. Nuestra fórmula decía «nivel 0 = 30°, nivel 100 = 90°»; PSV 5.15.1 (código interno del paquete instalado, `DataHelper`) hace **nivel 0 = maxFov (90°, máxima apertura) y nivel 100 = minFov (30°, máximo zoom)**. Resultado: toda vista guardada desde el estudio llegaba invertida al visor público (p. ej. un `defaultView.fov` de 90° —abierto— se mostraba como zoom al mínimo FOV).
- **Segundo desajuste:** PSV interpola el nivel entre el `minFov`/`maxFov` ACTIVOS; el visor público recorta con `zoomLimitToPsv(escena.zoomLimit)` (por defecto 60–150 → 60–90) pero TODAS las conversiones usaban 30–90 fijos, y el visor del editor usaba los límites por defecto de PSV (30–90). Mismo nivel, distinto FOV en cada lado.
- **Prueba (tabla de FOV medida):** herramienta nueva `packages/schema/tools/medir-fov.mjs` — instancia el MISMO `@photo-sphere-viewer/core` 5.15.1 + three 0.185.1 del estudio en Chromium real (SwiftShader) y mide `viewer.state.vFov` para cada nivel 0–100 (paso 5), con límites 30–90 y 60–90. Salida íntegra abajo. La tabla `TABLA_FOV_MEDIDA` vive ahora en `fov.ts` y los tests exigen que la fórmula coincida con lo medido (±0.5°).

### Salida literal de la medición (JSON, /tmp→ tabla volcada a fov.ts)

```json
{"core":"5.15.1","three":"0.185.1","30-90":{"0":90,"5":87,"10":84,"15":81,"20":78,"25":75,"30":72,"35":69,"40":66,"45":63,"50":60,"55":57,"60":54,"65":51,"70":48,"75":45,"80":42,"85":39,"90":36,"95":33,"100":30},"60-90":{"0":90,"5":88.5,"10":87,"15":85.5,"20":84,"25":82.5,"30":81,"35":79.5,"40":78,"45":76.5,"50":75,"55":73.5,"60":72,"65":70.5,"70":69,"75":67.5,"80":66,"85":64.5,"90":63,"95":61.5,"100":60}}
```

## Qué cambió — commit E3b-fix (`479b01add5444ac69896a60f4f6d430002b31c94`)

1. `packages/schema/src/fov.ts`: dirección corregida a la REAL de PSV (`zoomLvlToFov = maxFov − nivel/100·(maxFov−minFov)`; `fovToZoomLvl` = reflejo con redondeo, idéntico a PSV), con `TABLA_FOV_MEDIDA` y documentación de proveniencia. Ambas funciones aceptan los **límites activos**.
2. Call-sites con límites activos: `app.ts` del visor (`defaultZoomLvl`, `targetFov` con los límites del NODO DESTINO, intro planeta), `vista.ts` (`zoomLvlAFovGrados`/`vistaAGrados` con `limites`).
3. `PanoPreview.tsx`: el visor del editor adopta `minFov`/`maxFov = zoomLimitToPsv(escena.zoomLimit)` (en creación y en vivo con `setOptions` al editarlos) — el editor y el visor público quedan con los mismos límites.
4. Botón «Usar esta vista como inicio» ahora `bottom-14`: flota SOBRE la navbar de PSV (40 px) sin tapar el deslizador ni pantalla completa (antes los cubría).
5. Lint: parámetro `tour` fuera de `DetalleEscena` → **biome sin ningún aviso**.
6. Tests: schema 23 (dirección medida, límites 60–90, tabla ±0.5°, recortes, round-trips, zoomLimitToPsv) y web 16 (vista con y sin límites).

## Qué cambió — commit Vencidos en «Por vencer» (`9146ab8cad9dcf000c71732410219a222139dd13`) — decisión del propietario

1. `estado-tour.ts`: `pasaFiltro('vencido','por-vencer') = true` — los vencidos cuentan en el filtro y contador de «Por vencer»; siguen en «Todos»; NO en «Activos» ni «Suspendidos» (tests actualizados para exactamente eso).
2. `ToursPage.tsx`: texto «Venció hace N días» en ROJO (por-vencer sigue en ámbar); resumen superior «N vence pronto o venció/vencen pronto o vencieron».

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
packages/schema test:  ✓ test/fov.test.ts (7 tests) 5ms
packages/schema test:  ✓ test/constants.test.ts (4 tests) 4ms
packages/schema test:  ✓ test/tour.test.ts (12 tests) 15ms
packages/schema test: 
packages/schema test:  Test Files  3 passed (3)
packages/schema test:       Tests  23 passed (23)
packages/schema test:    Start at  21:50:42
packages/schema test:    Duration  369ms (transform 89ms, setup 0ms, collect 162ms, tests 24ms, environment 0ms, prepare 178ms)
packages/schema test: 
packages/schema test: Done
apps/edge-viewer test$ vitest run
apps/studio-local/server test$ vitest run
apps/studio-local/web test$ vitest run
apps/studio-local/web test: 
apps/studio-local/web test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/studio-local/web
apps/studio-local/web test: 
apps/studio-local/server test: 
apps/studio-local/server test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/studio-local/server
apps/studio-local/server test: 
apps/edge-viewer test: 
apps/edge-viewer test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/edge-viewer
apps/edge-viewer test: 
apps/edge-viewer test:  ✓ test/texto.test.ts (4 tests) 4ms
apps/studio-local/web test:  ✓ test/estado-tour.test.ts (7 tests) 5ms
apps/studio-local/web test:  ✓ test/mensaje-borrado.test.ts (3 tests) 7ms
apps/edge-viewer test:  ✓ test/worker.test.ts (22 tests) 9ms
apps/edge-viewer test: 
apps/edge-viewer test:  Test Files  2 passed (2)
apps/edge-viewer test:       Tests  26 passed (26)
apps/edge-viewer test:    Start at  21:50:43
apps/edge-viewer test:    Duration  878ms (transform 103ms, setup 0ms, collect 129ms, tests 13ms, environment 0ms, prepare 244ms)
apps/edge-viewer test: 
apps/studio-local/web test:  ✓ test/vista.test.ts (6 tests) 5ms
apps/studio-local/web test: 
apps/studio-local/web test:  Test Files  3 passed (3)
apps/studio-local/web test:       Tests  16 passed (16)
apps/studio-local/web test:    Start at  21:50:43
apps/studio-local/web test:    Duration  960ms (transform 234ms, setup 0ms, collect 335ms, tests 16ms, environment 1ms, prepare 558ms)
apps/studio-local/web test: 
apps/studio-local/server test:  ✓ test/store-miniatura.test.ts (1 test) 12ms
apps/edge-viewer test: Done
apps/studio-local/web test: Done
apps/studio-local/server test:  ✓ test/r2.test.ts (6 tests) 132ms
apps/studio-local/server test: stderr | test/borrar-escena-error.test.ts > punto 1: fs.rm falla al borrar escena — sin 500, con aviso y tour ya guardado > responde 200 + aviso de carpeta no borrada, y el tour.json ya no contiene la escena
apps/studio-local/server test: [borrar escena] no se pudo eliminar la carpeta dist de 01M5RMFA11A000000000000000: EACCES simulado: rm bloqueado
apps/studio-local/server test: 
apps/studio-local/server test:  ✓ test/borrar-escena-error.test.ts (1 test) 63ms
apps/studio-local/server test:  ✓ test/app.test.ts (9 tests) 2489ms
apps/studio-local/server test:    ✓ borrar escena (A4) y relación 2:1 estricta (A6) > admite 2:1 exacto del X5 (11904×5952) y al borrar la escena elimina su carpeta dist/  2208ms
apps/studio-local/server test:  ✓ test/tiler.test.ts (5 tests) 3463ms
apps/studio-local/server test:    ✓ cortador sharp (imagen sintética) > la pirámide genera exactamente 168 tiles con las dimensiones de nivel correctas  3221ms
apps/studio-local/server test: 
apps/studio-local/server test:  Test Files  5 passed (5)
apps/studio-local/server test:       Tests  22 passed (22)
apps/studio-local/server test:    Start at  21:50:43
apps/studio-local/server test:    Duration  4.58s (transform 464ms, setup 0ms, collect 1.53s, tests 6.16s, environment 1ms, prepare 671ms)
apps/studio-local/server test: 
apps/studio-local/server test: Done
$ biome check .
Checked 81 files in 39ms. No fixes applied.
packages/schema build$ tsc -p tsconfig.json
packages/schema build: Done
apps/edge-viewer build$ pnpm build:viewer && tsc -p tsconfig.worker.json && wrangler deploy --dry-run --outdir dist-worker
apps/studio-local/server build$ tsc -p tsconfig.json
apps/studio-local/web build$ vite build
apps/edge-viewer build: $ vite build
apps/edge-viewer build: vite v7.3.7 building client environment for production...
apps/studio-local/web build: vite v7.3.7 building client environment for production...
apps/edge-viewer build: transforming...
apps/studio-local/web build: transforming...
apps/edge-viewer build: ✓ 40 modules transformed.
apps/edge-viewer build: rendering chunks...
apps/edge-viewer build: computing gzip size...
apps/edge-viewer build: ../dist-viewer/index.html                   1.04 kB │ gzip:   0.49 kB
apps/edge-viewer build: ../dist-viewer/assets/index-CXpuqP9x.css   18.42 kB │ gzip:   4.36 kB
apps/edge-viewer build: ../dist-viewer/assets/index-DgmAIHwU.js   803.20 kB │ gzip: 211.47 kB
apps/edge-viewer build: 
apps/edge-viewer build: (!) Some chunks are larger than 500 kB after minification. Consider:
apps/edge-viewer build: - Using dynamic import() to code-split the application
apps/edge-viewer build: - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
apps/edge-viewer build: - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
apps/edge-viewer build: ✓ built in 1.92s
apps/studio-local/server build: Done
apps/studio-local/web build: ✓ 67 modules transformed.
apps/studio-local/web build: rendering chunks...
apps/studio-local/web build: computing gzip size...
apps/studio-local/web build: dist/index.html                   0.40 kB │ gzip:   0.28 kB
apps/studio-local/web build: dist/assets/index-CN4Q_QaX.css   28.70 kB │ gzip:   6.77 kB
apps/studio-local/web build: dist/assets/index-KY3OX36t.js   989.60 kB │ gzip: 269.93 kB
apps/studio-local/web build: 
apps/studio-local/web build: (!) Some chunks are larger than 500 kB after minification. Consider:
apps/studio-local/web build: - Using dynamic import() to code-split the application
apps/studio-local/web build: - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
apps/studio-local/web build: - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
apps/studio-local/web build: ✓ built in 2.40s
apps/studio-local/web build: Done
apps/edge-viewer build: 
apps/edge-viewer build:  ⛅️ wrangler 4.151.1 (update available 4.151.2)
apps/edge-viewer build: ───────────────────────────────────────────────
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
\`\`\`

- **Exit:** 0. **Tests:** 87 (schema 23, edge-viewer 26, web 16, server 22). **Biome:** 0 errores, 0 avisos (el aviso histórico del parámetro \`tour\` quedó resuelto).

## Capturas (build fresco + servidor reiniciado antes de capturar)

- \`auditoria/estudio-v2-e3b-fix.png\` — editor: botón flotante SOBRE la barra de PSV sin tapar controles; panorámica renderizada; marcador visible.
- \`auditoria/estudio-v2-e3b-fix-punto.png\` — marcador con anillo AZUL de selección + panel «Editando punto · Información» + «Eliminar punto».
- \`auditoria/estudio-v2-vencidos.png\` — lista con «2 tours · 1 activo · 1 vence pronto o venció», filtros Todos 2 / Activos 1 / Por vencer 1 / Suspendidos 0, tarjeta «Vencido» con «Venció hace N días» en rojo.

## Decisiones del propietario registradas (también en auditoria/BACKLOG.md)

1. **Taroscopo es y sigue siendo el dueño del repo.** Push SOLO con acceso Taroscopo vía gh/HTTPS; prohibida la clave SSH de \`trespapaginas-source\` y tocar \`~/.ssh\`; Secrets y entorno \`staging\` en \`Taroscopo/panoengine\`. **Ejecutado:** \`~/.ssh/config\` restaurado del respaldo (diff verificado idéntico al original; respaldo eliminado). Queda una entrada de clave de host de \`ssh.github.com\` en \`known_hosts\` (inerte, no se usará).
2. **Vencidos en «Por vencer»** — implementada en \`$H2\` (arriba).

## Backlog anotado (orden de Andrés, sin construir)

- (a) Publicar un tour SIN escenas → error claro en español.
- (b) El botón «Publicar» debe usar el \`edgeUrl\` del servidor (E7).
- Registro completo en \`auditoria/BACKLOG.md\`.

## Propuesta H1 — cabeceras de seguridad del Worker (SOLO PROPUESTA; nada tocado)

Orden: «antes de tocar nada, propón qué cabeceras pondrías y cómo se comportan con el visor (PSV, tiles, Range/ETag)». Propuesta:

| Cabecera | Valor | Comportamiento con el visor |
|---|---|---|
| \`X-Content-Type-Options\` | \`nosniff\` | Todas las respuestas (HTML, JSON, tiles webp). Sin efecto en PSV (canvas/WebGL); evita que el navegador reinterprete el MIME de tiles o del tour.json. |
| \`Referrer-Policy\` | \`strict-origin-when-cross-origin\` | Enlaces salientes (wa.me de WhatsApp) reciben solo el origen; tiles y assets son mismo origen y no cambian. |
| \`Permissions-Policy\` | \`camera=(), microphone=(), geolocation=(), payment=()\` | El visor no usa ninguna de estas APIs. Ojo futuro: una vertiente con giroscopio/WebXR exigiría permitir \`gyroscope\`/\`xr-spatial-tracking\`. |
| \`X-Frame-Options\` / CSP \`frame-ancestors\` | **PENDIENTE DE DECISIÓN** | Los tours podrían necesitar EMBEBERSE en webs de clientes; \`SAMEORIGIN\` lo bloquearía. Propuesta: no añadirla en H1 y, cuando se ordene, usar CSP \`frame-ancestors\` configurable. |
| CSP completa | **Postergada** | PSV usa estilos/scripts inline; una CSP estricta exige nonces/hashes y pruebas. Mejor H2/producción, no H1. |

- **Range/ETag:** las cabeceras se añaden como middleware a TODAS las respuestas SIN tocar \`Cache-Control\`/\`ETag\`/\`Accept-Ranges\` → 206/304/416 quedan intactos; los tests del Worker se amplían para exigirlas (incluidas las de error 404/402/410, que hoy ya llevan \`no-store\`).
- **Smoke de staging:** el paso de cabeceras del smoke del CI se ampliaría para exigir \`nosniff\` en la 404.

## Qué NO se hizo

- **Ningún push** (esperando el scope \`workflow\`; 5 commits en cola incluido este informe). Sin fuerza, sin deploy, Cloudflare intacta.
- E4 NO empezado (prohibido hasta OK). H1 sin código (solo esta propuesta). Sin cambios en \`RULES.md\`, \`wrangler.jsonc\` ni \`wrangler.staging.jsonc\`.
- El \`workspace/\` local tiene solo los 2 tours SINTÉTICOS de las capturas (\`demo-e3b\` vencido + \`aurora\`); jamás fotos de clientes.
