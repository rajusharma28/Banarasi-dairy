import { useMemo, useState } from "react";
import { PageHero, CtaBand } from "../components/PageHero";
import { Link } from "../router";
import { ArrowRightIcon } from "../components/Icons";
import { BUSINESS, DEFAULT_WA_MESSAGE, telLink, waLink } from "../data/business";
import { CATEGORIES, POSTS, type Post } from "../data/posts";
import { useSeo } from "../hooks/useSeo";
import { cn } from "../utils/cn";

export default function Blog() {
  const [active, setActive] = useState<string>("All");

  useSeo({
    title: "Sweet Blog | Indian Sweets, Festivals & Gift Ideas | Banarasi Dudh Dairy",
    description:
      "Read our guides on traditional Indian sweets, festival ordering, family celebrations and sweet gift packing ideas — from Banarasi Dudh Dairy, Powai, Mumbai.",
    path: "/blog",
    keywords: [
      "Indian sweets blog",
      "traditional sweets guide",
      "festival sweets ideas",
      "sweet gift packing ideas",
    ],
    image: "/images/sweets/milk-sweets.jpg",
  });

  const posts = useMemo<Post[]>(
    () => (active === "All" ? POSTS : POSTS.filter((p) => p.category === active)),
    [active],
  );

  const filters = ["All", ...CATEGORIES];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Sweet Stories & Festival Guides"
        hindiTitle="मिठाई ब्लॉग"
        description="Simple, practical guides to traditional Indian sweets — what to order for festivals, how to choose sweets for family functions, and gift packing ideas."
        image={{
          src: "/images/sweets/milk-sweets.jpg",
          fallback: "/images/sweets/milk-sweets.jpg",
          alt: "Assorted traditional Indian milk sweets arranged in a brass bowl",
        }}
        trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          {/* Category filter */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {filters.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-maroon bg-maroon text-cream shadow-soft"
                      : "border-champagne bg-cream text-ink-soft hover:border-gold hover:text-maroon",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-ink-soft" aria-live="polite">
            Showing {posts.length} {posts.length === 1 ? "article" : "articles"}
            {active !== "All" ? ` in ${active}` : ""}
          </p>

          <h2 className="sr-only">All Blog Articles</h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a Question About Our Sweets?"
        description="Our team is happy to help with sweet selection, quantities, packing and delivery. Reach us on WhatsApp or call the shop directly."
        primaryLabel={`Call ${BUSINESS.contacts[0].name}: ${BUSINESS.contacts[0].phone}`}
        primaryTo={telLink(BUSINESS.contacts[0].phone)}
        secondaryLabel="Enquire on WhatsApp"
        secondaryHref={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
      />
    </>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-champagne bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden bg-cream">
        <picture>
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={750}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </picture>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-cream px-3 py-1 font-semibold text-maroon">{post.category}</span>
          <time dateTime={post.date} className="text-ink-soft">
            {post.dateLabel}
          </time>
          <span className="text-ink-soft/70">· {post.readTime}</span>
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
  );
}
