import type { Variants } from "framer-motion";

/**
 * Shared motion vocabulary for the whole site. The rule everywhere: soft fade
 * + a slight upward drift, unhurried easing, nothing bouncy or snappy.
 */

// A calm, decelerating ease — the same curve used in the CSS.
export const gentleEase: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

// Scroll reveal: fade in while drifting up ~20px.
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: gentleEase },
  },
};

// Container that staggers its children slightly — never all at once.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

// Gentle hover lift — used on cards. translateY only, no scale-bounce.
export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.35, ease: gentleEase } },
};

// Subtle press-down for buttons — settle, no springy overshoot.
export const pressTap = { scale: 0.98 };
