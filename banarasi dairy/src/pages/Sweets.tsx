import { PageHero, CtaBand } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { SweetCard } from "../components/SweetCard";
import { ServiceCard } from "../components/ServiceCard";
import { Link } from "../router";
import { ArrowRightIcon, WhatsAppIcon } from "../components/Icons";
import { BUSINESS, DEFAULT_WA_MESSAGE, telLink, waLink } from "../data/business";
import { SERVICES, SWEETS } from "../data/sweets";
import { useSeo } from "../hooks/useSeo";

export default function Sweets() {
  useSeo({
    title: "Our Sweets Collection | Traditional Indian Sweets in Powai | Banarasi Dudh Dairy",
    description:
      "Explore our collection of traditional Indian sweets — motichoor laddu, gulab jamun, kaju katli, rasgulla, peda and assorted milk sweets. Enquire on WhatsApp for availability and orders.",
    path: "/sweets",
    keywords: [
      "Indian sweets in Powai",
      "sweets shop in Powai",
      "motichoor laddu Powai",
      "kaju katli near IIT Main Gate",
      "fresh sweets near Hiranandani Hospital",
    ],
    image: "/images/sweets/milk-sweets.jpg",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Traditional Indian Sweets at Banarasi Dudh Dairy",
      itemListElement: SWEETS.map((sweet, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: sweet.name,
          description: sweet.description,
          image: `${BUSINESS.siteUrl}${sweet.image}`,
          category: "Traditional Indian Sweets",
        },
      })),
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Our Sweets"
        title="Our Sweets Collection"
        hindiTitle="हमारी मिठाई का संग्रह"
        description="Traditional Indian sweets prepared fresh in our Powai shop. Enquire on WhatsApp for availability, packing options, quantities and order details — we do not list prices online."
        trail={[
          { name: "Home", path: "/" },
          { name: "Sweets", path: "/sweets" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3.5 text-sm font-semibold text-burgundy transition-colors hover:bg-cream"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
          <a
            href={telLink(BUSINESS.contacts[0].phone)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/50 px-6 py-3.5 text-sm font-semibold text-champagne transition-colors hover:bg-champagne/10"
          >
            Call {BUSINESS.contacts[0].name}: {BUSINESS.contacts[0].phone}
          </a>
        </div>
      </PageHero>

      {/* Collection */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Freshly Prepared"
            title="Traditional Indian Sweets"
            description="Each sweet below is prepared in our shop using traditional recipes. Select a sweet and send us an enquiry on WhatsApp — our team will share the available options and order details."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SWEETS.map((sweet, i) => (
              <SweetCard key={sweet.slug} sweet={sweet} index={i} />
            ))}
          </div>

          <aside className="mt-14 rounded-2xl border border-champagne bg-cream p-6 sm:p-8">
            <h2 className="text-lg text-maroon">Looking for something specific?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
              Our shop prepares a wider range of traditional Indian sweets than the selection shown here, and
              availability changes through the week. If you are looking for a particular sweet, a custom
              selection, a specific quantity or special packing, please speak to our team directly — we will be
              happy to help.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-burgundy"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask about a special sweet
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/30 px-6 py-3.5 text-sm font-semibold text-maroon transition-colors hover:bg-maroon hover:text-cream"
              >
                Contact the shop
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Services recap */}
      <section className="pattern-maroon">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Ordering & Services"
            title="How We Can Help With Your Order"
            description="Bulk orders, festival packing and home delivery — all handled from our shop in Powai."
            tone="light"
          />

          <div className="mt-10 overflow-hidden rounded-2xl border border-champagne/30 shadow-lift">
            <picture>
              <img
                src="/images/about-shop.jpg"
                alt="Assorted traditional Indian sweets on display in a sweet shop"
                width={1400}
                height={900}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
              />
            </picture>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} tone="light" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Send Us Your Sweet List"
        description="Tell us which sweets you need, the quantity and the date. We will confirm availability, packing and delivery for your order."
        primaryLabel="Enquire on WhatsApp"
        primaryTo={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
        secondaryLabel="Call the shop"
        secondaryHref={telLink(BUSINESS.contacts[0].phone)}
      />
    </>
  );
}
