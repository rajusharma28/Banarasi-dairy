import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export type HeroImage = {
  /** Image path. */
  src: string;
  /** Fallback image path. */
  fallback: string;
  alt: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  hindiTitle?: string;
  description?: ReactNode;
  trail: Crumb[];
  /** Optional editorial image shown beside the hero copy on desktop. */
  image?: HeroImage;
  children?: ReactNode;
};

/** Deep maroon editorial band used at the top of every inner page. */
export function PageHero({ eyebrow, title, hindiTitle, description, trail, image, children }: PageHeroProps) {
  return (
    <section className="pattern-maroon relative overflow-hidden border-b border-champagne/25">
      {/* Soft champagne glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-9 sm:px-6 lg:pb-16 lg:pt-12">
        <Breadcrumbs trail={trail} tone="light" />

        <div className={cn("mt-6", image && "lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12")}>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-champagne">{eyebrow}</p>
            ) : null}
            <h1 className="mt-2.5 text-[1.6rem] leading-tight text-cream sm:text-3xl lg:text-[3rem]">
              {title}
            </h1>
            {hindiTitle ? (
              <p className="font-hindi mt-1.5 text-base text-champagne sm:text-lg">{hindiTitle}</p>
            ) : null}
            {description ? (
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/80">{description}</p>
            ) : null}
          </div>

          {image ? (
            <div className="mt-8 overflow-hidden rounded-2xl border border-champagne/40 shadow-lift lg:mt-0">
              <img
                src={image.fallback}
                alt={image.alt}
                width={1400}
                height={900}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          ) : null}
        </div>

        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}

/** Small maroon CTA band reused at the end of inner pages. */
export function CtaBand({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-20">
      <div className="pattern-maroon relative overflow-hidden rounded-3xl border border-champagne/30 px-6 py-11 text-center sm:px-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative">
          <h2 className="text-2xl leading-tight text-cream sm:text-4xl">{title}</h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne"
          />
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={primaryTo}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-3.5 text-sm font-semibold text-burgundy shadow-soft transition-all duration-300 hover:bg-cream hover:shadow-lift"
            >
              {primaryLabel}
            </a>
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/50 px-7 py-3.5 text-sm font-semibold text-champagne transition-colors duration-300 hover:bg-champagne/10"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
