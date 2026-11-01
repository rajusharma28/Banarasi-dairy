import { PageHero } from "../components/PageHero";
import { BUSINESS } from "../data/business";
import { useSeo } from "../hooks/useSeo";

export default function Privacy() {
  useSeo({
    title: "Privacy Policy | Banarasi Dudh Dairy",
    description:
      "Privacy policy for Banarasi Dudh Dairy — what information we collect through this website and how enquiry details are used.",
    path: "/privacy-policy",
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle information shared through this website."
        image={{
          src: "/images/gift-packing.jpg",
          fallback: "/images/gift-packing.jpg",
          alt: "Festival gift boxes of Indian sweets packed at Banarasi Dudh Dairy",
        }}
        trail={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
          <div className="prose-bdd">
            <p className="text-sm text-ink-soft">Last updated: January 2026</p>

            <h2>1. Who we are</h2>
            <p>
              This website belongs to {BUSINESS.name} ({BUSINESS.nameHindi}), a traditional Indian sweets and
              dairy shop located at {BUSINESS.addressLines.join(", ")}.
            </p>

            <h2>2. Information we collect</h2>
            <p>
              We do not ask you to create an account, and we do not collect payment information on this
              website. When you use the enquiry form, the details you enter — your name, phone number, enquiry
              type and message — are used only to prepare your WhatsApp enquiry.
            </p>
            <p>
              We do not sell, rent or trade your personal information. Enquiry details are shared with the shop
              team solely so they can respond to your request.
            </p>

            <h2>3. WhatsApp and phone calls</h2>
            <p>
              This website provides links that open WhatsApp chats and phone calls with our shop numbers. When
              you use those links, your message and phone number are handled by WhatsApp under their own
              privacy policy. We use them only to respond to your enquiry.
            </p>

            <h2>4. Cookies and analytics</h2>
            <p>
              This website is a static site and does not set advertising or tracking cookies of its own. If
              analytics tools are added in future, this policy will be updated to describe them.
            </p>

            <h2>5. Embedded maps</h2>
            <p>
              The contact page embeds a Google Map to help you find our shop. Loading that map may cause Google
              to receive your IP address and usage data in line with Google's privacy policy.
            </p>

            <h2>6. Your choices</h2>
            <p>
              You can contact the shop at any time using the phone numbers listed on this website if you would
              like us to delete enquiry details you have shared with us.
            </p>

            <h2>7. Contact</h2>
            <p>
              For any privacy-related question, please call or WhatsApp the shop on{" "}
              {BUSINESS.contacts.map((c, i) => (
                <span key={c.phone}>
                  {i > 0 ? ", " : ""}
                  <a href={`tel:+91${c.phone}`} className="font-semibold text-maroon hover:underline">
                    {c.name} ({c.phone})
                  </a>
                </span>
              ))}
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
