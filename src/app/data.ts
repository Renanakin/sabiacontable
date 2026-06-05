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
  seoLongTailContent?: string;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "contabilidad-integral",
    title: "Contabilidad Integral",
    shortDescription: "Mantén tus finanzas al día y sin errores. Te asignamos un analista dedicado que conoce tu empresa y te entrega reportes precisos para la toma de decisiones.",
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
    shortDescription: "Cuidamos del motor de tu empresa. Gestionamos nóminas, contratos, finiquitos y cotizaciones de forma ágil, blindando tu empresa ante la Dirección del Trabajo.",
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
    shortDescription: "Planificamos tu carga fiscal con visión estratégica. Optimizamos tus recursos y protegemos tu patrimonio, manteniéndote siempre en regla ante el SII.",
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
    shortDescription: "Te acompañamos desde la idea hasta tu primera factura. Formalizamos tu negocio rápidamente, evitando errores burocráticos y escogiendo el régimen tributario óptimo.",
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
    shortDescription: "Evaluación objetiva y profunda de tus estados financieros. Certificamos la salud de tu empresa para bancos, socios e inversionistas.",
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
  { value: 100, stringValue: "100", suffix: "+", label: "Clientes" },
  { value: 5, stringValue: "5", suffix: "", label: "Expertos" },
];

export const homeFeatures = [
  {
    title: "Planes Claros y sin Sorpresas",
    desc: "Construimos relaciones a largo plazo. Nuestros servicios se adaptan al volumen operativo de tu empresa mes a mes, entregando certeza y transparencia desde el primer día.",
    iconName: "TrendingUp",
  },
  {
    title: "Tu Analista Personalizado",
    desc: "Tu tranquilidad es nuestra prioridad. Contarás con un profesional contable siempre disponible para escucharte y resolver tus dudas de forma rápida y cercana.",
    iconName: "Users",
  },
  {
    title: "Revisión Preventiva Continua",
    desc: "No esperamos a fin de mes. Monitoreamos constantemente tu situación ante el SII y la Dirección del Trabajo para garantizar un cumplimiento impecable y libre de multas.",
    iconName: "ShieldCheck",
  },
  {
    title: "Gestión Financiera Inteligente",
    desc: "Te entregamos reportería financiera clara y oportuna para que tomes decisiones estratégicas basadas en datos reales.",
    iconName: "Landmark",
  },
];
/*
export const teamData: TeamMember[] = [
  {
    id: "jorge",
    name: "Jorge Astorga Méndez",
    role: "Socio Director",
    shortDesc: "Contador Auditor y Magíster en Tributaria con más de 18 años de experiencia liderando estrategias financieras y optimización fiscal corporativa.",
    bio: "### Nuestra Forma de Trabajar\nBuscamos ser el socio estratégico clave de nuestros clientes, garantizando el cumplimiento estricto de la normativa tributaria y financiera vigente mediante una gestión transparente y proactiva.\n\n### Mi Rol en Sabia Contable\nLidero el diseño de soluciones contables, tributarias y laborales complejas, asegurando que cada pyme y profesional reciba una asesoría estratégica y personalizada adaptada a sus objetivos de negocio.\n\n### Competencia Profesional\nCon una destacada trayectoria en contabilidad, planificación tributaria, control de gestión y finanzas corporativas en sectores comerciales, industriales y de servicios. Su enfoque combina un sólido dominio teórico y práctico, orientado a maximizar la eficiencia y mitigar riesgos normativos.",
    linkedin: "https://www.linkedin.com/in/jorge-ernesto-astorga-mendez-1a53b956/",
    image: "/images/equipo/jorge.webp"
  },
  {
    id: "lizbet",
    name: "Lisbet Lumbrera Marambio",
    role: "Analista Contable",
    shortDesc: "Especialista en cumplimiento tributario mensual, reportería financiera y gestión integral de nóminas con enfoque en control de precisión.",
    bio: "### Nuestra Forma de Trabajar\nTrabajamos con rigurosidad técnica, empatía y cercanía. Nos enfocamos en simplificar la complejidad de los procesos contables y laborales para ofrecer tranquilidad operativa y claridad financiera a nuestros clientes.\n\n### Mi Rol en Sabia Contable\nResponsable de estructurar y supervisar el cumplimiento fiscal mensual (F29) y anual de las carteras de clientes, brindando soporte continuo en remuneraciones, PreviRed y conciliaciones bancarias.\n\n### Competencia Profesional\nProfesional con alta orientación al detalle, capacidad analítica y dominio de la legislación contable y laboral chilena. Especialista en la resolución ágil de requerimientos y optimización de procesos de información interna.",
    image: "/images/equipo/lisbet.webp"
  },
  {
    id: "daphnee",
    name: "Daphnee Astorga",
    role: "Asistente de Gestión",
    shortDesc: "Soporte operativo y coordinación documental para mantener la información de clientes ordenada y al día.",
    bio: "### Nuestra Forma de Trabajar\nAcompañamos cada proceso con orden, trazabilidad y respuesta oportuna.\n\n### Mi Rol en Sabia Contable\nCoordino la recepción y seguimiento de antecedentes contables y laborales para asegurar continuidad operativa.\n\n### Competencia Profesional\nFuerte foco en organización, control de documentación y atención cercana a clientes en procesos administrativos.",
    image: "/images/equipo/daphnee.webp"
  },
  {
    id: "ketherine",
    name: "Ketherine Marambio",
    role: "Analista de Apoyo",
    shortDesc: "Apoyo en procesos de conciliación, control de respaldos y preparación de reportes para clientes pyme.",
    bio: "### Nuestra Forma de Trabajar\nCombinamos precisión técnica y cercanía para resolver requerimientos con rapidez.\n\n### Mi Rol en Sabia Contable\nParticipo en la preparación y validación de información contable para procesos mensuales y cierres.\n\n### Competencia Profesional\nPerfil analítico orientado al detalle, cumplimiento de plazos y mejora continua de flujos de trabajo internos.",
    image: "/images/equipo/katherine.webp"
  }
];
*/

