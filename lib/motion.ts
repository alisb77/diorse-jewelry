"use client";

import { useReducedMotion } from "motion/react";

export function useMotionSafe() {
  const reduce = useReducedMotion();
  return {
    reduce: Boolean(reduce),
    spring: reduce
      ? { duration: 0 }
      : { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.9 },
    soft: reduce
      ? { duration: 0 }
      : { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    tap: reduce ? {} : { scale: 0.97 },
    hoverLift: reduce ? {} : { y: -3 },
  };
}
