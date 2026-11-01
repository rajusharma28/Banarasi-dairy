import { PageHero } from "../components/PageHero";
import { Link } from "../router";
import { ArrowRightIcon } from "../components/Icons";
import { POSTS } from "../data/posts";
import { SWEETS } from "../data/sweets";
import { useSeo } from "../hooks/useSeo";

export default function Sitemap() {
  useSeo({
    title: "Sitemap | Banarasi Dudh Dairy",
    description:
      "A complete list of every page on the Banarasi Dudh Dairy website — home, about, sweets, blog and contact.",
    path: "/sitemap",
  });

  return (
    <>
      <PageHero
        eyebrow="Navigation"
        title="Sitemap"
        description="Every page on the Banarasi Dudh Dairy website, in one place."
        image={{
          src: "/images/sweets/milk-sweets.jpg",
          fallback: "/images/sweets/milk-sweets.jpg",
          alt: "Assorted traditional Indian milk sweets in a golden gift box",
        }}
        trail={[
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/sitemap" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2">
            <SitemapGroup title="Main Pages">
              <SitemapLink to="/" label="Home" />
              <SitemapLink to="/about" label="About Us" />
              <SitemapLink to="/sweets" label="Our Sweets" />
              <SitemapLink to="/blog" label="Blog" />
              <SitemapLink to="/contact" label="Contact Us" />
            </SitemapGroup>

            <SitemapGroup title="Sweets Collection">
              {SWEETS.map((sweet) => (
                <SitemapLink key={sweet.slug} to="/sweets" label={sweet.name} />
              ))}
            </SitemapGroup>

            <SitemapGroup title="Blog Articles">
              {POSTS.map((post) => (
                <SitemapLink key={post.slug} to={`/blog/${post.slug}`} label={post.title} />
              ))}
            </SitemapGroup>

            <SitemapGroup title="Legal & Other">
              <SitemapLink to="/privacy-policy" label="Privacy Policy" />
              <SitemapLink to="/terms-and-conditions" label="Terms & Conditions" />
              <SitemapLink to="/sitemap" label="Sitemap" />
            </SitemapGroup>
          </div>
        </div>
      </section>
    </>
  );
}

function SitemapGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-champagne bg-cream p-6">
      <h2 className="text-lg text-maroon">{title}</h2>
      <span aria-hidden="true" className="mt-3 block h-[2px] w-10 rounded-full bg-gradient-to-r from-gold to-champagne" />
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function SitemapLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link to={to} className="group inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-maroon">
        <ArrowRightIcon className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-x-0.5" />
        {label}
      </Link>
    </li>
  );
}
