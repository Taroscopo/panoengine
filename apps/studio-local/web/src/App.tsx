import { useEffect, useState } from 'react';
import { api } from './api.js';
import { EditorPage } from './EditorPage.js';
import { ToursPage } from './ToursPage.js';

export function App(): React.JSX.Element {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const alCambiar = (): void => {
      const match = /^\/tour\/([a-z0-9-]+)\/?$/.exec(location.pathname);
      setSlug(match?.[1] ?? null);
    };
    alCambiar();
    window.addEventListener('popstate', alCambiar);
    return () => window.removeEventListener('popstate', alCambiar);
  }, []);

  const abrirTour = (nuevoSlug: string): void => {
    history.pushState(null, '', `/tour/${nuevoSlug}`);
    setSlug(nuevoSlug);
  };
  const volver = (): void => {
    history.pushState(null, '', '/');
    setSlug(null);
  };

  if (slug) {
    return <EditorPage slug={slug} onVolver={volver} />;
  }
  return (
    <ToursPage
      onAbrir={abrirTour}
      onCrear={async (datos) => {
        await api.crearTour(datos);
      }}
    />
  );
}
