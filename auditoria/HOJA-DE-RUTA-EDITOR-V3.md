# HOJA DE RUTA EDITOR v3 (orden de Andrés, 2026-10-20 — sustituye E5–E12 anteriores)

AUDITORÍA f7198c8: APROBADA (verify 117 tests reproducido, RULES intacto). ORDEN NUEVA: hoja de ruta EDITOR v3 — REEMPLAZA las etapas E5–E12 anteriores (si ya empezaste E5, conserva lo hecho y ajústalo a E5 de esta lista). Primer paso: copia ESTE mensaje, tal cual, a auditoria/HOJA-DE-RUTA-EDITOR-V3.md y haz commit+push. Trabaja desde ese archivo.

OBJETIVO: editor 360 profesional, NO básico ni genérico. Referencia: Panoee (solo documentación pública). Panel derecho compacto, español simple, autoguardado, todo visible en vivo tal como lo verá el visitante. Andrés probará con sus panorámicas reales (locales, no salen de su máquina).

MODELO PANOEE A IGUALAR/SUPERAR:
- Barra inferior de TIPOS de punto: se arrastra el tipo al visor y se suelta donde va (además del clic actual).
- Medios (foto/video/texto) pegados a la escena, con manijas para redimensionar y «Ajustar perspectiva» (Distort).
- Zonas: polígonos/líneas dibujados sobre la escena.
- Autorrotación: espera, velocidad, aceleración, vista previa. Nivelar, límite de zoom, planeta pequeño.
- Panel por tipo, etiquetas editables, grafo del tour, imagen para compartir.

PRINCIPIOS: (1) autoguardado + Deshacer/Rehacer siempre; (2) cabe en 1366×768 sin scroll del panel principal (mídelo); (3) textos en español simple, sin jerga; (4) el visor público no pierde velocidad: mide antes/después con el smoke; (5) seguridad: URLs solo https/tel/mailto/wa.me, texto siempre como texto (nunca innerHTML), iframes con sandbox y allowlist (youtube-nocookie, vimeo), imágenes sin EXIF (GPS fuera); (6) schema aditivo salvo D1; (7) RULES.md intocable (si choca, propón enmienda con números); (8) sin deploy/force/producción; analyze_image solo con datos de demo.

DECISIONES DE ANDRÉS: D1 SÍ (puntos en coordenadas de foto, schemaVersion 2) · D2 autoguardado · D3 «Aplicar a todas» por defecto sobre el grupo de la escena · D4 puntos de suelo sin metros reales (tamaño visual ajustable) · D5 fotos de puntos: webp máx 2400 px largo, q85, sin EXIF, subidas desde el estudio; videos solo por enlace.

