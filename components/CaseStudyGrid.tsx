"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { caseStudies } from "@/lib/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

/**
 * The 4×2 grid of 8 projects. Cards reveal with a soft staggered fade as the
 * section scrolls into view. Reflows to two columns on tablet and a single
 * column on mobile.
 */
export default function CaseStudyGrid() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-light text-plum sm:text-3xl">
          Selected <em className="italic">work</em>
        </h2>
        <span className="label-mono text-plum/50">8 projects</span>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      >
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </motion.div>
    </section>
  );
}
