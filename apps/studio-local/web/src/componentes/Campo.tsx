import type { ReactNode } from 'react';

/** Campo con <label> real asociado al control que contiene. */
export function Campo({
  etiqueta,
  children,
  id,
  ayuda,
}: {
  etiqueta: string;
  children: ReactNode;
  id?: string;
  ayuda?: string;
}): React.JSX.Element {
  return (
    <div className="mb-3">
      {id !== undefined ? (
        <label htmlFor={id} className="mb-1 block text-xs font-medium text-texto-suave">
          {etiqueta}
        </label>
      ) : (
        <span className="mb-1 block text-xs font-medium text-texto-suave">{etiqueta}</span>
      )}
      {children}
      {ayuda && <p className="mt-1 text-xs text-texto-tenue">{ayuda}</p>}
    </div>
  );
}

export const inputCls =
  'w-full rounded-control border border-linea bg-fondo px-3 py-2 text-sm text-texto placeholder:text-texto-tenue focus:border-azul focus:outline-none';
