/** Pestañas accesibles (role=tablist/tab, aria-selected, teclado con flechas). */
export function Pestanas<T extends string>({
  pestanas,
  valor,
  onChange,
  etiqueta,
}: {
  pestanas: readonly { id: T; titulo: string }[];
  valor: T;
  onChange: (id: T) => void;
  etiqueta: string;
}): React.JSX.Element {
  const alTeclar = (e: React.KeyboardEvent, indice: number): void => {
    const siguiente =
      e.key === 'ArrowRight'
        ? (indice + 1) % pestanas.length
        : e.key === 'ArrowLeft'
          ? (indice - 1 + pestanas.length) % pestanas.length
          : null;
    if (siguiente !== null) {
      e.preventDefault();
      const pestaña = pestanas[siguiente];
      if (pestaña) onChange(pestaña.id);
    }
  };

  return (
    <div role="tablist" aria-label={etiqueta} className="flex items-center gap-1">
      {pestanas.map((p, i) => {
        const activa = p.id === valor;
        return (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={activa}
            tabIndex={activa ? 0 : -1}
            onKeyDown={(e) => alTeclar(e, i)}
            onClick={() => onChange(p.id)}
            className={`rounded-control px-3 py-1.5 text-sm font-medium transition-colors ${
              activa ? 'bg-tarjeta text-texto' : 'text-texto-tenue hover:text-texto'
            }`}
          >
            {p.titulo}
          </button>
        );
      })}
    </div>
  );
}
