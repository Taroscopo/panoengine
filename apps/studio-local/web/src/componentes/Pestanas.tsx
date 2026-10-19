/**
 * Pestañas accesibles (role=tablist/tab, aria-selected, teclado con flechas,
 * aria-controls enlazado con el panel por convención `panel-<id>`).
 * Sin píldora: texto suave; la activa en color texto con subrayado de 2 px
 * pegado al borde inferior de la cabecera (el tablist debe estirarse a toda
 * la altura de la cabecera para que el subrayado toque el borde).
 */
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
    <div role="tablist" aria-label={etiqueta} className="flex items-stretch gap-5">
      {pestanas.map((p, i) => {
        const activa = p.id === valor;
        return (
          <button
            key={p.id}
            type="button"
            role="tab"
            id={`pestana-${p.id}`}
            aria-selected={activa}
            aria-controls={`panel-${p.id}`}
            tabIndex={activa ? 0 : -1}
            onKeyDown={(e) => alTeclar(e, i)}
            onClick={() => onChange(p.id)}
            className={`flex items-center border-b-2 px-1 text-sm font-medium transition-colors ${
              activa ? 'border-texto text-texto' : 'border-transparent text-texto-suave hover:text-texto'
            }`}
          >
            {p.titulo}
          </button>
        );
      })}
    </div>
  );
}
