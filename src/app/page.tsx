"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CheckCircle2, ChevronRight, TrendingUp, Landmark, ShieldCheck, Users, PhoneCall } from "lucide-react";
import { servicesData } from "@/app/data";

// Componente de Contadores Animados y Corregidos (Evita el bug de 0 del sitio anterior)
function Counter({ endValue, duration = 2000, suffix = "" }: { endValue: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const fallbackMs = window.setTimeout(() => setCount(endValue), duration + 300);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    rafRef.current = window.requestAnimationFrame(step);

    return () => {
      window.clearTimeout(fallbackMs);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [endValue, duration]);

  return (
    <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {
        // Ignore autoplay rejection.
      });
    }
  }, []);

  const stats = [
    { value: 10, suffix: "+", label: "Años de experiencia" },
    { value: 17, suffix: "", label: "Clientes satisfechos" },
    { value: 5, suffix: "", label: "Expertos contables" },
  ];

  const features = [
    {
      title: "Flexibilidad Total",
      desc: "Planes escalables y adaptados al volumen real de transacciones de tu pyme.",
      icon: TrendingUp,
    },
    {
      title: "Soporte Continuo",
      desc: "Resolución de dudas y asesoría directa a través de canales dedicados y reuniones mensuales.",
      icon: Users,
    },
    {
      title: "Compromiso Ético",
      desc: "Garantía de cumplimiento riguroso de normativas tributarias y plazos del SII.",
      icon: ShieldCheck,
    },
    {
      title: "Gestión Inteligente",
      desc: "Reportería financiera clara para la toma de decisiones empresariales estratégicas.",
      icon: Landmark,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#032030] text-slate-100">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28 min-[1920px]:pt-32 min-[1920px]:pb-32 border-b border-white/5 bg-[#0E273B]">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-30"
          src="/videos/firma.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(227,0,128,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[#0E273B]/55 pointer-events-none" />
        <div className="site-container relative z-10">
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E30080]/10 border border-[#E30080]/20 text-xs font-semibold text-[#E30080] tracking-wide uppercase">
              Asesoría Contable Premium
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl min-[1920px]:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Claridad Contable para <br />
              <span className="text-[#E30080]">Decisiones Inteligentes</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl min-[1920px]:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              Evita multas tributarias y simplifica la gestión de tus trabajadores. Ofrecemos contabilidad mensual rigurosa y asesoría experta directa para pymes y profesionales en Chile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contacto"
                className="btn-interactive inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#E30080] hover:bg-[#c2006d] text-white font-bold shadow-lg shadow-[#E30080]/20 text-base"
              >
                Agenda tu Asesoría Gratuita
                <ChevronRight size={18} className="ml-1" />
              </Link>
              <Link
                href="/servicios"
                className="btn-interactive inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 text-base"
              >
                Conocer Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE ESTADÍSTICAS / CONTADORES */}
      <section className="bg-[#021824] py-10 sm:py-12 lg:py-14 border-b border-white/5">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 p-4">
                <Counter endValue={stat.value} suffix={stat.suffix} />
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS DESTACADOS */}
      <section className="py-16 sm:py-20 lg:py-24 min-[1920px]:py-28">
        <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl min-[1920px]:text-5xl font-extrabold text-white tracking-tight">
            Nuestros Servicios de <span className="text-[#d80073]">Asesoría Especializada</span>
          </h2>
          <p className="text-slate-400 text-base">
            Soluciones adaptadas a la medida de tu negocio, con acompañamiento constante y reportería transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.slice(0, 3).map((service) => (
            <div key={service.slug} className="card-spotlight rounded-2xl p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.shortDescription}</p>
                <ul className="space-y-2.5 pt-2">
                  {service.bullets.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#d80073] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#E30080] hover:text-[#ff389d] transition-colors"
                >
                  Saber más <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 4. PILARES / ¿POR QUÉ ELEGIRNOS? */}
      <section className="bg-[#032D42] py-16 sm:py-20 lg:py-24 min-[1920px]:py-28 border-y border-white/5">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl min-[1920px]:text-5xl font-extrabold text-white tracking-tight">
              ¿Por qué elegir <span className="text-[#E30080]">Sabia Contable</span>?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              No somos solo un software automático de facturación. Combinamos digitalización avanzada para el control de tus registros con analistas dedicados para darte soluciones y defensa tributaria real ante el SII.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <CheckCircle2 className="text-[#E30080] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-semibold text-white">Transparencia Total</h4>
                  <p className="text-sm text-slate-400">Sabrás exactamente qué se está declarando en tu Formulario 29 mes a mes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-[#E30080] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-semibold text-white">Control Preventivo de Riesgos</h4>
                  <p className="text-sm text-slate-400">Calendarios y alertas de cumplimiento para reducir atrasos impositivos y laborales.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0E273B] p-6 rounded-xl border border-white/5 space-y-3 transition-colors hover:border-[#E30080]/30"
                >
                  <div className="p-3 rounded-lg bg-[#E30080]/10 w-fit text-[#E30080]">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-bold text-white">{feature.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA DE CONTACTO RÁPIDO */}
      <section className="py-16 sm:py-20 lg:py-24 min-[1920px]:py-28 text-center space-y-8">
        <div className="site-container max-w-5xl">
        <div className="inline-flex items-center gap-2 p-3 rounded-full bg-white/5 border border-white/10 w-fit text-slate-300 text-sm">
          <PhoneCall size={16} className="text-[#E30080]" />
          <span>¿Tienes dudas? Conversa con un analista directamente</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl min-[1920px]:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Simplifica tu Contabilidad <br />
          <span className="text-[#E30080]">Hoy Mismo</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Agenda una sesión inicial gratuita de 15 minutos para revisar el estado contable de tu empresa y detectar oportunidades de optimización tributaria.
        </p>
        <div className="pt-4">
          <Link
            href="/contacto"
            className="btn-interactive inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#E30080] hover:bg-[#c2006d] text-white font-bold shadow-lg shadow-[#E30080]/20"
          >
            Comenzar Asesoría
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}

