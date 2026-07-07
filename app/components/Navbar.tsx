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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/96 backdrop-blur-md border-b border-[#2A2A2A]/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b-transparent shadow-none"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 no-underline">
          <div className="relative w-10 h-10">
            <Image
              src="/the-ghost-logo-mini-whitout-background.png"
              alt="The Ghost Logo"
              fill
              className="object-contain"
              priority
              sizes="40px"
            />
          </div>
          <span className="font-display text-[1.2rem] font-bold tracking-widest text-[#F0F0F0]">
            THE <span className="text-[#C01C1C]">GHOST</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="link-underline text-[#9A9A9A] no-underline text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#F0F0F0]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contacto"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#C01C1C] text-white text-sm font-semibold rounded-lg no-underline transition-all duration-200 hover:bg-[#E02A2A] hover:shadow-[0_8px_24px_rgba(192,28,28,0.35)]"
        >
          Contáctanos
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-[2px] bg-[#F0F0F0] transition-all duration-300 ${
                mobileOpen
                  ? i === 0
                    ? "rotate-45 translate-y-[7px]"
                    : i === 1
                    ? "scale-x-0"
                    : "-rotate-45 -translate-y-[7px]"
                  : ""
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#111111]/98 backdrop-blur-md border-t border-[#2A2A2A]/30 ${
          mobileOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 list-none m-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-[#9A9A9A] no-underline py-2 text-base font-medium transition-colors hover:text-[#F0F0F0]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contacto"
              className="block text-center px-5 py-3 bg-[#C01C1C] text-white font-semibold rounded-lg no-underline mt-2 hover:bg-[#E02A2A] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
