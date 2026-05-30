"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Calculator, ArrowRight } from "lucide-react";

export default function LiquidacionSueldo() {
  const [sueldoBase, setSueldoBase] = useState<string>("");
  const [bonos, setBonos] = useState<string>("");

  const numBase = parseFloat(sueldoBase) || 0;
  const numBonos = parseFloat(bonos) || 0;

  // Cálculos previsionales aproximados legales en Chile
  const totalHaberesImponibles = numBase + numBonos;
  const descuentoSalud = totalHaberesImponibles * 0.07; // 7% Salud Fonasa/Isapre
  const descuentoAfp = totalHaberesImponibles * 0.115; // Promedio 10% + 1.5% Comisión

  const totalDescuentos = descuentoSalud + descuentoAfp;
  const sueldoLiquido = totalHaberesImponibles - totalDescuentos;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(val);
  };

  return (
    <div className="bg-[#032030] text-slate-100 min-h-screen py-16 sm:py-20 lg:py-24 min-[1920px]:py-28">
      <div className="site-container max-w-4xl space-y-10 sm:space-y-12">
        {/* Volver */}
        <div>
          <Link
            href="/utilitarios"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d80073] hover:text-[#ff389d] transition-colors"
          >
            <ChevronLeft size={16} />
            Volver a Utilitarios
          </Link>
        </div>

        {/* Encabezado */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d80073]/10 border border-[#d80073]/20 text-xs font-semibold text-[#d80073] tracking-wide uppercase">
            Cálculo Previsional
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculadora de Liquidación de Sueldo
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            Simula el sueldo líquido a recibir tras aplicar los descuentos obligatorios de AFP y Salud a partir de tu sueldo base e imponibles.
          </p>
        </div>

        {/* Contenido e Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Formulario */}
          <div className="bg-[#0b2545] p-6 rounded-2xl border border-white/5 space-y-6">
            <div className="space-y-2">
              <label htmlFor="base-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Sueldo Base ($)
              </label>
              <input
                id="base-input"
                type="number"
                value={sueldoBase}
                onChange={(e) => setSueldoBase(e.target.value)}
                placeholder="Ej. 650000"
                className="w-full bg-[#032030] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#d80073] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="bonos-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Otros Haberes Imponibles ($)
              </label>
              <input
                id="bonos-input"
                type="number"
                value={bonos}
                onChange={(e) => setBonos(e.target.value)}
                placeholder="Ej. 50000"
                className="w-full bg-[#032030] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#d80073] transition-colors"
              />
            </div>
          </div>

          {/* Resultados */}
          <div className="bg-[#0b2545]/50 p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2 flex items-center gap-2">
                <Calculator size={18} className="text-[#d80073]" />
                Detalle Previsional
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Haberes Imponibles:</span>
                  <span className="font-semibold text-white">{formatCurrency(totalHaberesImponibles)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Descuento Salud (7%):</span>
                  <span className="font-semibold text-white text-red-400">-{formatCurrency(descuentoSalud)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Descuento AFP (aprox 11.5%):</span>
                  <span className="font-semibold text-white text-red-400">-{formatCurrency(descuentoAfp)}</span>
                </div>
                <div className="border-t border-white/5 pt-4 flex justify-between text-base">
                  <span className="font-bold text-white">Sueldo Líquido Estimado:</span>
                  <span className="font-extrabold text-[#d80073]">{formatCurrency(sueldoLiquido)}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contacto"
                className="btn-interactive w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10"
              >
                ¿Quieres optimizar tu planilla de sueldos?
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

