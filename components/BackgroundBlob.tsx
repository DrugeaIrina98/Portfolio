"use client";

import { useEffect, useRef } from "react";

/**
 * The signature element: a few slow, softly morphing gradient blobs that live
 * quietly behind everything. They drift on a ~26s loop (see .blob-drift in
 * globals.css) and shift a little with scroll position — never chasing the
 * mouse, never competing with content.
 *
 * Reduced-motion users get the same soft composition, just frozen: the CSS
 * kills the animation and we never attach the scroll listener.
 */
export default function BackgroundBlob() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const layer = layerRef.current;
    if (!layer) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1
        );
        const progress = Math.min(window.scrollY / max, 1);
        // A gentle, bounded lateral drift — a few percent of the viewport.
        const shift = (progress * 6 - 3).toFixed(2);
        layer.style.setProperty("--blob-shift", `${shift}vw`);
        layer.style.setProperty(
          "--blob-rise",
          `${(progress * -4).toFixed(2)}vh`
        );
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={layerRef}
        className="absolute inset-0"
        style={{ transform: "translate3d(0, var(--blob-rise, 0), 0)" }}
      >
        {/* Lilac Mist — upper left */}
        <div
          className="blob-drift absolute -left-[10%] -top-[12%] h-[52vw] w-[52vw] max-h-[620px] max-w-[620px] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, #D9C6F0 0%, rgba(217,198,240,0) 70%)",
            animationDelay: "-2s",
          }}
        />
        {/* Sky Milk — right, drifting mid-page */}
        <div
          className="blob-drift absolute right-[-8%] top-[18%] h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #C9E4F5 0%, rgba(201,228,245,0) 70%)",
            animationDelay: "-9s",
          }}
        />
        {/* Peach Fizz — lower centre-left, warms the room */}
        <div
          className="blob-drift absolute bottom-[-14%] left-[18%] h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] opacity-65 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 45% 55%, #FADCC4 0%, rgba(250,220,196,0) 70%)",
            animationDelay: "-16s",
          }}
        />
        {/* Sage Whisper — faint, keeps the palette balanced */}
        <div
          className="blob-drift absolute bottom-[6%] right-[10%] h-[38vw] w-[38vw] max-h-[440px] max-w-[440px] opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #BFD8C8 0%, rgba(191,216,200,0) 70%)",
            animationDelay: "-22s",
          }}
        />
      </div>
    </div>
  );
}
