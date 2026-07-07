"use client";

import Image from "next/image";
import { Ghost, Zap, ShieldCheck, Handshake, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRotateLogoAnimation } from "../animejs_style/RotateLogoAnimejs";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Ghost,
    title: "Invisiblemente Efectivos",
    description:
      "Operamos en las sombras del código para que tus sistemas funcionen a la perfección sin que el usuario final note los esfuerzos detrás.",
  },
  {
    icon: Zap,
    title: "Velocidad sin Compromisos",
    description:
      "Entregamos con agilidad sin sacrificar calidad. Metodologías ágiles adaptadas a cada proyecto y cliente.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad ante Todo",
    description:
      "Implementamos buenas prácticas de seguridad en cada línea de código: autenticación, encriptación y protección de datos.",
  },
  {
    icon: Handshake,
    title: "Partners, no Proveedores",
    description:
      "Nos involucramos en tu visión y objetivos de negocio. Tu éxito es nuestro éxito.",
  },
];

export default function About() {
  const { rootRef, handleLogoClick } = useRotateLogoAnimation<HTMLElement>(".ghost-logo");

  return (
    <section
      id="nosotros"
      ref={rootRef}
      className="py-28 px-6 bg-ghost-dark relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 about-inner">
          {/* Left: Logo with rings */}
          <div className="flex-1 flex justify-center about-logo animate-on-scroll">
            <div className="relative inline-block">
              {/* Outer spinning rings */}
              <div
                className="absolute -inset-[30px] rounded-full border border-ghost-red/12 animate-spin-slow"
              />
              <div
                className="absolute -inset-[56px] rounded-full border border-ghost-red/5 animate-spin-slow-reverse"
              />

              {/* Logo circle */}
              <div className="w-[300px] h-[300px] rounded-full bg-ghost-dark-2 border border-ghost-gray/50 flex items-center justify-center overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,var(--ghost-red),transparent_70%)]"
                />
                <button 
                  type="button"
                  className="ghost-logo relative w-[220px] h-[220px] z-10 cursor-grab bg-transparent border-none p-0" 
                  onClick={handleLogoClick}
                  aria-label="Animar Logo"
                >
                  <Image
                    src="/the-ghost-logo-mini-whitout-background.png"
                    alt="The Ghost Logo"
                    fill
                    className="object-contain pointer-events-none"
                    sizes="220px"
                  />
                </button>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-ghost-red text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-[0_4px_16px_rgba(192,28,28,0.4)]">
                Est. 2019
              </div>
              <div className="absolute -bottom-4 -left-4 bg-ghost-dark-3 border border-ghost-gray text-ghost-text text-xs font-semibold py-1.5 px-3.5 rounded-full flex items-center gap-1.5">
                <Globe size={13} className="text-ghost-text-muted" />
                Global Remote
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center lg:text-left about-content animate-on-scroll">
            <span className="inline-block text-ghost-red text-xs font-semibold tracking-widest uppercase mb-4">
              — Sobre Nosotros —
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ghost-text leading-tight mb-6">
              El equipo que trabaja{" "}
              <span className="gradient-text">detrás de escena</span>
            </h2>
            <p className="text-ghost-text-muted text-lg leading-relaxed mb-4">
              <strong className="text-ghost-text">The Ghost</strong> nació de la pasión
              por el código y la obsesión por la excelencia. Somos un equipo de
              desarrolladores multidisciplinarios remotos, unidos por un único objetivo:
              construir software que marque la diferencia.
            </p>
            <p className="text-ghost-text-muted text-[0.95rem] leading-relaxed mb-10">
              Desde startups hasta empresas consolidadas, hemos dejado nuestra huella
              digital en decenas de proyectos, siempre con la misma dedicación.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex flex-col gap-2.5 p-4 rounded-xl bg-ghost-dark-2 border border-ghost-gray/40 transition-colors duration-300 hover:border-ghost-red/30 text-left"
                  >
                    <div className="w-9 h-9 rounded-lg bg-ghost-red/10 flex items-center justify-center">
                      <Icon size={18} className="text-ghost-red" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-ghost-text font-semibold text-sm m-0">
                      {value.title}
                    </h4>
                    <p className="text-ghost-text-muted text-[0.8rem] leading-relaxed m-0">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
