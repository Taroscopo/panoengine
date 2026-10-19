# Informe de entrega — CI/CD staging (visor → staging vía GitHub)

- **Commit auditado:** `700c6537c9c9604900b3e9c5c727a6466f2ecbad` («CI/CD staging»; SOLO `.github/workflows/ci.yml` y `.github/workflows/deploy-staging.yml`, 2 archivos, +121 líneas). Este informe viaja en el commit inmediatamente posterior.
- **Entrega anterior:** E3b = `642676c6e844328fce59a439db0087d4e5fabca2` + su informe en `6fb6a1e`, ambos ya en `origin/main`.
- **Fecha:** 2026-10-18

## Qué cambió (puntos)

1. **`.github/workflows/ci.yml` — «CI»**: corre en cada push a `main` y en cada pull request. Pasos: checkout → pnpm 12.14.0 → Node 24 (con caché de pnpm) → `pnpm install --frozen-lockfile` → `pnpm verify` completo (typecheck + tests + lint + build). Permisos mínimos `contents: read`; timeout 20 min; si algo falla, el check queda rojo.
2. **`.github/workflows/deploy-staging.yml` — «Deploy staging»**: se dispara SOLO cuando «CI» termina en verde en un push a `main` (`workflow_run` + `conclusion == 'success'` + `event == 'push'` + `head_branch == 'main'`). Hace checkout del SHA exacto que pasó CI, usa `environment: staging` y `concurrency` (un despliegue a la vez, en cola, sin cancelaciones). Construye SOLO el visor (`build:viewer`) y despliega únicamente `apps/edge-viewer` con `wrangler deploy --config wrangler.staging.jsonc` (Worker `panoengine-edge-viewer-staging` + bucket `panoengine-tours-staging`). **El `wrangler.jsonc` de producción no se usa en ningún paso** (por eso tampoco se ejecuta el `build` completo del paquete, que termina en un dry-run contra ese config). La URL pública `*.workers.dev` se extrae de la salida del propio wrangler.
3. **Smoke mínimo tras el despliegue** (no depende de tours subidos; la batería completa 402/410, Range 206, ETag/304 sigue siendo A2): `/healthz` → 200 con el cuerpo del servicio; tour inexistente → 404 con `Content-Type: text/html` y `Cache-Control: no-store`, sin cuerpo de tour. Cualquier fallo deja el job en rojo.
4. **Credenciales**: solo desde GitHub Secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`), inyectadas únicamente en el paso de despliegue. Cero secretos en el repo, en logs o en este informe; ningún `echo` de variables de entorno.
5. **Versiones**: el repo no declara `packageManager` ni `.nvmrc`, así que el workflow fija las del entorno de desarrollo (Node 24.19.0 → `node-version: 24`; pnpm 12.14.0; `engines.node >=22` cumplido). Si el propietario prefiere versiones declaradas en el repo, es un cambio que pediría autorización expresa (fuera del «SOLO esto»).
6. **Validaciones hechas en local, sin tocar Cloudflare**: sintaxis YAML de ambos archivos (parse correcto, disparadores y jobs según lo pedido) y `wrangler deploy --dry-run --config wrangler.staging.jsonc` con HOME limpia y sin credenciales → exit 0, binding `TOURS → panoengine-tours-staging`, «--dry-run: exiting now». Esto demuestra que el config de staging es válido para desplegar y que el dry-run dentro de `pnpm verify` no necesita autenticación (el CI arrancará verde aunque aún no haya secrets).

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
packages/schema test:  ✓ test/tour.test.ts (12 tests) 11ms
packages/schema test: 
packages/schema test:  Test Files  3 passed (3)
packages/schema test:       Tests  21 passed (21)
packages/schema test:    Start at  11:37:06
packages/schema test:    Duration  352ms (transform 96ms, setup 0ms, collect 158ms, tests 17ms, environment 0ms, prepare 187ms)
packages/schema test: 
packages/schema test: Done
apps/edge-viewer test$ vitest run
apps/studio-local/server test$ vitest run
apps/studio-local/web test$ vitest run
apps/studio-local/server test: 
apps/studio-local/server test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/studio-local/server
apps/studio-local/server test: 
apps/studio-local/web test: 
apps/studio-local/web test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/studio-local/web
apps/studio-local/web test: 
apps/edge-viewer test: 
apps/edge-viewer test:  RUN  v3.2.7 /home/leo/Música/360 MOTOR TOURS/apps/edge-viewer
apps/edge-viewer test: 
apps/edge-viewer test:  ✓ test/texto.test.ts (4 tests) 4ms
apps/edge-viewer test:  ✓ test/worker.test.ts (22 tests) 10ms
apps/studio-local/web test:  ✓ test/estado-tour.test.ts (7 tests) 5ms
apps/edge-viewer test: 
apps/edge-viewer test:  Test Files  2 passed (2)
apps/edge-viewer test:       Tests  26 passed (26)
apps/edge-viewer test:    Start at  11:37:07
apps/edge-viewer test:    Duration  799ms (transform 155ms, setup 0ms, collect 143ms, tests 14ms, environment 0ms, prepare 294ms)
apps/edge-viewer test: 
apps/studio-local/web test:  ✓ test/mensaje-borrado.test.ts (3 tests) 3ms
apps/studio-local/server test:  ✓ test/store-miniatura.test.ts (1 test) 11ms
apps/studio-local/web test:  ✓ test/vista.test.ts (4 tests) 4ms
apps/studio-local/web test: 
apps/studio-local/web test:  Test Files  3 passed (3)
apps/studio-local/web test:       Tests  14 passed (14)
apps/studio-local/web test:    Start at  11:37:07
apps/studio-local/web test:    Duration  940ms (transform 251ms, setup 0ms, collect 332ms, tests 12ms, environment 1ms, prepare 492ms)
apps/studio-local/web test: 
apps/edge-viewer test: Done
apps/studio-local/server test:  ✓ test/r2.test.ts (6 tests) 153ms
apps/studio-local/web test: Done
apps/studio-local/server test: stderr | test/borrar-escena-error.test.ts > punto 1: fs.rm falla al borrar escena — sin 500, con aviso y tour ya guardado > responde 200 + aviso de carpeta no borrada, y el tour.json ya no contiene la escena
apps/studio-local/server test: [borrar escena] no se pudo eliminar la carpeta dist de 01M5RMFA11A000000000000000: EACCES simulado: rm bloqueado
apps/studio-local/server test: 
apps/studio-local/server test:  ✓ test/borrar-escena-error.test.ts (1 test) 104ms
apps/studio-local/server test:  ✓ test/app.test.ts (9 tests) 2492ms
apps/studio-local/server test:    ✓ borrar escena (A4) y relación 2:1 estricta (A6) > admite 2:1 exacto del X5 (11904×5952) y al borrar la escena elimina su carpeta dist/  2178ms
apps/studio-local/server test:  ✓ test/tiler.test.ts (5 tests) 3358ms
apps/studio-local/server test:    ✓ cortador sharp (imagen sintética) > la pirámide genera exactamente 168 tiles con las dimensiones de nivel correctas  3112ms
apps/studio-local/server test: 
apps/studio-local/server test:  Test Files  5 passed (5)
apps/studio-local/server test:       Tests  22 passed (22)
apps/studio-local/server test:    Start at  11:37:07
apps/studio-local/server test:    Duration  4.37s (transform 335ms, setup 0ms, collect 1.37s, tests 6.12s, environment 2ms, prepare 526ms)
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
  

Checked 80 files in 40ms. No fixes applied.
Found 1 warning.
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
apps/edge-viewer build: ../dist-viewer/assets/index-_qa26ZeC.js   803.12 kB │ gzip: 211.43 kB
apps/edge-viewer build: 
apps/edge-viewer build: (!) Some chunks are larger than 500 kB after minification. Consider:
apps/edge-viewer build: - Using dynamic import() to code-split the application
apps/edge-viewer build: - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
apps/edge-viewer build: - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
apps/edge-viewer build: ✓ built in 1.77s
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
apps/studio-local/web build: ✓ built in 2.26s
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

- **Exit:** 0 (última línea del bloque: `VERIFY_EXIT=0`).
- **Tests:** 83 en total, todos en verde — schema 21, edge-viewer 26, web 14, server 22.
- **Biome:** el mismo 1 aviso NO bloqueante de la entrega anterior (`noUnusedFunctionParameters`: parámetro `tour` sin usar en `DetalleEscena`, `apps/studio-local/web/src/EditorPage.tsx:650`). Esta etapa no toca código.

## Capturas

- Ninguna nueva: etapa sin cambios de interfaz. GitHub Actions todavía no tiene ejecuciones de estos workflows (se crean con este push).

## Comportamiento esperado tras este push (importante)

- El push disparará «CI» en GitHub → debería quedar en **verde** (el mismo verify que acaba de pasar en local, sin credenciales).
- «Deploy staging» se disparará al terminar CI y **quedará en rojo mientras no existan los secrets**: wrangler se niega a desplegar en entorno no interactivo sin `CLOUDFLARE_API_TOKEN`. Es lo esperado bajo la orden (ningún despliegue real desde aquí); el primer despliegue ocurrirá cuando Andrés cargue los secrets y haya un push a main (o un «Re-run» del workflow).

## Qué debe hacer Andrés (pasos exactos)

**1. Crear el token en Cloudflare (una sola vez)**
   1. Entra en `https://dash.cloudflare.com` con la cuenta de la agencia y selecciona la cuenta correcta.
   2. Ve a **Manage Account → Account API Tokens** (atajo directo: `https://dash.cloudflare.com/?to=/:account/api-tokens`) y pulsa **Create Token**.
   3. Elige crear un **token personalizado** («Custom token»), no la plantilla. Nómbralo p. ej. `panoengine-ci-staging`.
   4. Permisos EXACTOS (verificados en la documentación oficial de Cloudflare, hoy):
      - Cuenta → **Workers Scripts** → **Editar**
      - Cuenta → **Account Settings** → **Leer**
      - Usuario → **User Details** → **Leer**
      - Usuario → **User Memberships** → **Leer**
   5. Recursos de cuenta: **solo la cuenta de la agencia**. Nada de zonas ni permisos de DNS (el worker vive en `*.workers.dev`, sin rutas).
   6. **Continue to summary → Create Token** y copia el valor mostrado (se ve **una sola vez**).
   - *Por qué esta lista:* la plantilla «Edit Cloudflare Workers» incluye además Zone·Workers Routes Write, Workers KV Storage Write, Workers R2 Storage Write y Workers Tail Read que NO hacen falta aquí: desplegar un Worker con un binding R2 no requiere permisos sobre R2, y no usamos rutas. Si el primer despliegue fallara por algún permiso de lectura distinto, el log de GitHub nombra el permiso exacto que falta: se añade solo ese (nunca más escrituras de las listadas).
   - *Dónde ver tu Account ID:* `https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/`.

