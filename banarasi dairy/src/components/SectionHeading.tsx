import type { ReactNode } from "react";
import { cn } from "../utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "maroon" | "light";
  className?: string;
};

/** Elegant eyebrow + serif heading + gold rule + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "maroon",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.24em]",
            isLight ? "text-champagne" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-2xl leading-tight sm:text-3xl lg:text-[2.6rem]",
          isLight ? "text-cream" : "text-maroon",
        )}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={cn(
          "mt-5 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne",
          align === "center" && "mx-auto",
        )}
      />
      {description ? (
        <p
          className={cn(
            "mt-5 text-[15px] leading-relaxed sm:text-base",
            isLight ? "text-cream/80" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
