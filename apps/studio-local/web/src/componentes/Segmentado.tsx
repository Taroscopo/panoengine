/** Control segmentado (una opción activa entre pocas). */
export function Segmentado<T extends string>({
  opciones,
  valor,
  onChange,
  etiqueta,
}: {
  opciones: readonly { id: T; titulo: string }[];
  valor: T;
  onChange: (id: T) => void;
  etiqueta: string;
}): React.JSX.Element {
  return (
    <fieldset aria-label={etiqueta} className="inline-flex rounded-control border border-linea p-0.5">
      {opciones.map((o) => {
        const activa = o.id === valor;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={activa}
            onClick={() => onChange(o.id)}
            className={`rounded-[6px] px-3 py-1 text-sm transition-colors ${
              activa ? 'bg-azul/15 text-azul' : 'text-texto-suave hover:text-texto'
            }`}
          >
            {o.titulo}
          </button>
        );
      })}
    </fieldset>
  );
}
