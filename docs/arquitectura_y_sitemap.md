# Arquitectura de la Información y Sitemap V2 – Sabia Contable

Este documento define la estructura de navegación y el enrutamiento individual de la aplicación **Sabia Contable V2** para optimizar el SEO local y la experiencia de usuario (UX).

---

## 1. Mapa del Sitio (Sitemap V2)

A diferencia del sitio anterior que utilizaba anclas internas en una única página, la V2 se estructurará con rutas accesibles e indexables de forma individual:

```txt
/ (Página de Inicio)
├── /quienes-somos (Nuestra historia, misión, visión y pilares)
├── /nuestro-equipo (Perfiles del equipo, roles directivos y operativos)
├── /servicios (Directorio general de soluciones)
│   ├── /servicios/contabilidad-integral (SEO: "Contabilidad para pymes en Santiago")
│   ├── /servicios/gestion-de-remuneraciones (SEO: "Gestión de sueldos y leyes sociales")
│   ├── /servicios/gestion-tributaria (SEO: "Asesoría de impuestos y F29")
│   ├── /servicios/creacion-de-empresa (SEO: "Crear empresa en un día Chile")
│   └── /servicios/auditoria-financiera (SEO: "Auditoría contable y tributaria")
├── /utilitarios (Calculadoras tributarias y financieras)
│   ├── /utilitarios/calculo-iva (Cálculo rápido de IVA)
│   ├── /utilitarios/boleta-honorarios (Cálculo líquido/bruto)
│   └── /utilitarios/liquidacion-sueldo (Liquidación de sueldo líquida/bruta)
└── /contacto (Formulario interactivo y enlaces rápidos a WhatsApp/Google Maps)
```

---

## 2. Lógica de Navegación de Componentes Comunes

### 2.1 Header (Desktop / Tablet)
- **Logo**: Logotipo institucional en la esquina izquierda (redirecciona a `/`).
- **Menú Principal**:
  - Inicio (`/`)
  - Nosotros (`/quienes-somos`)
  - Equipo (`/nuestro-equipo`)
  - Servicios (`/servicios`) -> Menú desplegable (*Dropdown*) con enlaces a las subpáginas de servicios.
  - Utilitarios (`/utilitarios`) -> Menú desplegable (*Dropdown*) con enlaces directos a las 3 calculadoras.
- **CTA Directo**: Botón destacado con fondo magenta (`--accent-magenta`) que dice **"Agenda Asesoría"** redirigiendo a `/contacto`.

### 2.2 Bottom Navigation Bar (Mobile Flotante)
- Diseñada ergonómicamente para ser controlada con el pulgar.
- Contendrá 4 botones principales con iconos minimalistas:
  1. **Inicio** (`/`)
  2. **Servicios** (`/servicios`)
  3. **Calculadoras** (`/utilitarios`)
  4. **Contacto** (`/contacto`)

### 2.3 Footer (Pie de Página)
- **Columna 1**: Resumen de Sabia Contable y logotipo institucional.
- **Columna 2**: Accesos directos a páginas principales.
- **Columna 3**: Lista directa de los 5 servicios clave (con enlaces canonicalizados individuales).
- **Columna 4**: Datos de contacto (Dirección, Teléfono, Correo, Redes Sociales con formato JSON-LD).
