# Skills para revisión de ortografía, textos, semántica y líricas web

## Propósito
Este documento reúne un set de skills pensados para revisar y mejorar contenido web en español, con foco en ortografía, redacción, semántica, claridad, tono de marca, microcopy, UX writing y consistencia editorial.

## 1. Corrector ortográfico avanzado
**Objetivo:** detectar y corregir errores ortográficos, tildes, puntuación y mayúsculas/minúsculas.

### Qué revisa
- Tildes omitidas o mal puestas.
- Confusión entre palabras homófonas o similares.
- Signos de puntuación mal usados.
- Uso incorrecto de mayúsculas en títulos, botones y encabezados.
- Espacios dobles, caracteres rotos y errores de tipeo.

### Prompt sugerido
```txt
Revisa el siguiente texto como corrector ortográfico profesional en español.
Corrige ortografía, tildación, puntuación y uso de mayúsculas.
No cambies el sentido del mensaje.
Entrega:
1. Texto corregido.
2. Lista breve de errores encontrados.
3. Observaciones si hay ambigüedad.

Texto:
"""
[PEGAR TEXTO]
"""
```

## 2. Revisor de redacción web
**Objetivo:** mejorar claridad, estructura, legibilidad y fluidez para contenido de sitios web.

### Qué revisa
- Frases demasiado largas.
- Redundancias.
- Párrafos difíciles de escanear.
- Falta de jerarquía en títulos y subtítulos.
- Mensajes poco claros para landing pages, fichas de producto y páginas de servicios.

### Prompt sugerido
```txt
Actúa como editor de contenidos web.
Reescribe el texto para que sea más claro, directo y fácil de escanear.
Mantén el mensaje original, pero mejora legibilidad, estructura y fluidez.
Optimiza para lectura rápida en pantalla.

Entrega:
1. Versión mejorada.
2. Principales cambios aplicados.
3. Recomendaciones de estructura si corresponde.

Texto:
"""
[PEGAR TEXTO]
"""
```

## 3. Analizador semántico
**Objetivo:** validar coherencia semántica, precisión del mensaje e intención comunicativa.

### Qué revisa
- Ideas contradictorias.
- Palabras vagas o imprecisas.
- Frases que no transmiten bien la propuesta de valor.
- Pérdida de sentido entre títulos, subtítulos y CTA.
- Alineación entre intención del negocio y mensaje percibido por el usuario.

### Prompt sugerido
```txt
Analiza el siguiente texto desde el punto de vista semántico.
Detecta ambigüedades, incoherencias, frases vacías y mensajes débiles.
Indica si el texto comunica con claridad su intención.

Entrega:
1. Diagnóstico semántico.
2. Frases problemáticas.
3. Reescritura sugerida de los fragmentos débiles.
4. Evaluación general de claridad de 1 a 10.

Texto:
"""
[PEGAR TEXTO]
"""
```

## 4. UX writing para webs
**Objetivo:** optimizar textos funcionales de interfaz para que sean claros, útiles y accionables.

### Qué revisa
- Botones poco claros.
- Mensajes de error confusos.
- Formularios con labels ambiguos.
- CTA débiles.
- Microcopys que no ayudan al usuario a completar acciones.

### Prompt sugerido
```txt
Actúa como especialista en UX writing para interfaces web.
Revisa los textos de botones, formularios, mensajes de error, placeholders y CTA.
Optimiza claridad, utilidad, brevedad y tono.

Entrega:
1. Texto original vs texto mejorado.
2. Justificación breve por cambio.
3. Recomendaciones para conversión y comprensión.

Elementos a revisar:
"""
[PEGAR MICROCOPY]
"""
```

## 5. Optimizador de tono y voz de marca
**Objetivo:** adaptar los textos al tono correcto según marca, público y contexto.

### Qué revisa
- Inconsistencia en el tono.
- Mezcla entre lenguaje formal e informal.
- Falta de personalidad verbal.
- Mensajes que no conectan con el público objetivo.
- Tono poco comercial o poco confiable para el tipo de web.

### Prompt sugerido
```txt
Actúa como editor de tono de marca.
Ajusta el siguiente texto para que suene [formal / cercano / premium / técnico / juvenil / confiable / vendedor],
sin perder claridad ni naturalidad.

Entrega:
1. Versión adaptada al tono indicado.
2. Rasgos del tono detectados.
3. Inconsistencias encontradas.
4. Sugerencias para mantener la voz de marca en todo el sitio.

Texto:
"""
[PEGAR TEXTO]
"""
```

## 6. Revisión SEO semántica
**Objetivo:** mejorar contenido para buscadores sin perder naturalidad ni calidad editorial.

