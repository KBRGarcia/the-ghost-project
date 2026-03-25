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
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top/Bottom decorative lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(192,28,28,0.4), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(192,28,28,0.4), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              color: "#C01C1C",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            — Nuestros Servicios —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F0F0F0",
              marginBottom: "1rem",
            }}
          >
            Todo lo que tu{" "}
            <span className="gradient-text">proyecto necesita</span>
          </h2>
          <p style={{ color: "#9A9A9A", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Cubrimos cada área del desarrollo de software con expertos especializados.
            Un solo equipo para toda tu visión digital.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="card-glow animate-on-scroll"
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid rgba(42,42,42,0.6)",
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  cursor: "default",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(192,28,28,0.1)",
                    border: "1px solid rgba(192,28,28,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={24} color="#C01C1C" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "#F0F0F0",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: "#9A9A9A", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto", paddingTop: "0.5rem" }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        borderRadius: "9999px",
                        backgroundColor: "rgba(42,42,42,0.6)",
                        color: "#9A9A9A",
                        border: "1px solid rgba(42,42,42,0.5)",
                      }}
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
