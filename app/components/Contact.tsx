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

  const inputClasses = "w-full p-3 bg-ghost-dark-3 border border-ghost-gray/50 rounded-xl text-ghost-text text-sm outline-none transition-colors duration-200 focus:border-ghost-red/50 font-sans";

  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-ghost-dark relative overflow-hidden"
    >
      {/* Bg glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] opacity-5 blur-[80px] pointer-events-none bg-[radial-gradient(ellipse,var(--ghost-red),transparent)]"
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <span className="inline-block text-ghost-red text-xs font-semibold tracking-widest uppercase mb-4">
            — Contáctanos —
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ghost-text mb-4">
            Hablemos de tu{" "}
            <span className="gradient-text">próximo proyecto</span>
          </h2>
          <p className="text-ghost-text-muted text-[1.05rem] max-w-[520px] mx-auto leading-relaxed">
            Cuéntanos tu idea y te responderemos en menos de 24 horas con una
            propuesta inicial sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 contact-grid">
          {/* Left: Contact Info */}
          <div className="animate-on-scroll flex flex-col gap-6">
            <div className="p-7 rounded-2xl bg-ghost-dark-2 border border-ghost-gray/50">
              <h3 className="font-display text-ghost-text text-lg font-bold mb-6">
                Información de contacto
              </h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 no-underline group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-ghost-red/10 border border-ghost-red/20 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-ghost-red/20 group-hover:border-ghost-red/40">
                        <Icon size={20} className="text-ghost-red" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-[0.7rem] text-ghost-text-muted uppercase tracking-widest mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-ghost-text text-sm font-medium group-hover:text-ghost-red-light transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/20 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 shrink-0 animate-pulse" />
              <div>
                <div className="text-ghost-text text-sm font-semibold mb-0.5">
                  Disponibles para nuevos proyectos
                </div>
                <div className="text-ghost-text-muted text-xs">
                  Tiempo de respuesta &lt; 24h
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-on-scroll">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 p-12 rounded-2xl bg-ghost-dark-2 border border-ghost-red/30 text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-ghost-red/10 border border-ghost-red/30 flex items-center justify-center mb-2">
                  <CheckCircle2 size={32} className="text-ghost-red" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold text-ghost-text">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-ghost-text-muted">
                  El equipo de The Ghost te contactará pronto.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", project: "", message: "" });
                  }}
                  className="mt-4 px-6 py-3 bg-ghost-red text-white font-semibold rounded-xl border-none cursor-pointer text-sm transition-colors hover:bg-ghost-red-light"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-7 rounded-2xl bg-ghost-dark-2 border border-ghost-gray/50 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 form-row">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-ghost-text-muted text-[0.7rem] font-semibold uppercase tracking-widest">
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
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-ghost-text-muted text-[0.7rem] font-semibold uppercase tracking-widest">
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
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-project" className="text-ghost-text-muted text-[0.7rem] font-semibold uppercase tracking-widest">
                    Tipo de Proyecto
                  </label>
                  <select
                    id="contact-project"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
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

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-ghost-text-muted text-[0.7rem] font-semibold uppercase tracking-widest">
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
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-4 bg-ghost-red hover:bg-ghost-red-light text-white font-bold text-base rounded-xl border-none cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-[0_12px_32px_rgba(192,28,28,0.35)] mt-2"
                >
                  <Send size={18} strokeWidth={2} />
                  Enviar Mensaje
                </button>

                <p className="text-center text-xs text-ghost-text-muted mt-2">
                  Al enviar, aceptas que el equipo de The Ghost te contactará.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