### Qué revisa
- Uso artificial de keywords.
- Falta de términos relacionados semánticamente.
- Encabezados poco descriptivos.
- Meta textos débiles.
- Contenido que posiciona mal por ser genérico o poco útil.

### Prompt sugerido
```txt
Actúa como editor SEO semántico.
Revisa el texto para mejorar intención de búsqueda, claridad temática y naturalidad.
Sugiere mejoras en títulos, subtítulos, keywords secundarias y entidades relacionadas.
No hagas keyword stuffing.

Entrega:
1. Diagnóstico SEO semántico.
2. Versión optimizada.
3. Lista de términos relacionados recomendados.
4. Sugerencia de title y meta description.

Texto:
"""
[PEGAR TEXTO]
"""
```

## 7. Revisor de copy comercial
**Objetivo:** convertir textos planos en mensajes más persuasivos para vender, captar leads o generar acción.

### Qué revisa
- Beneficios poco visibles.
- Exceso de descripción y poca persuasión.
- CTA débiles.
- Falta de propuesta de valor.
- Copy que informa pero no convierte.

### Prompt sugerido
```txt
Actúa como copywriter de conversión para sitios web.
Mejora el texto para hacerlo más persuasivo, claro y orientado a la acción.
Destaca propuesta de valor, beneficios, diferenciadores y CTA.

Entrega:
1. Versión optimizada para conversión.
2. Principales debilidades del texto actual.
3. CTA alternativos.
4. Nivel de persuasión actual de 1 a 10.

Texto:
"""
[PEGAR TEXTO]
"""
```

## 8. Revisión de consistencia editorial
**Objetivo:** mantener uniformidad en todo el sitio web.

### Qué revisa
- Diferencias de tono entre páginas.
- Variación en nombres de productos o servicios.
- Formatos inconsistentes de fechas, precios, títulos y botones.
- Cambios de tratamiento al usuario (tú, usted, vos).
- Terminología duplicada o contradictoria.

### Prompt sugerido
```txt
Actúa como auditor editorial de un sitio web.
Revisa consistencia de tono, terminología, estilo, tratamiento al usuario y naming.
Identifica diferencias entre secciones y propone una guía unificada.

Entrega:
1. Inconsistencias encontradas.
2. Reglas de estilo sugeridas.
3. Términos estandarizados.
4. Recomendación de guía editorial base.

Contenido:
"""
[PEGAR TEXTOS DE DISTINTAS SECCIONES]
"""
```

## 9. Skill maestro para auditoría integral de textos web
**Objetivo:** ejecutar una revisión completa combinando ortografía, estilo, semántica, UX writing, SEO y conversión.

### Prompt maestro
```txt
Actúa como auditor integral de contenido web en español.
Analiza el siguiente texto o bloque de textos considerando:
- ortografía
- gramática
- puntuación
- claridad
- redacción web
- semántica
- tono de marca
- UX writing
- SEO semántico
- capacidad de conversión
- consistencia editorial

Entrega el resultado en este formato:
1. Diagnóstico general.
2. Errores ortográficos y gramaticales.
3. Problemas de claridad y redacción.
4. Problemas semánticos.
5. Problemas de tono y voz.
6. Problemas de UX writing.
7. Problemas de SEO semántico.
8. Versión mejorada final.
9. Recomendaciones accionables para la web.
10. Nota final global de 1 a 10.

Texto:
"""
[PEGAR TEXTO]
"""
```

## 10. Estructura recomendada para guardar estos skills
Para usarlos como librería de prompts o skills dentro de un proyecto, conviene separarlos así:

```txt
skills/
  corrector-ortografico.md
  revisor-redaccion-web.md
  analizador-semantico.md
  ux-writing-web.md
  tono-voz-marca.md
  seo-semantico.md
  copy-conversion.md
  consistencia-editorial.md
  auditoria-integral-textos-web.md
```

## Ejemplo de frontmatter para cada skill
```yaml
---
name: corrector-ortografico
purpose: Revisar ortografía, puntuación y errores básicos en textos web en español
input: Texto libre
output: Texto corregido + lista de errores + observaciones
category: content-review
language: es
---
```

## Recomendaciones prácticas
- Usar un skill corto para tareas puntuales y el skill maestro para auditorías completas.
- Separar revisión lingüística de revisión comercial cuando el texto tenga objetivos de conversión.
- Mantener un criterio fijo de tono para todo el sitio.
- Revisar CTAs, headings y formularios por separado, porque suelen concentrar los errores más costosos para conversión.
- Crear una guía editorial propia si el sitio tiene muchas páginas o varios editores.
