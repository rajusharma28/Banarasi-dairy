import { useEffect, useState } from "react";
import { BUSINESS, NAV_ITEMS, telLink, waLink, DEFAULT_WA_MESSAGE } from "../data/business";
import { Link, useIsActive, useRouter } from "../router";
import { CloseIcon, LogoMark, MenuIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { cn } from "../utils/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { path } = useRouter();

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [path]);

  // Condense the header once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-burgundy text-champagne lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[13px] tracking-wide">
          <p className="font-hindi text-champagne/95">
            {BUSINESS.freeDeliveryLabel.replace("₹1000", "₹1000")} · {BUSINESS.addressShort}
          </p>
          <div className="flex items-center gap-5">
            {BUSINESS.contacts.map((c) => (
              <a
                key={c.phone}
                href={telLink(c.phone)}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                <span className="font-medium text-white/90">{c.name}</span>
                <span className="text-champagne">{c.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={cn(
          "border-b border-champagne/60 bg-cream/95 backdrop-blur-md transition-all duration-300",
          scrolled ? "shadow-soft" : "shadow-none",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
          {/* Brand */}
          <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label={`${BUSINESS.name} home`}>
            <LogoMark className="h-10 w-10 shrink-0 transition-transform duration-500 group-hover:scale-105 sm:h-11 sm:w-11 lg:h-12 lg:w-12" />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="whitespace-nowrap font-display text-[15px] font-bold tracking-tight text-maroon sm:text-lg lg:text-[22px]">
                Banarasi Dudh Dairy
              </span>
              <span className="font-hindi text-[13px] font-medium text-gold lg:text-sm">
                {BUSINESS.nameHindi}
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} label={item.label} />
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-maroon/25 px-4 py-2.5 text-sm font-semibold text-maroon transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-cream"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-burgundy hover:shadow-lift"
            >
              <PhoneIcon className="h-4 w-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 bg-white/70 text-maroon transition-colors hover:bg-maroon hover:text-cream lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-dvh overflow-y-auto bg-cream pt-[86px] transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-lg px-5 pb-10">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 bg-white/80 text-maroon"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <p className="font-hindi text-sm text-gold">{BUSINESS.nameHindi}</p>

          <ul className="mt-2 divide-y divide-champagne/70 border-y border-champagne/70">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} label={item.label} mobile onNavigate={() => setOpen(false)} />
              </li>
            ))}
          </ul>

          <div className="mt-7 space-y-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3.5 text-sm font-semibold text-cream"
            >
              <PhoneIcon className="h-4 w-4" />
              Contact Us
            </Link>
            <a
              href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-maroon/25 bg-white px-5 py-3.5 text-sm font-semibold text-maroon"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Enquiry
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-champagne bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Call the shop</p>
            <ul className="mt-3 space-y-2">
              {BUSINESS.contacts.map((c) => (
                <li key={c.phone}>
                  <a href={telLink(c.phone)} className="flex items-center justify-between gap-3 py-1">
                    <span className="text-sm font-medium text-ink">{c.name}</span>
                    <span className="text-sm font-semibold text-maroon">{c.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">{BUSINESS.addressLines.join(", ")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  to,
  label,
  mobile = false,
  onNavigate,
}: {
  to: string;
  label: string;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const active = useIsActive(to);

  if (mobile) {
    return (
      <Link
        to={to}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-center justify-between py-4 font-display text-xl transition-colors",
          active ? "text-maroon" : "text-ink",
        )}
      >
        {label}
        <span className={cn("h-2 w-2 rounded-full", active ? "bg-gold" : "bg-transparent")} />
      </Link>
    );
  }

  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
        className={cn(
          "group relative px-4 py-2 text-[15px] font-medium transition-colors duration-300",
          active ? "text-maroon" : "text-ink/80 hover:text-maroon",
        )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-gradient-to-r from-gold to-champagne transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
