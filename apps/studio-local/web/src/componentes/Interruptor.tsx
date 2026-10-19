/** Interruptor accesible: <input type="checkbox"> real + <label> asociado. */
export function Interruptor({
  id,
  etiqueta,
  revisado,
  onChange,
}: {
  id: string;
  etiqueta: string;
  revisado: boolean;
  onChange: (valor: boolean) => void;
}): React.JSX.Element {
  return (
    <div className="flex items-center gap-2.5">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={revisado}
        onClick={() => onChange(!revisado)}
        className={`relative h-5 w-9 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-azul ${
          revisado ? 'border-azul/60 bg-azul/30' : 'border-linea bg-tarjeta'
        }`}
      >
        <span
          className={`absolute top-0.5 h-3.5 w-3.5 rounded-full transition-all ${
            revisado ? 'left-[18px] bg-azul' : 'left-0.5 bg-texto-tenue'
          }`}
        />
      </button>
      <label htmlFor={id} className="cursor-pointer text-sm text-texto-suave">
        {etiqueta}
      </label>
    </div>
  );
}
