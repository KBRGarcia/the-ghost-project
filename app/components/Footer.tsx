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
    <footer className="bg-ghost-dark-2 border-t border-ghost-gray/50 pt-16 px-6 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14 footer-grid animate-on-scroll">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="#hero"
              className="flex items-center gap-3 no-underline w-fit"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/the-ghost-logo-mini-whitout-background.png"
                  alt="The Ghost Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-display text-[1.2rem] font-bold tracking-widest text-ghost-text">
                THE <span className="text-ghost-red">GHOST</span>
              </span>
            </Link>

            <p className="text-ghost-text-muted text-sm leading-relaxed max-w-[280px]">
              Equipo de desarrollo de software de alto rendimiento.
              Construimos el futuro digital, línea a línea.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group flex items-center h-9 w-9 bg-ghost-gray/40 border border-ghost-gray/40 rounded-lg overflow-hidden no-underline transition-all duration-300 ease-out text-ghost-text-muted hover:w-[145px] hover:bg-ghost-red/15 hover:border-ghost-red/40"
                >
                  <div className="flex items-center justify-center h-9 w-9 min-w-[36px] transition-all duration-300 ease-out group-hover:text-ghost-red">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-sm font-medium whitespace-nowrap opacity-0 -translate-x-[15px] transition-all duration-300 ease-out text-ghost-red group-hover:opacity-100 group-hover:translate-x-0">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-ghost-text text-[0.8rem] font-bold uppercase tracking-[0.15em] mb-5">
                {category}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-ghost-text-muted no-underline text-sm transition-colors duration-200 hover:text-ghost-text"
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
        <div className="h-px w-full bg-gradient-to-r from-transparent via-ghost-gray/80 to-transparent mb-8" />

        {/* Copyright bar */}
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <p className="text-ghost-text-muted text-xs">
            © {year} <span className="text-ghost-red font-semibold">The Ghost</span>. Todos los derechos reservados.
          </p>
          <p className="text-ghost-text-muted text-xs flex items-center gap-1.5">
            Hecho con <Heart size={13} className="text-ghost-red fill-ghost-red" /> y <span className="text-ghost-text font-medium">Next.js 16</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
