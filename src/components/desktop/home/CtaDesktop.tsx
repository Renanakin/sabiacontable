"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CtaDesktop() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 min-[1920px]:py-28 text-center space-y-8">
      <div className="site-container max-w-5xl">
        <div className="inline-flex items-center gap-2 p-3 rounded-full bg-white/5 border border-white/10 w-fit text-slate-300 text-sm mx-auto">
          <PhoneCall size={16} className="text-[#E30080]" />
          <span>¿Tienes dudas? Conversa con un consultor directamente</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl min-[1920px]:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Profesionalismo, Compromiso <br />
          <span className="text-[#E30080]">y Resultados</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
          Desde nuestros inicios, en Sabia Contable hemos mantenido un firme compromiso con el profesionalismo, la excelencia y el crecimiento de las Pymes chilenas. Cada asesoría está respaldada por un equipo de especialistas que trabajan con rigurosidad técnica y visión estratégica.
          <br /><br />
          Más que un proveedor contable, somos el aliado que tu negocio necesita para escalar de forma segura y sostenible.
        </p>
        <div className="pt-8">
          <Link
            href="/contacto"
            className="btn-interactive inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#E30080] hover:bg-[#c2006d] text-white font-bold shadow-lg shadow-[#E30080]/20"
          >
            Comenzar Asesoría
          </Link>
        </div>
      </div>
    </section>
  );
}
