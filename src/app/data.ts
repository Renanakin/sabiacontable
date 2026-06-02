export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortDesc: string;
  bio: string;
  linkedin?: string;
  image: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
  features: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "contabilidad-integral",
    title: "Contabilidad Integral",
    shortDescription: "Procesamiento, registro y conciliación de transacciones comerciales con reportes periódicos claros.",
    fullDescription: "Nos encargamos del ciclo completo de tu contabilidad para que puedas enfocarte en hacer crecer tu negocio sin preocuparte del papeleo. Conciliamos tus cuentas y mantenemos tus libros actualizados bajo la normativa vigente.",
    bullets: [
      "Registro diario de compras y ventas.",
      "Conciliación bancaria automatizada.",
      "Balances mensuales y estados financieros.",
      "Control de activos fijos y depreciaciones."
    ],
    features: [
      "Reportes en tiempo real",
      "Asignación de analista dedicado",
      "Reuniones de revisión mensual"
    ],
    seoLongTailContent: `### ¿Por qué externalizar tu contabilidad con expertos?
Llevar la contabilidad interna consume recursos valiosos y aumenta el riesgo de errores tributarios. Nuestro servicio de contabilidad integral en Chile está diseñado para que tu pyme mantenga sus finanzas en orden sin esfuerzo.

### Nuestro proceso contable mensual
Nos conectamos directamente con tus plataformas de facturación para automatizar la captura de datos. Desde la centralización de compras y ventas hasta el análisis de ratios financieros, cubrimos todo el espectro para que puedas presentar balances impecables ante bancos y accionistas.`,
    image: "/images/contabilidad.png"
  },
  {
    slug: "gestion-de-remuneraciones",
    title: "Gestión de Remuneraciones",
    shortDescription: "Cálculo de sueldos, preparación de liquidaciones, contratos, finiquitos e imposiciones de PreviRed.",
    fullDescription: "Administramos tu personal de manera eficiente y transparente, asegurando el cumplimiento estricto de la legislación laboral chilena y evitando multas de la Dirección del Trabajo.",
    bullets: [
      "Confección de liquidaciones de sueldo.",
      "Cálculo y declaración de cotizaciones previsionales (PreviRed).",
      "Redacción de contratos de trabajo y anexos.",
      "Gestión y cálculo de finiquitos y vacaciones."
    ],
    features: [
      "Libro de Remuneraciones Electrónico (LRE)",
      "Portal auto-consulta para trabajadores",
      "Asesoría legal laboral integrada"
    ],
    seoLongTailContent: `### Evita multas de la Dirección del Trabajo
El cálculo incorrecto de sueldos, finiquitos o cotizaciones en PreviRed puede resultar en graves penalizaciones. Delegar la gestión de remuneraciones asegura precisión técnica y cumplimiento normativo.

### Soluciones completas para Recursos Humanos
No solo procesamos las liquidaciones a fin de mes. Te asesoramos en la redacción de anexos de contratos, control de vacaciones, cálculo de horas extras y representación ante fiscalizaciones, brindando soporte integral a tu área de recursos humanos.`,
    image: "/images/remuneraciones.png"
  },
  {
    slug: "gestion-tributaria",
    title: "Gestión Tributaria",
    shortDescription: "Planificación fiscal, declaración mensual de impuestos (F29) y proceso anual de Operación Renta.",
    fullDescription: "Optimizamos tu carga tributaria de manera legal y ética. Nos encargamos de presentar tus impuestos en las fechas correspondientes para evitar multas o reparos por parte del SII.",
    bullets: [
      "Declaración mensual de impuestos (Formulario 29).",
      "Operación Renta anual (Formulario 22).",
      "Declaraciones Juradas de renta.",
      "Planificación tributaria y optimización legal."
    ],
    features: [
      "Simulaciones previas al cierre de año",
      "Defensa y representación ante el SII",
      "Monitoreo constante de cambios normativos"
    ],
    seoLongTailContent: `### Estrategia y Planificación Tributaria en Chile
Pagar más impuestos de lo justo por desconocimiento de las franquicias legales es un error común. Nuestros expertos tributarios analizan el régimen fiscal de tu empresa para aplicar estrategias legales de ahorro y eficiencia.

### Declaraciones de Renta sin contratiempos
La Operación Renta anual y las Declaraciones Juradas previas exigen rigor extremo. Nos adelantamos a los plazos del SII para detectar discrepancias, realizar el cruce de información y garantizar una declaración libre de contingencias o fiscalizaciones sorpresivas.`,
    image: "/images/tributaria.png"
  },
  {
    slug: "creacion-de-empresa",
    title: "Creación de Empresa",
    shortDescription: "Constitución en 'Tu Empresa en un Día', inicio de actividades, acreditación de IVA y obtención de patente.",
    fullDescription: "Te acompañamos desde la idea inicial hasta el primer día de facturación. Hacemos que la constitución y formalización de tu empresa sea rápida, guiada y sin errores burocráticos.",
    bullets: [
      "Constitución en plataforma Registro de Empresas y Sociedades.",
      "Redacción de estatutos personalizados.",
      "Inicio de actividades y obtención de RUT ante el SII.",
      "Acreditación de actividades e IVA ante el SII."
    ],
    features: [
      "Habilitación de facturación electrónica",
      "Asesoría en elección del régimen tributario",
      "Tramitación de patente comercial"
    ],
    seoLongTailContent: `### Emprende con bases sólidas desde el día 1
Constituir una empresa requiere elegir la figura societaria correcta (SpA, EIRL, Limitada) y el régimen tributario adecuado. Una mala elección inicial puede costar millones en impuestos futuros. Nosotros te asesoramos paso a paso.

### Más que 'Tu Empresa en un Día'
Si bien la plataforma del Estado facilita el registro, el proceso real incluye inicio de actividades, acreditación de domicilio, verificación de actividades ante el SII y obtención de patentes municipales. Nos encargamos de todo el ecosistema burocrático para que empieces a facturar rápidamente.`,
    image: "/images/creacion.png"
  },
  {
    slug: "auditoria-financiera",
    title: "Auditoría Financiera",
    shortDescription: "Evaluación objetiva de tus estados financieros para asegurar transparencia y detectar áreas de riesgo.",
    fullDescription: "Revisamos tus registros para certificar que reflejen fielmente la realidad financiera de tu empresa. Ideal para presentar ante bancos, inversionistas o para el control interno de socios.",
    bullets: [
      "Auditoría externa de estados financieros.",
      "Evaluación del sistema de control interno.",
      "Detección de riesgos operativos y de fraude.",
      "Informes de auditoría bajo normas IFRS."
    ],
    features: [
      "Certificación para entidades financieras",
      "Análisis profundo de brechas contables",
      "Propuestas de mejora interna"
    ],
    seoLongTailContent: `### Transparencia que genera confianza
Una auditoría financiera externa valida la veracidad de tus estados financieros. Es una herramienta indispensable si buscas rondas de inversión, créditos bancarios de alto volumen o si hay reestructuración de socios en la empresa.

### Detección de riesgos y mejora de procesos operativos
Más allá de certificar los números, nuestra auditoría bajo normas IFRS revisa tu sistema de control interno. Identificamos puntos vulnerables al fraude, ineficiencias en el flujo de caja y entregamos reportes accionables para mejorar la salud corporativa de tu pyme.`,
    image: "/images/auditoria.png"
  }
];