export const teamData: TeamMember[] = [
  {
    id: "jorge",
    name: "Jorge Ernesto Astorga Méndez",
    role: "Socio Director",
    shortDesc: "Contador Auditor y Magíster en Tributación con más de 18 años de experiencia en asesoría empresarial.",
    bio: "### Mi Rol en Sabia Contable\nLidero la estrategia y supervisión integral de los servicios contables, tributarios, laborales y financieros, apoyando a nuestros clientes en la toma de decisiones y en el cumplimiento eficiente de sus obligaciones.\n\n### Perfil Profesional\nContador Auditor y Magíster en Tributación con más de 18 años de experiencia en asesoría empresarial. Especializado en contabilidad, tributación y control de gestión, enfoco mi trabajo en entregar soluciones estratégicas, combinando conocimiento técnico con una visión de negocio orientada a resultados.",
    linkedin: "https://www.linkedin.com/in/jorge-ernesto-astorga-mendez-1a53b956/",
    image: "/images/equipo/jorge.webp"
  },
  {
    id: "lizbet",
    name: "Lisbet Lumbrera Marambio",
    role: "Consultora Tributaria",
    shortDesc: "Contadora Auditora con formación en tributación, orientada al análisis y cumplimiento normativo.",
    bio: "### Mi Rol en Sabia Contable\nApoyo la gestión tributaria y contable de nuestros clientes, participando en la preparación y revisión de impuestos, declaraciones juradas, procesos de Operación Renta y gestión de remuneraciones, velando por el correcto cumplimiento de las obligaciones fiscales y laborales.\n\n### Perfil Profesional\nContadora Auditora con formación en tributación, orientada al análisis y cumplimiento normativo. Destaco por mi rigurosidad y capacidad de trabajo con información compleja, contribuyendo a entregar seguridad y confiabilidad en la gestión tributaria.",
    image: "/images/equipo/lisbet.webp"
  },
  {
    id: "daphnee",
    name: "Daphnee López Muñoz",
    role: "Consultora Contable",
    shortDesc: "Contadora Auditora comprometida con el aprendizaje continuo y la calidad del trabajo.",
    bio: "### Mi Rol en Sabia Contable\nParticipo en la gestión contable, tributaria y de remuneraciones, apoyando en contabilizaciones, análisis de cuentas, preparación de impuestos y procesos laborales, contribuyendo a mantener información financiera ordenada y confiable.\n\n### Perfil Profesional\nContadora Auditora comprometida con el aprendizaje continuo y la calidad del trabajo. Me caracterizo por mi responsabilidad y capacidad analítica, aportando al correcto funcionamiento de los procesos contables.",
    image: "/images/equipo/daphnee.webp"
  },
  {
    id: "matias",
    name: "Matías Salinas Cavieres",
    role: "Consultor Contable",
    shortDesc: "Contador Auditor metódico y orientado al detalle, con enfoque en la correcta ejecución de procesos.",
    bio: "### Mi Rol en Sabia Contable\nApoyo la gestión contable, tributaria y de remuneraciones, participando en registros contables, análisis de cuentas y cumplimiento de procesos mensuales y anuales.\n\n### Perfil Profesional\nContador Auditor metódico y orientado al detalle, con enfoque en la correcta ejecución de procesos y cumplimiento de plazos, contribuyendo a la continuidad y calidad del servicio.",
    image: "/images/equipo/matias.webp"
  },
  {
    id: "ketherine",
    name: "Katherine Domínguez Pizarro",
    role: "Consultora Contable",
    shortDesc: "Profesional organizada y orientada al servicio, con foco en el cumplimiento y eficiencia de los procesos.",
    bio: "### Mi Rol en Sabia Contable\nColaboro en los procesos contables, tributarios y laborales, apoyando en análisis de cuentas, remuneraciones y atención de requerimientos, asegurando un servicio ordenado y oportuno.\n\n### Perfil Profesional\nProfesional organizada y orientada al servicio, con foco en el cumplimiento y eficiencia de los procesos, contribuyendo a una experiencia de atención confiable para nuestros clientes.",
    image: "/images/equipo/katherine.webp"
  },
  {
    id: "wendy",
    name: "Wendy Parra Freitez",
    role: "Secretaria Administrativa Contable",
    shortDesc: "Técnico en Organización Empresarial con experiencia en administración y contabilidad.",
    bio: "### Mi Rol en Sabia Contable\nCoordino la gestión administrativa de la empresa, incluyendo facturación, cobranza, control documental y atención a clientes, apoyando el funcionamiento operativo del equipo.\n\n### Perfil Profesional\nTécnico en Organización Empresarial con experiencia en administración y contabilidad. Me caracterizo por mi organización, gestión eficiente y orientación al cliente, contribuyendo al orden y cumplimiento de los procesos internos.",
    image: "/images/equipo/wendy.webp"
  }
];

export const testimonialsData = [
  {
    quote: "Desde que trabajamos con Sabia Contable, sentimos un verdadero alivio. No solo tienen todo bajo control y al día, sino que siempre hay una persona amable dispuesta a resolver nuestras dudas. Sentimos que realmente son parte de nuestra empresa.",
    author: "Ricardo Valdés",
    role: "Director de Empresa de Servicios"
  },
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
  },
  {
    quote: "Delegar nuestra contabilidad en Sabia ha sido clave. Su equipo mantiene todo impecable, nos asesora de forma proactiva y nos da la total seguridad de que nuestra empresa está siempre al día y en las mejores manos.",
    author: "Rafael Cordero",
    role: "Gerente General Cordero & Herrera Ltda."
  },
  {
    quote: "Sabia Contable me ordena todo lo tributario a la perfección. Si alguna vez olvido algún tema o documento, ellos se contactan proactivamente y me evitan cualquier problema con el SII. Me siento verdaderamente acompañado y tranquilo al evitar estas multas.",
    author: "Héctor Delgado A.",
    role: "Fundador Hackteck"
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

