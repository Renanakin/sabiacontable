"use client";

import { useState, useEffect, useRef } from "react";
import { homeStats } from "@/app/data";

function Counter({ endValue, duration = 2000, suffix = "" }: { endValue: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.requestAnimationFrame(() => setCount(endValue));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endValue]);

  useEffect(() => {
    if (!hasStarted) return;
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
  }, [endValue, duration, hasStarted]);

  return (
    <span ref={containerRef} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsDesktop() {
  return (
    <section className="bg-[#021824] py-10 sm:py-12 lg:py-14 border-b border-white/5">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {homeStats.map((stat, i) => (
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
  );
}
