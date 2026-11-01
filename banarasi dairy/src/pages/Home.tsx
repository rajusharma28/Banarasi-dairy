import { HeroBanner } from "../components/HeroBanner";
import { SectionHeading } from "../components/SectionHeading";
import { SweetCard } from "../components/SweetCard";
import { ServiceCard } from "../components/ServiceCard";
import { CtaBand } from "../components/PageHero";
import { SmartImage } from "../components/SmartImage";
import { Link } from "../router";
import { ArrowRightIcon, CheckIcon, MapPinIcon, PhoneIcon, TruckIcon, WhatsAppIcon } from "../components/Icons";
import { BUSINESS, DEFAULT_WA_MESSAGE, waLink, telLink } from "../data/business";
import { SERVICES, SWEETS, WHY_CHOOSE_US } from "../data/sweets";
import { POSTS } from "../data/posts";
import { useSeo } from "../hooks/useSeo";

export default function Home() {
  useSeo({
    title: "Banarasi Dudh Dairy | Traditional Indian Sweets Shop in Powai, Mumbai",
    description:
      "Banarasi Dudh Dairy (बनारसी दूधालय) in Powai, Mumbai offers fresh traditional Indian sweets, bulk orders, gift & festival packing and free home delivery on orders above ₹1000. Call 9930155672.",
    path: "/",
    keywords: [
      "sweets shop in Powai",
      "Indian sweets in Powai",
      "fresh sweets near IIT Main Gate",
      "sweet shop near Hiranandani Hospital",
      "sweets home delivery in Powai",
    ],
    image: "/images/banner.jpg",
  });

  return (
    <>
      {/* ---------- 1. Uploaded advertising banner ---------- */}
      <HeroBanner />

      {/* ---------- 2. Introduction ---------- */}
      <section className="pattern-cream relative">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
                Welcome to {BUSINESS.name}
              </p>
              <h1 className="mt-4 text-[1.75rem] leading-tight sm:text-4xl lg:text-[2.9rem]">
                Experience the Authentic Taste of Traditional Indian Sweets
              </h1>
              <span aria-hidden="true" className="mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne" />
              <p className="mt-6 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Discover delicious, fresh and traditional Indian sweets at Banarasi Dudh Dairy. We bring you a
                delightful selection of sweets, quality ingredients and convenient home delivery in Powai.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                From motichoor laddu and gulab jamun to kaju katli, rasgulla and peda, our sweets are prepared
                fresh in our shop opposite IIT Main Gate — ready for your family table, your celebrations and
                your festival gifting.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/sweets"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-7 py-4 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-burgundy hover:shadow-lift"
                >
                  Explore Our Sweets
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/30 px-7 py-4 text-sm font-semibold text-maroon transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-cream"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-5 border-t border-champagne pt-8 sm:grid-cols-3">
                <Stat value="Fresh Daily" label="Sweets prepared in our shop" />
                <Stat value="Wide Variety" label="Traditional Indian mithai" />
                <Stat value="Free Delivery" label="On orders above ₹1000" />
              </dl>
            </div>

            <div className="relative mb-16 sm:mb-0">
              <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                <SmartImage
                  src="/images/sweets/milk-sweets.jpg"
                  alt="Assorted traditional Indian milk sweets in a golden gift box at Banarasi Dudh Dairy"
                  aspect="aspect-[4/5]"
                  eager
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating detail card */}
              <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-champagne bg-white/95 p-5 shadow-card backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-xs">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  <MapPinIcon className="h-4 w-4" /> Visit our shop
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  Cinderella Building, Shop No. 1, Opposite IIT Main Gate, Near Hiranandani Hospital, Powai –
                  400076, Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. Sweets collection ---------- */}
      <section id="sweets" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Our Sweets Collection"
            title="Traditional Indian Sweets, Made Fresh"
            description="A selection of the sweets we prepare every day in our Powai shop. Enquire on WhatsApp for availability, packing options and order details."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SWEETS.map((sweet, i) => (
              <SweetCard key={sweet.slug} sweet={sweet} index={i} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/sweets"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/30 px-8 py-4 text-sm font-semibold text-maroon transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-cream"
            >
              View the full sweets collection
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 4. Our services ---------- */}
      <section className="pattern-maroon relative">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <SectionHeading
              align="left"
              eyebrow="Our Services"
              title="What We Offer at Banarasi Dudh Dairy"
              description="Fresh sweets, a wide variety of mithai, bulk orders, gift packing and free home delivery — everything you need for your celebrations."
              tone="light"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-champagne/40 shadow-lift">
                <img
                  src="/images/sweets/milk-sweets.jpg"
                  alt="A vibrant collection of traditional Indian sweets with almonds, pistachios and coconut"
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-champagne/40 shadow-lift">
                <img
                  src="/images/sweets/kaju-katli.jpg"
                  alt="Kaju katli slices arranged for gifting"
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. Why choose us ---------- */}
      <section className="pattern-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <SectionHeading
                align="left"
                eyebrow="Why Choose Us"
                title="Why Choose Banarasi Dudh Dairy?"
                description="A neighbourhood sweet shop built on traditional recipes, careful preparation and a simple promise — fresh, delicious sweets for every occasion."
              />

              <ul className="mt-10 space-y-5">
                {WHY_CHOOSE_US.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-maroon text-champagne">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg text-maroon">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 grid gap-5 lg:order-2">
              <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                <SmartImage
                  src="/images/about-shop.jpg"
                  alt="Display of traditional Indian sweets at Banarasi Dudh Dairy, Powai"
                  aspect="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                  <SmartImage
                    src="/images/sweets/kaju-katli.jpg"
                    alt="Kaju katli slices with silver foil"
                    aspect="aspect-square"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                  <SmartImage
                    src="/images/sweets/motichoor-laddu.jpg"
                    alt="Motichoor laddu in a traditional brass bowl"
                    aspect="aspect-square"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 6. Free home delivery ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-champagne bg-cream shadow-card lg:grid-cols-2">
            <div className="order-2 p-8 sm:p-12 lg:order-1 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-maroon">
                <TruckIcon className="h-4 w-4" />
                Home Delivery
              </span>
              <h2 className="mt-6 text-2xl leading-tight sm:text-4xl">
                Fresh Sweets Delivered to Your Doorstep
              </h2>
              <p className="mt-5 inline-block rounded-xl bg-maroon px-5 py-3 font-display text-base font-bold uppercase tracking-wide text-champagne sm:text-lg">
                {BUSINESS.freeDeliveryLabel}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                Order your favourite traditional Indian sweets from our Powai shop and have them delivered fresh
                to your home. Send us your sweet selection, quantity and delivery address on WhatsApp and our
                team will confirm the details with you.
              </p>
              <a
                href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-7 py-4 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-burgundy hover:shadow-lift"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Delivery Enquiry
              </a>
            </div>
            <div className="relative aspect-[3/2] w-full lg:order-2 lg:aspect-auto">
              <img
                src="/images/delivery.jpg"
                alt="Indian sweets gift bag with boxes of mithai ready for home delivery in Powai"
                width={1024}
                height={700}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 7. From the blog ---------- */}
      <section className="pattern-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="From Our Blog"
            title="Sweet Stories & Festival Guides"
            description="Simple guides to Indian sweets, festival ordering and gift packing — written to help you plan your celebrations."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-champagne bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-lift"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width={1200}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-cream px-3 py-1 font-semibold text-maroon">
                      {post.category}
                    </span>
                    <time dateTime={post.date} className="text-ink-soft">
                      {post.dateLabel}
                    </time>
                  </div>
                  <h3 className="mt-3 text-lg leading-snug text-maroon">
                    <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-burgundy">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-maroon transition-colors hover:text-burgundy"
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 8. Closing CTA ---------- */}
      <CtaBand
        title="Ready to Order Your Favourite Sweets?"
        description="Call our shop or send a WhatsApp enquiry with the sweets you need, the quantity and the date. We will confirm availability, packing and delivery details."
        primaryLabel={`Call ${BUSINESS.contacts[0].name}: ${BUSINESS.contacts[0].phone}`}
        primaryTo={telLink(BUSINESS.contacts[0].phone)}
        secondaryLabel="Enquire on WhatsApp"
        secondaryHref={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-base font-bold text-maroon">{value}</dt>
      <dd className="mt-1 text-xs leading-relaxed text-ink-soft">{label}</dd>
    </div>
  );
}
