"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Calculator, Briefcase, Users, FileText } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [utilsOpen, setUtilsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setUtilsOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setUtilsOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-[#0E273B]/90 backdrop-blur-md border-b border-white/5">
      <div className="site-container">
        <div className="flex items-center justify-between h-20 sm:h-[5.5rem] lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Ir al inicio" className="group flex items-center">
              <Image
                src="/images/logo.png"
                alt="Sabia Contable Logo"
                width={230}
                height={72}
                priority
                className="h-12 sm:h-[3.25rem] lg:h-14 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(227,0,128,0.6)] group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link href="/nuestro-equipo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Equipo
            </Link>

            {/* Dropdown Servicios */}
            <div className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setUtilsOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors focus:outline-none"
                aria-expanded={servicesOpen}
                aria-controls="menu-servicios"
              >
                Servicios <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div id="menu-servicios" className="absolute right-0 mt-3 w-64 rounded-xl bg-[#032D42] border border-white/10 p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/servicios/contabilidad-integral"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Briefcase size={16} className="text-[#E30080]" />
                    Contabilidad Integral
                  </Link>
                  <Link
                    href="/servicios/gestion-de-remuneraciones"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Users size={16} className="text-[#E30080]" />
                    Gestión de Remuneraciones
                  </Link>
                  <Link
                    href="/servicios/gestion-tributaria"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <FileText size={16} className="text-[#E30080]" />
                    Gestión Tributaria
                  </Link>
                  <Link
                    href="/servicios/creacion-de-empresa"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Briefcase size={16} className="text-[#E30080]" />
                    Creación de Empresa
                  </Link>
                  <Link
                    href="/servicios/auditoria-financiera"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Calculator size={16} className="text-[#E30080]" />
                    Auditoría Financiera
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Utilitarios */}
            <div className="relative">
              <button
                onClick={() => {
                  setUtilsOpen(!utilsOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors focus:outline-none"
                aria-expanded={utilsOpen}
                aria-controls="menu-utilitarios"
              >
                Utilitarios <ChevronDown size={16} className={`transition-transform duration-300 ${utilsOpen ? "rotate-180" : ""}`} />
              </button>

              {utilsOpen && (
                <div id="menu-utilitarios" className="absolute right-0 mt-3 w-64 rounded-xl bg-[#032D42] border border-white/10 p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/utilitarios/calculo-iva"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setUtilsOpen(false)}
                  >
                    <Calculator size={16} className="text-[#E30080]" />
                    Cálculo de IVA
                  </Link>
                  <Link
                    href="/utilitarios/boleta-honorarios"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setUtilsOpen(false)}
                  >
                    <Calculator size={16} className="text-[#E30080]" />
                    Boleta de Honorarios
                  </Link>
                  <Link
                    href="/utilitarios/liquidacion-sueldo"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setUtilsOpen(false)}
                  >
                    <Calculator size={16} className="text-[#E30080]" />
                    Liquidación de Sueldo
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className="btn-interactive inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#E30080] hover:bg-[#b0005d] text-white text-sm font-semibold shadow-lg shadow-[#E30080]/20"
            >
              Agenda Asesoría
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E30080] p-2 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Solo visible si está abierto) */}
      {isOpen && (
        <div className="md:hidden bg-[#0E273B] border-b border-white/5 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/quienes-somos"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/nuestro-equipo"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Equipo
          </Link>
          <Link
            href="/servicios"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/utilitarios"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Utilitarios
          </Link>
          <Link
            href="/contacto"
            className="block px-3 py-3 text-center rounded-xl bg-[#E30080] text-base font-semibold text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Agenda Asesoría
          </Link>
        </div>
      )}
    </header>
  );
}

