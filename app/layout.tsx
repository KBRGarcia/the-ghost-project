import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Ghost | Equipo de Desarrollo de Software",
  description:
    "The Ghost es un equipo de desarrolladores especializados en Backend, Frontend, Apps Móviles, Bases de Datos, Hosting y más. Soluciones digitales de alto impacto.",
  keywords: [
    "desarrollo de software",
    "backend",
    "frontend",
    "apps móviles",
    "bases de datos",
    "hosting",
    "servidores",
    "the ghost",
  ],
  authors: [{ name: "The Ghost Team" }],
  openGraph: {
    title: "The Ghost | Equipo de Desarrollo de Software",
    description:
      "Soluciones digitales completas: Backend, Frontend, Mobile, DB, Hosting y más.",
    type: "website",
    locale: "es_ES",
  },
};

import SystemAnimationWrapper from "./animejs_style/SystemAnimationWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ghost-dark text-ghost-text antialiased">
        <SystemAnimationWrapper>
          {children}
        </SystemAnimationWrapper>
      </body>
    </html>
  );
}
