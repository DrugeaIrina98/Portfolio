"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { gentleEase, pressTap } from "@/lib/motion";

/**
 * Warm, simple contact section — "say hi", not "get in touch". The email is a
 * small blob button with the gentle press-down on click. (This is the light
 * homepage version; the full contact page can build on it later.)
 */
export default function SayHi() {
  return (
    <section
      id="say-hi"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32"
    >
      <Reveal className="max-w-2xl">
        <p className="label-mono text-plum/50">Contact</p>
        <h2 className="mt-4 font-display text-3xl font-light leading-tight text-plum sm:text-4xl">
          Come <em className="italic">say hi</em> 🌿
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-plum/70">
          I&rsquo;m always happy to talk through an idea, a project, or nothing
          in particular. The quickest way to reach me is email.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <motion.a
            whileTap={pressTap}
            transition={{ duration: 0.2, ease: gentleEase }}
            href="mailto:drugea.irina@gmail.com"
            className="inline-flex items-center rounded-full bg-coral px-7 py-3 font-body text-sm font-semibold text-plum shadow-bloom-sm transition-[transform,box-shadow] duration-300 ease-gentle hover:-translate-y-1 hover:shadow-bloom"
            style={{ borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%" }}
          >
            drugea.irina@gmail.com
          </motion.a>
          <a
            href="https://www.linkedin.com/in/irina-drugea-465735150/"
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono text-plum/70 underline decoration-plum/20 underline-offset-4 transition-colors duration-300 ease-gentle hover:text-plum hover:decoration-plum/50"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
