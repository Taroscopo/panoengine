# RULES.md — Constitución permanente de PanoEngine

Este documento es la **ley del repositorio**. Cualquier sesión de trabajo (humana o IA) debe
leerlo y obedecerlo antes de escribir código. Si una decisión técnica contradice este archivo,
o se corrige el código, o se actualiza este archivo con aprobación explícita del propietario.

---

## 1. Qué es PanoEngine

Plataforma **privada** de una sola agencia para crear, editar y alojar Tours Virtuales 360.
Inspirada en Panoee pero de uso interno. **PROHIBIDO** introducir: sistemas de usuarios,
registro, login, cobros SaaS, suscripciones, multi-tenancy, dashboards de clientes.

Arquitectura híbrida en monorepo (`pnpm workspaces` + TypeScript estricto):

| Paquete | Vive en | Rol |
|---|---|---|
| `packages/schema` | Compartido | Contrato Zod de `tour.json` + migraciones. Única fuente de verdad de datos. |
| `apps/studio-local` | Ubuntu local | Backend Fastify + `sharp` (TODO el procesamiento de píxeles) y frontend React (editor). |
| `apps/edge-viewer` | Cloudflare Workers | Worker único Hono + R2: gate de anualidad, streaming de tiles, visor PSV v5. |

## 2. Reglas de oro innegociables

1. **El Worker JAMÁS procesa imágenes.** Límite de 128 MB de RAM: el cuerpo de R2 se
   transmite en streaming (`new Response(obj.body)`), nunca se lee a memoria. Solo se
   procesa (parse) `tour.json` (KBs).
2. **`sharp`/libvips corre SOLO en `studio-local`.** Todo tile, preview y thumb nace ahí.
3. **PROHIBIDO leer `tour.json` en la ruta de tiles `.webp` del Worker** (multiplicaría
   por 300 las lecturas R2 por visita). El gate de anualidad aplica ÚNICAMENTE en
   `GET /tours/:slug` y `GET /tours/:slug/tour.json`.
4. **TypeScript estricto, `any` PROHIBIDO** (`suspicious/noExplicitAny` = error en Biome).
   `unknown` + narrowing, o tipos concretos.
5. **UI 100 % en español** (studio y visor público).
6. **Cero dependencias nuevas sin justificación** en este archivo. El núcleo es mínimo:
   schema: `zod` + `ulid`; server: `fastify`, `sharp`, `@fastify/*`, `@aws-sdk/client-s3`,
   `exifr`, `p-limit` (concurrencia por CPU de §3), `tsx` (runtime TS), `zod`/`ulid`
   (validación de rutas e IDs); web studio: `react`, `react-dom`, `vite`, `tailwindcss`,
   `@photo-sphere-viewer/*`, `ulid` (IDs de hotspots en el editor);
   edge: `hono`, `@photo-sphere-viewer/*`, `three` (peer del core), `wrangler`;
   devDeps edge: `vite` (bundle del visor), `@cloudflare/workers-types`, `@types/three`.
7. **Núcleo inmutable + vertientes (plugins).** Las vertientes futuras (extractor
   gnómico + IA, guía con chroma-key, videos en paredes, minimapa, publicador GSV) se
   añaden como `plugins{}` en `tour.json` + módulos lazy. Nunca rompen el núcleo.
   Las ediciones localizadas usan `patches[]` (capa 2D anclada en 3D, hallazgo de la
   auditoría Panoee) — **no** re-tilean la escena base.

## 3. Pipeline de procesamiento (studio-local)

- Cámara origen: Insta360 X5, equirectangular JPG 11904×5952 (25–45 MB), HDR horneado a SDR.
- Salida sRGB 8-bit. Metadatos (EXIF/GPS) se extraen ANTES de limpiarlos de los derivados.
- Master **intacto** en `workspace/tours/{tourSlug}/masters/{sceneId}.jpg`; todo lo demás
  es derivado regenerable. **Solo `dist/` se sube a R2** (los masters NUNCA).
- Downscale Lanczos3 a **11264×5632**.
- Pirámide de **3 niveles** WebP `quality: 80`, `effort: 4`. **REJILLA = POTENCIAS DE 2
  (obligatorio)**: `EquirectangularTilesAdapter` 5.15.1 lanza
  `PSVError("Panorama cols and rows must be powers of 2.")` con rejillas que no lo son
  (verificado contra sus `.d.ts` + `index.module.js` — la rejilla 22×11/10×5 original
  era imposible):
  - L0: 2048×1024 → 4×2 tiles de **512×512** = 8 tiles
  - L1: 5120×2560 → 8×4 tiles de **640×640** = 32 tiles
  - L2: 11264×5632 → 16×8 tiles de **704×704** = 128 tiles
  - Total: **168 tiles** por escena. `tileUrl` del visor es una FUNCIÓN
    `(col, row, level)` con índices desde 0 y `level` 0 = menor resolución.
