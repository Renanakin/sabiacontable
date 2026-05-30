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
    image: "/images/auditoria.png"
  }
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

