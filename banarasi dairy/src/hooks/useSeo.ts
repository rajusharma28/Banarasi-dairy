import { useEffect } from "react";
import { BUSINESS } from "../data/business";

/* ============================================================
   PER-PAGE SEO HEAD MANAGEMENT
   Updates title, description, canonical, Open Graph and
   structured data whenever the route changes.
   ============================================================ */

type SeoOptions = {
  title: string;
  description: string;
  /** Route path, e.g. "/sweets" — used for the canonical URL. */
  path: string;
  keywords?: string[];
  image?: string;
  /** Optional JSON-LD object injected for this page. */
  jsonLd?: Record<string, unknown>;
  type?: "website" | "article";
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({
  title,
  description,
  path,
  keywords,
  image = "/images/banner.jpg",
  jsonLd,
  type = "website",
}: SeoOptions) {
  useEffect(() => {
    const url = `${BUSINESS.siteUrl}${path === "/" ? "/" : path}`;

    document.title = title;
    document.documentElement.lang = "en";

    upsertMeta("name", "description", description);
    if (keywords?.length) upsertMeta("name", "keywords", keywords.join(", "));
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");

    upsertLink("canonical", url);

    // Open Graph
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", BUSINESS.name);
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", `${BUSINESS.siteUrl}${image}`);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", `${BUSINESS.siteUrl}${image}`);

    // Page-level structured data
    const id = "route-jsonld";
    document.getElementById(id)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, keywords, image, jsonLd, type]);
}

/** Breadcrumb structured data. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BUSINESS.siteUrl}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}
