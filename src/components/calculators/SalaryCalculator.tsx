"use client";

import React, { useState, useMemo } from "react";
import { calculateSalary, SalaryInputs, AFPS, CONSTANTS } from "@/utils/salaryMath";
import { exportSalaryToPDF, exportSalaryToExcel } from "@/utils/exportTools";
import { useMindicador } from "@/hooks/useMindicador";
import { Calculator, DollarSign, PlusCircle, MinusCircle, Info, Settings, Download, FileSpreadsheet, Loader2 } from "lucide-react";

const currencyFormatter = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
const formatCurrency = (val: number) => {
  return currencyFormatter.format(val);
};

export default function SalaryCalculator() {
  const [inputs, setInputs] = useState<SalaryInputs>({
    sueldoBase: 500000,
    isGratificacionLegal: true,
    gratificacionManual: 0,
    comisiones: 0,
    bonos: 0,
    horasExtras: 0,
    colacion: 0,
    movilizacion: 0,
    afpId: "habitat",
    saludType: "fonasa",
    isapreUF: 0,
    isContratoIndefinido: true,
    apv: 0,
  });

  const [isExportingPDF, setIsExportingPDF] = useState(false);
  const [isExportingExcel, setIsExportingExcel] = useState(false);

  const indicators = useMindicador();

  const results = useMemo(() => calculateSalary({
    ...inputs,
    ufValue: indicators.uf,
    utmValue: indicators.utm
  }), [inputs, indicators]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setInputs((prev) => ({ ...prev, [name]: checked }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: type === "number" ? Number(value) : value }));
    }
  };


  const handleExportPDF = async () => {
    setIsExportingPDF(true);
    try {
      await exportSalaryToPDF(inputs, results, indicators);
    } catch (error) {
      console.error("Error al exportar PDF:", error);
    } finally {
      setIsExportingPDF(false);
    }
  };

  const handleExportExcel = async () => {
    setIsExportingExcel(true);
    try {
      await exportSalaryToExcel(inputs, results, indicators);
    } catch (error) {
      console.error("Error al exportar Excel:", error);
    } finally {
      setIsExportingExcel(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Header Texts */}
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl md:text-4xl font-light text-[#f39c12] dark:text-magenta">Calcular sueldo líquido</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          ¿Quieres saber cuál será el dinero que recibirás mensualmente en tu bolsillo? ¿Estás negociando un sueldo y no sabes el sueldo bruto que debes pedir?
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Ingresa tu sueldo base, gratificaciones, comisiones, bonos, AFP e Isapre y la demás información para calcular el dinero final que recibirás en tu bolsillo a final de mes.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Esta herramienta es para calcular el sueldo líquido para <strong>contratos mensuales</strong>.
        </p>
      </div>

      <h2 className="text-2xl font-light text-[#f39c12] dark:text-magenta mb-2">Herramienta de liquidación de sueldo</h2>
      <p className="text-xs text-slate-500 mb-6">Para saber más información de cada campo toca sobre el icono de información. Los campos con línea punteada son calculados automáticamente.</p>

      {/* Indicadores Top */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="border-b border-dotted border-slate-400 pb-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
            <Info className="w-3 h-3" /> UTM 2026 {indicators.loading && "(Cargando...)"} {indicators.error && "(Valor Base)"}
          </div>
          <div className="text-sm font-semibold dark:text-white">
            {indicators.loading ? "..." : formatCurrency(indicators.utm)}
          </div>
        </div>
        <div className="border-b border-dotted border-slate-400 pb-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
            <Info className="w-3 h-3" /> UF 2026 {indicators.loading && "(Cargando...)"} {indicators.error && "(Valor Base)"}
          </div>
          <div className="text-sm font-semibold dark:text-white">
            {indicators.loading ? "..." : formatCurrency(indicators.uf)}
          </div>
        </div>
        <div className="border-b border-dotted border-slate-400 pb-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
            <Info className="w-3 h-3" /> IMM 2026
          </div>
          <div className="text-sm font-semibold dark:text-white">{formatCurrency(CONSTANTS.SMM)}</div>
        </div>
      </div>

      {/* Calculadora Box */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm rounded-md overflow-hidden">

        {/* Contrato Top Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2 mb-4 text-slate-700 dark:text-slate-200 font-semibold text-sm">
            <Settings className="w-4 h-4" /> Contrato
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs text-slate-500 mb-1">Condición</label>
              <select className="w-full bg-transparent dark:bg-slate-900 border-b border-dotted border-slate-400 py-1 text-sm outline-none dark:text-white focus:border-magenta">
                <option>Mensual</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Plazo contrato</label>
              <select
                className="w-full bg-transparent dark:bg-slate-900 border-b border-dotted border-slate-400 py-1 text-sm outline-none dark:text-white focus:border-magenta"
                name="isContratoIndefinido"
                value={inputs.isContratoIndefinido ? "true" : "false"}
                onChange={(e) => setInputs(prev => ({ ...prev, isContratoIndefinido: e.target.value === "true" }))}
              >
                <option value="true">Indefinido</option>
                <option value="false">Plazo Fijo</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Horas semanales</label>
              <input type="number" placeholder="44" className="w-full bg-transparent border-b border-dotted border-slate-400 py-1 text-sm outline-none dark:text-white focus:border-magenta" />
            </div>
          </div>
        </div>

        {/* Columnas Haberes y Descuentos */}
        <div className="flex flex-col md:flex-row">

          {/* Columna Izquierda: Haberes */}
          <div className="flex-1 p-4 md:p-6 md:border-r border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-6">
              <PlusCircle className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold text-sm dark:text-white">Haberes</h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Sueldo base <Info className="w-3 h-3" /></label>
                <input type="number" name="sueldoBase" value={inputs.sueldoBase} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Gratificación <Info className="w-3 h-3" /></label>
                  <select
                    className="w-full bg-transparent dark:bg-slate-900 border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white"
                    value={inputs.isGratificacionLegal ? "legal" : "manual"}
                    onChange={(e) => setInputs(prev => ({ ...prev, isGratificacionLegal: e.target.value === "legal" }))}
                  >
                    <option value="legal">Legal (25% tope)</option>
                    <option value="manual">Monto Manual</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Valor grat. <Info className="w-3 h-3" /></label>
                  {inputs.isGratificacionLegal ? (
                    <div className="w-full bg-transparent border-b border-dotted border-slate-400 py-1 text-sm text-slate-600 dark:text-slate-400">{formatCurrency(results.gratificacion)}</div>
                  ) : (
                    <input type="number" name="gratificacionManual" value={inputs.gratificacionManual} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Horas extras <Info className="w-3 h-3" /></label>
                  <input type="number" placeholder="Monto extra" name="horasExtras" value={inputs.horasExtras} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Bonos (Imponibles) <Info className="w-3 h-3" /></label>
                  <input type="number" placeholder="(opcional)" name="bonos" value={inputs.bonos || ''} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Comisiones <Info className="w-3 h-3" /></label>
                <input type="number" placeholder="(opcional)" name="comisiones" value={inputs.comisiones || ''} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Colación (No Imp.) <Info className="w-3 h-3" /></label>
                  <input type="number" placeholder="(opcional)" name="colacion" value={inputs.colacion || ''} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Movilización (No Imp.) <Info className="w-3 h-3" /></label>
                  <input type="number" placeholder="(opcional)" name="movilizacion" value={inputs.movilizacion || ''} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
                </div>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Descuentos */}
          <div className="flex-1 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-6">
              <MinusCircle className="w-5 h-5 text-red-500" />
              <h3 className="font-semibold text-sm dark:text-white">Descuentos</h3>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">AFP <Info className="w-3 h-3" /></label>
                  <select name="afpId" value={inputs.afpId} onChange={handleChange} className="w-full bg-transparent dark:bg-slate-900 border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white">
                    {AFPS.map((afp) => (
                      <option key={afp.id} value={afp.id}>{afp.name} ({(afp.rate * 100).toFixed(2)}%)</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Total AFP <Info className="w-3 h-3" /></label>
                  <div className="w-full bg-transparent border-b border-dotted border-slate-400 py-1 text-sm text-slate-600 dark:text-slate-400">{formatCurrency(results.afpMonto)}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Previsión Salud <Info className="w-3 h-3" /></label>
                  <select
                    name="saludType"
                    value={inputs.saludType}
                    onChange={handleChange}
                    className="w-full bg-transparent dark:bg-slate-900 border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white"
                  >
                    <option value="fonasa">Fonasa (7%)</option>
                    <option value="isapre">Isapre</option>
                  </select>
                </div>
                {inputs.saludType === "isapre" ? (
                  <div>
                    <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Plan Isapre (UF) <Info className="w-3 h-3" /></label>
                    <input type="number" step="0.01" placeholder="Ej: 2.5" name="isapreUF" value={inputs.isapreUF || ''} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
                  </div>
                ) : (
                  <div>
                    <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Total salud <Info className="w-3 h-3" /></label>
                    <div className="w-full bg-transparent border-b border-dotted border-slate-400 py-1 text-sm text-slate-600 dark:text-slate-400">{formatCurrency(results.saludMonto)}</div>
                  </div>
                )}
              </div>
              {inputs.saludType === "isapre" && (
                <div className="text-right">
                  <span className="text-xs text-slate-500">Valor plan calculado: <span className="font-semibold text-slate-700 dark:text-slate-300">{formatCurrency(results.saludMonto)}</span></span>
                </div>
              )}

              <div>
                <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Seguro de cesantía (0.6%) <Info className="w-3 h-3" /></label>
                <div className="w-full bg-transparent border-b border-dotted border-slate-400 py-1 text-sm text-slate-600 dark:text-slate-400">{formatCurrency(results.cesantiaMonto)}</div>
              </div>

              <div>
                <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">Impuesto Único 2da Categoría <Info className="w-3 h-3" /></label>
                <div className="w-full bg-transparent border-b border-dotted border-slate-400 py-1 text-sm text-slate-600 dark:text-slate-400">{formatCurrency(results.impuestoUnico)}</div>
              </div>

              <div>
                <label className="flex items-center gap-1 text-xs text-slate-500 mb-1">APV <Info className="w-3 h-3" /></label>
                <input type="number" placeholder="(opcional)" name="apv" value={inputs.apv || ''} onChange={handleChange} className="w-full bg-transparent border-b border-slate-300 dark:border-slate-600 py-1 text-sm outline-none focus:border-magenta dark:text-white" />
              </div>

            </div>
          </div>
        </div>

        {/* Footer Totales */}
        <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-b md:border-b-0 border-dotted border-slate-400 pb-2 md:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Haberes</span>
              </div>
              <span className="font-bold dark:text-white">{formatCurrency(results.totalHaberes)}</span>
            </div>
          </div>

          <div className="border-b md:border-b-0 border-dotted border-slate-400 pb-2 md:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MinusCircle className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Descuentos</span>
              </div>
              <span className="font-bold dark:text-white">{formatCurrency(results.totalDescuentos)}</span>
            </div>
          </div>

          <div className="border-b md:border-b-0 border-dotted border-slate-400 pb-2 md:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">$</div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Sueldo líquido</span>
              </div>
              <span className="font-bold text-lg text-green-600 dark:text-green-400">{formatCurrency(results.sueldoLiquido)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-right">
        <button type="button" className="text-xs text-slate-500 dark:text-slate-400 underline hover:text-magenta transition-colors bg-transparent border-none p-0 cursor-pointer">Mostrar bases imponibles y tributable</button>
      </div>

      {/* Botones de acción */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="border border-slate-200 dark:border-slate-700 rounded-md p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow bg-white dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Descarga tu <strong>simulación en PDF</strong> y obtén mayor detalle.</p>
          <button
            type="button"
            onClick={handleExportPDF}
            disabled={isExportingPDF}
            className="bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded text-sm flex items-center gap-2 transition-colors"
          >
            {isExportingPDF ? (
              <>GENERANDO <Loader2 className="w-4 h-4 animate-spin" /></>
            ) : (
              <>DESCARGAR PDF <Download className="w-4 h-4" /></>
            )}
          </button>
        </div>
        <div className="border border-slate-200 dark:border-slate-700 rounded-md p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow bg-white dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Descarga en la <strong>versión Excel</strong> de esta calculadora.</p>
          <button
            type="button"
            onClick={handleExportExcel}
            disabled={isExportingExcel}
            className="bg-[#f39c12] hover:bg-[#e67e22] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded text-sm flex items-center gap-2 transition-colors"
          >
            {isExportingExcel ? (
              <>GENERANDO <Loader2 className="w-4 h-4 animate-spin" /></>
            ) : (
              <>DESCARGAR EXCEL <FileSpreadsheet className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
