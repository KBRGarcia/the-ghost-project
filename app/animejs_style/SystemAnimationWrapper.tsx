"use client";

import React, { useState } from "react";
import { useGlobalScrollAnimation } from "../animejs_style/GlobalScrollAnimejs";
import Preloader from "../components/Preloader";

interface SystemAnimationWrapperProps {
  readonly children: React.ReactNode;
}

export default function SystemAnimationWrapper({ children }: SystemAnimationWrapperProps) {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Inicializamos el hook global de animación por scroll, 
  // que espera a que preloaderDone sea true para arrancar las animaciones.
  useGlobalScrollAnimation(preloaderDone);

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      {children}
    </>
  );
}
