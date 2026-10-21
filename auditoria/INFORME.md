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
```
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

## Sección pedida por el auditor — significado de «fov», schemaVersion y vista del visitante

**(a) Cómo cambia el significado del «fov» guardado.** El campo no cambia: `defaultView.fov` y `targetFov` siguen siendo FOV vertical en grados con el mismo dominio del schema (convención krpano). Lo que cambia es la CONVERSIÓN contra PSV, que estaba espejada: antes, un fov guardado de 90° se aplicaba como nivel 100 (máximo acercamiento) y el editor, al guardar desde el nivel 0 (abierto), escribía 30°. Ahora el número guardado SIGNIFICA lo que dice — fov 90 = vista más abierta, fov 30 = máximo acercamiento, siempre dentro de los límites activos de la escena. Los tour.json escritos bajo el bug mostraban otra cosa de la que declaraban; con el arreglo muestran exactamente lo que el schema siempre documentó.

**(b) ¿Hace falta subir schemaVersion o migrar tours existentes? NO**, por tres razones. (1) El contrato persistido es idéntico: schema, dominios y defaults intactos (`fovSchema`, `defaultView.fov` por defecto 90, `zoomLimit` 60–150); un tour.json viejo valida hoy y uno nuevo habría validado ayer. (2) El fix reinterpreta los datos hacia su significado DOCUMENTADO — el defecto estaba en el código de conversión, no en los datos — así que no existe ningún valor cuyo significado pretendido quede traicionado. (3) No hay tours reales afectados: el único workspace local contiene los 2 tours sintéticos de demo y jamás se publicó nada a ningún bucket (A2 pendiente). Además `revHash` no cubre `defaultView`/fov (solo los bytes del master y el descriptor del pipeline), de modo que tiles y caché inmutable quedan intactos: nada que re-trocear ni re-publicar por esto. `schemaVersion` sigue en 1.

**(c) Qué ve un visitante hoy en una escena con zoomLimit por defecto (60–150 → recortado a minFov 60 / maxFov 90):**
- `defaultView.fov = 90` → nivel 0 → FOV vertical **90°: la vista más abierta que la escena permite**; así arranca el visitante. Antes del fix: nivel 100 → 60° reales → arrancaba con el máximo acercamiento.
- `defaultView.fov = 60` → nivel 100 → FOV vertical **60°: el máximo acercamiento permitido** por ese zoomLimit. Antes del fix: nivel 50 → 75° reales.
- Referencia de la tabla medida con límites 60–90: nivel 0 → 90°, nivel 50 → 75°, nivel 100 → 60°.

## Regla nueva del auditor (registrada)

- **`analyze_image` (o cualquier herramienta que suba capturas a un servidor externo) queda PROHIBIDA con datos reales de clientes**; solo con datos de demostración. Preferir la descripción propia o la medición por código (colores de píxeles, posiciones del DOM). Nota de cumplimiento: todas las capturas analizadas hasta la fecha contenían exclusivamente datos sintéticos de demo (tours «Demo E3b-fix» y «Hotel Aurora»).

---

## Nota de Cloudflare — el Worker de staging «ya existe»: investigación y flags explícitos

**Investigación (solo lectura; cuenta `6eecb0304c90ebf93e1e209dfd989f9a` confirmada = OAuth local de wrangler, correo trespa.paginas@gmail.com, subdominio `trespa-paginas`):**

- `GET /accounts/:id/workers/scripts` (API): la cuenta contiene ~20 Workers de OTROS proyectos de la agencia — **ninguno se llama `panoengine-*`**: `panoengine-edge-viewer-staging` **no existe como script**.
- `wrangler versions list` y `wrangler deployments list` con `wrangler.staging.jsonc`: ambos **vacíos** — ni versiones ni despliegues, jamás.
- **¿Lo creé yo en un despliegue anterior? NO.** Nunca ejecuté `wrangler deploy` (prohibido por RULES §9 y sin orden expresa). El único intento de la historia fue el del workflow «Deploy staging» del 2026-10-20, que murió ANTES de hacer ninguna llamada a la API — error literal del log: `[ERROR] In a non-interactive environment, it's necessary to set a CLOUDFLARE_API_TOKEN environment variable for wrangler to work…` — y un fallo de autenticación ocurre antes de cualquier operación de creación.
- **¿Desde cuándo existe? No existe.** La URL `panoengine-edge-viewer-staging.trespa-paginas.workers.dev` se ve «desactivada» porque es el estado natural de un nombre sin Worker detrás: workers.dev responde así a cualquier subdominio no desplegado. El config de staging existe desde el 2026-10-18 (commits `fbdbbd4`/`983a89b`) y solo se usó para dry-run y dev. El **primer despliegue del CI** (cuando existan los secrets) **creará** el Worker y, con `workers_dev: true`, **activará** su URL — curando exactamente lo que el panel muestra hoy.

