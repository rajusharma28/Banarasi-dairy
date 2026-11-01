import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { EnquiryForm } from "../components/EnquiryForm";
import { Link } from "../router";
import { ArrowRightIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";
import {
  BUSINESS,
  DEFAULT_WA_MESSAGE,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  mapsPlaceUrl,
  telLink,
  waLink,
} from "../data/business";
import { useSeo } from "../hooks/useSeo";

export default function Contact() {
  useSeo({
    title: "Contact Banarasi Dudh Dairy | Sweets Shop in Powai, Mumbai",
    description:
      "Get in touch with Banarasi Dudh Dairy, Powai. Call Ramesh 9930155672, Ranjeet 9004640401 or Harsh 7977828262. Shop address: Cinderella Building, Shop No. 1, Opposite IIT Main Gate, Near Hiranandani Hospital, Powai – 400076, Mumbai.",
    path: "/contact",
    keywords: [
      "sweets shop in Powai",
      "sweet shop near Hiranandani Hospital",
      "fresh sweets near IIT Main Gate",
      "sweets home delivery in Powai",
      "Banarasi Dudh Dairy contact",
    ],
    image: "/images/about-shop.jpg",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Banarasi Dudh Dairy",
      url: `${BUSINESS.siteUrl}/contact`,
      about: { "@type": "LocalBusiness", name: BUSINESS.name, alternateName: BUSINESS.nameHindi },
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch With Us"
        hindiTitle="हमसे संपर्क करें"
        description="Call the shop, send a WhatsApp enquiry or visit us in Powai. Our team will help you with sweet selection, quantities, packing and delivery."
        image={{
          src: "/images/about-shop.jpg",
          fallback: "/images/about-shop.jpg",
          alt: "Traditional Indian sweets on display at a sweet shop in Powai",
        }}
        trail={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      {/* ---------- Contact details ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Contact Details"
            title="Speak to Our Team Directly"
            description="Reach any of our team members on WhatsApp or by phone for sweets, orders and enquiries."
          />

          {/* People */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {BUSINESS.contacts.map((person) => (
              <article
                key={person.phone}
                className="group flex h-full flex-col rounded-2xl border border-champagne bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-lift"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-champagne bg-white font-display text-xl font-bold text-maroon transition-colors duration-500 group-hover:border-gold group-hover:bg-maroon group-hover:text-champagne">
                  {person.name.charAt(0)}
                </span>
                <h3 className="mt-5 text-xl text-maroon">{person.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{person.role}</p>

                <a
                  href={telLink(person.phone)}
                  className="mt-5 inline-flex items-center gap-2 text-lg font-semibold text-ink transition-colors hover:text-maroon"
                >
                  <PhoneIcon className="h-5 w-5 text-gold" />
                  {person.phone}
                </a>

                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href={telLink(person.phone)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-burgundy"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call {person.name}
                  </a>
                  <a
                    href={waLink(person.phone, DEFAULT_WA_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/25 bg-white px-5 py-3 text-sm font-semibold text-maroon transition-colors hover:bg-maroon hover:text-cream"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp {person.name}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Shop address + map */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-champagne bg-cream shadow-card">
              <img
                  src="/images/about-shop.jpg"
                  alt="Traditional Indian sweets prepared fresh at Banarasi Dudh Dairy, Powai"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              <div className="p-7 sm:p-9">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-maroon text-champagne">
                  <MapPinIcon className="h-6 w-6" />
                </span>
              <h2 className="mt-5 text-xl text-maroon">{BUSINESS.name}</h2>
              <p className="font-hindi mt-1 text-base text-gold">{BUSINESS.nameHindi}</p>

              <address className="mt-5 space-y-1 text-[15px] not-italic leading-relaxed text-ink">
                {BUSINESS.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-burgundy"
                >
                  <MapPinIcon className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href={mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/25 px-6 py-3.5 text-sm font-semibold text-maroon transition-colors hover:bg-maroon hover:text-cream"
                >
                  Open in Google Maps
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="min-h-[340px] overflow-hidden rounded-2xl border border-champagne shadow-card sm:min-h-[420px]">
              <iframe
                title="Banarasi Dudh Dairy location on Google Maps — Cinderella Building, Opposite IIT Main Gate, Powai, Mumbai"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full border-0 sm:h-[420px]"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Enquiry form ---------- */}
      <section className="pattern-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Customer Enquiry"
                title="Send Us Your Order Enquiry"
                description="Tell us which sweets you need, the quantity and the date. We will get back to you with availability, packing and delivery details."
              />

              <ul className="mt-9 space-y-4 text-sm text-ink-soft">
                {[
                  "Bulk orders for family functions and celebrations",
                  "Gift and festival packing enquiries",
                  "Special sweet orders and custom selections",
                  "Home delivery enquiries within Powai",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 rounded-2xl border border-champagne bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Prefer to message us first?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Send a WhatsApp enquiry and our team will reply with the available options for your order.
                </p>
                <a
                  href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-burgundy"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ---------- Quick links strip ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { to: "/sweets", label: "Browse our sweets", desc: "See the collection we prepare daily." },
              { to: "/about", label: "About our shop", desc: "Our story and what we offer." },
              { to: "/blog", label: "Read our blog", desc: "Festival and gifting guides." },
            ].map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-champagne bg-cream p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-lift"
              >
                <span>
                  <span className="block font-display text-lg font-semibold text-maroon">{card.label}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{card.desc}</span>
                </span>
                <ArrowRightIcon className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
