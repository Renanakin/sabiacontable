import { useState, useEffect } from "react";
import { CONSTANTS } from "@/utils/salaryMath";

interface Indicators {
  uf: number;
  utm: number;
  dolar: number;
  loading: boolean;
  error: boolean;
}

export function useMindicador() {
  const [indicators, setIndicators] = useState<Indicators>({
    uf: CONSTANTS.UF,
    utm: CONSTANTS.UTM,
    dolar: 890, // Fallback aproximado
    loading: true,
    error: false,
  });

  useEffect(() => {
    async function fetchIndicators() {
      try {
        const res = await fetch("https://mindicador.cl/api");
        if (!res.ok) throw new Error("Error en API mindicador");
        const data = await res.json();
        setIndicators({
          uf: data.uf.valor,
          utm: data.utm.valor,
          dolar: data.dolar.valor,
          loading: false,
          error: false,
        });
      } catch (err) {
        console.error("Error cargando mindicador:", err);
        setIndicators((prev) => ({ ...prev, loading: false, error: true }));
      }
    }
    fetchIndicators();
  }, []);

  return indicators;
}
