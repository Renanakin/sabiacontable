"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { teamData, TeamMember } from "@/app/data";

export default function NuestroEquipo() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-[#032030] text-slate-100 min-h-screen py-16 sm:py-20 lg:py-24 min-[1920px]:py-28">
      <div className="site-container max-w-6xl space-y-12 sm:space-y-16">
        {/* Encabezado */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-[#d80073] text-sm font-semibold tracking-wider uppercase">Profesionales Calificados</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl min-[1920px]:text-6xl font-extrabold text-white tracking-tight">
            Nuestro Equipo
          </h1>
          <p className="text-slate-400 text-lg">
            Conoce a los especialistas dedicados a asegurar y potenciar el cumplimiento tributario, laboral y financiero de tu negocio.
          </p>
        </div>

        {/* Grid de Miembros */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="card-spotlight rounded-2xl p-6 flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="space-y-4">
                <div className="relative w-20 h-20 rounded-full bg-[#032030] overflow-hidden border-2 border-[#E30080]/40 flex items-center justify-center">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <span className="text-xs font-semibold text-[#E30080] uppercase tracking-wider">{member.role}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {member.shortDesc}
                </p>
              </div>
              <div className="pt-6 flex justify-between items-center text-xs font-semibold text-[#E30080]">
                <span>Ver perfil detallado &rarr;</span>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${member.name}`}
                    onClick={(e) => e.stopPropagation()}
                    className="h-8 w-8 rounded-full bg-[#0077B5] text-white inline-flex items-center justify-center transition-transform hover:-translate-y-0.5 hover:brightness-110"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalle */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#0b2545] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 animate-in zoom-in-95 duration-200">
              {/* Cerrar */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-24 h-24 rounded-2xl bg-[#032030] border-2 border-[#E30080] overflow-hidden flex items-center justify-center shrink-0">
                  <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">{selectedMember.name}</h2>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#E30080]/10 text-xs font-bold text-[#E30080] tracking-wide uppercase">
                    {selectedMember.role}
                  </span>
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#d80073] hover:underline pt-1"
                    >
                      <FaLinkedinIn size={13} />
                      Ver LinkedIn &rarr;
                    </a>
                  )}
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-3">
                <h4 className="font-bold text-white text-sm uppercase tracking-wider">Acerca de su rol</h4>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

