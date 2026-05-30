# Railway de desarrollo completo para la mejora del proyecto

Fecha: 2026-05-29  
Proyecto: `web_sabiacontalble`  
Objetivo: llevar el sitio de estado actual (7.4/10) a un nivel de salida a produccion (8.5+/10), mejorando confianza, conversion, UX y calidad percibida.

## 1) Vision del Railway

Este railway organiza el trabajo en 8 estaciones, con puertas de calidad entre fases.  
Regla: no avanzar a la siguiente estacion sin cumplir los criterios de salida.

## 2) Estaciones del Railway

## Estacion 0. Kickoff y baseline
Duracion estimada: 0.5 dia  
Objetivo: alinear alcance, metricas y responsables.

Tareas:
- Confirmar objetivos de negocio (leads, tasa de contacto, tiempo en pagina).
- Definir KPIs de UX y conversion.
- Congelar baseline visual y funcional actual.

Entregables:
- Brief de objetivos.
- Lista de KPIs y metas.
- Snapshot de baseline.

Criterio de salida:
- Objetivos y KPIs aprobados por decision maker.

## Estacion 1. Saneamiento critico (texto, encoding, confianza)
Duracion estimada: 1-1.5 dias  
Objetivo: eliminar errores que bajan credibilidad inmediata.

Tareas:
- Corregir todos los textos con problemas de codificacion.
- Normalizar ortografia, acentos y consistencia de tono.
- Sustituir claims de riesgo (ej. absolutos) por promesas verificables.
- Revisar placeholders en equipo y contenido incompleto.

Entregables:
- Copy corregido en todas las paginas.
- Guia de tono corto (voz, estilo, claims permitidos).

Criterio de salida:
- 0 incidencias de texto roto.
- 0 placeholders visibles en produccion.

## Estacion 2. Arquitectura de conversion y CTA
Duracion estimada: 1 dia  
Objetivo: mejorar la intencion de contacto en cada punto del journey.

Tareas:
- Redisenar copy de CTA por contexto (home, servicios, utilitarios, contacto).
- Estandarizar propuesta de valor: tiempo de respuesta, siguiente paso, expectativa.
- Ajustar microcopys del formulario y estado de envio.

Entregables:
- Matriz de CTA por pagina e intencion.
- Implementacion de CTAs optimizados.

Criterio de salida:
- Cada pagina principal tiene CTA primario + secundario claros.
- Mensaje de conversion consistente en todo el sitio.

## Estacion 3. UX y navegacion
Duracion estimada: 1 dia  
Objetivo: reducir friccion de uso desktop/mobile.

Tareas:
- Mejorar comportamiento de dropdowns (click-outside, Escape, focus).
- Validar enlaces de footer y rutas legales (`/terminos`, `/privacidad`).
- Revisar jerarquia y escaneabilidad de bloques largos.

Entregables:
- Navegacion estable y accesible.
- Rutas legales operativas.

Criterio de salida:
- 0 rutas rotas en navegacion principal/footer.
- Flujo de menu sin bloqueos en desktop y mobile.

## Estacion 4. Sistema visual y cards v2
Duracion estimada: 1 dia  
Objetivo: mantener consistencia y aumentar jerarquia comercial.

Tareas:
- Definir variantes de cards (info, servicio, conversion, equipo).
- Ajustar densidad de contenido por card y por breakpoint.
- Refinar espaciado tipografico para legibilidad mobile.

Entregables:
- Mini design system de cards y tokens de uso.
- Componentes visuales ajustados.

Criterio de salida:
- Sistema de cards con variantes claras y reutilizables.
- Legibilidad validada en pantallas pequenas.

## Estacion 5. Datos dinamicos y prueba social
Duracion estimada: 1 dia  
Objetivo: subir confianza y mantener vigencia informativa.

Tareas:
- Resolver estrategia de indicadores financieros (dinamicos o con fecha de corte visible).
- Agregar bloque de confianza (credenciales, proceso, casos/testimonios reales).
- Revisar coherencia entre promesa y evidencia.

Entregables:
- Seccion de confianza implementada.
- Politica de actualizacion de indicadores.

Criterio de salida:
- Toda cifra sensible tiene fuente/fecha o dinamica automatizada.
- Claims principales respaldados visualmente.

## Estacion 6. QA integral (funcional, UX, tecnico)
Duracion estimada: 1-1.5 dias  
Objetivo: asegurar salida estable y profesional.

Tareas:
- QA funcional completo (rutas, formularios, estados, responsive).
- Lint, typecheck, build y pruebas de regresion.
- Revisión de accesibilidad base (focus, contraste, labels, teclado).

Entregables:
- Checklists QA completados.
- Reporte de incidencias y fixes.

Criterio de salida:
- Build OK, lint OK, typecheck OK.
- Sin bugs criticos abiertos.

## Estacion 7. Release controlado y medicion
Duracion estimada: 0.5-1 dia  
Objetivo: publicar con observabilidad y aprendizaje rapido.

Tareas:
- Despliegue controlado.
- Monitoreo de eventos de conversion y embudo.
- Revisión post-lanzamiento de primeras 48-72 horas.

Entregables:
- Release notes.
- Tablero de KPIs inicial.
- Lista de mejoras post-release.

Criterio de salida:
- Sitio estable en produccion.
- KPIs capturando datos correctamente.

## 3) Cronograma sugerido (10 dias habiles)
- Semana 1: Estaciones 0, 1, 2, 3.
- Semana 2: Estaciones 4, 5, 6, 7.

## 4) Roles sugeridos
- Product/Negocio: define mensajes, oferta y priorizacion.
- UX/UI: sistema visual, legibilidad, jerarquia, consistencia.
- Dev Frontend: implementacion tecnica y performance.
- QA: validacion funcional, responsive y accesibilidad base.
- Copy/Contenido: claridad, tono, conversion, confianza.

## 5) KPIs de exito recomendados
- Tasa de envio de formulario de contacto.
- CTR de CTA principal por pagina.
- Tiempo promedio en home/servicios.
- Rebote en paginas clave.
- Conversion desde utilitarios a contacto.

## 6) Riesgos y mitigaciones
- Riesgo: cambios visuales sin impacto de conversion.
  Mitigacion: medir por CTA y embudo, no solo por estetica.

- Riesgo: claims comerciales agresivos sin respaldo.
  Mitigacion: matriz de claims permitidos + evidencia.

- Riesgo: deuda tecnica por iterar rapido.
  Mitigacion: puerta QA obligatoria antes de release.

## 7) Definicion de Done global
- 100% textos corregidos y consistentes.
- Navegacion y rutas legales sin errores.
- CTA optimizados y medibles.
- Datos sensibles con control de vigencia.
- Build/lint/typecheck en verde.
- QA funcional y responsive aprobado.

## 8) Decision framework (aplicamos o no)
Aplicar si se cumple:
- 8/8 estaciones completadas.
- KPIs de calidad tecnica en verde.
- Sin bloqueadores de confianza/conversion.

No aplicar (o pausar release) si ocurre:
- Texto roto, rutas criticas caidas o formularios inestables.
- Claims de riesgo no ajustados.
- Falta de evidencia para promesas comerciales.
