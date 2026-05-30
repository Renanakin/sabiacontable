# Estacion 3 - UX y navegacion

Estado: Terminada  
Fecha de cierre: 2026-05-29

## Objetivo
Reducir friccion de navegacion y cerrar brechas funcionales visibles al usuario.

## Trabajo realizado
- Header mejorado en desktop:
  - Cierre de dropdown por click fuera.
  - Cierre por tecla Escape.
  - Atributos `aria-expanded` y `aria-controls` para accesibilidad.
- Correccion de clase de rotacion de icono (`rotate-180`).
- Se crearon rutas legales faltantes enlazadas desde footer:
  - `src/app/terminos/page.tsx`
  - `src/app/privacidad/page.tsx`

## Evidencia
- Navegacion legal disponible en build final:
  - `/terminos`
  - `/privacidad`
- Componentes modificados:
  - `src/components/Header.tsx`
  - `src/components/Footer.tsx` (enlaces ya existentes ahora resueltos)

## Criterio de salida
- Menu sin bloqueos basicos de interaccion.
- 0 enlaces legales criticos apuntando a rutas inexistentes.

Resultado: Cumplido.
