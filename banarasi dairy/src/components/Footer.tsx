import { BUSINESS, NAV_ITEMS, telLink, waLink, DEFAULT_WA_MESSAGE } from "../data/business";
import { Link } from "../router";
import { LogoMark, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

const SERVICE_LINKS = [
  { label: "Fresh Sweets", to: "/sweets" },
  { label: "Bulk Orders", to: "/contact" },
  { label: "Special Orders", to: "/contact" },
  { label: "Gift Packaging", to: "/contact" },
  { label: "Home Delivery", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto bg-burgundy text-cream/85">
      {/* Champagne top hairline */}
      <div className="h-[3px] w-full bg-gradient-to-r from-gold via-champagne to-gold" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-cream">Banarasi Dudh Dairy</span>
                <span className="font-hindi text-sm text-champagne">{BUSINESS.nameHindi}</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/75">
              A traditional Indian sweets and dairy shop in Powai, Mumbai. We prepare fresh sweets daily and
              offer a wide selection of mithai, bulk orders, gift and festival packing, special order enquiries
              and free home delivery on orders above ₹1000.
            </p>
            <a
              href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-champagne/50 px-4 py-2.5 text-sm font-semibold text-champagne transition-colors duration-300 hover:bg-champagne hover:text-burgundy"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </div>

          {/* Column 2 — Quick links */}
          <nav aria-label="Quick links">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Services */}
          <nav aria-label="Our services">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — Contact */}
          <div>
            <FooterHeading>Contact Information</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {BUSINESS.contacts.map((c) => (
                <li key={c.phone} className="flex flex-wrap items-baseline gap-x-2">
                  <a
                    href={telLink(c.phone)}
                    className="group inline-flex items-center gap-2 font-semibold text-cream transition-colors hover:text-champagne"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 text-champagne" />
                    {c.name}: {c.phone}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 flex gap-2 text-sm leading-relaxed text-cream/75">
              <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-champagne" />
              <span>
                Address:
                <br />
                {BUSINESS.addressLines.join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-champagne/25">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-cream/70 sm:flex-row sm:px-6">
          <p>
            © {year} {BUSINESS.name} ({BUSINESS.nameHindi}). All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-champagne">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="transition-colors hover:text-champagne">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="transition-colors hover:text-champagne">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative pb-3 font-display text-lg font-semibold text-cream">
      {children}
      <span className="absolute bottom-0 left-0 h-[2px] w-10 rounded-full bg-gradient-to-r from-gold to-champagne" />
    </h3>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-cream/75 transition-colors duration-200 hover:text-champagne"
    >
      <span className="h-1 w-1 rounded-full bg-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      {children}
    </Link>
  );
}
