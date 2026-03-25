"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function usePreloaderAnimation(onComplete: () => void) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Primer paso: Animación de anillos de carga alrededor del logo (pulse & rotate)
    const tl = animate(".preloader-ring", {
        scale: [0.8, 1.2],
        opacity: [0.8, 0],
        duration: 1200,
        ease: "out(2)",
        loop: true,
    });

    // Logo sutil latido
    const tlLogo = animate(".preloader-logo", {
        scale: [0.95, 1.05],
        duration: 800,
        ease: "inOut(2)",
        loop: true,
        direction: "alternate",
    });

    // Animación de salida (fade out de la pantalla)
    const timeout = setTimeout(() => {
      // Detenemos loops si es necesario, o simplemente animamos el contenedor completo
      tl.pause();
      tlLogo.pause();
      
      if (containerRef.current) {
        animate(containerRef.current, {
          opacity: [1, 0],
          duration: 800,
          ease: "inOut(2)",
          onComplete: () => {
            onComplete();
          }
        });
      }
    }, 1500); // 1.5 segundos de carga antes del fade out

    return () => {
      clearTimeout(timeout);
      tl.pause();
      tlLogo.pause();
    };
  }, [onComplete]);

  return { containerRef };
}
