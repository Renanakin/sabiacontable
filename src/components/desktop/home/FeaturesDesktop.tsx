"use client";

import { CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import { homeFeatures } from "@/app/data";

export default function FeaturesDesktop() {
  return (
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
          {homeFeatures.map((feature, idx) => {
            // @ts-ignore
            const Icon = Icons[feature.iconName] || Icons.HelpCircle;
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
  );
}
