import { ServiceIcon } from "./Icons";
import type { Service } from "../data/sweets";

/** Elegant service card with a gold emblem icon. */
export function ServiceCard({ service, tone = "dark" }: { service: Service; tone?: "dark" | "light" }) {
  const light = tone === "light";

  return (
    <article
      className={
        light
          ? "group h-full rounded-2xl border border-champagne bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-lift sm:p-7"
          : "group h-full rounded-2xl border border-champagne/30 bg-burgundy/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:bg-burgundy sm:p-7"
      }
    >
      <span
        className={
          light
            ? "inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-champagne bg-cream text-maroon transition-colors duration-500 group-hover:border-gold group-hover:bg-maroon group-hover:text-champagne"
            : "inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-champagne/40 bg-maroon/70 text-champagne transition-colors duration-500 group-hover:border-gold group-hover:bg-champagne group-hover:text-maroon"
        }
        aria-hidden="true"
      >
        <ServiceIcon name={service.icon} />
      </span>

      <h3 className={`mt-5 text-lg ${light ? "text-maroon" : "text-cream"}`}>{service.title}</h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          light ? "text-ink-soft" : "text-cream/75"
        }`}
      >
        {service.description}
      </p>
    </article>
  );
}
