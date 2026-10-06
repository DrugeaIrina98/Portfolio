"use client";

import { motion } from "framer-motion";
import { revealVariants } from "@/lib/motion";
import type { ReactNode } from "react";

/**
 * Soft fade + slight upward drift as an element scrolls into view. Fires once.
 * Framer Motion already respects prefers-reduced-motion by collapsing the
 * transform when the user's `useReducedMotion` is set, and our global CSS
 * zeroes the transition duration as a belt-and-braces fallback.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
