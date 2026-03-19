"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const footerLinks = {
  Servicios: [
    { label: "Backend", href: "#servicios" },
    { label: "Frontend", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Bases de Datos", href: "#servicios" },
    { label: "DevOps", href: "#servicios" },
  ],
  Empresa: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Proyectos", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ],
};

interface SocialLink {
  label: string;
  icon: LucideIcon;
  href: string;
}

const socialLinks: SocialLink[] = [
  { label: "GitHub", icon: Github, href: "https://github.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Twitter / X", icon: Twitter, href: "https://twitter.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#111111",
        borderTop: "1px solid rgba(42,42,42,0.5)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="#hero"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              <div style={{ position: "relative", width: "40px", height: "40px" }}>
                <Image
                  src="/ghost-logo.png"
                  alt="The Ghost Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#F0F0F0",
                }}
              >
                THE <span style={{ color: "#C01C1C" }}>GHOST</span>
              </span>
            </Link>

            <p style={{ color: "#9A9A9A", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "280px" }}>
              Equipo de desarrollo de software de alto rendimiento.
              Construimos el futuro digital, línea a línea.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(42,42,42,0.4)",
                    border: "1px solid rgba(42,42,42,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    color: "#9A9A9A",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "rgba(192,28,28,0.15)";
                    el.style.borderColor = "rgba(192,28,28,0.4)";
                    el.style.color = "#C01C1C";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "rgba(42,42,42,0.4)";
                    el.style.borderColor = "rgba(42,42,42,0.4)";
                    el.style.color = "#9A9A9A";
                  }}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  color: "#F0F0F0",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "1.25rem",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline"
                      style={{
                        color: "#9A9A9A",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#F0F0F0")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "#9A9A9A")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(42,42,42,0.8), transparent)",
            marginBottom: "2rem",
          }}
        />

        {/* Copyright bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p style={{ color: "#9A9A9A", fontSize: "0.8rem" }}>
            © {year}{" "}
            <span style={{ color: "#C01C1C", fontWeight: 600 }}>The Ghost</span>.
            {" "}Todos los derechos reservados.
          </p>
          <p style={{ color: "#9A9A9A", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
            Hecho con{" "}
            <Heart size={13} color="#C01C1C" fill="#C01C1C" />
            {" "}y{" "}
            <span style={{ color: "#F0F0F0", fontWeight: 500 }}>Next.js 16</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
