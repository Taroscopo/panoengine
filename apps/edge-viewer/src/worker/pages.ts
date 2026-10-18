/** Páginas HTML mínimas en español para gate y errores (sin dependencias externas). */
export function gatePageHtml(kind: 'suspended' | 'expired'): string {
  const copy =
    kind === 'suspended'
      ? {
          title: 'Tour pausado',
          message: 'Este tour virtual está temporalmente pausado por el administrador.',
          status: '402 · Pausado',
        }
      : {
          title: 'Tour expirado',
          message: 'El periodo de alojamiento de este tour virtual ha finalizado.',
          status: '410 · Expirado',
        };
  return pageHtml(copy.title, copy.message, copy.status);
}

export function notFoundPageHtml(): string {
  return pageHtml('Tour no encontrado', 'Este tour virtual no existe o fue retirado.', '404');
}

export function invalidTourPageHtml(): string {
  return pageHtml(
    'Tour con error de configuración',
    'El archivo de configuración de este tour es inválido. Contacta al administrador.',
    '500 · Configuración',
  );
}

function pageHtml(title: string, message: string, badge: string): string {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} — PanoEngine</title>
<style>
  :root { color-scheme: dark; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center;
         background: #0b0f14; color: #e8edf2;
         font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  main { text-align: center; padding: 2rem; max-width: 32rem; }
  .badge { display: inline-block; font-size: .8rem; letter-spacing: .08em;
           border: 1px solid #2c3844; border-radius: 999px; padding: .3rem .9rem;
           color: #9fb2c4; margin-bottom: 1.2rem; }
  h1 { font-size: 1.6rem; margin: 0 0 .6rem; }
  p { color: #9fb2c4; line-height: 1.5; margin: 0; }
</style>
</head>
<body>
<main>
  <div class="badge">${badge}</div>
  <h1>${title}</h1>
  <p>${message}</p>
</main>
</body>
</html>`;
}
