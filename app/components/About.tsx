"use client";

import Image from "next/image";
import { Ghost, Zap, ShieldCheck, Handshake, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
  return (
    <section
      id="nosotros"
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="about-inner"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          {/* Left: Logo with rings */}
          <div className="about-logo" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Outer spinning rings */}
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: "-30px",
                  borderRadius: "50%",
                  border: "1px solid rgba(192,28,28,0.12)",
                }}
              />
              <div
                className="animate-spin-slow-reverse"
                style={{
                  position: "absolute",
                  inset: "-56px",
                  borderRadius: "50%",
                  border: "1px solid rgba(192,28,28,0.06)",
                }}
              />

              {/* Logo circle */}
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  backgroundColor: "#111111",
                  border: "1px solid rgba(42,42,42,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.08,
                    background: "radial-gradient(circle, #C01C1C, transparent 70%)",
                  }}
                />
                <div style={{ position: "relative", width: "220px", height: "220px" }}>
                  <Image
                    src="/the-ghost-logo-mini-whitout-background.png"
                    alt="The Ghost Logo"
                    fill
                    className="object-contain"
                    sizes="220px"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div
                style={{
                  position: "absolute",
                  top: "-16px",
                  right: "-16px",
                  backgroundColor: "#C01C1C",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.375rem 0.875rem",
                  borderRadius: "9999px",
                  boxShadow: "0 4px 16px rgba(192,28,28,0.4)",
                }}
              >
                Est. 2019
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  left: "-16px",
                  backgroundColor: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  color: "#F0F0F0",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "0.375rem 0.875rem",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                <Globe size={13} color="#9A9A9A" />
                Global Remote
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content" style={{ flex: 1 }}>
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
              — Sobre Nosotros —
            </span>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#F0F0F0",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              El equipo que trabaja{" "}
              <span className="gradient-text">detrás de escena</span>
            </h2>
            <p style={{ color: "#9A9A9A", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1rem" }}>
              <strong style={{ color: "#F0F0F0" }}>The Ghost</strong> nació de la pasión
              por el código y la obsesión por la excelencia. Somos un equipo de
              desarrolladores multidisciplinarios remotos, unidos por un único objetivo:
              construir software que marque la diferencia.
            </p>
            <p style={{ color: "#9A9A9A", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Desde startups hasta empresas consolidadas, hemos dejado nuestra huella
              digital en decenas de proyectos, siempre con la misma dedicación.
            </p>

            {/* Values grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                      padding: "1rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "#111111",
                      border: "1px solid rgba(42,42,42,0.4)",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgba(192,28,28,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} color="#C01C1C" strokeWidth={1.5} />
                    </div>
                    <h4 style={{ color: "#F0F0F0", fontWeight: 600, fontSize: "0.875rem", margin: 0 }}>
                      {value.title}
                    </h4>
                    <p style={{ color: "#9A9A9A", fontSize: "0.8rem", lineHeight: 1.6, margin: 0 }}>
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-inner {
            flex-direction: column !important;
            gap: 3rem !important;
          }
          .about-content { text-align: center; }
        }
        @media (max-width: 540px) {
          .about-content > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
