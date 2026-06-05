import React from "react";
import SalaryCalculator from "@/components/calculators/SalaryCalculator";

export const metadata = {
  title: "Calculadora de Sueldo Líquido Chile 2024 | Sabia Contable",
  description: "Simula tu liquidación de sueldo con los valores legales actualizados en Chile. Calcula gratificación, AFP, Isapre y Fonasa de manera automática y precisa.",
};

export default function SalaryCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#032030] pt-24 pb-12 dark">
      <div className="container mx-auto px-4">
        {/* Breadcrumb opcional */}
        <div className="mb-4">
          <p className="text-sm text-slate-400">
            Inicio / Utilitarios / <span className="text-magenta font-semibold">Calculadora de Sueldos</span>
          </p>
        </div>
        
        {/* Componente Interactivo */}
        <div className="dark">
          <SalaryCalculator />
        </div>
      </div>
    </main>
  );
}