**Cambios aplicados (`apps/edge-viewer/wrangler.staging.jsonc`):** `"workers_dev": true` (publicar siempre en workers.dev; sin depender del estado del panel) y `"preview_urls": false` (sin URLs de vista previa por versión). Validación con `wrangler deploy --dry-run --config wrangler.staging.jsonc` SIN credenciales → **exit 0**, mismos bindings (`TOURS → panoengine-tours-staging`, `ASSETS`, 4 assets, 204.01 KiB).

**Smoke — extracción de URL verificada por código** (sin herramientas externas, según la regla nueva): el patrón exacto del workflow (`grep -Eo 'https://[a-z0-9-]+\.[a-z0-9-]+\.workers\.dev'`) aplicado a la línea canónica de salida de wrangler extrae literalmente `https://panoengine-edge-viewer-staging.trespa-paginas.workers.dev`. Las URL de vista previa (3 etiquetas, `<hash>.<nombre>.<subdominio>.workers.dev`) NO casan con el patrón, y con `preview_urls: false` no aparecerán en la salida.

**`pnpm verify` tras el cambio (literal, exit 0 — 87 tests: schema 23, edge-viewer 26, web 16, server 22):**

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
packages/schema test:  ✓ test/fov.test.ts (7 tests) 3ms
packages/schema test:  ✓ test/constants.test.ts (4 tests) 4ms
packages/schema test:  ✓ test/tour.test.ts (12 tests) 10ms
packages/schema test: 
packages/schema test:  Test Files  3 passed (3)
packages/schema test:       Tests  23 passed (23)
packages/schema test:    Start at  01:23:51
packages/schema test:    Duration  347ms (transform 95ms, setup 0ms, collect 159ms, tests 18ms, environment 0ms, prepare 146ms)
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
apps/edge-viewer test:  ✓ test/texto.test.ts (4 tests) 3ms
apps/edge-viewer test:  ✓ test/worker.test.ts (22 tests) 9ms
apps/studio-local/web test:  ✓ test/mensaje-borrado.test.ts (3 tests) 3ms
apps/edge-viewer test: 
apps/edge-viewer test:  Test Files  2 passed (2)
apps/edge-viewer test:       Tests  26 passed (26)
apps/edge-viewer test:    Start at  01:23:51
apps/edge-viewer test:    Duration  753ms (transform 184ms, setup 0ms, collect 193ms, tests 12ms, environment 0ms, prepare 319ms)
apps/edge-viewer test: 
apps/studio-local/web test:  ✓ test/estado-tour.test.ts (7 tests) 13ms
apps/studio-local/web test:  ✓ test/vista.test.ts (6 tests) 5ms
apps/studio-local/web test: 
apps/studio-local/web test:  Test Files  3 passed (3)
apps/studio-local/web test:       Tests  16 passed (16)
apps/studio-local/web test:    Start at  01:23:51
apps/studio-local/web test:    Duration  923ms (transform 267ms, setup 0ms, collect 358ms, tests 21ms, environment 1ms, prepare 450ms)
apps/studio-local/web test: 
apps/studio-local/server test:  ✓ test/store-miniatura.test.ts (1 test) 11ms
apps/edge-viewer test: Done
apps/studio-local/web test: Done
apps/studio-local/server test:  ✓ test/r2.test.ts (6 tests) 145ms
apps/studio-local/server test: stderr | test/borrar-escena-error.test.ts > punto 1: fs.rm falla al borrar escena — sin 500, con aviso y tour ya guardado > responde 200 + aviso de carpeta no borrada, y el tour.json ya no contiene la escena
apps/studio-local/server test: [borrar escena] no se pudo eliminar la carpeta dist de 01M5RMFA11A000000000000000: EACCES simulado: rm bloqueado
apps/studio-local/server test: 
apps/studio-local/server test:  ✓ test/borrar-escena-error.test.ts (1 test) 64ms
apps/studio-local/server test:  ✓ test/app.test.ts (9 tests) 2412ms
apps/studio-local/server test:    ✓ borrar escena (A4) y relación 2:1 estricta (A6) > admite 2:1 exacto del X5 (11904×5952) y al borrar la escena elimina su carpeta dist/  2149ms
apps/studio-local/server test:  ✓ test/tiler.test.ts (5 tests) 3233ms
apps/studio-local/server test:    ✓ cortador sharp (imagen sintética) > la pirámide genera exactamente 168 tiles con las dimensiones de nivel correctas  2997ms
apps/studio-local/server test: 
apps/studio-local/server test:  Test Files  5 passed (5)
apps/studio-local/server test:       Tests  22 passed (22)
apps/studio-local/server test:    Start at  01:23:51
apps/studio-local/server test:    Duration  4.24s (transform 603ms, setup 0ms, collect 1.50s, tests 5.87s, environment 1ms, prepare 887ms)
apps/studio-local/server test: 
apps/studio-local/server test: Done
$ biome check .
Checked 81 files in 32ms. No fixes applied.
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
apps/edge-viewer build: ✓ built in 1.63s
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
apps/studio-local/web build: ✓ built in 2.13s
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
```

---

## Editor a resolución máxima + zoom nativo con rueda (orden directa de Andrés)

**Qué pidió el propietario:** ver la panorámica a resolución máxima mientras trabaja en el editor y hacer zoom con la rueda del mouse de forma nativa (antes exigía Ctrl).

**Qué se hizo:**
1. `PanoPreview` usa ahora `EquirectangularTilesAdapter` —el MISMO adaptador del visor público— en cuanto el job de la pirámide termina (`job.status === 'done'` → `api.panoramaTiles(slug, escena)`, nuevo constructor del objeto de tiles con expansión de `{level}/{row}/{col}`); mientras procesa sigue mostrando el preview rápido. El visor se recrea solo al cambiar de escena o al terminar el job (marcadores repintados).
2. Fuera `mousewheelCtrlKey` → la rueda hace zoom nativo.
3. Dependencia: `@photo-sphere-viewer/equirectangular-tiles-adapter` añadida al importador de studio-web — **misma versión ya presente en el lockfile** (5.15.1, la que usa edge-viewer); cero descargas nuevas, solo el importer del lockfile.

**Verificación POR CÓDIGO** (regla nueva: sin herramientas de imagen; la escena «aurora» contiene foto real del cliente):
- Conteo de peticiones de tiles por nivel + posición del handle de zoom del navbar (`.psv-zoom-range-handle`): con solo la rueda (sin Ctrl) el handle pasó de `36.5px` a `76.5px`.
- En vista abierta el adaptador carga l1 (mosaico 5120×2560 = 5× la resolución lineal del preview de 1024×512 — por eso se ve nítido ya sin acercar).
- Con el `zoomLimit` de la demo abierto a 30° (PATCH vía API, dato local) y acercando al máximo se cargaron **16 tiles l2** (704×704 cada uno, nivel máximo 11264×5632): `tiles: {"l0":0,"l1":4,"l2":16}`, handle móvil — VERIFICADO.
- La captura `auditoria/estudio-v2-editor-tiles.png` (zoom profundo sobre la foto real) queda en el repo como evidencia visual; NO se analizó con servicios externos.
- `pnpm verify` exit 0, 87 tests (23+26+16+22), biome sin avisos.

**Nota:** el `zoomLimit` de la escena demo «aurora» quedó en min 30 / max 150 (vía API, workspace local) para permitir inspección de detalle a máximo acercamiento.

---

## Grupos, arrastre, renombrado y sustitución de panorámicas (orden directa de Andrés)

**Qué pidió el propietario:** crear grupos de imágenes (p. ej. 5 en un grupo, 5 en otro), arrastrar cada panorámica para posicionarla, editar su nombre fácilmente y un botón para sustituirla por otra foto.

**Qué se construyó:**
1. **Schema** (sin bump de `schemaVersion`): `tour.groups` opcional (`{id ULID, nombre}`, default `[]` — los tour.json viejos migran igual) y `scene.groupId` opcional; el contrato publicado valida que cada `groupId` corresponda a un grupo existente. Tests: tour nuevo nace con `groups: []`, migración de v1 sin groups, grupo+groupId coherentes, groupId huérfano rechazado.
2. **Servidor**: `PATCH /api/tours/:slug` acepta `groups` (lista que sustituye; ids sin duplicar) y `sceneOrder` (permutación EXACTA de las escenas actuales con su grupo destino; null = sin grupo) — tests de reordenación, 400 por repetición/falta/groupId inexistente, y borrado de grupo mandando sus escenas a «Sin grupo». Nueva ruta `POST /api/tours/:slug/scenes/:sceneId/replace`: valida JPG real ≥4000px 2:1 como la subida, respalda el master (rollback si la fase rápida falla), re-tilea en carpeta de revisión NUEVA, conserva **id, nombre, grupo, puntos, vista y límites**, re-extrae GPS, limpia la carpeta de la revisión vieja (patrón del DELETE) y avisa si no puede. Tests: conserva todo + cambia revHash + limpia revisión vieja; 415 con no-JPG; 404 escena inexistente.
3. **Editor (columna izquierda, nuevo componente `ListaEscenas`)**: grupos plegables con «Nuevo grupo» (nace en edición de nombre), renombrado de grupo (clic en el nombre), borrado de grupo (sus escenas pasan a «Sin grupo», con aviso), contador por grupo; **arrastrar y soltar** HTML5 con destino resaltado (fila = insertar encima; cabecera/zona vacía = al final del grupo) que persiste el orden global real; **renombrado inline** de escenas (lápiz o doble flujo, Enter guarda / Escape cancela); **botón «Sustituir»** (icono intercambiar) que abre el selector de archivo y sustituye conservando los puntos; accesibilidad pedida por biome (nombres de grupo como botones, selección de escena en botón con `aria-current`, suppressions justificadas solo para autoFocus del renombrado y objetivos de drop).

**Verificación POR CÓDIGO** (regla nueva: la escena contiene fotos reales del cliente; sin herramientas de imagen): en Chromium real contra el tour «aurora» del propietario — crear grupo y renombrarlo inline (PATCH groups → 200, «Piso 1»), arrastre con eventos HTML5 nativos (DataTransfer) moviendo una escena a «Piso 1» (PATCH sceneOrder → 200, `groupId` persistido en tour.json), Escape en el renombrado de escena sin cambios, botón «Sustituir» presente con su título. El tour del propietario se revirtió EXACTAMENTE a su estado anterior tras la prueba (groups [], 5 escenas). Captura `auditoria/estudio-v2-grupos.png`.

**`pnpm verify` completo: exit 0 — 103 tests** (schema 27, edge-viewer 26, web 21, server 29), biome 0 errores 0 avisos. Nota: durante la verificación se detectó que un proceso de servidor viejo (schema anterior) sobrevivía a los reinicios y causaba un `groups: AUSENTE`; se reinició de verdad y todo respondió. Los grupos son SOLO organización del editor: el visor público no cambia (ordena por tour.scenes, que ya refleja los grupos).

---

## Testeo E2E completo del editor (orden de Andrés) — 2 bugs reales hallados y corregidos

**Metodología:** contra un CLON del tour real del propietario («prueba-e2e», fotos reales, borrado al terminar) para no pisar su edición en vivo; verificación por código (API + DOM + peticiones), sin herramientas de imagen externas; reversión exacta a la línea base al final.

**Flujo verificado (TODO VERDE):** crear 2 grupos y renombrarlos inline · arrastrar escenas entre grupos (inserción ENCIMA de otra escena incluida) con persistencia del orden global real · plegar/desplegar grupos · añadir punto «Ir a otra escena» con un clic en la panorámica · editar título, destino, giro/altura/zoom de llegada (25°/-5°/60°) y transición · zoom nativo con rueda · rotar la vista y guardarla como inicial («Vista inicial guardada» + defaultView persistido) · renombrar escena desde la lista · añadir punto de información · eliminar punto. Capturas: `estudio-v2-e2e-punto.png` y `estudio-v2-e2e-grupos.png`.

**Bug 1 (corregido):** al añadir un punto con clic, PSV puede devolver yaw fuera de (−180,180] (p. ej. 360°) o pitch fuera de ±90; `PanoPreview` lo multiplicaba crudo y el PATCH rebotaba con 400 «Cuerpo de escena inválido» → el punto NO se creaba (intermitente según dónde cayera el clic). Fix: usar los normalizadores ya testeados `radANormalizadoGiroGrados`/`radAAlturaGrados` de `vista.ts`.

**Bug 2 (corregido):** tras crear un punto, el panel derecho seguía en «Escena» en vez de pasar a «Editando punto». Fix: `setPanelDerecho('punto')` al crearlo.

`pnpm verify` tras ambos fixes: exit 0, 103 tests, biome limpio.

---

## H1 (endurecimiento) + E4 «Nivelar horizonte» — hoja de ruta EDITOR v2, etapa 1

**H1a — /files solo sirve dist/:** guard en el hook `onRequest` (`app.ts`): bajo `/files/` solo se admite `^/files/tours/{slug-kebab}/dist/` (masters, tour.json de borrador, manifest y cualquier otra ruta → 404; URL malformada → 404). Verificado en vivo (`curl` a `/files/tours/demo-e3b/tour.json` → 404) y con 3 tests nuevos (`files-dist.test.ts`).

**H1b — freno anti-producción:** `wrangler.jsonc` renombrado a **`wrangler.produccion.jsonc`** → un `wrangler deploy` desnudo en `apps/edge-viewer` FALLA (ya no hay config por defecto). `build` y `dev` apuntan explícitamente al config de producción (dry-run/dev); el smoke usa `--config`. Única vía local de deploy real: `pnpm deploy:produccion` → `scripts/desplegar-produccion.mjs`, que exige `PANOENGINE_ORDEN_PRODUCCION=CONFIRMADO` (lógica tipada en `scripts/freno.ts`, 2 tests). Sin la variable se detiene sin tocar nada.

**H1c — cabeceras de seguridad del Worker (propuesta auditada):** middleware Hono `use('*')` añade a TODAS las respuestas `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`. Sin tocar Cache-Control/ETag/Range (206/304/416 intactos). `frame-ancestors` sigue PENDIENTE de decisión (embebido en webs de clientes). **Primera suite HTTP del Worker** (`worker-http.test.ts`, 3 tests vía `app.request` con R2/ASSETS de mentira): healthz 200 con las tres cabeceras; tour inexistente 404 HTML no-store CON nosniff; path con `..` codificado → 400/404 con nosniff. El smoke del CI ahora exige `nosniff` en la 404.

**E4 — Nivelar horizonte:** `PATCH /scenes/:id` acepta `sphereCorrection` (objeto completo {pan,tilt,roll} en grados; `null` lo quita) con validación ±180 (4 tests: válido persiste en disco, pan 181/tilt −181/roll 999 → 400 SIN tocar el tour, null quita, ±180 exactos válidos). UI: tarjeta «Nivelar horizonte» en el panel de escena con 3 deslizadores («Girar la foto», «Inclinar adelante-atrás», «Inclinar hacia un lado»), **autoguardado con debounce 600 ms** + indicador «Guardando…/Guardado/Error en rojo», y «Restablecer» (PATCH null). La corrección se aplica **EN VIVO** en el visor del editor con la misma opción que el visor público (grados→radianes).

**Bug hallado y corregido durante la etapa:** `setOptions({sphereCorrection})` ANTES de «ready» revienta el renderer de PSV («Cannot read properties of undefined (reading 'rotation')») — se aplica en la creación vía config y los cambios en vivo solo tras `ready` (ref de guarda).

**Verificación en vivo (tour demo, código, no imágenes):** slider de «Inclinar hacia un lado» a −15° con teclado → PATCH automático → API devuelve `{"pan":0,"tilt":0,"roll":-15}` → indicador «Guardado» visible → captura → «Restablecer» → campo eliminado. Captura: `auditoria/estudio-v2-e4-nivelar.png`.

**`pnpm verify` (literal, exit 0): 115 tests** (schema 27, edge-viewer 31, web 21, server 36 — **+12 nuevos**), biome sin errores ni avisos.

```text