**2. Guardar los dos secrets en GitHub**
   1. Entra en `https://github.com/Taroscopo/panoengine` → pestaña **Settings**.
   2. En la sección **Security** del menú lateral: **Secrets and variables → Actions**.
   3. Botón **New repository secret**. Crea DOS:
      - Nombre `CLOUDFLARE_API_TOKEN` → valor: el token copiado de Cloudflare.
      - Nombre `CLOUDFLARE_ACCOUNT_ID` → valor: el ID de tu cuenta de Cloudflare.
   - Guía oficial: `https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions`.

**3. Crear el entorno «staging»**
   1. Mismo repo → **Settings → Environments** → **New environment**.
   2. Nombre EXACTO: `staging` → **Configure environment**.
   3. No hace falta marcar ninguna regla de protección para staging (las reglas de aprobación quedan para `production`, el día que se ordenen).
   - Guía oficial: `https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment`.

**4. Disparar el primer despliegue**
   - Con los secrets cargados, el siguiente push a `main` despliega solo. También puedes forzarlo desde la pestaña **Actions** → workflow **Deploy staging** → **Re-run all jobs**.
   - Verde = visor vivo en `https://panoengine-edge-viewer-staging.<tu-subdominio>.workers.dev` (la URL exacta aparece en el log del paso de despliegue).

