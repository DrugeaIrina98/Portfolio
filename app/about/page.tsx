import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Polaroid from "@/components/Polaroid";
import StatusLine from "@/components/StatusLine";

export const metadata: Metadata = {
  title: "About — Irina Drugea",
  description:
    "A product designer who likes the problems most people find boring. Currently in Bucharest, moving to Munich.",
};

/**
 * Small whimsy details — brief on purpose, not a wall of text. Location and
 * language live in <StatusLine /> instead, which states them more precisely,
 * so this list stays purely personality.
 */
const smallThings: { label: string; value: string }[] = [
  { label: "Tools", value: "Figma, Claude Code, Spline" },
  { label: "Odd fact", value: "I read tarot for friends" },
  { label: "Outside design", value: "Recently, embarrassingly late, a hiking person" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10 sm:py-20">
      <div className="grid gap-14 md:grid-cols-[1fr_18rem] md:gap-16">
        {/* ── Bio ───────────────────────────────────────────────── */}
        <div>
          <Reveal>
            <p className="label-mono text-plum/50">About</p>
            <h1 className="mt-4 font-display text-4xl font-light leading-[1.15] tracking-tight text-plum sm:text-5xl">
              I like the problems most people find{" "}
              <em className="italic">boring</em>.
            </h1>
            <StatusLine className="mt-7" />
          </Reveal>

          <div className="mt-9 space-y-6 text-lg leading-relaxed text-plum/75">
            <Reveal>
              <p>
                Hi, I&rsquo;m Irina — a product designer who&rsquo;s spent the
                last five years finding calm inside dense, high-stakes
                enterprise software: permission systems, multi-step flows with
                sensitive data, interfaces where a wrong click actually
                matters.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Data-heavy dashboards, legacy design system migrations, tools
                nobody outside a niche team will ever see — that&rsquo;s where
                I&rsquo;ve spent most of my career, and I&rsquo;ve come to
                genuinely enjoy the constraint of it.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Lately I&rsquo;ve been prototyping differently too: I use
                Claude to build interaction logic directly in code before I
                ever open Figma, which lets me argue with an idea earlier and
                hand engineering something more resolved to start with.
              </p>
            </Reveal>
          </div>

          {/* ── Small things ────────────────────────────────────── */}
          <Reveal className="mt-14">
            <dl className="space-y-4 border-t border-plum/10 pt-8">
              {smallThings.map((thing) => (
                <div
                  key={thing.label}
                  className="flex flex-col gap-1 sm:flex-row sm:gap-6"
                >
                  <dt className="label-mono shrink-0 pt-1 text-plum/45 sm:w-36">
                    {thing.label}
                  </dt>
                  <dd className="text-plum/75">{thing.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ── Photo ─────────────────────────────────────────────── */}
        <Reveal className="md:pt-24">
          <Polaroid caption="me, mid-hike, learning to like it" />
        </Reveal>
      </div>
    </div>
  );
}
