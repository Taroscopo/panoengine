import type { ReactNode } from 'react';
import { Icono, type NombreIcono } from './Icono.js';

type Variante = 'primario' | 'secundario' | 'fantasma' | 'peligro';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-control border text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-azul disabled:pointer-events-none disabled:opacity-40';

const VARIANTES: Record<Variante, string> = {
  // Regla: UNO por pantalla (botón principal).
  primario: 'border-transparent bg-texto text-[#15171B] hover:bg-texto-suave',
  secundario: 'border-linea bg-transparent text-texto hover:bg-tarjeta',
  fantasma: 'border-transparent bg-transparent text-texto-suave hover:bg-tarjeta hover:text-texto',
  peligro: 'border-rojo/40 bg-transparent text-rojo hover:bg-rojo/10',
};

export function Boton({
  children,
  variante = 'secundario',
  icono,
  className = '',
  ...props
}: {
  children?: ReactNode;
  variante?: Variante;
  icono?: NombreIcono;
} & React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element {
  return (
    <button type="button" className={`${BASE} ${VARIANTES[variante]} px-4 py-2 ${className}`} {...props}>
      {icono && <Icono nombre={icono} />}
      {children}
    </button>
  );
}
