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
            Socios estratégicos dedicados a simplificar las obligaciones fiscales y laborales de tu empresa, permitiéndote liderar tu negocio con total tranquilidad.
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
              Facilitar el éxito de las empresas chilenas mediante la simplificación de sus deberes tributarios y contables, convirtiendo la complejidad técnica en confianza operativa y crecimiento sostenible.
            </p>
          </div>

          <div className="bg-[#0b2545] p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 bg-[#d80073]/10 text-[#d80073] w-fit rounded-xl">
              <CalendarDays size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Nuestra Visión</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Consolidarnos como el socio estratégico preferido de las pymes y profesionales en Chile, siendo reconocidos por la transparencia absoluta, la digitalización de procesos y la calidad humana de nuestro equipo.
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
              <h3 className="font-bold text-white">Fundación y Origen (2015)</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Sabia Contable nace bajo el liderazgo de Jorge Astorga con el propósito de resolver las brechas tradicionales de comunicación y los retrasos contables recurrentes a los que se enfrentan las pymes ante el SII.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-[#d80073]/10 border border-[#d80073] flex items-center justify-center text-xs text-[#d80073] font-bold">2</div>
              <h3 className="font-bold text-white">Especialización e Integración Laboral (2018)</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Ampliamos nuestra cartera de servicios integrando la asesoría legal, gestión de remuneraciones y contratos en PreviRed, estructurando un equipo multidisciplinario altamente calificado.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-[#d80073]/10 border border-[#d80073] flex items-center justify-center text-xs text-[#d80073] font-bold">3</div>
              <h3 className="font-bold text-white">Consolidación Digital (2023)</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Digitalizamos el 100% de la gestión de respaldos financieros, implementando canales expeditos de atención al cliente y consolidando un estándar de cero multas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

