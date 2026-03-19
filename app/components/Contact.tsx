"use client";

import { useState } from "react";
import { Mail, MessageCircle, Github, CheckCircle2, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@theghost.dev",
    href: "mailto:contacto@theghost.dev",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+1 (800) GHOST-DEV",
    href: "https://wa.me/1800",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/the-ghost-dev",
    href: "https://github.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    padding: "0.75rem 1rem",
    backgroundColor: "#1A1A1A",
    border: "1px solid rgba(42,42,42,0.5)",
    borderRadius: "0.75rem",
    color: "#F0F0F0",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bg glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "280px",
          opacity: 0.05,
          filter: "blur(80px)",
          background: "radial-gradient(ellipse, #C01C1C, transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            — Contáctanos —
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
            Hablemos de tu{" "}
            <span className="gradient-text">próximo proyecto</span>
          </h2>
          <p style={{ color: "#9A9A9A", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Cuéntanos tu idea y te responderemos en menos de 24 horas con una
            propuesta inicial sin compromiso.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "2.5rem" }}
        >
          {/* Left: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                padding: "1.75rem",
                borderRadius: "1rem",
                backgroundColor: "#111111",
                border: "1px solid rgba(42,42,42,0.5)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  color: "#F0F0F0",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                Información de contacto
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "0.75rem",
                          backgroundColor: "rgba(192,28,28,0.1)",
                          border: "1px solid rgba(192,28,28,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Icon size={20} color="#C01C1C" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.7rem", color: "#9A9A9A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "#F0F0F0", fontSize: "0.875rem", fontWeight: 500 }}>
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "1rem",
                backgroundColor: "rgba(34,197,94,0.05)",
                border: "1px solid rgba(34,197,94,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  flexShrink: 0,
                  animation: "pulse-green 2s ease-in-out infinite",
                }}
              />
              <div>
                <div style={{ color: "#F0F0F0", fontSize: "0.875rem", fontWeight: 600 }}>
                  Disponibles para nuevos proyectos
                </div>
                <div style={{ color: "#9A9A9A", fontSize: "0.75rem" }}>
                  Tiempo de respuesta &lt; 24h
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "3rem",
                  borderRadius: "1rem",
                  backgroundColor: "#111111",
                  border: "1px solid rgba(192,28,28,0.3)",
                  textAlign: "center",
                  minHeight: "400px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(192,28,28,0.1)",
                    border: "1px solid rgba(192,28,28,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={32} color="#C01C1C" strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#F0F0F0",
                  }}
                >
                  ¡Mensaje recibido!
                </h3>
                <p style={{ color: "#9A9A9A" }}>
                  El equipo de The Ghost te contactará pronto.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", project: "", message: "" });
                  }}
                  style={{
                    marginTop: "1rem",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#C01C1C",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "0.75rem",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "1.75rem",
                  borderRadius: "1rem",
                  backgroundColor: "#111111",
                  border: "1px solid rgba(42,42,42,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div
                  className="form-row"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <label htmlFor="contact-name" style={{ color: "#9A9A9A", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Nombre *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <label htmlFor="contact-email" style={{ color: "#9A9A9A", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label htmlFor="contact-project" style={{ color: "#9A9A9A", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Tipo de Proyecto
                  </label>
                  <select
                    id="contact-project"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="">Selecciona una opción...</option>
                    <option value="web">Aplicación Web</option>
                    <option value="mobile">App Móvil</option>
                    <option value="backend">Backend / API</option>
                    <option value="fullstack">Proyecto Full-Stack</option>
                    <option value="devops">DevOps / Hosting</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label htmlFor="contact-message" style={{ color: "#9A9A9A", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Mensaje *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    backgroundColor: "#C01C1C",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "0.75rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
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
                  <Send size={18} strokeWidth={2} />
                  Enviar Mensaje
                </button>

                <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#9A9A9A" }}>
                  Al enviar, aceptas que el equipo de The Ghost te contactará.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
