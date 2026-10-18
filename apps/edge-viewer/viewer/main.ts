import type { Tour } from '@panoengine/schema';
import { iniciarTour } from './app.js';
import { extraerSlug, mostrarEstado, ocultarEstado } from './estado.js';

async function arrancar(): Promise<void> {
  const slug = extraerSlug();
  if (!slug) {
    mostrarEstado({ clase: 'error', detalle: 'La URL debe tener la forma /tours/mi-tour' });
    return;
  }
  mostrarEstado({ clase: 'cargando' });
  try {
    const res = await fetch(`/tours/${encodeURIComponent(slug)}/tour.json`, {
      headers: { Accept: 'application/json' },
    });
    if (res.status === 402 || res.status === 410) {
      mostrarEstado({ clase: 'gate', estado: res.status as 402 | 410 });
      return;
    }
    if (res.status === 404) {
      mostrarEstado({ clase: 'no-encontrado' });
      return;
    }
    if (!res.ok) {
      mostrarEstado({
        clase: 'error',
        detalle: `El servidor respondió ${res.status}. Inténtalo más tarde.`,
      });
      return;
    }
    // El Worker ya validó el contrato con zod (Q13); aquí confiamos en la forma.
    const tour = (await res.json()) as Tour;
    ocultarEstado();
    iniciarTour(tour, slug);
  } catch (err) {
    mostrarEstado({
      clase: 'error',
      detalle: err instanceof Error ? err.message : 'Fallo de red al cargar el tour.',
    });
  }
}

const boton = document.getElementById('estado-reintentar');
boton?.addEventListener('click', () => {
  void arrancar();
});

void arrancar();
