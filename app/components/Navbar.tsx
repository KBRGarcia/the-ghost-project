"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,42,42,0.6)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <div style={{ position: "relative", width: "40px", height: "40px" }}>
            <Image
              src="/the-ghost-logo-mini-whitout-background.png"
              alt="The Ghost Logo"
              fill
              className="object-contain"
              priority
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
            THE{" "}
            <span style={{ color: "#C01C1C" }}>GHOST</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          className="md-flex-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href} style={{ display: "none" }} className="nav-item">
              <Link
                href={link.href}
                className="link-underline"
                style={{
                  color: "#9A9A9A",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
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

        {/* CTA */}
        <Link
          href="#contacto"
          className="cta-btn-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.625rem 1.25rem",
            backgroundColor: "#C01C1C",
            color: "#fff",
            fontSize: "0.875rem",
            fontWeight: 600,
            borderRadius: "0.5rem",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#E02A2A";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 8px 24px rgba(192,28,28,0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#C01C1C";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          Contáctanos
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "0.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#F0F0F0",
                transition: "all 0.3s ease",
                transform:
                  mobileOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 1
                      ? "scaleX(0)"
                      : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: mobileOpen ? "320px" : "0",
          opacity: mobileOpen ? 1 : 0,
          transition: "all 0.3s ease",
          backgroundColor: "rgba(17,17,17,0.98)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(42,42,42,0.3)",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 1.5rem",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  display: "block",
                  color: "#9A9A9A",
                  textDecoration: "none",
                  padding: "0.5rem 0",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contacto"
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.75rem 1.25rem",
                backgroundColor: "#C01C1C",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "0.5rem",
                textDecoration: "none",
                marginTop: "0.5rem",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .nav-item { display: list-item !important; }
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
          .cta-btn-desktop { display: flex !important; }
        }
        @media (max-width: 767px) {
          .nav-item { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .cta-btn-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}
