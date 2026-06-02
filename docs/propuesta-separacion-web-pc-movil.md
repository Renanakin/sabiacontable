# Propuesta de Desarrollo
## Separación de experiencia Web Escritorio y Móvil (Sabia Contable)

## 1. Objetivo
Separar explícitamente la experiencia de escritorio y móvil para:
- eliminar conflictos de interacción (ej. menú hamburguesa, overlays, navegación fija),
- optimizar rendimiento por dispositivo,
- habilitar ajustes puntuales sin romper el otro canal.

## 2. Alcance
- Frontend en Next.js (App Router).
- Navegación principal, home, componentes compartidos y utilitarios.
- QA funcional en escritorio y móvil real.

No incluye:
- cambio de backend,
- rediseño visual completo de marca.

## 3. Estrategia recomendada
Aplicar separación por capas, no por proyectos duplicados:

1. Capa compartida (`core`):
- datos, helpers, servicios, validaciones, tracking, constantes.

2. Capa de presentación por canal:
- componentes `desktop/*`
- componentes `mobile/*`

3. Resolución por canal:
- detección por breakpoint + hooks de media query para UI.
- opción de server hints progresiva para optimizar payload móvil en fases posteriores.

Resultado: una sola base de código, dos experiencias claramente controladas.

## 4. Arquitectura propuesta
Estructura sugerida:

```txt
src/
  app/
    (site)/
      page.tsx
  components/
    core/
      HeaderBase.tsx
      NavigationModel.ts
    desktop/
      HeaderDesktop.tsx
      HomeDesktop.tsx
    mobile/
      HeaderMobile.tsx
      BottomNavMobile.tsx
      HomeMobile.tsx
  hooks/
    useDeviceProfile.ts
  styles/
    tokens.css
    desktop.css
    mobile.css
```

## 5. Plan de implementación (4 fases)
### Fase 1: Estabilización inmediata (rápida)
- congelar comportamiento actual con pruebas de regresión E2E.
- corregir puntos críticos de móvil (menú, contadores, capas z-index, eventos touch).
- checklist de compatibilidad en Android/iOS.

### Fase 2: Separación de navegación
- extraer modelo de navegación único (`NavigationModel`).
- render independiente para `HeaderDesktop` y `HeaderMobile`.
- desacoplar `BottomNavigationBar` de lógica desktop.

### Fase 3: Separación de home y secciones sensibles
- dividir hero/estadísticas/CTA en versión móvil y escritorio.
- adaptar interacción (scroll, animaciones, densidad visual) por canal.
- aplicar `prefers-reduced-motion` y lazy hydration para móvil.

### Fase 4: Hardening y métricas
- smoke E2E por ruta en ambos perfiles.
- pruebas manuales en dispositivos físicos.
- medición de Web Vitals por canal (LCP, CLS, INP).

## 6. Criterios técnicos clave
- Sin duplicar lógica de negocio.
- Componentes de canal con contratos claros (props tipadas).
- Accesibilidad móvil: foco, áreas táctiles, contraste, navegación por teclado.
- Animaciones no bloqueantes y activadas por visibilidad.
- Evitar dependencias nuevas salvo necesidad explícita.

## 7. QA / E2E recomendado
Matriz mínima:
- Escritorio: 1366x768, 1920x1080.
- Móvil: 360x800, 390x844, 412x915.
- Navegadores: Chrome Android, Safari iOS, Chrome Desktop.

Casos críticos:
- apertura/cierre de hamburguesa,
- interacción con navbar inferior,
- contadores visibles y animados al entrar en viewport,
- navegación entre rutas sin estados pegados,
- formularios y CTA principales.

## 8. Riesgos y mitigaciones
- Riesgo: divergencia de estilos entre canales.
  Mitigación: tokens compartidos + revisión visual por checklist.

- Riesgo: regressions por refactor.
  Mitigación: E2E base antes de cambios + validación por fase.

- Riesgo: sobrecarga de mantenimiento.
  Mitigación: separar solo componentes con comportamiento distinto.

## 9. Estimación inicial
- Fase 1: 0.5 a 1 día
- Fase 2: 1 a 2 días
- Fase 3: 1 a 2 días
- Fase 4: 0.5 a 1 día

Total estimado: 3 a 6 días hábiles, según profundidad del ajuste visual.

## 10. Entregables
- componentes separados `desktop/mobile`,
- navegación unificada por modelo,
- pruebas E2E base por dispositivo,
- checklist de validación móvil y escritorio,
- documentación de mantenimiento por canal.

## 11. Recomendación final
Implementar separación progresiva en 4 fases, priorizando primero estabilidad móvil y luego desacople estructural. Esta ruta reduce riesgo operativo y permite mejoras puntuales por dispositivo sin afectar la experiencia general del sitio.

