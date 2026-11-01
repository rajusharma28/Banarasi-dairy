/**
 * Sweets collection data.
 * No prices, weights or availability claims are included —
 * the shop shares those on enquiry, as instructed.
 */

export type Sweet = {
  slug: string;
  name: string;
  nameHindi?: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const SWEETS: Sweet[] = [
  {
    slug: "motichoor-laddu",
    name: "Motichoor Laddu",
    nameHindi: "मोतीचूर लड्डू",
    tagline: "The Classic Celebration Laddu",
    description:
      "Fine boondi pearls bound into soft, melt-in-the-mouth laddus with ghee and cardamom — the sweet that completes every celebration and auspicious occasion.",
    image: "/images/sweets/motichoor-laddu.jpg",
    imageAlt: "Motichoor laddu arranged in a traditional brass bowl at Banarasi Dudh Dairy",
  },
  {
    slug: "gulab-jamun",
    name: "Gulab Jamun",
    nameHindi: "गुलाब जामुन",
    tagline: "Warm, Syrupy & Timeless",
    description:
      "Golden dumplings soaked in fragrant rose and cardamom syrup, served warm — an ever-popular favourite at family functions and festival tables.",
    image: "/images/sweets/gulab-jamun.jpg",
    imageAlt: "Gulab jamun sweets soaked in sugar syrup in a white bowl",
  },
  {
    slug: "kaju-katli",
    name: "Kaju Katli",
    nameHindi: "काजू कतली",
    tagline: "Royal Cashew Diamonds",
    description:
      "Delicate diamond-shaped cashew fudge with a smooth, rich finish and a silver varq crown — the premium choice for gifting and special occasions.",
    image: "/images/sweets/kaju-katli.jpg",
    imageAlt: "Kaju katli diamond shaped cashew sweet slices with silver foil",
  },
  {
    slug: "rasgulla",
    name: "Rasgulla",
    nameHindi: "रसगुल्ला",
    tagline: "Soft, Spongy & Fresh",
    description:
      "Light and spongy cottage cheese balls resting in clear sugar syrup — fresh, delicate and loved by every generation of the family.",
    image: "/images/sweets/rasgulla.jpg",
    imageAlt: "Rasgulla spongy white sweet balls in sugar syrup in a silver bowl",
  },
  {
    slug: "peda",
    name: "Peda",
    nameHindi: "पेड़ा",
    tagline: "Traditional Milk Peda",
    description:
      "Slow-cooked khoya peda with a grainy, comforting texture and warm notes of cardamom and pistachio — a timeless milk sweet made the traditional way.",
    image: "/images/sweets/peda.jpg",
    imageAlt: "Traditional milk peda sweet discs garnished with pistachio",
  },
  {
    slug: "traditional-milk-sweets",
    name: "Traditional Indian Milk Sweets",
    nameHindi: "पारंपरिक दूध की मिठाई",
    tagline: "A Box Full of Mithai Favourites",
    description:
      "An assorted selection of our traditional milk-based mithai, prepared fresh in the shop — perfect for family gatherings, functions and festive gifting.",
    image: "/images/sweets/milk-sweets.jpg",
    imageAlt: "Assorted traditional Indian milk sweets arranged in a golden gift box",
  },
];

/** Shop services — used on the home page services section. */
export type Service = {
  title: string;
  description: string;
  icon: "sweets" | "variety" | "bulk" | "gift" | "delivery" | "special";
};

export const SERVICES: Service[] = [
  {
    title: "Fresh Sweets",
    description:
      "Fresh and delicious traditional Indian sweets prepared daily in our shop, ready for you to take home or have delivered.",
    icon: "sweets",
  },
  {
    title: "All Types of Sweets Available",
    description:
      "A wide variety of traditional Indian sweets for customers — from everyday mithai to festive favourites and celebration boxes.",
    icon: "variety",
  },
  {
    title: "Bulk Orders",
    description:
      "Enquiries welcome for family functions, celebrations and special occasions where larger quantities of sweets are needed.",
    icon: "bulk",
  },
  {
    title: "Gift & Festival Packing",
    description:
      "Beautiful packaging options and orders for gifting and celebrations — ideal for festivals, weddings and corporate gifting.",
    icon: "gift",
  },
  {
    title: "Free Home Delivery",
    description:
      "Free home delivery on orders above ₹1000, so your favourite sweets reach your doorstep fresh in Powai.",
    icon: "delivery",
  },
  {
    title: "Special Orders",
    description:
      "Customers can contact the shop directly for different sweet orders, custom selections and packaging enquiries.",
    icon: "special",
  },
];

/** Why choose us points. */
export const WHY_CHOOSE_US = [
  {
    title: "Traditional Indian Sweets",
    description:
      "Sweets prepared following traditional Indian recipes, so every bite carries the authentic taste of classic mithai.",
  },
  {
    title: "Wide Variety of Sweets",
    description:
      "A broad selection of sweets under one roof, from laddus and milk sweets to syrup-soaked favourites and cashew delicacies.",
  },
  {
    title: "Fresh and Delicious Offerings",
    description:
      "Our sweets are made fresh in the shop, with a focus on taste, quality ingredients and careful preparation.",
  },
  {
    title: "Special Order Enquiries",
    description:
      "Need something specific? Speak to our team for special sweet orders, selections and packaging requirements.",
  },
  {
    title: "Gift and Bulk Order Packing",
    description:
      "Attractive gift and bulk order packing for festivals, family functions, celebrations and corporate gifting.",
  },
  {
    title: "Convenient Home Delivery",
    description:
      "Free home delivery on orders above ₹1000 across Powai — a simple way to enjoy fresh sweets without stepping out.",
  },
];