- `preview.webp` 1024×512 q65 **< 40 KB** (es el `baseUrl` del visor, con `baseBlur`) y
  `thumb.webp` 300×150 q75 **< 20 KB** (galería). Ambos en **< 2 s** (bloqueante en el
  editor); la pirámide corre en segundo plano con progreso en vivo (SSE) al frontend.
- El JPG master se decodifica UNA sola vez en memoria (buffer raw + `.clone()`);
  concurrencia dinámica con `os.cpus().length`.
- **three.js va alineado con el core de PSV** (`^0.185.1`): dos versiones de three en
  el bundle rompen `instanceof` y duplican peso.

## 4. Layout de datos

Local (`workspace/`, gitignored):

```
workspace/tours/{tourSlug}/
  masters/{sceneId}.jpg
  dist/tours/{tourSlug}/tour.json
  dist/tours/{tourSlug}/scenes/{sceneId}-{revHash}/
    preview.webp  thumb.webp
    l0/{row}_{col}.webp  l1/...  l2/...
  manifest.json          # hashes de publicación (diff incremental)
```

R2 (bucket único `panoengine-tours`): espejo exacto de `dist/`.

URLs públicas (Worker):

- `GET /tours/:slug` → HTML del visor (Static Assets) — con gate.
- `GET /tours/:slug/tour.json` → `Cache-Control: no-cache` + ETag fuerte (304) — con gate.
- `GET /tours/:slug/scenes/{sceneId}-{revHash}/...webp` → `Cache-Control: public,
  max-age=31536000, immutable`, streaming directo R2, **sin** lectura de `tour.json`,
  con soporte `Range` (206 Partial Content) para los futuros MP4.

`{revHash}` = hash del contenido de la escena: re-tilear → nueva carpeta → caché inmutable
jamás intoxicada (lección de `max-age=0` del despliegue Panoee auditado).

## 5. Corta-corriente de anualidad

Tour suspendido si `hostingStatus === 'suspended'` (→ HTTP **402**) **O**
`hostingExpiresAt < ahora` (→ HTTP **410**). Respuesta: página HTML limpia en español.
El visor público parsea errores 402/410/404 de `tour.json` y muestra mensaje adecuado.

## 6. Contrato del visor (edge-viewer)

- Photo Sphere Viewer **v5** (fijado en `package.json` con `^5` y lockfile): core +
  `equirectangular-tiles-adapter` + `virtual-tour-plugin` (o gestión propia de escenas)
  + `markers-plugin` + `gallery-plugin`. Las firmas se verifican contra los `.d.ts`
  reales en `node_modules` — **jamás se adivinan propiedades**.
- Coordenadas: `yaw` −180..180, `pitch` −90..90 (grados); `fov` en grados (60–150 estilo
  krpano) se convierte a `zoomLvl` de PSV en el visor.
- Hotspots `nav` con vista destino (`targetYaw/targetPitch/targetFov`), `transitionEffect`
  y `zoomRange`. Precarga silenciosa del `preview.webp` de escenas vecinas.
- Barra inferior de escenas con `thumb.webp`; botón flotante de WhatsApp con el nombre de
  la escena actual (`whatsappNumber` + `whatsappDefaultText` del tour).

## 7. `tour.json` (schemaVersion: 1)

Definido en `packages/schema` con Zod + tests. Campos clave: `slug` (kebab-case comercial),
`clientName`, `hostingStatus`, `hostingExpiresAt`, `autoRotate`, `littlePlanetIntro`,
`defaultSceneId`, `scenes[]` (tiles descriptor, `defaultView`, `zoomLimit`, `audio`,
`lat/lng`, `gsv{}`, `sphereCorrection{}` — pan/tilt/roll en grados, el visor los
convierte a radianes para PSV —, `hotspots[]`, `patches[]`), `plugins{}`. IDs internos ULID.
Cambios de esquema ⇒ incrementar `schemaVersion` + función `migrate()` en `packages/schema`.

## 8. Calidad y comandos

- `pnpm typecheck` / `pnpm test` / `pnpm build` / `pnpm lint` deben pasar en verde.
- Tests Vitest: matemática de tiles, schema/migraciones, gate del Worker, cabeceras,
  conversión fov↔zoomLvl.
- El Worker se valida con `wrangler deploy --dry-run` (nunca deploy real desde una sesión
  automática sin orden expresa).
- Commit/semántica: mensajes en español, presentes de acuerdo al dueño del repo.

## 9. Prohibiciones adicionales

- No `git push` ni `wrangler deploy` real sin orden expresa del propietario.
- No subir claves (`.env` gitignored; claves de IA viven SOLO en studio-local).
- No añadir frameworks de UI pesados, Redux, jQuery ni analítica de terceros al visor.
- No copiar código de Panoee/krpano: su motor es cerrado y licenciado. Solo se copian
  **decisiones de diseño** documentadas aquí.
