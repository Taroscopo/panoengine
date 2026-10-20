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
  flecha: 'M5 12h14M13 6l6 6-6 6',
  info: 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 16v-4M12 8h.01',
  enlace:
    'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71',
  subir: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12',
  lapiz: 'M17 3a2.8 2.8 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z',
  chevron: 'M6 9l6 6 6-6',
  intercambiar: 'M4 7h11m0 0l-3.5-3.5M15 7l-3.5 3.5M20 17H9m0 0l3.5 3.5M9 17l3.5-3.5',
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
