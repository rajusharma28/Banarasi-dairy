import { useEffect, useState } from "react";
import { HERO_BANNERS } from "../data/banners";
import { cn } from "../utils/cn";

/**
 * Homepage hero banner.
 * - Preserves the original 20:8 aspect ratio with object-fit: contain.
 * - Renders as a static image when only one banner is supplied.
 * - Becomes a soft cross-fading slider when more than one is supplied.
 * - The banner is never recreated, re-typeset or cropped here.
 */
export function HeroBanner() {
  const banners = HERO_BANNERS;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (banners.length < 2 || paused) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [banners.length, paused]);

  return (
    <section
      className="pattern-maroon relative overflow-hidden"
      aria-roledescription={banners.length > 1 ? "carousel" : undefined}
      aria-label="Banarasi Dudh Dairy advertising banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Premium champagne glow behind the banner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-5 sm:px-6 sm:pb-14 sm:pt-8">
        <div className="relative">
          {/* Decorative gold frame */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-[26px] border border-champagne/25 sm:-inset-3"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-[5px] rounded-[24px] border border-gold/20 sm:-inset-[7px]"
          />

          {/* 20:8 banner stage — object-contain keeps the whole banner visible */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-champagne/40 bg-[radial-gradient(circle_at_50%_40%,#7d131f_0%,#4d090f_100%)] shadow-lift sm:aspect-[20/8]">
            {banners.map((banner, i) => (
              <img
                key={banner.image}
                src={banner.fallback}
                alt={banner.alt}
                width={1983}
                height={793}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
                sizes="(max-width: 1280px) 100vw, 1280px"
                className={cn(
                  "absolute inset-0 h-full w-full object-contain transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  i === index ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>

        {/* Slider controls — only rendered when more than one banner exists */}
        {banners.length > 1 ? (
          <div className="mt-6 flex items-center justify-center gap-3">
            {banners.map((banner, i) => (
              <button
                key={banner.image}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show banner ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500",
                  i === index ? "w-8 bg-gold" : "w-2.5 bg-champagne/50 hover:bg-champagne",
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
