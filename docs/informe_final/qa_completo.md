INFORME DE AUDITORÍA TÉCNICA WEB — SABIA CONTABLE
Fecha de Auditoría: 5 de junio de 2026
Cliente: Sabia Contable (sabiacontable.cl)
Auditor: Equipo Técnico
Alcance: UX/UI, Rendimiento, Seguridad, Tecnología, SEO, Accesibilidad
Entorno evaluado: localhost:3000 (Next.js + Turbopack)

1. RESUMEN EJECUTIVO
La plataforma Sabia Contable es una web corporativa de una consultora contable y tributaria chilena, construida sobre Next.js con Turbopack[screenshot:34]. El sitio proyecta una imagen visual profesional y coherente, con una paleta de colores dark navy + fucsia que comunica seriedad y modernidad. Los servicios principales (Contabilidad Integral, Gestión de Remuneraciones, Asesoría Tributaria, Creación de Empresa, Auditoría Financiera) están bien estructurados y con contenido descriptivo sólido.

Sin embargo, la auditoría detectó problemas críticos y severos que deben ser abordados antes de cualquier lanzamiento a producción, especialmente en seguridad, funcionamiento de utilitarios, cumplimiento normativo y optimización técnica.

2. TABLA DE HALLAZGOS
ID	Categoría	Severidad	Descripción	Página
CR-01	Seguridad	CRÍTICO	DevTools de Next.js expuesto en producción	Todas
CR-02	Seguridad	CRÍTICO	Widget WhatsApp flotante apunta a número genérico (plantilla 12345678)	Todas
AL-01	Funcionalidad	ALTO	Google Maps iframe bloqueado (“Este contenido está bloqueado”)	/contacto
AL-02	Funcionalidad	ALTO	Utilitarios sin páginas funcionales (404 en rutas individuales)	/utilitarios/*
AL-03	Legal	ALTO	Términos de Servicio insuficientes (2 párrafos genéricos)	/terminos
AL-04	Legal	ALTO	Política de Privacidad no conforme a Ley 19.628	/privacidad
ME-05	UX	MEDIO	Formulario de contacto sobrecargado (5 campos required)	/contacto
ME-06	UX	MEDIO	reCAPTCHA invisible sin feedback visual claro	/contacto
ME-07	UX	MEDIO	Falta menú hamburguesa responsive para móvil	Todas
ME-08	SEO	MEDIO	Faltan meta descripciones y Open Graph tags	Todas
ME-09	SEO	MEDIO	Sin datos estructurados (Schema.org JSON-LD)	Todas
ME-10	Rendimiento	MEDIO	Sitio en localhost sin HTTPS ni CDN	Todas
3. HALLAZGOS DETALLADOS
3.1 SEGURIDAD
CR-01 | DevTools de Next.js expuesto en producción
Severidad: CRÍTICO
Ubicación: Esquina inferior izquierda de TODAS las páginas
Descripción: El indicador “Open Next.js Dev Tools” aparece como un elemento interactivo visible para cualquier usuario. Esto expone información interna de la aplicación: rutas, estructura de componentes, errores de compilación, detalles del bundler (Turbopack), y potencialmente la arquitectura completa del sitio.

Evidencia: En la página de Contacto y en todas las demás se visualiza el botón negro con el logo de Next.js (#devtools-indicator) que despliega un menú con opciones como “Route Info”, “Bundler: Turbopack”, etc.

Recomendación técnica:

// En next.config.js / next.config.ts
const nextConfig = {
  devIndicators: false,  // Deshabilita completamente el indicador
}
export default nextConfig
Referencia: https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators

CR-02 | Widget de WhatsApp flpltante con número genérico de plantilla
Severidad: CRÍTICO
Ubicación: Botón flotante bottom-right (en todas las páginas)
Descripción: El enlace del botón flotante de WhatsApp usa https://wa.me/56912345678?text=... — un número claramente de plantilla (12345678), NO el número real de la empresa (+56 9 8222 3173). Esto hace que TODAS las consultas de clientes potenciales se envíen a un número genérico o inexistente.

Evidencia: El botón flotante con texto “¡Hablemos por WhatsApp!” tiene href="https://wa.me/56912345678?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20una%20consulta...", mientras que el número correcto aparece en /contacto como +56 9 8222 3173.

Recomendación técnica:

// Reemplazar el número genérico por el real
href="https://wa.me/56982223173?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%20los%20servicios%20de%20Sabia%20Contable."
3.2 FUNCIONALIDAD
AL-01 | Google Maps iframe bloqueado
Severidad: ALTO
Ubicación: Página de Contacto — sección Información de Contacto
Descripción: El iframe de Google Maps muestra el error: “Este contenido está bloqueado. Para solucionar el problema, ponte en contacto con el propietario del sitio web.” Esto es probable porque la Google Maps API Key no está configurada correctamente en el entorno, o el dominio no está autorizado en la API Key.

Evidencia: El iframe con src="chrome-error://chromewebdata" o similar no renderiza el mapa y muestra mensaje de bloqueo accesible.

Recomendación técnica:

Crear una API Key en Google Cloud Console (https://console.cloud.google.com/).
Habilitar “Maps Embed API” en la consola.
Agregar el dominio sabiacontable.cl como dominio permitido en la restricción HTTP referrer.
Reemplazar el iframe con:
<iframe
  width="100%"
  height="300"
  frameBorder="0"
  scrolling="no"
  marginHeight="0"
  marginWidth="0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..." // Usar el embed URL oficial
  allowFullScreen
  aria-label="Ubicación de Sabia Contable"
/>
Workaround temporal: Reemplazar por una imagen estática del mapa con enlace href a Google Maps.
AL-02 | Rutas de Utilitarios sin páginas individuales (404)
Severidad: ALTO
Ubicación: Dropdown de Utilitarios en navbar + rutas /utilitarios/*
Descripción: El enlace del dropdown muestra 3 calculadoras (Cálculo de IVA, Boleta de Honorarios, Calculadora de Sueldo Líquido), pero todas las rutas individuales devuelven 404 — “This page could not be found.” Las calculadoras solo existen en la landing /utilitarios como secciones visuales, sin páginas dedicadas.

Evidencia: Navegación a /utilitarios/calculadora-iva retorna 404.

Recomendación técnica (2 opciones):

Opción A (Recomendada): Crear las páginas individuales en app/utilitarios/calculadora-iva/page.tsx, app/utilitarios/boleta-honorarios/page.tsx, app/utilitarios/calculadora-sueldo/page.tsx.
Opción B: Que los enlaces del dropdown apunten a anclas dentro de /utilitarios: /utilitarios#calculadora-iva.
3.3 PÁGINAS LEGALES
AL-03 | Términos de Servicio insuficientes
Severidad: ALTO
Ubicación: /terminos
Descripción: La página contiene únicamente 2 párrafos genéricos sin estructura legal real. Faltan completamente secciones fundamentales para un servicio contable en Chile.

Contenido actual: Texto básico sobre que “este sitio entrega información referencial” y que “toda recomendación debe validarse según la normativa vigente”. No hay condiciones de servicio reales.

Recomendación: Expandir con la siguiente estructura mínima:

Objeto del servicio (descripción de cada servicio ofertermcidp)
Formalización de contratación (contrato escrito, honorarios, plazos)
Obligaciones del cliente (entrega de documentación, plazos)
Obligaciones de Sabia Contable (confidencialidad, cumplimiento normativo)
Limitación de responsabilidad (exclusiones, casos fortuitos)
Resolución de conflictos (jurisdicción de Tribunales de Santiago)
Vigencia y terminación del servicio
Protección de datos personales (referencia a política de privacidad)
AL-04 | Política de Privacidad no conforme a Ley 19.628
Severidad: ALTO
Ubicación: /privacidad
Descripción: La política actual (2 párrafos) NO cumple con los requisitos mínimos de la Ley 19.628 sobre Protección de la Vida Privada de Chile, ni con la próxima reforma (Ley 21.719, vigente desde diciembre 2026).

Faltas detectadas:

No identifica al Responsable del tratamiento (nombre, RUT, dirección)
No especifica finalidades específicas del tratamiento
No indica plazo de conservación de datos
No informa sobre los derechos ARCO (Acceso, Rectificación, Cancelación, Oposición)
No enumera los datos recopilados
No menciona medidas de seguridad técnicas y organizativas
No informa sobre posibles cesiones a terceros
No incluye la base de legitimidad del tratamiento
No tiene link a Registro de Actividades de Tratamiento (RAT)
Recomendación: Redactar una Política de Privacidad completa que incluya:

Identificación del Responsable: Razón social, RUT, domicilio, email de contacto.
Categorías de datos tratados: Nombre, correo electrónico, teléfono, mensaje/consulta, servicio de interés.
Finalidades: Responder consultas, gestionar solicitudes de asesoría, seguimiento comercial.
Base de legitimidad: Consentimiento del titular (art. 4 Ley 19.628).
Conservación: Plazo de retención (ej. 3 años desde última interacción).
Derechos del titular: Acceso, rectificación, cancelación, oposición, portabilidad, bloqueo.
Medidas de seguridad: Cifrado en tránsito (HTTPS), acceso restringido, backups.
Cesiones: Proveedores técnicos necesarios para operar el servicio (hosting, email, CRM).
Transferencias internacionales: Indicar si aplica (ej. Google reCAPTCHA, WhatsApp API).
Contacto: Medio para ejercer derechos (email, formulario, datos de contacto).
Derecho a reclamo: Posibilidad de acudir a la Agencia de Protección de Datos (cuando entre en vigor la reforma).
3.4 UX / EXPERIENCIA DE USUARIO
ME-05 | Formulario de contacto sobrecargado (5 campos required)
Severidad: MEDIO

Ubicacion: Pagina /contacto

Descripcion: El formulario de contacto en la pagina principal incluye cinco campos obligatorios (required): nombre completo, correo electronico, servicio de interes, telefono celular y requerimientos/mensaje. Esta cantidad de campos obligatorios incrementa la friccion de conversion y reduce la probabilidad de que el usuario complete el formulario.

Evidencia: En /contacto se observa el formulario con los siguientes campos marcados como required: NOMBRE COMPLETO, CORREO ELECTRONICO, SERVICIO DE INTERES, TELEFONO CELULAR y REQUERIMIENTOS O MENSAJE. El campo de telefono tiene un placeholder que indica formato chileno (+56 9 8222 3173), pero no se valida el formato real del numero ingresado.

Recomendacion UX:

Reducir campos obligatorios a nombre, correo electronico y mensaje.
Hacer opcionales el telefono y el servicio de interes.
Agregar validacion de formato para telefono chileno (+56 9 XXXX XXXX).
Incluir un mensaje de confirmacion visual clearo despues del envio exitoso.
ME-06 | reCAPTCHA invisible sin feedback visual claro
Severidad: MEDIO

Ubicacion: Pagina /contacto

Descripcion: El formulario de contacto integra Google reCAPTCHA v3 (invisible), pero no proporciona ningun indicador visual de que la verificacion se esta ejecutando ni de su resultado. El usuario no recibe retroalimentacion si la proteccion antispam lo rechaza erroneamente.

Evidencia: Al inspeccionar el codigo fuente del formulario en /contacto se identifica la implementacion de reCAPTCHA invisible sin badge visible ni mensaje de estado. Si el score de reCAPTCHA es bajo, el formulario simplemente no se envia sin explicacion, lo que genera frustracion en usuarios legitimos.

Recomendacion tecnica:

Agregar un estado visual de “Verificando…” durante la validacion.
Mostrar un mensaje de error específico cuando reCAPTCHA rechaza el envio.
Implementar un fallback con reCAPTCHA v2 visible (checkbox) si el score es repetidamente bajo.
Considerar usar hCaptcha como alternativa con mejor experiencia de usuario en Chile.
Referencia: https://developers.google.com/recaptcha/docs/v3

ME-07 | Falta menu hamburguesa responsive para movil
Severidad: MEDIO

Ubicacion: Todas las paginas (header)

Descripcion: La navegacion principal del sitio no implementa un menu hamburguesa para dispositivos moviles. En pantallas pequenas, los items del menu (Inicio, Nosotros, Equipo, Servicios, Utilitarios, Agenda Asesoria) se superponen o se cortan fuera del viewport, haciendo imposible la navegacion en moviles.

Evidencia: Al reducir el ancho del navegador a hace menos de 768px, los links de navegacion del header se desbordan horizontalmente en lugar de colapsar en un menu desplegable. No se implementa ningun patron de menu mobile, lo que hace el sitio unusable en dispositivos moviles.

Recomendacion tecnica:

Implementar un menu hamburguesa con breakpoint a 768px (usar CSS media queries o un componente de UI como Radix, Headless UI o un custom burger menu).
El menu desplegable debe incluir animacion de apertura/cierre suave.
Agregar el atributo viewport meta correcto si no existe:
Asegurar que todos los botones/links tengan un area de toque minima de 44x44px para accesibilidad movil.
Implementar focus trapping en el menu desplegable para navegacion por teclado.
Ejemplo de estructura recomendada:

// app/layout.tsx o componente Navbar
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

// En componente de Navbar
<nav>
  <button aria-label="Menu" aria-expanded={isOpen} className="lg:hidden">
    <MenuIcon />
  </button>
  <ul className="hidden lg:flex">...</ul>
  {isOpen && <MobileMenu className="lg:hidden">...</MobileMenu>}
</nav>
Referencia: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

3.5 SEO / OPTIMIZACION PARA MOTORES DE BUSQUEDA
ME-08 | Faltan meta descripciones y Open Graph tags
Severidad: MEDIO

Ubicacion: Todas las paginas

Descripcion: Las paginas del sitio no implementan meta descripciones personalizadas ni etiquetas Open Graph (og:title, og:description, og:image). Esto afecta directamente el CTR en resultados de busqueda y la apariencia cuando se comparten enlaces en redes sociales.

Evidencia: Al inspeccionar el codigo HEAD de las paginas principales (/, /contacto, /servicios, etc.) se observa que faltan las siguientes etiquetas esenciales:

Recomendacion tecnica:
Implementar metadata dinamica por pagina usando el App Router de Next.js:

// app/page.tsx (pagina de inicio)
export const metadata = {
  title: "Sabia Contable | Asesoria Contable y Tributaria Premium",
  description: "Mas de 10 años de experiencia en asesoria contable, tributaria y laboral para empresas y profesionales en Chile. Servicios transparentes y resultados garantizados.",
  openGraph: {
    title: "Sabia Contable | Asesoria Contable Premium",
    description: "Equipo especializado en contabilidad, tributaria y proyectos. Tranquilidad financiera para que te enfoques en crecer tu negocio.",
    type: "website",
    images: ["/og-image.jpg"],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: "contabilidad, asesoria tributaria, contadores, Santiago, Chile, estudios contables",
  authors: [{ name: "Sabia Contable" }],
};
// app/contacto/page.tsx
export const metadata = {
  title: "Contacto | Sabia Contable",
  description: "Agenda tu asesoria contable gratuita. Contactanos por telefono, WhatsApp o formulario web. Oficinina en San Miguel, Santiago.",
};
Replicar este patron para cada pagina con contenido unico y relevante.
Incluir canonical URLs para evitar contenido duplicado.
Generar sitemap.xml dinamico siguiendo el patron https://sabiacontable.cl/sitemap.xml
Crear robots.txt explicito: https://sabiacontable.cl/robots.txt
Referencia: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

ME-09 | Sin datos estructurados (Schema.org JSON-LD)
Severidad: MEDIO

Ubicacion: Todas las paginas

Descripcion: El sitio no implementa datos estructurados en formato JSON-LD siguiendo el estandar Schema.org. Esto limita la capacidad de los motores de busqueda de comprender y enriquecer los resultados con rich snippets (estrellas, horarios, direccion, reviews).

Evidencia: Al analizar el codigo fuente de las paginas no se encuentran etiquetas

Recomendacion tecnica:
Implementar los siguientes schemas basicos:

// app/layout.tsx o componente compartido
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "name": "Sabia Contable",
      "description": "Asesoria contable, tributaria y laboral premium para empresas y profesionales en Chile",
      "telephone": "+56-9-8222-3173",
      "email": "contacto@sabiacontable.cl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gran Avenida Jose Miguel Carrera 5234, Oficina 402",
        "addressLocality": "San Miguel",
        "addressRegion": "Region Metropolitana",
        "addressCountry": "CL"
      },
      "url": "https://sabiacontable.cl",
      "logo": "https://sabiacontable.cl/logo.png",
      "openingHours": ["Mo-Fr 09:00-18:00"],
      "priceRange": "$$",
      "sameAs": [
        "https://www.linkedin.com/company/sabiacontable",
        "https://www.instagram.com/sabiacontable"
      ]
    })
  }}
/>
Tipos de schema recomendados por pagina:

Home: LocalBusiness + BreadcrumbList + WebSite
Servicios: Service + Offer + BreadcrumbList
Nosotros/Equipo: Organization + Person
Contacto: ContactPoint + PostalAddress
Referencia: https://schema.org/AccountingService, https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

3.6 RENDIMIENTO E INFRAESTRUCTURA
ME-10 | Sitio en localhost sin HTTPS ni CDN
Severidad: MEDIO

Ubicacion: Todas las paginas

Descripcion: El sitio se encuentra actualmente ejecutandose en entorno de desarrollo local (localhost:3000) sin certificado SSL/TLS, sin CDN y sin configuracion de produccion. El trafico viaja sin cifrar y los tiempos de carga dependen unicamente del servidor local, lo que hace el sitio inaccesible desde internet.

Evidencia:

URL: http://localhost:3000 (sin HTTPS)
No hay certificado SSL configurado
No hay CDN para distribucion de contenido estatico
No hay configuracion de cache en servidor
El indicador de Next.js DevTools confirma modo desarrollo
Recomendacion tecnica (Despliegue):

Opcion A - Vercel (recomendada para Next.js):

# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel --prod
Domains: apunta sabiacontable.cl con DNS托管 en Vercel
HTTPS: automatico con Let’s Encrypt
CDN: incluido en infraestructura Edge Network
Costo: Gratis para proyectos personales, Pro desde $20/mes
Opcion B - Hostinger VPS (autohosting):

# En VPS Ubuntu con Docker
docker run -d --name sabia-next \
  -p 3000:3000 \
  -e NEXT_TELEMETRY_DISABLED=1 \
  sabiacontable:latest

# Caddy como reverse proxy con SSL automatico
caddy reverse-proxy --from sabiacontable.cl --to localhost:3000
SSL: automatico con Caddy o certbot
CDN: Cloudflare gratuito
Costo: ~$5-10 USD/mes (VPS economico)
Opcion C - Hostinger hPanel (tradicional):

Subir build de produccion: npm run build && npm run start
Configurar dominio en cPanel con SSL
CDN: activar Cloudflare desde hPanel
Configuracion de produccion (next.config.js):

const nextConfig = {
  productionBrowserSourceMaps: false, // NUNCA en produccion
  poweredByHeader: false, // Ocultar cabecera de Next.js
  compress: true, // Activar gzip
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sabiacontable.cl" },
    ],
  },
};

module.exports = nextConfig;
Testing post-despliegue:

Executar Lighthouse: debe alcanzar score >90 en todas las categorias
Verificar SSL con: https://www.ssllabs.com/ssltest/analyze.html?d=sabiacontable.cl
Medir tiempos con: https://pagespeed.web.dev/
Referencia: https://nextjs.org/docs/deployment, https://vercel.com/docs

4. RECOMENDACIONES PRIORIZADAS
A continuacion se presenta una matriz de acciones ordenadas por prioridad e impacto, para guiar la remediacion del sitio antes de su lanzamiento publico.

Prioridad	Hallazgo	Accion	Esfuerzo	Impacto
CRITICO	CR-01 DevTools expuesto	Deshabilitar devIndicators en next.config.js (5 min)	Bajo	Alto
CRITICO	CR-02 WhatsApp incorrecto	Actualizar numero en componente flotante	Bajo	Alto
ALTO	AL-01 Google Maps bloqueado	Obtener API Key en Google Cloud Console	Medio	Alto
ALTO	AL-02 Utilitarios 404	Implementar paginas de calculadoras	Medio	Medio
ALTO	AL-03 Terminos insuficientes	Redactar terminos completos con clausulas legales	Alto	Alto
ALTO	AL-04 Privacidad no cumple Ley 19.628	Redactar politica conforme + derechos ARCO	Alto	Alto
MEDIO	ME-05 Formulario sobrecargado	Reducir campos required a 3	Bajo	Medio
MEDIO	ME-06 reCAPTCHA sin feedback	Agregar estados visuales	Bajo	Medio
MEDIO	ME-07 Sin menu movil	Implementar menu responsivo + viewport meta	Medio	Alto
MEDIO	ME-08 Sin meta/OG tags	Implementar metadata por pagina (Next.js)	Medio	Medio
MEDIO	ME-09 Sin Schema.org	Agregar JSON-LD de AccountingService	Bajo	Medio
MEDIO	ME-10 Sin HTTPS/CDN	Desplegar en produccion con SSL + CDN	Medio	Alto
Orden de ejecucion recomendado (Fase por Fase):

Fase 1 - Pre-lanzamiento (1-2 dias):

CR-01: Deshabilitar DevTools
CR-02: Corregir numero WhatsApp
ME-10: Desplegar con HTTPS
AL-01: Configurar Google Maps API Key
ME-07: Menu responsivo basico
Fase 2 - Legal/Contenido (3-5 dias):
6. AL-03: Terminos de Servicio completos
7. AL-04: Politica de Privacidad conforme
8. AL-02: Paginas de Utilitarios

Fase 3 - Optimizacion (1 semana):
9. ME-08: Meta descriptions y Open Graph
10. ME-09: Schema.org JSON-LD
11. ME-05: Optimizar formulario
12. ME-06: Feedback visual reCAPTCHA

Fase 4 - Mejora continua:
13. Integracion con Google Analytics / Google Tag Manager
14. Implementacion de Blog con CMS headless
15. Testing A/B del formulario de contacto
16. Automatizacion de backups
17.

5. CONCLUSION
El sitio web de Sabia Contable presenta una base tecnica solida construida en Next.js 14 con App Router y Turbopack, lo que indica un stack moderno y bien mantenido. El diseno visual es coherente, profesional y acorde con el posicionamiento de marca de la empresa.

Sin embargo, existen 4 hallazgos criticos y de alta prioridad que deben resolverse antes del lanzamiento publico:

Exposicion de informacion interna del framework (DevTools visible a todos los visitantes)
Perdida de leads debido al numero de WhatsApp incorrecto
Incumplimiento legal en Terminos de Servicio y Politica de Privacidad (Ley 19.628 y reforma Ley 21.719)
Funcionalidad rota (Google Maps sin API Key, Utilitarios con error 404)
La secuencia de correccion priorizada propuesta asegura que los riesgos mas severos se mitiguen primero, minimizando el impacto en el negocio. Siguiendo las 4 fases de implementacion, se estima un tiempo total de 1.5 a 2.5 semanas para Completar todas las correcciones con un equipo de desarrollo pequeno (1-2 personas).

Una vez implementadas las correcciones, se recomienda realizar una auditoria de seguimiento para verificar que todos los hallazgos han sido remitidos y para evaluar nuevas optimizaciones posteriores al lanzamiento.

Metadatos del informe:

Auditor realizado por: [Tu Nombre / Empresa]
Fecha de auditoria: 5 de junio de 2026
Version del informe: 1.0
Sitio auditado: http://localhost:3000 (desarrollo)
Dominio de produccion: sabiacontable.cl
Framework: Next.js 14 con App Router + Turbopack
Total de hallazgos: 10 (2 Criticos, 4 Alto, 4 Medio)
Documento generado en formato Markdown, compatible con StackEdit.io y otros editores MD. Exportar a PDF mediante “Publish” en StackEdit o usar el comando de impresion del navegador.