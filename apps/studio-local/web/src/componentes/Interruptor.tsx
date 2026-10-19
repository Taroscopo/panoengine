/**
 * Interruptor accesible: <button type="button" role="switch"> con aria-checked
 * y <label> asociado por id. ENCENDIDO = fondo color texto con perilla oscura;
 * APAGADO = fondo #3D424D con perilla blanca. Sin azul (reservado a selección;
 * solo se usa como anillo de foco).
 */
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
          revisado ? 'border-transparent bg-texto' : 'border-transparent bg-[#3D424D]'
        }`}
      >
        <span
          className={`absolute top-0.5 h-3.5 w-3.5 rounded-full transition-all ${
            revisado ? 'left-[18px] bg-[#15171B]' : 'left-0.5 bg-white'
          }`}
        />
      </button>
      <label htmlFor={id} className="cursor-pointer text-sm text-texto-suave">
        {etiqueta}
      </label>
    </div>
  );
}
