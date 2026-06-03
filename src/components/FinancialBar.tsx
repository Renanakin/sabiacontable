"use client";

import { useMindicador } from "@/hooks/useMindicador";

export default function FinancialBar() {
  const { uf, utm, dolar, loading, error } = useMindicador();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 2 }).format(val);
  };

  if (error) {
    return (
      <div className="w-full bg-[#0a192f] border-t border-white/5 py-3 text-center text-xs text-slate-400">
        Indicadores referenciales (Fallback): UF {formatCurrency(uf)} | UTM {formatCurrency(utm)}
      </div>
    );
  }

  return (
    <div className="w-full bg-[#032030] border-t border-b border-white/5 py-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d80073] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d80073]"></span>
        </span>
        <span className="font-bold text-white uppercase tracking-widest text-xs sm:text-sm">Mercado en Vivo</span>
      </div>
      
      {loading ? (
        <span className="animate-pulse text-[#d80073] font-semibold text-sm sm:text-base">Sincronizando indicadores...</span>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 font-medium">
          <div className="flex items-baseline gap-2">
            <span className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">UF</span> 
            <strong className="text-white text-xl sm:text-2xl font-black tracking-tight drop-shadow-[0_0_10px_rgba(216,0,115,0.6)]">{formatCurrency(uf)}</strong>
          </div>
          <span className="hidden sm:block text-slate-600/50 text-2xl font-light">|</span>
          <div className="flex items-baseline gap-2">
            <span className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">UTM</span> 
            <strong className="text-white text-xl sm:text-2xl font-black tracking-tight drop-shadow-[0_0_10px_rgba(216,0,115,0.6)]">{formatCurrency(utm)}</strong>
          </div>
          <span className="hidden sm:block text-slate-600/50 text-2xl font-light">|</span>
          <div className="flex items-baseline gap-2">
            <span className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">Dólar</span> 
            <strong className="text-white text-xl sm:text-2xl font-black tracking-tight drop-shadow-[0_0_10px_rgba(216,0,115,0.6)]">{formatCurrency(dolar)}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
