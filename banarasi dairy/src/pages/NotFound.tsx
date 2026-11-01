import { Link } from "../router";
import { ArrowRightIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";
import { BUSINESS, DEFAULT_WA_MESSAGE, telLink, waLink } from "../data/business";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "Page Not Found | Banarasi Dudh Dairy",
    description:
      "The page you are looking for could not be found. Explore our traditional Indian sweets or contact our Powai shop.",
    path: "/404",
  });

  return (
    <section className="pattern-maroon relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-6 lg:py-32">
        <p className="font-display text-6xl font-bold text-champagne sm:text-7xl">404</p>
        <h1 className="mt-4 text-3xl text-cream sm:text-4xl">This Page Could Not Be Found</h1>
        <span aria-hidden="true" className="mx-auto mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne" />
        <p className="mt-6 text-[15px] leading-relaxed text-cream/80">
          The page you are looking for may have moved or no longer exists. Let us take you back to our
          traditional Indian sweets.
        </p>

        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-2xl border border-champagne/40 shadow-lift">
          <img
              src="/images/sweets/motichoor-laddu.jpg"
              alt="Motichoor laddu prepared at Banarasi Dudh Dairy"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, 448px"
              className="aspect-[4/3] w-full object-cover"
            />
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-3.5 text-sm font-semibold text-burgundy transition-colors hover:bg-cream"
          >
            Back to Home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/sweets"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/50 px-7 py-3.5 text-sm font-semibold text-champagne transition-colors hover:bg-champagne/10"
          >
            Explore Our Sweets
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-cream/80 sm:flex-row">
          <a href={telLink(BUSINESS.contacts[0].phone)} className="inline-flex items-center gap-2 hover:text-champagne">
            <PhoneIcon className="h-4 w-4" />
            {BUSINESS.contacts[0].phone}
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-champagne"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" />
            Powai, Mumbai
          </span>
        </div>
      </div>
    </section>
  );
}
