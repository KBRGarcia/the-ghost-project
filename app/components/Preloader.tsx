"use client";

import Image from "next/image";
import { usePreloaderAnimation } from "../animejs_style/PreloaderAnimejs";

interface PreloaderProps {
  readonly onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const { containerRef } = usePreloaderAnimation(onComplete);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-ghost-dark flex items-center justify-center"
    >
      <div className="relative w-[160px] h-[160px] flex items-center justify-center">
        {/* Anillos decorativos para la animación de carga */}
        <div className="preloader-ring absolute -inset-5 rounded-full border-2 border-ghost-red" />
        <div 
          className="preloader-ring absolute -inset-10 rounded-full border border-ghost-red/50"
          style={{ animationDelay: "400ms" }} // Animejs controlará estos de requerirlo
        />
        
        {/* Glow de fondo */}
        <div className="absolute -inset-[60px] rounded-full blur-[20px] bg-[radial-gradient(circle,rgba(192,28,28,0.15),transparent_70%)]" />

        {/* Logo central */}
        <div className="preloader-logo relative w-full h-full z-10">
          <Image
            src="/the-ghost-logo-mini-whitout-background.png"
            alt="Loading..."
            fill
            className="object-contain"
            priority
            sizes="160px"
          />
        </div>
      </div>
    </div>
  );
}
