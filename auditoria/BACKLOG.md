# Backlog de PanoEngine

Elementos anotados por orden expresa de Andrés (2026-10-18). Nada de esto está
en construcción: se ejecuta cuando se ordene.

1. **Publicar un tour sin escenas debe dar un error claro en español.**
   Hoy `POST /api/tours/:slug/publish` valida el contrato publicado y falla
   con el mensaje de validación genérico; hay que devolver un aviso pensado
   para el usuario del estudio (p. ej. «Añade al menos una escena antes de
   publicar») y cubrirlo con test de ruta.

2. **El botón «Publicar» debe usar el `edgeUrl` que devuelve el servidor (E7).**
   Hoy la banda de resultado ignora `res.edgeUrl`. Al llegar E7: copiar
   enlace, «Abrir tour» y QR (librería offline — listar dependencia nueva
   ANTES de instalarla, según las reglas).

## Registro de decisiones del propietario (vigentes)

- La cuenta dueña del repositorio es **Taroscopo** y se queda así. Los push
  van SOLO con el acceso de Taroscopo vía gh/HTTPS. Prohibido usar la clave
  SSH de `trespapaginas-source` o tocar `~/.ssh`. Los Secrets y el entorno
  `staging` se configuran en `Taroscopo/panoengine`.
- Los tours **vencidos cuentan dentro del filtro «Por vencer»** (además de
  «Todos»; no en «Activos» ni «Suspendidos»), texto de tarjeta «Venció hace
  N días» en rojo y resumen «N vencen pronto o vencieron». Implementado en el
  commit «Vencidos en Por vencer».
- Orden de trabajo (un paso por vez, con OK previo de Andrés):
  E3b-fix → subir y auditar CI/CD (scope `workflow`) → primer deploy a
  staging + A2 → commit «H1» → E4.
