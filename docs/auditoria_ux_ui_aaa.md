# Auditoría UX/UI & Estrategia de Inmersión AAA+ – Sabia Contable V2

Este informe analiza la nueva web en Next.js bajo las directrices de la guía **`design-taste-frontend`** para convertir un sitio institucional en una experiencia digital inmersiva de primer nivel (Estándar AAA+), optimizando conversiones y retención.

---

## 1. Evaluación de Fricción & Jerarquía (Líneas Clave de Mejora)

### 1.1 Inmersión y Retención ("Quedarse a ver la web")
Para lograr que un usuario navegue la página por puro placer visual e interactivo (incluso si no requiere servicios contables inmediatos), debemos estructurar:
- **Spotlight Border Cards (Efecto de iluminación dinámica):** Las tarjetas de servicios deben reaccionar al movimiento del puntero iluminando sus bordes sutilmente con el color de acento (`--accent-magenta`).
- **Spring Physics en Micro-Interacciones:** Todo botón o elemento cliqueable debe reaccionar físicamente al tacto usando un escalado spring `scale-[0.97]` con transiciones `cubic-bezier(0.16, 1, 0.3, 1)` para emular un botón físico de hardware premium.
- **Asimetría de Retícula (Visual Variety):** Romper la típica retícula aburrida de 3 columnas de cards iguales. Usaremos variaciones de retícula Bento 2.0 y anchos dinámicos (60/40 y splits asimétricos).

### 1.2 CTAs Contextuales y Flujos de Conversión
- **Floating Speed Dial / Sticky Bottom Nav:** El acceso a la consultoría gratuita de WhatsApp y Resend debe ser no-intrusivo pero altamente descubrible a través de la barra de navegación ergonómica móvil y botones flotantes con micro-animaciones continuas (pulsos de estado activo).
- **Materialidad Frosted Glass (Liquid Glass):** El Header y los modales deben contar con bordes internos difuminados (`border-white/10`) y sombras internas (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`) para emular refracción física de cristal esmerilado real.

---

## 2. Plan de Acción de Diseño e Interacción (Fase AAA+)

| Módulo/Página | Concepto de Inmersión | Implementación Técnica |
|---|---|---|
| **Cabecera (Header)** | Liquid Glass Refraction | `backdrop-blur-md` + `border-white/10` + `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]` |
| **Página de Inicio** | Bento Grid & Spotlight borders | Grid asimétrica y `card-spotlight` con spring physics en hover. |
| **Calculadoras** | Tactile Feedback & Monospace numbers | Formulario reactivo en tiempo real con números monoespaciados (`font-mono`) de alta densidad visual. |
| **Nuestro Equipo** | Morphing Modals | Transición de entrada suave (zoom-in-95) y `whitespace-pre-line` en biografías de rol. |
| **Contacto** | Smart forms & Map interactivo | Formulario con feedback táctil y validaciones dinámicas previas al envío por Resend. |
