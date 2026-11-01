import { PageHero } from "../components/PageHero";
import { BUSINESS } from "../data/business";
import { useSeo } from "../hooks/useSeo";

export default function Terms() {
  useSeo({
    title: "Terms & Conditions | Banarasi Dudh Dairy",
    description:
      "Terms and conditions for using the Banarasi Dudh Dairy website and placing sweet order enquiries with our Powai shop.",
    path: "/terms-and-conditions",
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms before using this website or placing an enquiry."
        image={{
          src: "/images/sweets/milk-sweets.jpg",
          fallback: "/images/sweets/milk-sweets.jpg",
          alt: "Milk simmering in a traditional brass pot, the base of Indian milk sweets",
        }}
        trail={[
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-and-conditions" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
          <div className="prose-bdd">
            <p className="text-sm text-ink-soft">Last updated: January 2026</p>

            <h2>1. About this website</h2>
            <p>
              This website is operated by {BUSINESS.name} ({BUSINESS.nameHindi}) and provides information about
              our traditional Indian sweets, dairy products and services. It is an informational website only.
            </p>

            <h2>2. No online ordering or payment</h2>
            <p>
              This website does not process online orders or accept online payments. Prices, weights, minimum
              quantities and availability are not listed here. All orders, quantities and charges are confirmed
              directly with the shop by phone or WhatsApp before preparation.
            </p>

            <h2>3. Product information</h2>
            <p>
              Photographs on this website are representative of the sweets we prepare. Sweets are handmade, so
              appearance may vary slightly from batch to batch. Availability of particular sweets changes
              through the week and during festival seasons — please confirm availability when you enquire.
            </p>

            <h2>4. Home delivery</h2>
            <p>
              Free home delivery is offered on orders above ₹1000 within our service area in Powai, Mumbai.
              Delivery availability, timing and any additional charges for specific locations are confirmed by
              the shop at the time of your order.
            </p>

            <h2>5. Enquiries and communication</h2>
            <p>
              When you submit an enquiry, we use the details you provide only to respond to that enquiry. By
              contacting us you agree that we may call or message you on the number you have shared to discuss
              your order.
            </p>

            <h2>6. Bulk and special orders</h2>
            <p>
              Bulk orders, festival packing and special orders are subject to advance notice, availability and
              confirmation by the shop. Cancellation or change terms for such orders are agreed at the time of
              ordering.
            </p>

            <h2>7. External links</h2>
            <p>
              This website links to WhatsApp, Google Maps and other third-party services. Those services are
              governed by their own terms and privacy policies, which we encourage you to read.
            </p>

            <h2>8. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Any changes will be published on this page.
            </p>

            <h2>9. Contact</h2>
            <p>
              Questions about these terms can be directed to the shop on{" "}
              {BUSINESS.contacts.map((c, i) => (
                <span key={c.phone}>
                  {i > 0 ? ", " : ""}
                  <a href={`tel:+91${c.phone}`} className="font-semibold text-maroon hover:underline">
                    {c.name} ({c.phone})
                  </a>
                </span>
              ))}
              , or visit us at {BUSINESS.addressLines.join(", ")}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
