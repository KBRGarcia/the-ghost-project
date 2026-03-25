"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
      }}
    >
      {/* Background gradient blob */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          opacity: 0.12,
          filter: "blur(80px)",
          background: "radial-gradient(circle, #C01C1C 0%, #8B1212 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          opacity: 0.06,
          filter: "blur(80px)",
          background: "#C01C1C",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(rgba(192,28,28,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,28,28,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "8rem 1.5rem 5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4rem",
          width: "100%",
        }}
        className="hero-inner"
      >
        {/* Text Content */}
        <div style={{ flex: 1 }} className="hero-text animate-on-scroll">
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(192,28,28,0.1)",
              border: "1px solid rgba(192,28,28,0.3)",
              color: "#C01C1C",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "2rem",
              letterSpacing: "0.03em",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#C01C1C",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Equipo de Desarrollo de Software
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#F0F0F0",
              marginBottom: "1.5rem",
            }}
          >
            Código que{" "}
            <span className="gradient-text">trasciende</span>
            <br />
            <span style={{ color: "#9A9A9A", fontSize: "80%" }}>lo visible.</span>
          </h1>

          {/* Description */}
          <p
            style={{
              color: "#9A9A9A",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "540px",
            }}
          >
            Somos <strong style={{ color: "#F0F0F0" }}>The Ghost</strong>, un equipo élite
            de desarrolladores especializados en construir soluciones digitales robustas,
            escalables y de alto impacto — desde el backend hasta la nube.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="#servicios"
              style={{
                padding: "0.875rem 2rem",
                backgroundColor: "#C01C1C",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "0.75rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#E02A2A";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(192,28,28,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#C01C1C";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Ver Servicios
            </Link>
            <Link
              href="#contacto"
              style={{
                padding: "0.875rem 2rem",
                backgroundColor: "transparent",
                color: "#9A9A9A",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid #2A2A2A",
                textDecoration: "none",
                transition: "all 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,28,28,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#F0F0F0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A";
                (e.currentTarget as HTMLElement).style.color = "#9A9A9A";
              }}
            >
              Hablar con el equipo →
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3.5rem",
            }}
          >
            {[
              { value: "50+", label: "Proyectos" },
              { value: "5+", label: "Años de exp." },
              { value: "100%", label: "Satisfacción" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#C01C1C",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#9A9A9A",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo / Image */}
        <div
          className="hero-image animate-on-scroll"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="animate-float"
            style={{
              position: "relative",
              width: "420px",
              height: "420px",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                filter: "blur(40px)",
                opacity: 0.2,
                background: "radial-gradient(circle, #C01C1C, transparent)",
              }}
            />
            <Image
              src="/the-ghost-logo.png"
              alt="The Ghost — Equipo de Desarrollo de Software"
              fill
              className="object-contain"
              priority
              sizes="420px"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            color: "#9A9A9A",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, #C01C1C, transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column !important;
            padding-top: 7rem !important;
            gap: 3rem !important;
          }
          .hero-text { text-align: center; }
          .hero-image {
            justify-content: center !important;
          }
          .hero-image > div {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
