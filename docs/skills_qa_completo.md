# 1. Rol del antigravity-skill-orchestrator
Es un meta-skill que evalúa la complejidad de la tarea, selecciona dinámicamente las mejores skills y reutiliza combinaciones exitosas vía agent-memory-mcp.

Sirve como “director técnico”: decide cuándo usar skills como testing-qa, web-security-testing, architecture, antigravity-design-expert, etc., y evita sobrecargar tareas simples.

# 2. Lista actualizada de skills “bajo” el orquestador
Estas son las que orquestará para una auditoría integral de un desarrollo cualquiera:

- **Arquitectura y código:** architecture, architecture-patterns, architect-review, analyze-project, auth-implementation-patterns, application-performance-performance-optimization.
- **QA y testing:** testing-qa, acceptance-orchestrator, agent-evaluation, advanced-evaluation.
- **Seguridad:** web-security-testing, api-security-testing, api-security-best-practices, api-fuzzing-bug-bounty.
- **UX/diseño/accesibilidad:** antigravity-design-expert, accessibility-compliance-accessibility-audit, accesslint-audit, accesslint-scan, accesslint-diff.
- **Datos/APIs:** api-design-principles, api-patterns, api-testing-observability-api-mock.
- **Observabilidad e informes:** analytics-tracking, audit-context-building, audit-skills, 2slides-ppt-generator.

# 3. Cómo invocarlo en la práctica
Ejemplos de prompts dentro de Antigravity:

**Para toda la auditoría:**
`@antigravity-skill-orchestrator Realiza una auditoría integral de este repositorio: arquitectura, calidad de código, QA funcional, seguridad, UX/accesibilidad y genera un informe técnico + ejecutivo.`

**Solo seguridad + QA:**
`@antigravity-skill-orchestrator Enfócate en seguridad app/API y QA funcional end-to-end sobre este proyecto, usando las mejores skills de testing y web security.`

El orquestador revisará el contexto, evaluará la complejidad y llamará a la combinación óptima de skills, reutilizando patrones previos almacenados en agent-memory-mcp.

# 4. Esquema de flujo con orquestación
- Lanzas una instrucción de alto nivel al antigravity-skill-orchestrator describiendo el tipo de auditoría y el alcance.
- El orquestador decide qué subconjunto de skills usar en cada fase (arquitectura, código, QA, seguridad, UX, reporting).
- Cada skill produce hallazgos parciales; el orquestador usa agent-memory-mcp para registrar la combinación y resultados.
- Al final, puedes pedirle explícitamente que compile todo en un informe estructurado (por ejemplo, usando audit-context-building + 2slides-ppt-generator).

Si quieres, en el siguiente mensaje te armo un prompt “plantilla” listo para copiar/pegar que describa toda la auditoría integral, usando antigravity-skill-orchestrator como entrada única.
