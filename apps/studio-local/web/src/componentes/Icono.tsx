/** Íconos SVG de trazo (2 px), sin relleno ni emojis. */
const T = {
  volver: 'M15 18l-6-6 6-6',
  ojo: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 100-6 3 3 0 000 6z',
  nube: 'M7 18a5 5 0 113-9 6 6 0 0111.2 2A4 4 0 0118 18H7z',
  alerta: 'M12 9v4m0 4h.01M10.3 4.3L2.8 17a2 2 0 001.7 3h15a2 2 0 001.7-3L13.7 4.3a2 2 0 00-3.4 0z',
  mas: 'M12 5v14M5 12h14',
  papelera:
    'M4 7h16M10 11v6M14 11v6M6 7l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3',
  escape: 'M6 6l12 12M18 6L6 18',
  check: 'M4 12l5 5L20 7',
} as const;

export type NombreIcono = keyof typeof T;

export function Icono({
  nombre,
  className = 'h-4 w-4',
}: {
  nombre: NombreIcono;
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={T[nombre]} />
    </svg>
  );
}