---

## H1-fix + E4-fix (auditoría de Cloudy sobre 90ba94e — aprobada con condiciones)

**CI del commit auditado 90ba94e: `success`** (56 s; «Deploy staging» en rojo solo por falta de secrets, como está documentado).

### 1) H1a — bypass de /files cerrado (doble barrera)
**Antes (curl real, server corriendo):**
```
/files/tours/demo-e3b/dist/..%2fmasters/01M5BK5YSMKFGZ8CKFSTS4YG59.jpg → 200 241975B
/files/tours/demo-e3b/dist/%2e%2e%2fmasters/01M5BK5YSMKFGZ8CKFSTS4YG59.jpg → 200 241975B
/files/tours/demo-e3b/dist/..%2ftour.json → 200 1894B
```
**Después (mismo server reiniciado con el fix):**
```
/files/tours/demo-e3b/dist/..%2fmasters/01M5BK5YSMKFGZ8CKFSTS4YG59.jpg → 404
/files/tours/demo-e3b/dist/%2e%2e%2fmasters/01M5BK5YSMKFGZ8CKFSTS4YG59.jpg → 404
/files/tours/demo-e3b/dist/..%2ftour.json → 404
(/files/.../scenes/<id>-<rev>/preview.webp → 200, el legítimo sigue)
```
Arreglo: tras decodificar se rechaza cualquier «..», «\», NUL o segmento «.»/vacío; segunda barrera con `path.resolve` exigiendo quedar dentro de `{dataDir}/tours/{slug}/dist/`. Tests: 9 rutas de bypass/segmentos raros → 404 + legítimo 200 (files-dist.test.ts ahora 5 casos).

