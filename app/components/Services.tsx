"use client";

import {
  Server,
  Monitor,
  Smartphone,
  Database,
  Globe,
  Cloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "APIs robustas, microservicios, arquitecturas escalables y sistemas de alta disponibilidad con Node.js, Python, Go y más.",
    tags: ["REST APIs", "GraphQL", "Microservicios", "Node.js", "Python"],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Interfaces de usuario modernas, rápidas y accesibles con React, Next.js, Vue y otras tecnologías de vanguardia.",
    tags: ["React", "Next.js", "TypeScript", "Vue", "CSS/Tailwind"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas e híbridas para iOS y Android con React Native y Flutter que ofrecen experiencias fluidas.",
    tags: ["React Native", "Flutter", "iOS", "Android", "Expo"],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description:
      "Diseño, optimización y administración de bases de datos relacionales y NoSQL para máximo rendimiento.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    icon: Globe,
    title: "Apps Web",
    description:
      "Soluciones web completas full-stack desde MVPs ágiles hasta plataformas empresariales a gran escala.",
    tags: ["Full-Stack", "SPA", "SSR", "PWA", "E-commerce"],
  },
  {
    icon: Cloud,
    title: "Hosting & Servidores",
    description:
      "Infraestructura en la nube, CI/CD, contenedores Docker y Kubernetes para deploys sin fricción y alta disponibilidad.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-28 px-6 bg-ghost-dark-2 relative overflow-hidden"
    >
      {/* Top/Bottom decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ghost-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ghost-red/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <span className="inline-block text-ghost-red text-xs font-semibold tracking-widest uppercase mb-4">
            — Nuestros Servicios —
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ghost-text mb-4">
            Todo lo que tu{" "}
            <span className="gradient-text">proyecto necesita</span>
          </h2>
          <p className="text-ghost-text-muted text-[1.1rem] max-w-[600px] mx-auto leading-relaxed">
            Cubrimos cada área del desarrollo de software con expertos especializados.
            Un solo equipo para toda tu visión digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="card-glow animate-on-scroll bg-ghost-dark-3 border border-ghost-gray/60 rounded-2xl p-7 flex flex-col gap-4 cursor-default group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-ghost-red/10 border border-ghost-red/20 flex items-center justify-center transition-all duration-300 group-hover:bg-ghost-red/15 group-hover:border-ghost-red/40">
                  <Icon size={24} className="text-ghost-red" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-lg font-bold text-ghost-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-ghost-text-muted text-sm leading-[1.65]">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-ghost-gray/60 text-ghost-text-muted border border-ghost-gray/50 transition-colors group-hover:border-ghost-red/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="card-accent-line" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