export const homeStats = [
  { value: 10, stringValue: "10+", suffix: "+", label: "Años de exp." },
  { value: 17, stringValue: "17", suffix: "", label: "Clientes" },
  { value: 5, stringValue: "5", suffix: "", label: "Expertos" },
];

export const homeFeatures = [
  {
    title: "Flexibilidad Total",
    desc: "Planes escalables y adaptados al volumen real de transacciones de tu pyme.",
    iconName: "TrendingUp",
  },
  {
    title: "Soporte Continuo",
    desc: "Resolución de dudas y asesoría directa a través de canales dedicados y reuniones mensuales.",
    iconName: "Users",
  },
  {
    title: "Compromiso Ético",
    desc: "Garantía de cumplimiento riguroso de normativas tributarias y plazos del SII.",
    iconName: "ShieldCheck",
  },
  {
    title: "Gestión Inteligente",
    desc: "Reportería financiera clara para la toma de decisiones empresariales estratégicas.",
    iconName: "Landmark",
  },
];
export const teamData: TeamMember[] = [
  {
    id: "jorge",
    name: "Jorge Astorga Méndez",
    role: "Socio Director",
    shortDesc: "Contador Auditor y Magíster en Tributaria con más de 18 años de experiencia liderando estrategias financieras y optimización fiscal corporativa.",
    bio: "### Nuestra Forma de Trabajar\nBuscamos ser el socio estratégico clave de nuestros clientes, garantizando el cumplimiento estricto de la normativa tributaria y financiera vigente mediante una gestión transparente y proactiva.\n\n### Mi Rol en Sabia Contable\nLidero el diseño de soluciones contables, tributarias y laborales complejas, asegurando que cada pyme y profesional reciba una asesoría estratégica y personalizada adaptada a sus objetivos de negocio.\n\n### Competencia Profesional\nCon una destacada trayectoria en contabilidad, planificación tributaria, control de gestión y finanzas corporativas en sectores comerciales, industriales y de servicios. Su enfoque combina un sólido dominio teórico y práctico, orientado a maximizar la eficiencia y mitigar riesgos normativos.",
    linkedin: "https://www.linkedin.com/in/jorge-ernesto-astorga-mendez-1a53b956/",
    image: "/images/equipo/jorge.jpeg"
  },
  {
    id: "lizbet",
    name: "Lisbet Lumbrera Marambio",
    role: "Analista Contable",
    shortDesc: "Especialista en cumplimiento tributario mensual, reportería financiera y gestión integral de nóminas con enfoque en control de precisión.",
    bio: "### Nuestra Forma de Trabajar\nTrabajamos con rigurosidad técnica, empatía y cercanía. Nos enfocamos en simplificar la complejidad de los procesos contables y laborales para ofrecer tranquilidad operativa y claridad financiera a nuestros clientes.\n\n### Mi Rol en Sabia Contable\nResponsable de estructurar y supervisar el cumplimiento fiscal mensual (F29) y anual de las carteras de clientes, brindando soporte continuo en remuneraciones, PreviRed y conciliaciones bancarias.\n\n### Competencia Profesional\nProfesional con alta orientación al detalle, capacidad analítica y dominio de la legislación contable y laboral chilena. Especialista en la resolución ágil de requerimientos y optimización de procesos de información interna.",
    image: "/images/equipo/lizbet.jpeg"
  },
  {
    id: "daphnee",
    name: "Daphnee Astorga",
    role: "Asistente de Gestión",
    shortDesc: "Soporte operativo y coordinación documental para mantener la información de clientes ordenada y al día.",
    bio: "### Nuestra Forma de Trabajar\nAcompañamos cada proceso con orden, trazabilidad y respuesta oportuna.\n\n### Mi Rol en Sabia Contable\nCoordino la recepción y seguimiento de antecedentes contables y laborales para asegurar continuidad operativa.\n\n### Competencia Profesional\nFuerte foco en organización, control de documentación y atención cercana a clientes en procesos administrativos.",
    image: "/images/equipo/Daphnee.jpeg"
  },
  {
    id: "ketherine",
    name: "Ketherine Marambio",
    role: "Analista de Apoyo",
    shortDesc: "Apoyo en procesos de conciliación, control de respaldos y preparación de reportes para clientes pyme.",
    bio: "### Nuestra Forma de Trabajar\nCombinamos precisión técnica y cercanía para resolver requerimientos con rapidez.\n\n### Mi Rol en Sabia Contable\nParticipo en la preparación y validación de información contable para procesos mensuales y cierres.\n\n### Competencia Profesional\nPerfil analítico orientado al detalle, cumplimiento de plazos y mejora continua de flujos de trabajo internos.",
    image: "/images/equipo/Ketherine.jpeg"
  }
];