ETAPAS (una etapa = commit + push + INFORME con verify literal y evidencia medida; espera mi auditoría solo en las marcadas «OK»):
E5a CALIDAD MÁXIMA DE LA VISTA (Andrés lo pidió explícito). Mide y reporta con NÚMEROS: píxeles por grado reales del editor vs master; nivel de tiles cargado en reposo y al acercar (debe ser el más alto disponible, sin placeholder borroso al terminar); devicePixelRatio y tamaño del canvas; baseBlur/precarga; tiempo hasta nitidez completa. Compara recorte 1:1 master vs tile del nivel 2 (SSIM/PSNR con sharp/pngjs, local). Mejora lo que se pueda SIN tocar RULES (DPR, precarga de tiles vecinos, antialias/anisotropía, orden de carga centrado en la vista). Si la calidad del pipeline (webp q80) limita, NO la cambies: entrega los números y una propuesta de enmienda. Informe con tabla antes/después.
E5 PANEL DERECHO + BARRA DE TIPOS + DESHACER. Riel Escena | Puntos | Tour, secciones plegables con memoria, autoguardado generalizado con indicador, barra inferior con arrastrar-y-soltar al visor, manijas de selección, atajos (Supr, Ctrl+Z/Y, Esc), historial de comandos (Deshacer/Rehacer de puntos, vista, nivelación, orden).
E6 PUNTOS EN COORDENADAS DE FOTO (D1). schemaVersion 2 + migrate() (aplica una vez la corrección de cada escena a sus puntos), conversión en editor (marcadores y clics) y en visor público; pruebas con bordes ±180° y pitch ±90°. Migra los tours de prueba locales con respaldo previo de tour.json. Quita el aviso ámbar de E4 (ya no hace falta) y verifica por código que al nivelar, los puntos acompañan a la foto. Pídeme OK antes de migrar datos reales.
E7 VISTA Y ZOOM EN LENGUAJE SIMPLE + «APLICAR A…». Zoom con etiquetas simples (Lejos/Normal/Cerca) y el valor real visible; límites verticales; vista inicial; autorrotación (espera, velocidad, aceleración, vista previa; por tour y excepción por escena); planeta pequeño de entrada. Botón «Aplicar a todas / a este grupo / elegir…» para zoom, vista inicial, autorrotación y nivelación, con endpoint masivo ATÓMICO, respaldo de tour.json y Deshacer. Prueba transición entre escenas con zoomLimit distinto.
E8 SISTEMA DE PUNTOS PRO. Mover por arrastre, duplicar, copiar a otra escena, biblioteca de íconos (set incluido, sin CDN) + ícono propio (SVG/PNG saneado), color, tamaño, animación (ninguna/pulso/rebote), etiqueta (siempre/al pasar/nunca), estilo global del tour + excepción por punto, vista previa del destino al pasar (miniatura), enlace de ida y vuelta con un clic, selección múltiple.
E9 SPIKE MEDIDO — OK DE CLOUDY ANTES DE E10. Puntos de suelo (flecha/chevron pegado al piso con orientación), zonas clicables (polígono) y foto/texto en la escena con perspectiva. Compara con medidas: (a) marcadores 3D de PSV 5.15.1 (imageLayer/elementLayer con rotation yaw/pitch/roll y size); (b) polígonos con vértices en coordenadas esféricas (la flecha dibujada como polígono sale con perspectiva correcta sin 3D). Mide: aspecto sobre foto real de Andrés (solo local, captura por código/pixeles), clic/hover, rendimiento con 30 marcadores en móvil emulado, peso del bundle del visor, comportamiento con la corrección de horizonte. Entrega informe con recomendación y NO construyas todavía.
E10 CONSTRUIR lo aprobado en E9: puntos de suelo, zonas, foto/texto en escena con manijas y «Ajustar perspectiva».
E11 CONTENIDO. Tarjeta (título + texto + imagen + botón), Galería (carrusel), Foto emergente, Video por enlace (YouTube/Vimeo/MP4 por URL), Texto, Acciones (WhatsApp con mensaje prellenado, llamar, correo, Maps, reservar). Editor con vista previa de lo que verá el visitante. Imágenes: pipeline D5, carga perezosa en el visor (solo al abrir), peso objetivo ≤ 400 KB. Tipos desconocidos: el visor los ignora sin romperse.
E12 ESCENA AVANZADA. Audio por escena y por tour (archivo local → R2, volumen, bucle, silenciar), tapar trípode (parche/logo en el nadir con patches[] existente, sin tocar Vertiente 1), planeta pequeño. Corrección de color por escena: primero PROPUESTA (¿solo en el visor o rehacer tiles?) con costos; no la implementes sin mi OK.
E13 NIVEL TOUR. Grafo de conexiones (escenas, flechas, huérfanas, enlaces de un solo sentido), REVISIÓN PREVIA A PUBLICAR (checklist: escenas sin puntos, puntos rotos, sin miniatura, vencimiento, peso total), panel Publicar (Pruebas/Producción con confirmación escrita, copiar enlace, QR — pregúntame antes de instalar la librería de QR), vista previa escritorio/móvil, imagen para compartir (SEO). Depende de la prueba A2 (R2) para lo que sea publicar.
E14 PULIDO. Estados vacíos, accesibilidad por teclado, 30+ escenas fluidas, prueba móvil real, textos revisados, atajos documentados.

