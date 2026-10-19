import type { Hotspot, Scene } from '@panoengine/schema';
import { ICONO_WHATSAPP, type TourContext } from './estado.js';
import { textoCompuesto } from './texto.js';

export interface UI {
  actualizarEscena(escena: Scene, nodeId: string | undefined): void;
  precargarVecinos(escena: Scene, escenas: Map<string, Scene>, ctx: TourContext): void;
  mostrarInfo(titulo: string, contenido: string): void;
}

/**
 * UI propia del visor (RULES.md §6): botón flotante de WhatsApp con el nombre de
 * la escena actual, audio ambiente por escena, panel de información y precarga
 * silenciosa del preview.webp de las escenas vecinas.
 */
export function instalarUI(ctx: TourContext): UI {
  let escenaActual: Scene | undefined;

  // ---- Botón de WhatsApp ----
  const whatsapp = document.createElement('a');
  whatsapp.className = 'pe-whatsapp';
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener';
  const actualizarWhatsapp = (escena: Scene): void => {
    const numero = ctx.tour.whatsappNumber;
    if (!numero) {
      whatsapp.style.display = 'none';
      return;
    }
    whatsapp.style.display = '';
    const texto = textoCompuesto(ctx.tour.whatsappDefaultText, escena.name);
    const telefono = numero.replace(/[^0-9]/g, '');
    whatsapp.href = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    whatsapp.innerHTML = `${ICONO_WHATSAPP}<span>${escapar(texto)}</span>`;
  };

  // ---- Audio ambiente por escena ----
  let audio: HTMLAudioElement | undefined;
  const botonAudio = document.createElement('button');
  botonAudio.type = 'button';
  botonAudio.className = 'pe-audio';
  botonAudio.textContent = '🔊';
  botonAudio.hidden = true;
  const configurarAudio = (escena: Scene): void => {
    audio?.pause();
    audio = undefined;
    if (!escena.audio) {
      botonAudio.hidden = true;
      return;
    }
    audio = new Audio(ctx.url(escena.audio.url));
    audio.loop = true;
    audio.volume = escena.audio.volume;
    audio.muted = false;
    botonAudio.hidden = false;
    botonAudio.textContent = '🔊';
    const intentar = (): void => {
      void audio?.play().catch(() => undefined);
    };
    intentar();
    document.addEventListener('pointerdown', intentar, { once: true });
  };
  botonAudio.addEventListener('click', () => {
    if (!audio) {
      return;
    }
    audio.muted = !audio.muted;
    botonAudio.textContent = audio.muted ? '🔇' : '🔊';
    if (!audio.muted) {
      void audio.play().catch(() => undefined);
    }
  });

  document.body.append(whatsapp, botonAudio);

  // ---- Panel de información de hotspots ----
  let panel: HTMLDivElement | undefined;
  const cerrarPanel = (): void => {
    panel?.remove();
    panel = undefined;
  };

  return {
    actualizarEscena(escena) {
      escenaActual = escena;
      actualizarWhatsapp(escena);
      configurarAudio(escena);
    },
    precargarVecinos(escena, escenas, contexto) {
      const objetivos = escena.hotspots
        .filter((h): h is Extract<Hotspot, { type: 'nav' }> => h.type === 'nav')
        .map((h) => escenas.get(h.targetSceneId))
        .filter((s): s is Scene => s !== undefined)
        .slice(0, 6);
      for (const destino of objetivos) {
        void fetch(contexto.url(destino.tiles.baseUrl), { priority: 'low' }).catch(() => undefined);
      }
    },
    mostrarInfo(titulo, contenido) {
      cerrarPanel();
      panel = document.createElement('div');
      panel.className = 'pe-panel';
      panel.setAttribute('role', 'dialog');
      panel.innerHTML = `<button class="pe-panel__cerrar" type="button" aria-label="Cerrar">✕</button><h2>${escapar(titulo)}</h2><p>${escapar(contenido)}</p>`;
      panel.querySelector('button')?.addEventListener('click', cerrarPanel);
      document.body.append(panel);
      if (escenaActual) {
        actualizarWhatsapp(escenaActual);
      }
    },
  };
}

function escapar(texto: string): string {
  return texto
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
