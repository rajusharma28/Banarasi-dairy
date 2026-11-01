import { PageHero, CtaBand } from "../components/PageHero";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Link, useRouter } from "../router";
import { ArrowRightIcon, WhatsAppIcon } from "../components/Icons";
import { BUSINESS, DEFAULT_WA_MESSAGE, telLink, waLink } from "../data/business";
import { articleSchema, getPost, relatedPosts, type Block as ContentBlock } from "../data/posts";
import { useSeo } from "../hooks/useSeo";
import { PostCard } from "./Blog";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { path } = useRouter();
  const slug = path.replace(/^\/blog\/?/, "");
  const post = getPost(slug || undefined);

  if (!post) return <NotFound />;

  useSeo({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
    type: "article",
    jsonLd: articleSchema(post, `${BUSINESS.siteUrl}/blog/${post.slug}`),
  });

  const related = relatedPosts(post, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.dateLabel} · ${post.readTime}`}
        trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.category, path: "/blog" },
        ]}
      />

      <article className="bg-white">
        {/* Featured image */}
        <div className="mx-auto max-w-5xl px-5 pt-12 sm:px-6 lg:pt-16">
          <div className="overflow-hidden rounded-3xl border border-champagne shadow-card">
            <picture>
              <img
                src={post.image}
                alt={post.imageAlt}
                width={1200}
                height={750}
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="aspect-[16/9] w-full object-cover"
              />
            </picture>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-maroon">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-ink-soft">
              Published on {post.dateLabel}
            </time>
            <span className="text-ink-soft/70">· {post.readTime}</span>
          </div>
        </div>

        {/* Article body */}
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
          <p className="font-display text-lg italic leading-relaxed text-maroon sm:text-2xl">
            {post.excerpt}
          </p>
          <span aria-hidden="true" className="mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne" />

          <div className="prose-bdd mt-9">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* Inline shop CTA */}
          <aside className="mt-14 rounded-2xl border border-champagne bg-cream p-6 sm:p-8">
            <h2 className="text-lg text-maroon">Order Sweets From Our Powai Shop</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Banarasi Dudh Dairy (बनारसी दूधालय) — {BUSINESS.addressLines.join(", ")}. Call us on{" "}
              {BUSINESS.contacts.map((c, i) => (
                <span key={c.phone}>
                  {i > 0 ? ", " : ""}
                  <a href={`tel:+91${c.phone}`} className="font-semibold text-maroon hover:underline">
                    {c.name} {c.phone}
                  </a>
                </span>
              ))}
              , or send your enquiry on WhatsApp. Free home delivery on orders above ₹1000.
            </p>
            <a
              href={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-burgundy"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </aside>

          {/* Breadcrumb trail (bottom, for orientation) */}
          <div className="mt-10 border-t border-champagne pt-6">
            <Breadcrumbs
              trail={[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 ? (
        <section className="pattern-cream">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
            <h2 className="text-center text-2xl sm:text-4xl">Related Articles</h2>
            <span aria-hidden="true" className="mx-auto mt-5 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold to-champagne" />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/30 px-7 py-3.5 text-sm font-semibold text-maroon transition-all duration-300 hover:bg-maroon hover:text-cream"
              >
                View all articles
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Need Sweets for an Occasion?"
        description="Tell us the occasion, quantity and date — our team will help you choose the right sweets, packing and delivery option."
        primaryLabel={`Call ${BUSINESS.contacts[0].name}: ${BUSINESS.contacts[0].phone}`}
        primaryTo={telLink(BUSINESS.contacts[0].phone)}
        secondaryLabel="Enquire on WhatsApp"
        secondaryHref={waLink(BUSINESS.contacts[0].phone, DEFAULT_WA_MESSAGE)}
      />
    </>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "image":
      return (
        <figure>
          <picture>
            <img
              src={block.src}
              alt={block.alt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </picture>
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    default:
      return null;
  }
}
