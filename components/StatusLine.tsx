/**
 * The three things a recruiter screens for in the first ten seconds:
 * where I'll be, whether I need sponsorship, and what languages I actually
 * speak. Set in Space Mono so it reads as a factual aside rather than
 * marketing copy — sentence case, not uppercase, since it's a full line of
 * text rather than a tiny label.
 */
const items = [
  "Munich from December 2026",
  "EU citizen — no visa sponsorship needed",
  "English (fluent), German (A2 and climbing)",
];

export default function StatusLine({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs leading-relaxed tracking-wide text-plum/55 ${className}`}
    >
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-x-3">
          {i > 0 && (
            <span aria-hidden="true" className="text-plum/25">
              ·
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}
