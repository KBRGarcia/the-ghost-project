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
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0A0A0A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative", width: "160px", height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Anillos decorativos para la animación de carga */}
        <div 
          className="preloader-ring"
          style={{
            position: "absolute",
            inset: "-20px",
            borderRadius: "50%",
            border: "2px solid #C01C1C",
          }}
        />
        <div 
          className="preloader-ring"
          style={{
            position: "absolute",
            inset: "-40px",
            borderRadius: "50%",
            border: "1px solid rgba(192,28,28,0.5)",
            animationDelay: "400ms", // Usaremos CSS fallbacks o Animejs controlará estos a través de clases compartidas
          }}
        />
        
        {/* Glow de fondo */}
        <div
          style={{
            position: "absolute",
            inset: "-60px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,28,28,0.15), transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Logo central */}
        <div 
          className="preloader-logo" 
          style={{ position: "relative", width: "100%", height: "100%", zIndex: 10 }}
        >
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
