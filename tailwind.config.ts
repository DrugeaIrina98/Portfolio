import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm cloud white — the base of the whole room
        cloud: "#FBF6F2",
        lilac: "#D9C6F0",
        peach: "#FADCC4",
        sky: "#C9E4F5",
        sage: "#BFD8C8",
        // Coral is loud on purpose — reserved for CTAs / highlights only
        coral: "#F4A896",
        // Deep muted plum instead of pure black — softer contrast
        plum: "#3A2E42",
      },
      fontFamily: {
        // Wired up via next/font CSS variables in app/layout.tsx
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-sofia)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        // Soft shadow bloom for gentle hover lifts — no hard edges
        bloom: "0 18px 40px -18px rgba(58, 46, 66, 0.25)",
        "bloom-sm": "0 10px 24px -14px rgba(58, 46, 66, 0.22)",
      },
      transitionTimingFunction: {
        // A calm, unhurried ease — nothing snappy
        gentle: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