export const testimonialsData = [
  {
    quote: "Delegar nuestra contabilidad en Sabia fue la mejor decisión. Ya no nos preocupamos por fechas de pago de impuestos o multas del SII, ellos se adelantan a todo.",
    author: "María Paz Rodríguez",
    role: "CEO en TechCorp Chile"
  },
  {
    quote: "La claridad de los reportes mensuales me permite saber exactamente la rentabilidad de mi negocio. El equipo de Jorge Astorga es extremadamente profesional.",
    author: "Roberto Silva",
    role: "Fundador de Inversiones RS"
  },
  {
    quote: "Nos ayudaron a ordenar la contabilidad de 3 años atrás que un contador anterior dejó incompleta. Excelente servicio de auditoría y regularización.",
    author: "Camila Fuentes",
    role: "Directora en SaludPro"
  }
];

export const faqsData = [
  {
    question: "¿Qué tipo de empresas asesoran?",
    answer: "Nos especializamos en pequeñas y medianas empresas (pymes) de diversos sectores, así como en profesionales independientes que requieran contabilidad completa y asesoría tributaria avanzada."
  },
  {
    question: "¿Debo cambiar de sistema de facturación?",
    answer: "No es estrictamente necesario. Nos integramos y descargamos la información directamente del portal del Servicio de Impuestos Internos (SII) o de tu ERP actual."
  },
  {
    question: "¿Realizan la gestión de imposiciones (PreviRed)?",
    answer: "Sí. Dentro de nuestro servicio de Gestión de Remuneraciones, calculamos y declaramos las imposiciones mensuales de tus trabajadores en PreviRed para evitar multas de la Inspección del Trabajo."
  },
  {
    question: "¿Tengo un analista asignado para mi empresa?",
    answer: "Por supuesto. Cada cliente tiene un analista contable de cabecera encargado de su cuenta, lo que garantiza una comunicación fluida y respuestas rápidas a cualquier requerimiento."
  }
];
