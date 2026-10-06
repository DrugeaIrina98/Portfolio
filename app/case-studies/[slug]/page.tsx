import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, pastelHex, visualsNote } from "@/lib/caseStudies";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  return {
    title: study ? `${study.title} — Irina Drugea` : "Case study — Irina Drugea",
    description: study?.description,
  };
}

/**
 * Case study template. Every study has the same five sections:
 *   1. Introduction   2. Impact teaser   3. Key stages
 *   4. Outcome        5. Learnings & next steps
 * Only the number of stages varies with the depth of the project.
 *
 * BRIEF opts into `theme: "dark"`, which renders the body as an inset dark
 * panel — its own visual world, while the site's gradient blob still shows
 * around the edges so the page doesn't feel like a different website.
 */
export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const tint = pastelHex[study.pastel];
  const dark = study.theme === "dark";
  const note = visualsNote[study.visuals];

  // Token pairs so the dark world stays readable without a second template.
  const t = {
    heading: dark ? "text-[#F2EDF5]" : "text-plum",
    body: dark ? "text-[#F2EDF5]/70" : "text-plum/70",
    muted: dark ? "text-[#F2EDF5]/45" : "text-plum/50",
    rule: dark ? "border-[#F2EDF5]/12" : "border-plum/10",
  };
  const h2 = `font-display text-3xl font-light ${t.heading}`;
  const prose = `mt-4 text-lg leading-relaxed ${t.body}`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
      <Link
        href="/#work"
        className="label-mono text-plum/60 underline decoration-plum/20 underline-offset-4 transition-colors duration-300 ease-gentle hover:text-plum hover:decoration-plum/50"
      >
        ← Back to work
      </Link>

      <article
        className={dark ? "mt-8 rounded-[32px] bg-[#16131B] px-6 py-12 shadow-bloom sm:px-12" : "mt-8"}
      >
        {/* 1 · Introduction */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`label-mono ${t.muted}`}>{study.index}</span>
            <span
              className="label-mono rounded-full px-3 py-1"
              style={{
                backgroundColor: dark ? "rgba(244,168,150,0.14)" : tint,
                color: dark ? "#F4A896" : undefined,
              }}
            >
              {study.tag}
            </span>
          </div>
          <p className={`mt-5 label-mono ${t.muted}`}>
            {study.company} · {study.role} · {study.timeframe}
          </p>
          <h1 className={`mt-2 font-display text-4xl font-light leading-tight sm:text-5xl ${t.heading}`}>
            {study.title}
          </h1>
          <p className={prose}>{study.problem}</p>
        </Reveal>

        {/* 2 · Impact teaser — the answer to "did it work?", before the process */}
        <Reveal className="mt-10">
          <div
            className="px-7 py-6"
            style={{
              backgroundColor: dark ? "rgba(244,168,150,0.10)" : `${tint}99`,
              borderRadius: "28px 44px 32px 40px",
            }}
          >
            <p className={`label-mono ${dark ? "text-coral" : t.muted}`}>Impact</p>
            <p className={`mt-2 font-display text-xl font-light leading-snug sm:text-2xl ${t.heading}`}>
              {study.impact}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div
            className="flex aspect-[16/10] w-full items-center justify-center"
            style={{
              backgroundColor: dark ? "rgba(242,237,245,0.06)" : tint,
              borderRadius: study.radius,
            }}
          >
            <span className={`label-mono px-8 text-center ${t.muted}`}>Project image</span>
          </div>
        </Reveal>

        {note && (
          <Reveal className="mt-6">
            <p className={`border-l-2 pl-4 text-sm leading-relaxed ${t.rule} ${t.body}`}>{note}</p>
          </Reveal>
        )}

        {/* 3 · Key stages — the bulk of the page */}
        <Reveal className="mt-16">
          <h2 className={h2}>Key stages</h2>
        </Reveal>
        <ol className="mt-8 space-y-12">
          {study.stages.map((stage, i) => (
            <li key={stage.title}>
              <Reveal>
                <p className={`label-mono ${t.muted}`}>Stage {String(i + 1).padStart(2, "0")}</p>
                <h3 className={`mt-2 font-display text-2xl font-light ${t.heading}`}>{stage.title}</h3>
                <p className={`mt-3 text-lg leading-relaxed ${t.body}`}>{stage.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* 4 · Outcome */}
        <Reveal className={`mt-16 border-t pt-12 ${t.rule}`}>
          <h2 className={h2}>Outcome</h2>
          <p className={prose}>{study.outcome}</p>
        </Reveal>

        {/* 5 · Learnings & next steps */}
        <Reveal className="mt-14">
          <h2 className={h2}>
            Learnings &amp; <em className="italic">next steps</em>
          </h2>
          <p className={prose}>{study.learnings}</p>
        </Reveal>
      </article>

      <Reveal className="mt-16">
        <Link
          href="/#say-hi"
          className="inline-flex items-center rounded-full bg-coral px-7 py-3 font-body text-sm font-semibold text-plum shadow-bloom-sm transition-[transform,box-shadow] duration-300 ease-gentle hover:-translate-y-1 hover:shadow-bloom"
        >
          Want to talk about work like this? Say hi
        </Link>
      </Reveal>
    </div>
  );
}
