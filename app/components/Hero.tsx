"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ghost-dark"
    >
      {/* Background gradient blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-12 blur-[80px] pointer-events-none bg-[radial-gradient(circle,var(--ghost-red)_0%,var(--ghost-red-dark)_50%,transparent_70%)]"
      />
      <div
        className="absolute top-0 right-0 w-[380px] h-[380px] rounded-full opacity-6 blur-[80px] bg-ghost-red pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 bg-[size:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192,28,28,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,28,28,0.5) 1px, transparent 1px)
          `,
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-28 md:pt-32 pb-20 flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full hero-inner">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left hero-text animate-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ghost-red/10 border border-ghost-red/30 text-ghost-red text-sm font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-ghost-red animate-pulse" />
            Equipo de Desarrollo de Software
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] text-ghost-text mb-6">
            Código que{" "}
            <span className="gradient-text">trasciende</span>
            <br />
            <span className="text-ghost-text-muted text-[80%]">lo visible.</span>
          </h1>

          {/* Description */}
          <p className="text-ghost-text-muted text-lg leading-relaxed mb-10 max-w-[540px] mx-auto md:mx-0">
            Somos <strong className="text-ghost-text">The Ghost</strong>, un equipo élite
            de desarrolladores especializados en construir soluciones digitales robustas,
            escalables y de alto impacto — desde el backend hasta la nube.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link
              href="#servicios"
              className="px-8 py-3.5 bg-ghost-red text-white font-bold text-base rounded-xl no-underline transition-all duration-200 inline-block hover:bg-ghost-red-light hover:shadow-[0_12px_32px_rgba(192,28,28,0.35)]"
            >
              Ver Servicios
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-3.5 bg-transparent text-ghost-text-muted font-semibold text-base rounded-xl border border-ghost-gray no-underline transition-all duration-200 inline-block hover:border-ghost-red/50 hover:text-ghost-text"
            >
              Hablar con el equipo →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 justify-center md:justify-start">
            {[
              { value: "50+", label: "Proyectos" },
              { value: "5+", label: "Años de exp." },
              { value: "100%", label: "Satisfacción" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-ghost-red">
                  {stat.value}
                </div>
                <div className="text-[0.7rem] text-ghost-text-muted tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo / Image */}
        <div className="flex-1 flex items-center justify-center md:justify-end hero-image animate-on-scroll">
          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] animate-float">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-[40px] opacity-20 bg-[radial-gradient(circle,var(--ghost-red),transparent)]" />
            <Image
              src="/the-ghost-logo-withouth-background.png"
              alt="The Ghost — Equipo de Desarrollo de Software"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 280px, 420px"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[0.65rem] text-ghost-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-ghost-red to-transparent" />
      </div>
    </section>
  );
}
