"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function useGlobalScrollAnimation(isReady: boolean) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 1. Ocultamos los elementos inmediatamente si el preloader aún está activo
  useEffect(() => {
    if (!isReady) {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.dataset.animated !== "true") {
          htmlEl.style.opacity = "0"; 
          htmlEl.style.transform = "translateY(40px)";
        }
      });
    }
  }, [isReady]);

  // 2. Iniciamos el observer solo cuando isReady es true
  useEffect(() => {
    if (!isReady) return;

    // Definir opciones del observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger general al 10%
    };

    const callback: IntersectionObserverCallback = (entries) => {
      // Entradas que acaban de entrar en vista
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      
      visibleEntries.forEach((entry, index) => {
        const target = entry.target as HTMLElement;

        // Si ya está animado, no lo repetimos a menos que haya salido de la vista
        if (target.dataset.animated === "true") return;
        target.dataset.animated = "true";

        // Animación de entrada
        animate(target, {
          opacity: [0, 1],
          y: [40, 0], 
          ease: "out(4)", 
          duration: 1000,
          delay: index * 100, // Stagger ligero para múltiples elementos simultáneos
        });
      });

      // Entradas que han salido completamente de la vista
      const hiddenEntries = entries.filter((entry) => !entry.isIntersecting);
      hiddenEntries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        
        // Si sale de la vista, lo reseteamos para que vuelva a animarse al hacer scroll
        if (target.dataset.animated === "true") {
          target.dataset.animated = "false";
          // Reseteamos el estilo directamente para que esté listo cuando vuelva a entrar
          target.style.opacity = "0";
          target.style.transform = "translateY(40px)";
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    // Timeout para asegurar que el DOM y el scroll local del navegador/Next.js están listos
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Solo inicializamos a 0 si no han sido animados aún
        if (htmlEl.dataset.animated !== "true") {
          htmlEl.style.opacity = "0"; 
          htmlEl.style.transform = "translateY(40px)";
        }
        observerRef.current?.observe(htmlEl);
      });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isReady]);
}