BACKLOG (NO hacer): idioma múltiple, contraseña, formulario de leads, analíticas, tienda/pagos (requieren backend).
CONGELADO: Vertientes 1–4 (extractor gnomónico/IA, chroma-key, planos/minimapa, Street View).

ORDEN DE TRABAJO: E5a → E5 → E6 → E7 → E8 → E9 (pausa, espera OK) → E10 → E11 → E12 → E13 → E14. Avanza etapa por etapa con push y informe en cada una; yo audito en paralelo y te paro si algo está mal. Si algo de esta lista choca con RULES.md o con el código real, detente y dímelo en el informe en vez de improvisar.

---

## ADENDA PANOEE (Cloudy, 2026-10-20 — vista por navegador del editor real de Panoee; lectura, nada modificado)

NO copiar marca, textos ni íconos de Panoee: es referencia funcional.

PANEL DE PUNTO (aplica a E5/E8): pestañas «Símbolo | Etiqueta | Global». Símbolo: biblioteca de íconos, imagen propia, animación (pulso en anillos, etc.), texto. Ajustes por punto: Tamaño, Opacidad, Rotación, Efecto, VISIBILIDAD por rango de zoom (se muestra solo entre dos valores de campo de visión), casilla «Distorsionado» (perspectiva pegada al suelo → clave de E9/E10). «Global» = estilo para todo el tour con excepción por punto. Barra del punto: Copiar, Pegar, Borrar, Más. Lista de puntos de la escena: editar, duplicar, borrar, «Pegar» y «Borrar todos» (con confirmación).
NAVEGACIÓN «Point Setup» (E8): selector de escena destino + MINIATURA PANORÁMICA DEL DESTINO con mira para fijar la vista de llegada (arrastrando sobre la miniatura), casillas «Vista de llegada» y «Punto de regreso» (crea automáticamente el punto de vuelta), botón «Ir a la escena», transición elegible, miniatura del punto (ninguna / automática / imagen / subir).
ESCENA (E7/E12): botón único «Nivelar automáticamente» además de nuestros 3 sliders (E4); «Tapar trípode» con modo rápido y modo personalizado; límites de visión vertical y horizontal; límite de zoom; audio .mp3 por escena; reemplazar foto; miniatura con cámara/subir.
BARRA INFERIOR DEL VISOR (E5): lectura en vivo de giro/altura/zoom, botón «Vista por defecto», modos «+ Punto | + Medio | + Polígono» (el clic en el tipo ARMA la colocación; Esc cancela).
LISTA DE ESCENAS: selección múltiple con casillas (base de «Aplicar a…» de E7), grupos, buscar, colapsar, vista cuadrícula/lista.
SUGERENCIAS: caja «N sugerencias» en la cabecera (en E13 se convierte en la REVISIÓN PREVIA A PUBLICAR: escenas sin puntos, destinos rotos, sin punto de regreso, sin miniatura, vencimiento).
BACKLOG EXPLÍCITO (no ahora): efectos de IA de Panoee (día→atardecer, filtros, luz solar), analíticas, pestaña Location/mapa (planos congelados), mini-mapa.

### Cambios a las etapas V3 (aplicados por esta adenda)
- **E5** incluye barra inferior con modos armados + lectura en vivo de la vista.
- **E7** incluye selección múltiple de escenas, «Nivelar automáticamente» y límites verticales/horizontales.
- **E8** incluye Visibilidad por rango de zoom, estilo Global/por punto, Point Setup con miniatura de destino y punto de regreso automático.
- **E9** usa la casilla «Distorsionado» como requisito (suelo con perspectiva).
- **E13** convierte la caja de «sugerencias» en la REVISIÓN PREVIA A PUBLICAR.
Sin deploy ni force; sin tocar RULES.md.
