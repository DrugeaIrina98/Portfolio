/**
 * Case study content — final lineup.
 *
 * Each card gets a pastel from the palette and its own slightly-organic corner
 * radius so the grid reads handmade, not templated. Pastels are distributed so
 * no card shares a colour with its neighbour across or below in the 4-column grid.
 *
 * Every detail page has the same five sections — introduction, impact teaser,
 * key stages, outcome, learnings & next steps. Depth varies only through the
 * number of `stages`: BRIEF and the HP pair run long, TotalSoft and Unified
 * Practice stay honestly short.
 *
 * `[bracketed]` values are facts still to fill in (role, timeframe).
 * `theme: "dark"` is BRIEF only: its subject matter earns its own visual world.
 */

export type PastelKey = "lilac" | "peach" | "sky" | "sage";

/** How the imagery for a study came to exist. */
export type VisualsKind =
  | "real" // actual screens, shown as-is
  | "genericized" // real work, placeholder names and numbers
  | "fictionalized" // NDA — invented product, dummy data, real patterns
  | "process" // no screens survive; research artifacts instead
  | "meta"; // screenshots of the working process itself

export interface CaseStudy {
  slug: string;
  index: string; // Space Mono label, e.g. "01"
  company: string;
  role: string;
  timeframe: string;
  title: string;
  description: string; // card one-liner
  tag: string;
  pastel: PastelKey;
  radius: string;
  visuals: VisualsKind;
  theme?: "dark";
  problem: string;
  impact: string;
  stages: { title: string; body: string }[];
  outcome: string;
  learnings: string;
}

export const pastelHex: Record<PastelKey, string> = {
  lilac: "#D9C6F0",
  peach: "#FADCC4",
  sky: "#C9E4F5",
  sage: "#BFD8C8",
};

