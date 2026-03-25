"use client";

import React from "react";
import { useGlobalScrollAnimation } from "../animejs_style/GlobalScrollAnimejs";

interface SystemAnimationWrapperProps {
  readonly children: React.ReactNode;
}

export default function SystemAnimationWrapper({ children }: SystemAnimationWrapperProps) {
  // Inicializamos el hook global de animación por scroll
  useGlobalScrollAnimation();

  return <>{children}</>;
}
