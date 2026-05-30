import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, PhoneCall, Check } from "lucide-react";
import { servicesData } from "@/app/data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#032030] text-slate-100 min-h-screen py-16 sm:py-20 lg:py-24 min-[1920px]:py-28">
      <div className="site-container max-w-5xl space-y-10 sm:space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d80073] hover:text-[#ff389d] transition-colors"
          >
            <ChevronLeft size={16} />
            Ver todos los servicios
          </Link>
        </div>

        {/* Hero del Servicio */}
        <div className="flex flex-col md:flex-row gap-8 items-center bg-[#0b2545]/40 p-8 rounded-2xl border border-white/5">
          <div className="space-y-4 flex-1">
            <span className="text-[#d80073] text-sm font-semibold tracking-wider uppercase">Soluciones Personalizadas</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl min-[1920px]:text-6xl font-extrabold text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-64 h-48 md:h-64 rounded-xl border border-white/10 overflow-hidden relative bg-[#032030]">
            <Image src={service.image} alt={service.title} fill className="object-cover" />
          </div>
        </div>

        {/* Contenido Detallado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4">
          {/* Bullets de Procesos */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-white/5 pb-2">
              ¿Qué incluye este servicio?
            </h3>
            <ul className="space-y-4">
              {service.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-[#d80073] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Características Clave / Valor Agregado */}
          <div className="bg-[#0b2545] p-6 rounded-2xl border border-white/5 h-fit space-y-6">
            <h4 className="font-bold text-white text-base">Diferenciadores Sabia</h4>
            <ul className="space-y-3.5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <div className="p-1 rounded-md bg-[#d80073]/10 text-[#d80073]">
                    <Check size={12} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/contacto"
                className="btn-interactive w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#d80073] hover:bg-[#b0005d] text-white text-sm font-bold shadow-lg shadow-[#d80073]/20"
              >
                <PhoneCall size={16} />
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pre-renderizar rutas dinámicas al construir (Static Site Generation para máxima velocidad y SEO)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
