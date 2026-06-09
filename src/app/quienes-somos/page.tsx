import { Award, CalendarDays, History } from "lucide-react";

export default function QuienesSomos() {
  return (
    <div className="bg-[#032030] text-slate-100 min-h-screen py-16 sm:py-20 lg:py-24 min-[1920px]:py-28">
      <div className="site-container max-w-5xl space-y-12 sm:space-y-16">
        {/* Hero de Nosotros */}
        <div className="space-y-4 text-center">
          <span className="text-[#d80073] text-sm font-semibold tracking-wider uppercase">Nuestra Misión y Visión</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl min-[1920px]:text-6xl font-extrabold text-white tracking-tight">
            Quiénes Somos
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            En Sabia Contable, estudio contable fundado en 2015, creemos que los servicios de contabilidad en Chile deben ir más allá del simple cumplimiento de la normativa tributaria y financiera. Nuestro propósito es transformar la contabilidad de tu empresa en una herramienta estratégica, útil y fácil de comprender, que acompañe a pymes y emprendedores en la toma de decisiones clave para un crecimiento comercial sostenible.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0b2545] p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 bg-[#d80073]/10 text-[#d80073] w-fit rounded-xl">
              <Award size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Nuestra Misión</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ser el aliado estratégico definitivo de las pymes chilenas en los ámbitos contable, tributario y laboral. Nos dedicamos a entregar información financiera clara, precisa y oportuna que respalde la toma de decisiones acertadas y sostenibles.
            </p>
          </div>

          <div className="bg-[#0b2545] p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 bg-[#d80073]/10 text-[#d80073] w-fit rounded-xl">
              <CalendarDays size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Nuestra Visión</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Aspiramos a consolidarnos como una firma de asesoría contable y tributaria líder a nivel nacional, reconocida por su solidez, confiabilidad y excelencia operativa. Nuestro objetivo es ser referentes en el sector financiero, generando valor real para nuestros clientes y contribuyendo activamente al desarrollo económico del país.
            </p>
          </div>
        </div>

        {/* Historia de Sabia Contable */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4">
            <History className="text-[#d80073]" size={24} />
            <h2 className="text-2xl font-bold text-white">Nuestra Trayectoria</h2>
          </div>
          <div className="relative border-l border-white/10 ml-4 space-y-8 pl-8">
            <div className="relative">
              <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-[#d80073]/10 border border-[#d80073] flex items-center justify-center text-xs text-[#d80073] font-bold">1</div>
              <h3 className="font-bold text-white">Consultoría Innovadora desde 2015</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                A lo largo de más de una década, en Sabia Contable hemos desarrollado una consultoría financiera innovadora basada en nuestra metodología exclusiva: Soluciones a tu alcance. Este enfoque nos permite aplicar los más altos estándares de excelencia y buenas prácticas del mercado contable chileno.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-[#d80073]/10 border border-[#d80073] flex items-center justify-center text-xs text-[#d80073] font-bold">2</div>
              <h3 className="font-bold text-white">Enfoque y Servicios Integrales</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Como expertos en asesoría contable y tributaria, nos especializamos en contabilidad mensual, gestión de remuneraciones, auditorías y apoyo legal. Nos adaptamos a las necesidades específicas de cada empresa con soluciones ágiles y personalizadas para el ecosistema Pyme.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-[#d80073]/10 border border-[#d80073] flex items-center justify-center text-xs text-[#d80073] font-bold">3</div>
              <h3 className="font-bold text-white">Relaciones de Confianza a Largo Plazo</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Hemos acompañado con éxito a cientos de empresas y emprendedores en la optimización de sus procesos, gracias a un equipo multidisciplinario altamente capacitado en tributación, gestión de personas y materias legales. Entendemos que detrás de cada balance hay una meta comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