/** Shown under the hero image when the visuals aren't plain real screens. */
export const visualsNote: Partial<Record<VisualsKind, string>> = {
  genericized:
    "Real work from the project, shown with placeholder names and numbers — no real customer data.",
  fictionalized:
    "This work is under NDA, so there are no real screens to show. What's here is a deliberate reconstruction — invented product name, dummy data — rebuilding the actual patterns: multi-step flows, large-dataset filtering, and permission states.",
  process:
    "No screens survive from this project. Rather than recreate them from memory, this case study documents what I remember properly: the research itself.",
  meta: "The artefacts here are screenshots of the working process, not a finished product.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "brief-mission-briefing",
    index: "01",
    company: "Self-initiated",
    role: "Solo designer",
    timeframe: "[year]",
    title: "BRIEF",
    description:
      "A mission-briefing interface for dismounted soldiers — a speculative project I started on my own.",
    tag: "Speculative",
    pastel: "lilac",
    radius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    visuals: "real",
    theme: "dark",
    problem:
      "Dismounted soldiers have to absorb threats, routes, and rules of engagement under real time pressure — often with no connection at all.",
    impact:
      "Two iterations, one honest test with someone who'd lived it — and a clear next version: a light theme that survives direct sunlight.",
    stages: [
      {
        title: "Understanding the briefing",
        body: "Placeholder: what a briefing has to carry, how fast it has to land, and what working offline rules out.",
      },
      {
        title: "First iteration",
        body: "Placeholder: the first pass, and what it got wrong.",
      },
      {
        title: "Second iteration",
        body: "Placeholder: what changed, and the reasoning that moved between the two.",
      },
      {
        title: "Designing the ethics",
        body: "Placeholder: why the rules of engagement are written in plain language, and why confirming engagement is deliberately sequential rather than a single tap.",
      },
      {
        title: "Testing it with my father",
        body: "Placeholder: what he — retired military — said when he used it, including the parts that didn't land.",
      },
    ],
    outcome:
      "Placeholder: where the design stands now, and what the test confirmed works.",
    learnings:
      "The test pointed at one concrete change: a dark tactical interface that looks right on a monitor is unreadable in direct sunlight, so the next iteration is a light theme. Placeholder: what else you'd do differently.",
  },
  {
    slug: "clarityos-impactum",
    index: "02",
    company: "Impactum Insights",
    role: "Sole designer",
    timeframe: "[year]",
    title: "ClarityOS",
    description:
      "A visual identity and component library from zero — then the marketing site built on top of it.",
    tag: "0→1",
    pastel: "peach",
    radius: "68% 32% 38% 62% / 62% 40% 60% 38%",
    visuals: "real",
    problem:
      "No visual identity, no component library, and a complex AI product that needed a website people could actually understand.",
    impact:
      "From nothing to a shipped marketing site — identity, component library, and site, all from one designer.",
    stages: [
      {
        title: "Defining the visual direction",
        body: "Placeholder: the moodboard, palette, and type system, and how the direction got decided.",
      },
      {
        title: "Building the component library",
        body: "Placeholder: turning that direction into components other people could build with.",
      },
      {
        title: "From wireframe to live site",
        body: "Placeholder: the wireframe-to-live comparison, and what changed along the way.",
      },
      {
        title: "Telling the story in 3D",
        body: "Placeholder: the Spline animation, and what it was there to explain.",
      },
    ],
    outcome: "Placeholder: what shipped, and how it was received.",
    learnings: "Placeholder: what you'd do differently building a system and its first product at the same time.",
  },
  {
    slug: "hp-bridging-the-gap",
    index: "03",
    company: "HP",
    role: "[role]",
    timeframe: "[year]",
    title: "Bridging the Gap",
    description:
      "A unified dashboard pulling Sales, Marketing, and Finance KPIs out of their separate silos.",
    tag: "Dashboard",
    pastel: "sky",
    radius: "40% 60% 65% 35% / 55% 45% 55% 45%",
    visuals: "genericized",
    problem:
      "Sales, Marketing, and Finance each tracked their own KPIs in their own tools — so meetings turned into arguments about whose number was right.",
    impact:
      "One shared dashboard in place of three competing sources of truth — shipped.",
    stages: [
      {
        title: "Mapping the silos",
        body: "Placeholder: where each team's numbers lived, and where they disagreed.",
      },
      {
        title: "Research across departments",
        body: "Placeholder: the cross-department interviews and workshops, and what each team actually needed to see.",
      },
      {
        title: "Iterating in Figma",
        body: "Placeholder: the prototype rounds and what each one changed.",
      },
      {
        title: "Getting it shipped",
        body: "Placeholder: the path from final prototype to production.",
      },
    ],
    outcome: "Placeholder: what shipped, and how the meetings changed afterwards.",
    learnings: "Placeholder: what's still unresolved, and what the next iteration would tackle.",
  },
  {
    slug: "hp-hybrid-design-system",
    index: "04",
    company: "HP",
    role: "[role]",
    timeframe: "[year]",
    title: "A hybrid design system",
    description:
      "Modernizing a legacy sales app without betting the product on a risky full rebuild.",
    tag: "Design system",
    pastel: "sage",
    radius: "60% 40% 30% 70% / 45% 55% 45% 55%",
    visuals: "genericized",
    problem:
      "A legacy sales app on an ageing component library, where a full rebuild was too risky to bet the product on.",
    impact:
      "A hybrid system that let old and new coexist — the app modernized piece by piece instead of all at once.",
    stages: [
      {
        title: "Auditing the legacy library",
        body: "Placeholder: what the library actually contained, and which parts were load-bearing.",
      },
      {
        title: "Defining the hybrid",
        body: "Placeholder: the rules that let old and new components live side by side.",
      },
      {
        title: "Components and notifications",
        body: "Placeholder: the specific patterns, and how they worked either side of the line.",
      },
      {
        title: "Rolling out with developers",
        body: "Placeholder: partnering with engineering on an incremental rollout.",
      },
    ],
    outcome: "Placeholder: how far the rollout got, and what it changed for the team.",
    learnings: "Placeholder: what you'd do differently on the next migration.",
  },
  {
    slug: "cognyte-investigative-flows",
    index: "05",
    company: "Cognyte",
    role: "[role]",
    timeframe: "[year] – present",
    title: "Flows for sensitive data, at scale",
    description:
      "Multi-step flows for sensitive investigative data, where a wrong click actually matters.",
    tag: "Enterprise UX",
    pastel: "sage",
    radius: "35% 65% 55% 45% / 60% 35% 65% 40%",
    visuals: "fictionalized",
    problem:
      "Investigators working through very large, sensitive datasets in multi-step flows — where a wrong click is expensive and permissions decide what anyone can see.",
    impact: "Placeholder: the result in a line or two, at a level the NDA allows.",
    stages: [
      {
        title: "Multi-step flows",
        body: "Placeholder: keeping people oriented across long, consequential sequences.",
      },
      {
        title: "Filtering at scale",
        body: "Placeholder: narrowing very large datasets without losing track of what's been excluded.",
      },
      {
        title: "Permission states",
        body: "Placeholder: making what someone can and can't see legible at a glance.",
      },
    ],
    outcome: "Placeholder: what changed, described at a level the NDA allows.",
    learnings: "Placeholder: what's still unresolved.",
  },
  {
    slug: "unified-practice-research",
    index: "06",
    company: "Unified Practice",
    role: "[role]",
    timeframe: "[year]",
    title: "What 20+ users taught us",
    description:
      "A research-led redesign of a medical mobile app — told through the research rather than the screens.",
    tag: "Research",
    pastel: "sky",
    radius: "62% 38% 63% 37% / 38% 62% 38% 62%",
    visuals: "process",
    problem:
      "A medical mobile app due for a redesign, and an open question about what its users actually needed from it.",
    impact: "Placeholder: the one finding from 20+ users that changed the redesign most.",
    stages: [
      {
        title: "Who we talked to",
        body: "Placeholder: the personas that came out of the sessions, and how they differed from who we expected.",
      },
      {
        title: "From findings to decisions",
        body: "Placeholder: map a few specific findings to the specific decisions they changed.",
      },
    ],
    outcome: "Placeholder: what the redesign became.",
    learnings: "Placeholder: what you'd ask differently next time.",
  },
  {
    slug: "how-i-actually-design",
    index: "07",
    company: "Working method",
    role: "Solo",
    timeframe: "Ongoing",
    title: "How I actually design",
    description:
      "Prototyping interaction logic in code with Claude before I open Figma — including this very site.",
    tag: "Process",
    pastel: "peach",
    radius: "45% 55% 40% 60% / 55% 50% 50% 45%",
    visuals: "meta",
    problem:
      "A static mockup can look finished long before anyone has argued with it — and handoff inherits every question it skipped.",
    impact:
      "This portfolio, designed and built by prompting and iterating in code with Claude — before Figma.",
    stages: [
      {
        title: "Why code before Figma",
        body: "Placeholder: arguing with an idea while it's still cheap to be wrong about it.",
      },
      {
        title: "This portfolio as the example",
        body: "Placeholder: the real prompt-and-iterate process behind this site, with screenshots.",
      },
      {
        title: "What it changes about handoff",
        body: "Placeholder: handing engineering something more resolved to start from.",
      },
    ],
    outcome: "Placeholder: what this way of working has changed in practice.",
    learnings: "Placeholder: where it falls short, and when Figma still comes first.",
  },
  {
    slug: "totalsoft-early-work",
    index: "08",
    company: "TotalSoft",
    role: "[role]",
    timeframe: "[year]",
    title: "Where it started",
    description:
      "Early-career wireframes across an enterprise HR and agricultural product portfolio.",
    tag: "Early work",
    pastel: "lilac",
    radius: "58% 42% 55% 45% / 42% 58% 42% 58%",
    visuals: "real",
    problem:
      "An enterprise HR and agricultural product portfolio that needed wireframes — and my first real job doing it.",
    impact:
      "Kept in proportion: early work, and the place the design-systems thinking started.",
    stages: [
      {
        title: "The work",
        body: "Placeholder: what the wireframes covered and who they were for.",
      },
      {
        title: "Where the systems thinking began",
        body: "Placeholder: the habit from this period that stuck.",
      },
    ],
    outcome: "Placeholder: what happened to the work.",
    learnings: "Placeholder: what you'd tell yourself back then.",
  },
];