### 2) E4 — la corrección guardada ya se aplica al recargar y al cambiar de escena
Causa confirmada (la de la auditoría): estado inicial asíncrono + efecto vivo guardado por `listoRef`. Fix: valor inicial derivado **síncronamente** (`useMemo` sobre `escena.sphereCorrection`; la edición vive aparte etiquetada por id, así los guardados no pisan los sliders) + aplicación también en el handler `'ready'`. **Verificación POR CÓDIGO en Chromium** (medición de píxeles con pngjs en local, sin herramientas externas; el proxy del marcador NO vale porque los puntos no acompañan a la foto — ver punto 3):
- sin corrección: verde medio de la columna central del canvas = 111.2 (foto demo = degradado);
- `pan=40` por API + **RECARGAR**: verde = 118.1 (**Δ=6.8 ≈ teórico 80·(40/360)=8.9** → la foto rotó en el visor) y el panel muestra 40;
- **Restablecer**: verde vuelve a 111.2 (Δ=0.0) y `sphereCorrection` desaparece del tour.json;
- cambio de escena A (sin corrección) → B (pan −25): el panel muestra −25; al volver a A muestra 0.

### 3) Marcadores vs. sphereCorrection — medición + propuesta (NO arreglado, según orden)
**Medición propia que confirma la de Cloudy:** con pan=40 la foto cambia (Δcolor=6.8) y el marcador queda en x=694 px **exacto** (Δx=0.0). Nivelar después de poner puntos desplaza la foto bajo ellos.
- **(A) IMPLEMENTADO:** aviso ámbar en la tarjeta «Nivelar horizonte» cuando la escena tiene puntos: «Nivela antes de poner puntos: nivelar ahora mueve la foto bajo los N puntos que ya tiene».
- **(B) PROPUESTA (pendiente de decisión de Andrés):** guardar los puntos en **coordenadas de la foto** y convertir al dibujar (editor y visor público): `yaw_mundo = corregir(yaw_foto, sphereCorrection)`, la inversa al editar. **Costo:** exige reinterpretar `hotspots.yaw/pitch` → **schemaVersion 2** con paso de migración (aplicar la corrección de cada escena a sus puntos UNA vez) y **republicar** los tours ya publicados (solo tour.json; los tiles/revHash no cambian). Toca: migrate.ts (+tests), editor (conversión en markers y en clic), visor público (conversión en nodos/links) y una pasada de re-publicación por tour. Estimación honesta: ~1 etapa completa con riesgo de aritmética angular en los bordes (±180°).

