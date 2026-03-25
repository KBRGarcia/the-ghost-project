"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, spring } from "animejs";

// Tipado estricto adaptado a la API de Rotate.js v4 sin usar 'any'
export type RotateScope = { revert: () => void; methods?: { rotateLogo?: (i: number) => void } };

export function useRotateLogoAnimation<T extends HTMLElement>(selector: string) {
  const rootRef = useRef<T>(null);
  const scopeRef = useRef<RotateScope | null>(null);
  const rotationsRef = useRef(0);

  useEffect(() => {
    const scope = createScope({ root: rootRef }).add((self: unknown) => {
      // 1. Animación tipo latido constante
      animate(selector, {
        scale: [
          { to: 1.15, ease: "inOut(3)", duration: 600 },
          { to: 1, ease: spring({ bounce: 0.6 }) },
        ],
        loop: true,
        loopDelay: 2500,
      });

      // Se removió createDraggable ya que interfiere con la posición original calculada por flexbox,
      // causando que el logo se desplace fuera del centro.

      // 3. Método para rotar al hacer click
      // Verificamos de forma segura sin usar 'any'
      if (self && typeof self === "object" && "add" in self) {
        const target = self as { add: (name: string, fn: (i: number) => void) => void };
        target.add("rotateLogo", (i: number) => {
          animate(selector, {
            rotate: i * 360,
            ease: "out(4)",
            duration: 1500,
          });
        });
      }
    });

    // Cast seguro en dos pasos
    scopeRef.current = scope as unknown as RotateScope;

    return () => {
      if (scopeRef.current) {
        scopeRef.current.revert();
      }
    };
  }, [selector]);

  const handleLogoClick = () => {
    rotationsRef.current += 1;
    if (scopeRef.current?.methods?.rotateLogo) {
      scopeRef.current.methods.rotateLogo(rotationsRef.current);
    }
  };

  return { rootRef, handleLogoClick };
}