## Aclaración (orden punto 7)

- **El despliegue automático NO sube tours.** Los tours (pirámide de tiles, `tour.json`, miniaturas) siguen publicándose desde el estudio local con el botón **«Publicar»** (publisher R2). Ese paso sigue pendiente de A2: falta el `.env` con el token R2 S3 en `apps/studio-local/server/`.

## Señalizaciones para el auditor (sin acción en esta entrega)

- El Worker **aún no emite** cabeceras clásicas de seguridad (`X-Content-Type-Options`, `Referrer-Policy`, etc.); el smoke valida las que existen hoy (`Content-Type: text/html` y `Cache-Control: no-store` en páginas de error/gate). Añadirlas sería un cambio de código del worker, fuera del «SOLO esto» de esta entrega.
- Aviso biome persistente del parámetro `tour` sin usar en `DetalleEscena` (no bloqueante).
- El repositorio sigue en `Taroscopo/panoengine` (mudanza a `trespa.paginas` pendiente de decisión del propietario).

## Qué NO se hizo

- **Ningún despliegue real ejecutado por mí** (orden punto 8): ningún `wrangler deploy` real, ningún toque a Cloudflare desde esta máquina (el bucket de staging existente no se modificó).
- No se creó workflow de producción (orden punto 5). Cuando se ordene: manual (`workflow_dispatch`) con aprobación obligatoria en un entorno `production`.
- No se tocaron `RULES.md`, `wrangler.jsonc`, `wrangler.staging.jsonc`, `package.json`, lockfile ni código de las apps.
- E4 no empezado — prohibido hasta el OK del auditor.

## Fuentes verificadas el 2026-10-18

- Cloudflare — GitHub Actions + token para wrangler en CI: `https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/`
- Cloudflare — permisos y bindings (desplegar con binding R2 no requiere permisos R2): `https://developers.cloudflare.com/workers/authorization/` y `https://developers.cloudflare.com/workers/authorization/workers/`
- Cloudflare — composición de la plantilla «Edit Cloudflare Workers»: `https://developers.cloudflare.com/fundamentals/api/reference/template/`
- Cloudflare — encontrar el Account ID: `https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/`
- Cloudflare — remote bindings (`remote: true` es solo para desarrollo local; el deploy lo ignora): `https://developers.cloudflare.com/workers/local-development/#remote-bindings`
- GitHub — crear secrets de repositorio: `https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions`
- GitHub — entornos de despliegue: `https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment`
