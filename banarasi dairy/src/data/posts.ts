/**
 * Blog data — editorial content for Banarasi Dudh Dairy.
 * Categories: Indian Sweets · Traditional Sweets · Festival Special
 *             Sweet Gift Ideas · Dairy & Food
 * No fabricated authors, credentials or reviews.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  category: "Indian Sweets" | "Traditional Sweets" | "Festival Special" | "Sweet Gift Ideas" | "Dairy & Food";
  excerpt: string;
  /** ISO date — used for the machine-readable datePublished. */
  date: string;
  dateLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  content: Block[];
};

export const CATEGORIES = [
  "Indian Sweets",
  "Traditional Sweets",
  "Festival Special",
  "Sweet Gift Ideas",
  "Dairy & Food",
] as const;

export const POSTS: Post[] = [
  {
    slug: "top-10-traditional-indian-sweets",
    title: "Top 10 Traditional Indian Sweets You Should Try",
    category: "Traditional Sweets",
    excerpt:
      "From motichoor laddu to kaju katli, here are ten traditional Indian sweets that every mithai lover should try at least once — and where to find them fresh in Powai.",
    date: "2026-01-12",
    dateLabel: "12 January 2026",
    readTime: "6 min read",
    image: "/images/sweets/milk-sweets.jpg",
    imageAlt: "Assorted traditional Indian sweets on a plate",
    seoTitle: "Top 10 Traditional Indian Sweets You Should Try | Banarasi Dudh Dairy",
    seoDescription:
      "Discover the top 10 traditional Indian sweets every mithai lover should try, from motichoor laddu and gulab jamun to kaju katli, rasgulla and peda.",
    keywords: [
      "traditional Indian sweets",
      "types of Indian mithai",
      "best Indian sweets",
      "sweets shop in Powai",
    ],
    content: [
      {
        type: "p",
        text: "Indian sweets are far more than a dessert course. They mark the beginning of something new, they are offered before exams and interviews, they travel to relatives during festivals, and they sit at the centre of every family celebration. The variety is enormous, and if you are new to mithai — or simply want to explore beyond your usual order — this list is a good place to start.",
      },
      {
        type: "h2",
        text: "1. Motichoor Laddu",
      },
      {
        type: "p",
        text: "Made from tiny boondi pearls pressed into round laddus with ghee and cardamom, motichoor laddu is the sweet most associated with celebration in North India. A good laddu should feel soft rather than greasy, with the boondi strands still visible when you break one open.",
      },
      {
        type: "h2",
        text: "2. Gulab Jamun",
      },
      {
        type: "p",
        text: "Khoya dumplings fried until golden and soaked in rose-scented sugar syrup. Served warm, gulab jamun is the sweet that disappears first at any function. The syrup should feel light and fragrant, never heavy or overly sticky.",
      },
      {
        type: "h2",
        text: "3. Kaju Katli",
      },
      {
        type: "p",
        text: "Cashew paste cooked into a smooth, diamond-shaped fudge and finished with edible silver foil. Kaju katli is the classic choice for gifting because it looks elegant, travels well and suits almost every occasion.",
      },
      {
        type: "h2",
        text: "4. Rasgulla",
      },
      {
        type: "p",
        text: "Spongy white chenna balls cooked in clear sugar syrup. Rasgulla is light and refreshing, which makes it a popular choice when a meal has already been rich. Freshness matters more than anything else with this sweet.",
      },
      {
        type: "h2",
        text: "5. Peda",
      },
      {
        type: "p",
        text: "Slow-cooked khoya flavoured with cardamom and shaped into discs. Peda has a grainy, comforting texture and is one of the oldest milk sweets in the country. Regional versions vary from the creamy to the firm, but all share that warm milk-forward taste.",
      },
      {
        type: "h2",
        text: "6. Milk Cake / Kalakand",
      },
      {
        type: "p",
        text: "A grainy milk sweet made by reducing milk and sugar until it sets. Kalakand is slightly chewy, deeply milky and usually cut into squares. It is a favourite for those who prefer sweets that are not too sweet.",
      },
      {
        type: "h2",
        text: "7. Soan Papdi",
      },
      {
        type: "p",
        text: "Flaky, thread-like layers that dissolve on the tongue. Soan papdi is a festival staple, especially during Diwali, and is loved by children for its light texture.",
      },
      {
        type: "h2",
        text: "8. Barfi",
      },
      {
        type: "p",
        text: "A broad family of sweets made from milk, coconut, nuts or gram flour. Kaju barfi, pista barfi and besan barfi are all worth trying — the base ingredient completely changes the character of the sweet.",
      },
      {
        type: "h2",
        text: "9. Mysore Pak",
      },
      {
        type: "p",
        text: "A South Indian classic of gram flour, ghee and sugar. It is dense, ghee-forward and incredibly rich — a small piece goes a long way, and it keeps well for several days.",
      },
      {
        type: "h2",
        text: "10. Jalebi",
      },
      {
        type: "p",
        text: "Crisp, coiled spirals of fermented batter fried and dipped in saffron syrup. Jalebi is at its best when eaten warm, and it remains one of the most recognisable Indian sweets anywhere in the world.",
      },
      {
        type: "quote",
        text: "The best way to understand a region's sweets is to taste them side by side — order a small assorted box rather than a single variety.",
      },
      {
        type: "h2",
        text: "Where to Try Them in Powai",
      },
      {
        type: "p",
        text: "At Banarasi Dudh Dairy, we prepare a wide selection of traditional Indian sweets fresh in our shop at Cinderella Building, Shop No. 1, opposite IIT Main Gate, near Hiranandani Hospital, Powai. If you would like help choosing, speak to our team on 9930155672 and we will suggest options based on the occasion and the quantity you need.",
      },
      {
        type: "p",
        text: "You can also browse our sweets collection to see what we prepare, and send us an enquiry on WhatsApp for availability and order details.",
      },
    ],
  },
  {
    slug: "popular-indian-sweets-for-diwali",
    title: "Popular Indian Sweets for Diwali",
    category: "Festival Special",
    excerpt:
      "A guide to the most-loved Diwali mithai — what to order for guests, gifting boxes and family functions, plus how early to plan your sweet order in Powai.",
    date: "2026-10-08",
    dateLabel: "8 October 2026",
    readTime: "5 min read",
    image: "/images/gift-packing.jpg",
    imageAlt: "Festival gift boxes of Indian sweets with marigold flowers",
    seoTitle: "Popular Indian Sweets for Diwali | Banarasi Dudh Dairy, Powai",
    seoDescription:
      "Explore the most popular Indian sweets for Diwali — laddus, kaju katli, peda and assorted mithai boxes for guests, gifting and family celebrations in Powai, Mumbai.",
    keywords: ["Diwali sweets", "festival mithai", "sweets for Diwali gifting", "sweets shop in Powai"],
    content: [
      {
        type: "p",
        text: "Diwali is the busiest week of the year for every mithai shop in India. Homes are cleaned, new clothes are bought, and boxes of sweets are prepared for guests, relatives, neighbours and colleagues. Planning the sweet list early makes the festival far less stressful.",
      },
      { type: "h2", text: "The Sweets That Always Work for Diwali" },
      {
        type: "p",
        text: "While preferences vary from family to family, a handful of sweets appear on almost every Diwali table:",
      },
      {
        type: "ul",
        items: [
          "Motichoor laddu — round, festive and loved by all age groups.",
          "Kaju katli — the default choice for gifting boxes because of its elegant look.",
          "Peda and milk sweets — for guests who prefer something mildly sweet.",
          "Gulab jamun — served warm, it is the sweet children ask for first.",
          "Assorted mithai boxes — the easiest way to offer a little of everything.",
        ],
      },
      {
        type: "h2",
        text: "How Much Should You Order?",
      },
      {
        type: "p",
        text: "For a typical Diwali gathering, families usually plan one box of sweets for every small group of guests, plus a separate set of boxes for gifting. If you are hosting a larger function or need sweets for a society event or office celebration, a bulk order enquiry is the better route — it lets the shop plan preparation in advance.",
      },
      {
        type: "h2",
        text: "Gifting Boxes vs. Loose Sweets",
      },
      {
        type: "p",
        text: "Loose sweets are ideal for serving at home, while packed boxes are better when sweets travel to someone else's house or office. Gift packing also protects the sweets during transport and keeps the assortment looking presentable. If you are ordering for colleagues or clients, ask about gift and festival packing options.",
      },
      {
        type: "image",
        src: "/images/sweets/motichoor-laddu.jpg",
        alt: "Box of Indian laddoo sweets for festive gifting",
        caption: "Packed boxes make Diwali gifting simple and mess-free.",
      },
      { type: "h2", text: "When to Place Your Diwali Order" },
      {
        type: "p",
        text: "Sweet shops receive the highest number of enquiries in the final few days before Diwali, and popular varieties sell out quickly. Placing your enquiry a week or two in advance gives you a better choice of sweets, packing options and quantities — especially for bulk or custom orders.",
      },
      {
        type: "p",
        text: "For Diwali orders, gifting boxes and bulk enquiries at our Powai shop, call Ramesh on 9930155672 or send us a message on WhatsApp. Orders above ₹1000 qualify for free home delivery.",
      },
    ],
  },
  {
    slug: "best-indian-sweets-for-family-celebrations",
    title: "Best Indian Sweets for Family Celebrations",
    category: "Indian Sweets",
    excerpt:
      "Choosing sweets for a family function? Here is how to pick a balanced mix of mithai for birthdays, naming ceremonies, anniversaries and housewarmings.",
    date: "2026-03-21",
    dateLabel: "21 March 2026",
    readTime: "5 min read",
    image: "/images/sweets/motichoor-laddu.jpg",
    imageAlt: "Indian laddoo sweets in a box for family celebrations",
    seoTitle: "Best Indian Sweets for Family Celebrations | Banarasi Dudh Dairy",
    seoDescription:
      "A practical guide to choosing Indian sweets for family celebrations — birthdays, anniversaries, naming ceremonies and housewarmings in Powai, Mumbai.",
    keywords: ["sweets for family function", "celebration mithai", "bulk sweet order Powai"],
    content: [
      {
        type: "p",
        text: "Family celebrations bring together three generations at one table, and that is exactly what makes choosing sweets difficult. Grandparents may prefer a traditional milk sweet, children want something syrupy, and guests usually appreciate variety rather than a single type.",
      },
      { type: "h2", text: "Build a Balanced Mix" },
      {
        type: "p",
        text: "A simple approach is to pick one sweet from each of these three groups:",
      },
      {
        type: "ol",
        items: [
          "A laddu or dry sweet — motichoor laddu or a milk-based laddu works well and travels safely.",
          "A syrup sweet — gulab jamun or rasgulla adds warmth and contrast to the mix.",
          "A premium or nutty sweet — kaju katli or pista barfi gives the assortment an elegant touch.",
        ],
      },
      { type: "h2", text: "Occasion-Wise Suggestions" },
      {
        type: "h3",
        text: "Birthdays",
      },
      {
        type: "p",
        text: "Families often prefer a mix of a crowd-pleasing sweet such as gulab jamun with something lighter such as rasgulla, so there is enough variety for both children and adults.",
      },
      {
        type: "h3",
        text: "Naming Ceremonies and Pujas",
      },
      {
        type: "p",
        text: "Traditional milk sweets and peda are commonly chosen for auspicious occasions, as they are mild, easy to serve and suit a vegetarian festive menu.",
      },
      {
        type: "h3",
        text: "Anniversaries and Housewarmings",
      },
      {
        type: "p",
        text: "A packed gift box with kaju katli and an assorted milk sweet selection looks more presentable when guests take sweets home.",
      },
      {
        type: "quote",
        text: "For any family function, a small assorted box is safer than one large tray of a single sweet.",
      },
      { type: "h2", text: "Planning Quantities for a Function" },
      {
        type: "p",
        text: "As a general planning habit, families estimate the number of guest groups rather than individuals, then add a margin for relatives who take sweets home. For larger functions, it is always better to place a bulk order enquiry so preparation can be scheduled properly.",
      },
      {
        type: "p",
        text: "At Banarasi Dudh Dairy in Powai, we take bulk order enquiries for family functions, celebrations and special occasions. Call 9930155672 or message us on WhatsApp to discuss quantities, sweet selection and packing.",
      },
    ],
  },
  {
    slug: "traditional-indian-sweets-for-festivals",
    title: "Traditional Indian Sweets for Festivals Through the Year",
    category: "Festival Special",
    excerpt:
      "From Diwali and Holi to Ganesh Chaturthi, Raksha Bandhan and Navratri — a simple guide to the sweets associated with Indian festivals and how to order them.",
    date: "2026-08-14",
    dateLabel: "14 August 2026",
    readTime: "6 min read",
    image: "/images/sweets/milk-sweets.jpg",
    imageAlt: "Traditional Indian sweets for festival celebrations",
    seoTitle: "Traditional Indian Sweets for Festivals | Banarasi Dudh Dairy, Powai",
    seoDescription:
      "A guide to traditional Indian sweets for festivals through the year — Diwali, Holi, Ganesh Chaturthi, Raksha Bandhan and Navratri — available fresh in Powai, Mumbai.",
    keywords: ["festival sweets India", "traditional mithai for festivals", "sweets home delivery in Powai"],
    content: [
      {
        type: "p",
        text: "Almost every Indian festival has a sweet attached to it. Some of these pairings are centuries old, while others are simply family habits that have become traditions. Here is a look at the sweets most commonly associated with festivals across the year.",
      },
      { type: "h2", text: "Diwali" },
      {
        type: "p",
        text: "The festival of lights is the biggest sweet season in India. Laddus, kaju katli, peda, soan papdi and assorted mithai boxes are prepared in large quantities for both serving and gifting. Gift packing is especially popular during this period.",
      },
      { type: "h2", text: "Holi" },
      {
        type: "p",
        text: "Gujiya — a crescent-shaped sweet filled with khoya and dry fruits — is the classic Holi sweet. Families also serve thandai alongside, and order lighter sweets because the day is already busy with celebrations.",
      },
      { type: "h2", text: "Ganesh Chaturthi" },
      {
        type: "p",
        text: "In Maharashtra, modak is the sweet most closely linked to Ganesh Chaturthi. Alongside modak, families commonly offer peda and other milk sweets as prasad during the ten-day festival.",
      },
      { type: "h2", text: "Raksha Bandhan" },
      {
        type: "p",
        text: "Sweets travel from brothers to sisters and back again. Kaju katli and assorted mithai boxes are popular because they are easy to send and look attractive when received.",
      },
      { type: "h2", text: "Navratri and Durga Puja" },
      {
        type: "p",
        text: "In Bengal, sweets such as rasgulla, sandesh and mishti doi are central to Durga Puja. During Navratri, many families observe fasting and choose simple sweets made with permitted ingredients.",
      },
      {
        type: "image",
        src: "/images/gift-packing.jpg",
        alt: "Traditional Indian sweets arranged in a decorative box",
        caption: "A decorative box makes any festival gift feel special.",
      },
      { type: "h2", text: "Ordering Festival Sweets in Advance" },
      {
        type: "p",
        text: "Festival weeks are the busiest time for sweet shops, and popular varieties move quickly. Placing an enquiry a few days ahead — or earlier for Diwali — gives you more choice in sweets, packing and quantity. For orders above ₹1000, we also offer free home delivery within Powai.",
      },
      {
        type: "p",
        text: "To plan your festival order, call our shop on 9930155672 or send us a WhatsApp enquiry with the date, quantity and sweets you have in mind.",
      },
    ],
  },
  {
    slug: "indian-sweet-gift-packing-ideas",
    title: "Indian Sweet Gift Packing Ideas",
    category: "Sweet Gift Ideas",
    excerpt:
      "Simple and practical sweet gift packing ideas for festivals, weddings and corporate gifting — plus tips on choosing boxes that keep mithai fresh during travel.",
    date: "2026-05-30",
    dateLabel: "30 May 2026",
    readTime: "5 min read",
    image: "/images/gift-packing.jpg",
    imageAlt: "Decorative box of Indian sweets for gifting",
    seoTitle: "Indian Sweet Gift Packing Ideas | Banarasi Dudh Dairy, Powai",
    seoDescription:
      "Practical Indian sweet gift packing ideas for festivals, weddings and corporate gifting, with tips on choosing boxes that keep mithai fresh — Powai, Mumbai.",
    keywords: ["sweet gift packing", "mithai gift box ideas", "festival gifting Powai"],
    content: [
      {
        type: "p",
        text: "A box of sweets is one of the most accepted gifts in India, but how it is packed changes how it is received. Good packing protects the sweets, keeps the assortment tidy, and makes the gift feel considered rather than routine.",
      },
      { type: "h2", text: "1. Rigid Boxes for Gifting" },
      {
        type: "p",
        text: "Sturdy boxes with a secure lid are the safest choice when sweets need to travel. They protect soft sweets from being crushed and can be reused by the recipient for storage.",
      },
      { type: "h2", text: "2. Compartmental Trays" },
      {
        type: "p",
        text: "Separating each sweet into its own compartment prevents flavours from mixing and keeps the arrangement looking neat when the box is opened — a simple upgrade that makes an assorted box look far more premium.",
      },
      { type: "h2", text: "3. Layered Wrapping" },
      {
        type: "p",
        text: "Butter paper or foil beneath each layer keeps syrup-based sweets such as gulab jamun from staining the dry sweets, which matters a great deal when a box is carried around during the day.",
      },
      { type: "h2", text: "4. Add a Personal Note" },
      {
        type: "p",
        text: "A short handwritten note costs nothing and turns a box of sweets into a proper gift. For corporate gifting, a simple card with the company's name printed on it works equally well.",
      },
      { type: "h2", text: "5. Match the Box to the Occasion" },
      {
        type: "ul",
        items: [
          "Festivals — bright, decorative boxes with room for an assorted selection.",
          "Weddings — elegant rigid boxes, often with kaju katli and premium milk sweets.",
          "Corporate gifting — neat, uniform boxes that are easy to stack and distribute.",
          "Family visits — a simple sturdy box with two or three favourites.",
        ],
      },
      {
        type: "quote",
        text: "Pack for the journey first and the presentation second — a beautiful box that arrives crushed helps nobody.",
      },
      { type: "h2", text: "Choosing Sweets That Travel Well" },
      {
        type: "p",
        text: "Dry sweets such as laddus, peda, kaju katli and barfi hold their shape better than soft, syrup-soaked sweets. If your gift needs to travel a distance, balance the assortment accordingly, and ask the shop for packing that suits the journey.",
      },
      {
        type: "p",
        text: "At our Powai shop, we offer gift and festival packing options for gifting and celebrations. Call 9930155672 or message us on WhatsApp to discuss your packing requirement.",
      },
    ],
  },
  {
    slug: "fresh-dairy-in-traditional-indian-sweets",
    title: "The Role of Fresh Dairy in Traditional Indian Sweets",
    category: "Dairy & Food",
    excerpt:
      "Most classic Indian sweets are built on milk. Here is why fresh dairy matters in mithai making, and what to look for when buying milk sweets from a local shop.",
    date: "2026-06-18",
    dateLabel: "18 June 2026",
    readTime: "5 min read",
    image: "/images/about-shop.jpg",
    imageAlt: "Display of Indian sweets at a traditional sweet shop",
    seoTitle: "The Role of Fresh Dairy in Traditional Indian Sweets | Banarasi Dudh Dairy",
    seoDescription:
      "Why fresh dairy is the foundation of traditional Indian sweets, and what to look for when buying milk sweets, peda and khoya-based mithai in Powai, Mumbai.",
    keywords: ["fresh dairy in Indian sweets", "milk sweets quality", "mithai shop near IIT Main Gate"],
    content: [
      {
        type: "p",
        text: "It is easy to think of Indian sweets as sugar and spice, but the foundation of most classic mithai is milk. Khoya, chenna, rabri and cream are the base of a very large share of the sweets sold in India, which is why a dairy shop and a sweet shop have historically been the same business.",
      },
      { type: "h2", text: "The Milk Base Behind Popular Sweets" },
      {
        type: "ul",
        items: [
          "Khoya (mawa) — reduced milk used in peda, gulab jamun, barfi and kalakand.",
          "Chenna — curdled milk used for rasgulla, sandesh and rasmalai.",
          "Cream and malai — used to enrich sweets such as malai roll and kulfi.",
          "Ghee — used for frying and for binding laddus such as motichoor laddu.",
        ],
      },
      { type: "h2", text: "Why Freshness Is Obvious in the Taste" },
      {
        type: "p",
        text: "Milk is a delicate ingredient. When it is fresh, the resulting sweet has a clean, milky taste and a smooth texture. When it is not, no amount of cardamom, saffron or silver foil can hide it. This is one reason traditional shops continue to prepare sweets in small batches through the day rather than making one large batch in the morning.",
      },
      {
        type: "image",
        src: "/images/sweets/milk-sweets.jpg",
        alt: "Assorted Indian milk sweets",
        caption: "Milk-based sweets taste best when prepared fresh.",
      },
      { type: "h2", text: "What to Look for When Buying Milk Sweets" },
      {
        type: "ul",
        items: [
          "A clean milky aroma rather than an overly sugary smell.",
          "A smooth or evenly grainy texture, with no dryness or cracking.",
          "A fresh, natural colour instead of an unusually bright one.",
          "Sweets that are stored in a clean, covered display rather than left open.",
        ],
      },
      { type: "h2", text: "Buying Local Makes a Difference" },
      {
        type: "p",
        text: "A neighbourhood sweet shop has an advantage that large brands do not: the sweets are made in the same building where they are sold. You can ask what was prepared that day, how it was packed and how it should be stored. Buying locally also means the sweets reach you quickly, which matters for anything milk-based.",
      },
      {
        type: "p",
        text: "At Banarasi Dudh Dairy in Powai, our sweets are prepared fresh in the shop opposite IIT Main Gate. For enquiries about our milk sweets, peda, laddus and assorted mithai, call 9930155672 or message us on WhatsApp.",
      },
    ],
  },
];

export function getPost(slug: string | undefined): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function relatedPosts(post: Post, count = 3): Post[] {
  const sameCategory = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...others].slice(0, count);
}

/** Machine-readable schema for an article page. */
export function articleSchema(post: Post, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: `https://www.banarasidudhdairy.in${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "LocalBusiness",
      name: "Banarasi Dudh Dairy",
      alternateName: "बनारसी दूधालय",
    },
  };
}
