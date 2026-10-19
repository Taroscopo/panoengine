type Tono = 'neutro' | 'verde' | 'ambar' | 'rojo' | 'azul';

const TONOS: Record<Tono, string> = {
  neutro: 'border-linea text-texto-suave',
  verde: 'border-verde/40 text-verde',
  ambar: 'border-ambar/40 text-ambar',
  rojo: 'border-rojo/40 text-rojo',
  azul: 'border-azul/40 text-azul',
};

export function Insignia({
  children,
  tono = 'neutro',
}: {
  children: React.ReactNode;
  tono?: Tono;
}): React.JSX.Element {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONOS[tono]}`}
    >
      {children}
    </span>
  );
}
