export const CONSTANTS = {
  SMM: 539000, // Sueldo Mínimo Mensual (2026)
  UF: 40644, // Valor referencial UF (2026)
  UTM: 71506, // Valor referencial UTM (2026)
  TOPE_IMPONIBLE_AFP_SALUD_UF: 90.0,
  TOPE_IMPONIBLE_CESANTIA_UF: 135.2,
};

export const AFPS = [
  { id: "capital", name: "Capital", rate: 0.1144 },
  { id: "cuprum", name: "Cuprum", rate: 0.1144 },
  { id: "habitat", name: "Habitat", rate: 0.1127 },
  { id: "planvital", name: "PlanVital", rate: 0.1116 },
  { id: "provida", name: "ProVida", rate: 0.1145 },
  { id: "modelo", name: "Modelo", rate: 0.1058 },
  { id: "uno", name: "Uno", rate: 0.1049 },
];

export interface SalaryInputs {
  sueldoBase: number;
  isGratificacionLegal: boolean;
  gratificacionManual: number;
  comisiones: number;
  bonos: number;
  horasExtras: number;
  colacion: number;
  movilizacion: number;
  afpId: string;
  isContratoIndefinido: boolean;
  apv: number;
  ufValue?: number; // Para inyección en tiempo real desde mindicador
  utmValue?: number; // Para inyección en tiempo real desde mindicador
}

export interface SalaryResults {
  totalImponible: number;
  totalNoImponible: number;
  totalHaberes: number;
  afpMonto: number;
  saludMonto: number;
  cesantiaMonto: number;
  apvMonto: number;
  impuestoUnico: number;
  totalDescuentos: number;
  sueldoLiquido: number;
  gratificacion: number;
}

export function calculateSalary(inputs: SalaryInputs): SalaryResults {
  const {
    sueldoBase,
    isGratificacionLegal,
    gratificacionManual,
    comisiones,
    bonos,
    horasExtras,
    colacion,
    movilizacion,
    afpId,
    isContratoIndefinido,
    apv,
    ufValue = CONSTANTS.UF,
    utmValue = CONSTANTS.UTM,
  } = inputs;

  // 1. Gratificación
  let gratificacion = gratificacionManual;
  if (isGratificacionLegal) {
    const topeGratificacion = (4.75 * CONSTANTS.SMM) / 12;
    const gratificacionCalculada = sueldoBase * 0.25;
    gratificacion = Math.min(gratificacionCalculada, topeGratificacion);
  }

  // 2. Total Imponible
  let totalImponible = sueldoBase + gratificacion + comisiones + bonos + horasExtras;

  // 3. Topes
  const topeAfpSalud = CONSTANTS.TOPE_IMPONIBLE_AFP_SALUD_UF * ufValue;
  const imponibleAfpSalud = Math.min(totalImponible, topeAfpSalud);

  const topeCesantia = CONSTANTS.TOPE_IMPONIBLE_CESANTIA_UF * ufValue;
  const imponibleCesantia = Math.min(totalImponible, topeCesantia);

  // 4. Descuentos Legales
  const afp = AFPS.find((a) => a.id === afpId) || AFPS[0];
  const afpMonto = imponibleAfpSalud * afp.rate;
  
  const saludMonto = imponibleAfpSalud * 0.07; // 7% base fonasa/isapre
  
  let cesantiaMonto = 0;
  if (isContratoIndefinido) {
    cesantiaMonto = imponibleCesantia * 0.006; // 0.6% a cargo del trabajador
  }

  // 5. Impuesto Único (Cálculo simplificado tramos en base a UTM dinámica)
  const baseTributable = totalImponible - (afpMonto + saludMonto + cesantiaMonto + apv);
  let impuestoUnico = 0;
  
  if (baseTributable > 13.5 * utmValue && baseTributable <= 30 * utmValue) {
    impuestoUnico = (baseTributable * 0.04) - (0.54 * utmValue);
  } else if (baseTributable > 30 * utmValue && baseTributable <= 50 * utmValue) {
    impuestoUnico = (baseTributable * 0.08) - (1.74 * utmValue);
  } else if (baseTributable > 50 * utmValue && baseTributable <= 70 * utmValue) {
    impuestoUnico = (baseTributable * 0.135) - (4.49 * utmValue);
  } else if (baseTributable > 70 * utmValue && baseTributable <= 90 * utmValue) {
    impuestoUnico = (baseTributable * 0.23) - (11.14 * utmValue);
  } else if (baseTributable > 90 * utmValue && baseTributable <= 120 * utmValue) {
    impuestoUnico = (baseTributable * 0.304) - (17.8 * utmValue);
  } else if (baseTributable > 120 * utmValue && baseTributable <= 310 * utmValue) {
    impuestoUnico = (baseTributable * 0.35) - (23.32 * utmValue);
  } else if (baseTributable > 310 * utmValue) {
    impuestoUnico = (baseTributable * 0.40) - (38.82 * utmValue);
  }
  
  if (impuestoUnico < 0) impuestoUnico = 0;

  // 6. Totales
  const totalNoImponible = colacion + movilizacion;
  const totalHaberes = totalImponible + totalNoImponible;
  const totalDescuentos = afpMonto + saludMonto + cesantiaMonto + apv + impuestoUnico;
  const sueldoLiquido = totalHaberes - totalDescuentos;

  return {
    totalImponible: Math.round(totalImponible),
    totalNoImponible: Math.round(totalNoImponible),
    totalHaberes: Math.round(totalHaberes),
    afpMonto: Math.round(afpMonto),
    saludMonto: Math.round(saludMonto),
    cesantiaMonto: Math.round(cesantiaMonto),
    apvMonto: Math.round(apv),
    impuestoUnico: Math.round(impuestoUnico),
    totalDescuentos: Math.round(totalDescuentos),
    sueldoLiquido: Math.round(sueldoLiquido),
    gratificacion: Math.round(gratificacion)
  };
}