### 4) H1b — estáticos del visor y CI
`viewer/public/_headers` (copiado por Vite a dist-viewer/; Workers Static Assets lo aplica a /assets/* que el Worker no ve) con nosniff/Referrer-Policy/Permissions-Policy. `set -eo pipefail` en el paso de deploy. Smoke del CI ampliado: 3/3 comprueba `nosniff` en un archivo real de `/assets/` del index (correrá tras el primer deploy).

**`pnpm verify` (literal, exit 0): 117 tests** (schema 27, edge-viewer 31, web 21, server 38).

```text

---

## E5a — Calidad máxima de la vista (EDITOR v3, orden de Andrés) — medido con números

**Escena medida:** «Comedor Principal» del tour real «aurora» (master original 11904×5952 → pipeline 11264×5632). DPR del navegador forzado a 2 (contexto Chromium). Medición local: playwright + conteo de peticiones de tiles + sharp/pngjs. Evidencia: `auditoria/e5a/medidas.json` + recortes 1:1 `tile-l2.png` / `master-recorte.png`.

### Hallazgo principal (BUG real, corregido en esta etapa)
El editor solo activaba la vista de tiles si el **job en memoria** decía «done»: al reiniciar el estudio, la cola nace vacía y **el editor quedaba para siempre en el preview borroso de 1024×512** (medido: 0 peticiones de tiles tras reinicio, 8.5 px/grado = 27 % del master). Fix: el servidor informa `tilesListos` leyendo el DISCO (`dist/.../l0` existe) y el SSE marca las escenas al terminar su job. Sin tocar RULES ni el pipeline.

### Tabla antes/después (DPR 2, canvas 830×768 CSS → 1660×1536 real)
| Medida | Antes del fix (tras reiniciar) | Después |
|---|---|---|
| Tiles pedidos en reposo | **0** (solo preview.webp) | **4 × L1** (mosaico 5120×2560) |
| Nitidez en reposo | 8.5 px/° (27 % del master), borroso | 17.1 px/° (55 % del master); última tile a **1.6 s** del goto |
| Zoom máximo por defecto (fov 60°) | sin cambio (0 tiles) | **16 × L2** cargados; 25.6 px/° (82 % del master) |
| Zoom profundo (zoomLimit 30°) | — | L1+L2; última L2 a **3.3 s**; 51.2 px/° (**164 %**: el canvas pide más de lo que el master tiene → el límite ya es la cámara original, no el pipeline) |
| Calidad del pipeline (webp q80 vs fuente) | — | **PSNR 40.27 dB** (MSE 6.1) en recorte 1:1 master-procesado vs tile L2 — pérdida de compresión visualmente imperceptible (>36 dB se considera excelente) |

### Configuración verificada (ya óptima, sin cambios necesarios)
- `devicePixelRatio` aplicado por PSV (canvas backing = 2× CSS medido) y `antialias: true` del renderer (línea 3149 del core).
- Adaptador de tiles con `antialias: true` (antialiasing de tiles de alta resolución) y `baseBlur: true` (el preview se difumina mientras cargan los tiles, sin «salto» feo).
- La cola del adaptador carga por prioridad **centrada en la vista** (4 tiles visibles en reposo, no la pirámide completa).
- Selector de nivel correcto: con DPR 2 y fov 60° pide L2 (25.6 px/° > 14.2 px/° de L1) — sin placeholder borroso al terminar.

### Propuestas (NO implementadas, según orden)
1. **webp q80 → q85/q90 en L2**: PSNR ya en 40 dB; subir calidad aumentaría ~15–30 % el peso de los 128 tiles L2 (~26 KB/tile ahora) con ganancia invisible. NO recomendado; si Andrés quiere perfección absoluta: enmienda a RULES §3 (presupuestos/coeficiente de nivel máximo) y re-tileado con cambio de revHash.
2. **El límite real en zoom extremo es el master** (164 % de cobertura pedido a fov 30/DPR 2): más resolución exigiría subir MASTER_WIDTH (11264) — enmienda a RULES §3, no recomendado (el X5 entrega 11904×5952 y ya casi se aprovecha todo).

**`pnpm verify` (literal, exit 0): 117 tests**, biome limpio. Sin deploy, RULES intacto.

### Confirmación de recepción de la ADENDA PANOEE (post-E5a)
Recibida y aplicada la adenda de Cloudy (ver `auditoria/HOJA-DE-RUTA-EDITOR-V3.md`, sección final): panel de punto con pestañas Símbolo/Etiqueta/Global y visibilidad por zoom, Point Setup con miniatura de destino y punto de regreso, nivelación automática y límites verticales/horizontales, barra inferior del visor con lectura en vivo y modos armados, selección múltiple de escenas, caja de sugerencias → revisión previa (E13), y backlog explícito (efectos de IA, analíticas, mapa, mini-mapa fuera). E5 que empiezo a continuación ya incorpora sus cambios. Referencia funcional únicamente: nada de marca, textos ni íconos de Panoee.
