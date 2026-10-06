"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { gentleEase, pressTap, staggerContainer, revealVariants } from "@/lib/motion";
import StatusLine from "./StatusLine";

/**
 * Off-center hero — no centered headline+CTA formula. A small, handwritten-
 * feeling tag, then a warmer personal line as the real headline with one or
 * two words set in the Fraunces italic cut for personality.
 *
 * NOTE: the headline copy is a placeholder — swap in Irina's real tagline.
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:px-10 sm:pb-28 sm:pt-16">
      <motion.div
        className="max-w-3xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Small handwritten-feeling tag */}
        <motion.p
          variants={revealVariants}
          className="mb-6 font-display text-xl italic text-plum/70"
        >
          hi, I&rsquo;m Irina <span className="not-italic">🌤️</span>
        </motion.p>

        {/* The real headline — two italic standout words, nothing more */}
        <motion.h1
          variants={revealVariants}
          className="font-display text-4xl font-light leading-[1.15] tracking-tight text-plum sm:text-5xl md:text-6xl"
        >
          I design for the interfaces nobody{" "}
          <em className="italic text-plum">notices</em> — until they{" "}
          <em className="italic text-plum">break</em>.
        </motion.h1>

        <motion.p
          variants={revealVariants}
          className="mt-7 max-w-xl text-lg leading-relaxed text-plum/70"
        >
          Five years of finding calm inside messy, high-stakes enterprise
          software — permission systems, dense dashboards, and multi-step flows
          where a wrong click actually matters.
        </motion.p>

        <motion.div
          variants={revealVariants}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <motion.div whileTap={pressTap} transition={{ duration: 0.2, ease: gentleEase }}>
            <Link
              href="#work"
              className="inline-flex items-center rounded-full bg-coral px-7 py-3 font-body text-sm font-semibold text-plum shadow-bloom-sm transition-[transform,box-shadow] duration-300 ease-gentle hover:-translate-y-1 hover:shadow-bloom"
            >
              See my work
            </Link>
          </motion.div>
          <Link
            href="#say-hi"
            className="label-mono text-plum/70 underline decoration-plum/20 underline-offset-4 transition-colors duration-300 ease-gentle hover:text-plum hover:decoration-plum/50"
          >
            or just say hi
          </Link>
        </motion.div>

        <motion.div variants={revealVariants}>
          <StatusLine className="mt-12 max-w-xl border-t border-plum/10 pt-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
