import { sweetWaMessage, waLink } from "../data/business";
import type { Sweet } from "../data/sweets";
import { WhatsAppIcon } from "./Icons";

/** Premium product card for the sweets collection. */
export function SweetCard({ sweet, index = 0 }: { sweet: Sweet; index?: number }) {
  const message = sweetWaMessage(sweet.name);
  const waHref = waLink("9930155672", message);

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-champagne bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-lift"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={sweet.image}
          alt={sweet.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        {/* Gold frame on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-champagne/60 transition-opacity duration-500 group-hover:ring-gold"
        />
        {sweet.nameHindi ? (
          <span className="absolute left-3 top-3 rounded-full bg-maroon/90 px-3 py-1 font-hindi text-[11px] font-medium text-champagne backdrop-blur-sm">
            {sweet.nameHindi}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{sweet.tagline}</p>
        <h3 className="mt-2 text-lg text-maroon">{sweet.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{sweet.description}</p>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-burgundy hover:shadow-lift"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
