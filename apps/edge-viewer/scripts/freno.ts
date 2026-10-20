/** ¿El entorno lleva la orden expresa de desplegar a producción? */
export function ordenExplicita(env: Record<string, string | undefined> = process.env): boolean {
  return env.PANOENGINE_ORDEN_PRODUCCION === 'CONFIRMADO';
}
