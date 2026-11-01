/**
 * ============================================================
 * BANARASI DUDH DAIRY — SINGLE SOURCE OF TRUTH
 * Every business detail used anywhere on the site lives here.
 * Only verified details are stored. No invented prices,
 * awards, certifications, emails or opening hours.
 * ============================================================
 */

export const BUSINESS = {
  name: "Banarasi Dudh Dairy",
  nameHindi: "बनारसी दूधालय",
  tagline: "Traditional Indian Sweets & Dairy",
  /** Change this to the live domain when it is published. */
  siteUrl: "https://www.banarasidudhdairy.in",

  addressLines: [
    "Cinderella Building, Shop No. 1",
    "Opposite IIT Main Gate",
    "Near Hiranandani Hospital",
    "Powai – 400076, Mumbai",
  ],
  addressShort: "Powai, Mumbai – 400076",
  addressLocality: "Powai",
  addressRegion: "Mumbai",
  postalCode: "400076",

  /** People who take sweet & order enquiries at the shop. */
  contacts: [
    { name: "Ramesh", phone: "9930155672", role: "Orders & Enquiries" },
    { name: "Ranjeet", phone: "9004640401", role: "Orders & Enquiries" },
    { name: "Harsh", phone: "7977828262", role: "Orders & Enquiries" },
  ],

  /** Verified offer shown across the site. */
  freeDeliveryThreshold: 1000,
  freeDeliveryLabel: "FREE HOME DELIVERY ON ORDERS ABOVE ₹1000",

  /** Google Maps destinations. */
  mapsQuery:
    "Cinderella Building, Shop No. 1, Opposite IIT Main Gate, Near Hiranandani Hospital, Powai – 400076, Mumbai",
  mapsEmbedQuery:
    "Cinderella Building, Opposite IIT Main Gate, Near Hiranandani Hospital, Powai, Mumbai 400076",
} as const;

export const COUNTRY_CODE = "91";

/** Pre-filled WhatsApp message used across the site. */
export const DEFAULT_WA_MESSAGE =
  "Hello Banarasi Dudh Dairy, I would like to enquire about your sweets and available orders.";

/** Build a wa.me deep link for a given shop number (with India country code). */
export function waLink(phone: string, message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${COUNTRY_CODE}${phone}?text=${encodeURIComponent(message)}`;
}

/** Enquiry message for a specific sweet. */
export function sweetWaMessage(sweet: string): string {
  return `Hello Banarasi Dudh Dairy, I would like to enquire about ${sweet}. Please share the available options and order details.`;
}

/** tel: link for click-to-call. */
export function telLink(phone: string): string {
  return `tel:+${COUNTRY_CODE}${phone}`;
}

/** Google Maps links. */
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}`;

export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapsEmbedQuery,
)}&output=embed`;

/** Full address as a single line. */
export const addressFull = BUSINESS.addressLines.join(", ");

/** Primary navigation — order matters. */
export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Sweets", to: "/sweets" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;
