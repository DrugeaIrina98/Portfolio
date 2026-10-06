"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { gentleEase } from "@/lib/motion";
import { pastelHex, type CaseStudy } from "@/lib/caseStudies";

/**
 * A single case study card. Each one has its own organic corner radius so the
 * grid feels handmade. Hover is a gentle lift with a soft shadow bloom — no
 * scale-bounce. The whole card is a link with a visible focus ring.
 */
export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const tint = pastelHex[study.pastel];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: gentleEase } },
      }}
    >
      <Link
        href={`/case-studies/${study.slug}`}
        className="group block h-full rounded-[28px] outline-none"
      >
        <div
          className="flex h-full flex-col justify-between p-7 transition-[transform,box-shadow] duration-500 ease-gentle group-hover:-translate-y-1 group-hover:shadow-bloom group-focus-visible:-translate-y-1 group-focus-visible:shadow-bloom"
          style={{
            borderRadius: study.radius,
            backgroundColor: tint,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="label-mono text-plum/50">{study.index}</span>
            <span className="label-mono rounded-full bg-cloud/60 px-3 py-1 text-plum/70">
              {study.tag}
            </span>
          </div>

          <div className="mt-16">
            <p className="label-mono mb-2 text-plum/50">{study.company}</p>
            <h3 className="font-display text-2xl font-light leading-snug text-plum">
              {study.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-plum/70">
              {study.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 label-mono text-plum/60 transition-transform duration-300 ease-gentle group-hover:translate-x-1">
              View <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
