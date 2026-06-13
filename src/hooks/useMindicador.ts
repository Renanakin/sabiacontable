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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      try {
        const res = await fetch("https://mindicador.cl/api", { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!res.ok) throw new Error("Error en API mindicador");
        
        const data = await res.json();
        setIndicators({
          uf: data.uf?.valor || CONSTANTS.UF,
          utm: data.utm?.valor || CONSTANTS.UTM,
          dolar: data.dolar?.valor || 890,
          loading: false,
          error: false,
        });
      } catch (err) {
        clearTimeout(timeoutId);
        console.error("Error cargando mindicador:", err);
        setIndicators((prev) => ({ ...prev, loading: false, error: true }));
      }
    }
    fetchIndicators();
  }, []);

  return indicators;
}
