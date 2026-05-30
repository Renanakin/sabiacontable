import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#021824] border-t border-white/5 text-slate-400 py-14 sm:py-16 lg:py-20 pb-28 md:pb-16">
      <div className="site-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12">
        {/* Columna 1: Branding y Descripción */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="Sabia Contable Logo"
            width={230}
            height={72}
            className="h-12 sm:h-14 w-auto object-contain"
          />
          <p className="text-sm leading-relaxed text-slate-400">
            Asesoría contable, tributaria y laboral premium. Potenciamos el crecimiento de pymes y profesionales en todo Chile con soluciones claras, modernas y eficientes.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://facebook.com/share/1MBJ9VvLjo/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Sabia Contable"
              className="h-11 w-11 rounded-full bg-[#3b5998] text-white inline-flex items-center justify-center transition-transform hover:-translate-y-0.5 hover:brightness-110"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com/sabiacontable"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Sabia Contable"
              className="h-11 w-11 rounded-full bg-[#E13088] text-white inline-flex items-center justify-center transition-transform hover:-translate-y-0.5 hover:brightness-110"
            >
              <FaInstagram size={19} />
            </a>
            <a
              href="https://x.com/sabiacontable"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Sabia Contable"
              className="h-11 w-11 rounded-full bg-[#1DA1F2] text-white inline-flex items-center justify-center transition-transform hover:-translate-y-0.5 hover:brightness-110 text-xl font-bold"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com/company/sabia-contable/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Sabia Contable"
              className="h-11 w-11 rounded-full bg-[#0077B5] text-white inline-flex items-center justify-center transition-transform hover:-translate-y-0.5 hover:brightness-110"
            >
              <FaLinkedinIn size={19} />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Empresa</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            </li>
            <li>
              <Link href="/quienes-somos" className="hover:text-white transition-colors">Nosotros</Link>
            </li>
            <li>
              <Link href="/nuestro-equipo" className="hover:text-white transition-colors">Nuestro Equipo</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white transition-colors">Contacto y Soporte</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Servicios Principales */}
        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Servicios</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/servicios/contabilidad-integral" className="hover:text-white transition-colors">Contabilidad Integral</Link>
            </li>
            <li>
              <Link href="/servicios/gestion-de-remuneraciones" className="hover:text-white transition-colors">Gestión de Remuneraciones</Link>
            </li>
            <li>
              <Link href="/servicios/gestion-tributaria" className="hover:text-white transition-colors">Asesoría Tributaria</Link>
            </li>
            <li>
              <Link href="/servicios/creacion-de-empresa" className="hover:text-white transition-colors">Creación de Empresa</Link>
            </li>
            <li>
              <Link href="/servicios/auditoria-financiera" className="hover:text-white transition-colors">Auditoría Financiera</Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="space-y-3 text-sm">
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contacto</h3>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-[#d80073] shrink-0 mt-0.5" />
            <span>Santiago, Chile (Atención en todo el territorio nacional)</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-[#d80073] shrink-0" />
            <div className="space-y-1">
              <a href="tel:+56233028411" className="block hover:text-white transition-colors">Teléfono fijo: +56 2 3302 8411</a>
              <a href="tel:+56982223173" className="block hover:text-white transition-colors">Celular: +56 9 8222 3173</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-[#d80073] shrink-0" />
            <a href="mailto:contacto@sabiacontable.cl" className="hover:text-white transition-colors">contacto@sabiacontable.cl</a>
          </div>
        </div>
      </div>

      <div className="site-container border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
        <p>&copy; {new Date().getFullYear()} Sabia Contable. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link href="/terminos" className="hover:text-white transition-colors">Términos de Servicio</Link>
          <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
        </div>
      </div>
      <div className="site-container mt-6 flex justify-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] sm:text-xs tracking-wide text-slate-300">
          <span className="text-[#d80073] font-semibold">Hackteck</span>
          <span className="text-slate-400">·</span>
          <span>Desarrollo, implementación y despliegue</span>
        </p>
      </div>
    </footer>
  );
}

