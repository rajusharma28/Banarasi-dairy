import { PageHero, CtaBand } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { SmartImage } from "../components/SmartImage";
import { Link } from "../router";
import { ArrowRightIcon, CheckIcon, MapPinIcon, PhoneIcon, TruckIcon, WhatsAppIcon } from "../components/Icons";
import { BUSINESS, DEFAULT_WA_MESSAGE, telLink, waLink } from "../data/business";
import { WHY_CHOOSE_US } from "../data/sweets";
import { useSeo } from "../hooks/useSeo";

export default function About() {
  useSeo({
    title: "About Banarasi Dudh Dairy | Traditional Sweets & Dairy Shop in Powai, Mumbai",
    description:
      "Learn about Banarasi Dudh Dairy (बनारसी दूधालय) — a traditional Indian sweets and dairy shop in Powai, Mumbai, offering fresh sweets, bulk orders, gift packing and free home delivery above ₹1000.",
    path: "/about",
    keywords: [
      "about Banarasi Dudh Dairy",
      "traditional sweets shop Powai",
      "Indian sweets near IIT Main Gate",
      "mithai shop near Hiranandani Hospital",
    ],
    image: "/images/about-shop.jpg",
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Banarasi Dudh Dairy"
        hindiTitle="बनारसी दूधालय के बारे में"
        description="A traditional Indian sweets and dairy shop in Powai, Mumbai — preparing fresh mithai for family tables, celebrations, festivals and gifting."
        image={{
          src: "/images/about-shop.jpg",
          fallback: "/images/about-shop.jpg",
          alt: "Traditional Indian sweets displayed at Banarasi Dudh Dairy in Powai, Mumbai",
        }}
        trail={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Our Story</p>
              <h2 className="mt-3 text-2xl leading-tight sm:text-4xl">
                Traditional Indian Sweets, Prepared With Care
              </h2>
              <span aria-hidden="true" className="mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne" />

              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink-soft">
                <p>
                  Banarasi Dudh Dairy (बनारसी दूधालय) is a traditional Indian sweets and dairy shop based in
                  Powai, Mumbai. Our name reflects what we do best — preparing milk-based Indian sweets and
                  mithai the traditional way, for the families and celebrations of our neighbourhood.
                </p>
                <p>
                  We believe a good sweet starts with good milk. That is why our sweets are prepared fresh in
                  our own shop rather than sourced from elsewhere, using traditional recipes and quality
                  ingredients. From motichoor laddu, gulab jamun and rasgulla to kaju katli, peda and assorted
                  milk sweets, every item is made with the same care we would give our own family.
                </p>
                <p>
                  Over the years our customers have come to us for everyday mithai as well as for their biggest
                  occasions — family functions, weddings, festivals and corporate gifting. Whatever the
                  occasion, our team helps you choose the right sweets, the right quantity and the right
                  packing.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/sweets"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-7 py-4 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-burgundy hover:shadow-lift"
                >
                  Explore Our Sweets
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={telLink(BUSINESS.contacts[0].phone)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/30 px-7 py-4 text-sm font-semibold text-maroon transition-all duration-300 hover:bg-maroon hover:text-cream"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call {BUSINESS.contacts[0].name}
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                <SmartImage
                  src="/images/about-shop.jpg"
                  alt="Traditional Indian sweets displayed at Banarasi Dudh Dairy shop in Powai, Mumbai"
                  aspect="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                  <SmartImage
                    src="/images/sweets/gulab-jamun.jpg"
                    alt="Gulab jamun prepared fresh at the shop"
                    aspect="aspect-square"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                  <SmartImage
                    src="/images/sweets/rasgulla.jpg"
                    alt="Fresh rasgulla in sugar syrup"
                    aspect="aspect-square"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="pattern-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="What We Do"
            title="Sweets, Packing and Delivery Services"
            description="Everything we offer at our Powai shop — from fresh daily sweets to festival packing and home delivery."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-champagne shadow-card">
              <img
                  src="/images/sweets/motichoor-laddu.jpg"
                  alt="Sweets being freshly prepared at the shop"
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover"
                />
            </div>
            <div className="overflow-hidden rounded-2xl border border-champagne shadow-card">
              <img
                  src="/images/sweets/milk-sweets.jpg"
                  alt="Milk simmering in a traditional pot, the base of our milk sweets"
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover"
                />
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<TruckIcon className="h-7 w-7" />}
              title="A Wide Selection of Sweets"
              text="A broad variety of traditional Indian sweets prepared fresh in the shop — laddus, milk sweets, syrup sweets and cashew delicacies for every taste and occasion."
            />
            <FeatureCard
              icon={<WhatsAppIcon className="h-7 w-7" />}
              title="Order & Packaging Services"
              text="Customers can place special sweet orders and choose gift or festival packing. Bulk order enquiries are welcome for family functions and celebrations."
            />
            <FeatureCard
              icon={<MapPinIcon className="h-7 w-7" />}
              title="Convenient Home Delivery"
              text="Free home delivery on orders above ₹1000 within Powai, so your favourite sweets arrive fresh at your doorstep without a trip to the shop."
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Promise"
                title="Why Customers Choose Us"
                description="The simple things that matter when you buy sweets from a neighbourhood shop."
              />
              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {WHY_CHOOSE_US.map((point) => (
                  <li key={point.title} className="rounded-2xl border border-champagne bg-cream p-5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-maroon text-champagne">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 text-base text-maroon">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-6">
              <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
                <SmartImage
                  src="/images/gift-packing.jpg"
                  alt="Festival gift boxes of Indian sweets packed at Banarasi Dudh Dairy"
                  aspect="aspect-[4/5]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop location */}
      <section className="pattern-maroon">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne">Visit Us</p>
              <h2 className="mt-3 text-3xl leading-tight text-cream sm:text-4xl">
                Find Us in Powai, Mumbai
              </h2>
              <span aria-hidden="true" className="mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne" />
              <p className="mt-6 text-[15px] leading-relaxed text-cream/80">
                Our shop is easy to find, right opposite the IIT Main Gate and close to Hiranandani Hospital.
                Walk in to choose from the day's fresh sweets, or call ahead and we will have your order ready.
              </p>

              <address className="mt-7 space-y-1 text-[15px] not-italic leading-relaxed text-champagne">
                <strong className="block font-display text-lg text-cream">{BUSINESS.name}</strong>
                {BUSINESS.addressLines.map((line) => (
                  <span key={line} className="block text-cream/85">
                    {line}
                  </span>
                ))}
              </address>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={telLink(BUSINESS.contacts[0].phone)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-3.5 text-sm font-semibold text-burgundy transition-colors hover:bg-cream"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call the shop
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Cinderella%20Building%2C%20Shop%20No.%201%2C%20Opposite%20IIT%20Main%20Gate%2C%20Near%20Hiranandani%20Hospital%2C%20Powai%20%E2%80%93%20400076%2C%20Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/50 px-7 py-3.5 text-sm font-semibold text-champagne transition-colors hover:bg-champagne/10"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-champagne/40 shadow-lift">
              <SmartImage
                src="/images/sweets/peda.jpg"
                alt="Traditional milk peda prepared at Banarasi Dudh Dairy"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let Us Sweeten Your Next Celebration"
        description="Speak to our team about your sweet selection, quantities, gift packing and delivery. We are happy to help you plan the perfect order."
        primaryLabel={`Call ${BUSINESS.contacts[0].name}: ${BUSINESS.contacts[0].phone}`}
        primaryTo={telLink(BUSINESS.contacts[0].phone)}
        secondaryLabel="Enquire on WhatsApp"
        secondaryHref={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
      />
    </>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="group h-full rounded-2xl border border-champagne bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-lift">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-champagne bg-cream text-maroon transition-colors duration-500 group-hover:border-gold group-hover:bg-maroon group-hover:text-champagne">
        {icon}
      </span>
      <h3 className="mt-5 text-lg text-maroon">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
    </article>
  );
}
