import { Link } from "../router";
import { ChevronRightIcon } from "./Icons";

export type Crumb = { name: string; path: string };

/**
 * Accessible breadcrumb trail.
 * Structured data is added by each page via breadcrumbSchema()
 * so a single useSeo call owns the document head.
 */
export function Breadcrumbs({ trail, tone = "dark" }: { trail: Crumb[]; tone?: "dark" | "light" }) {
  const light = tone === "light";

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {last ? (
                <span
                  aria-current="page"
                  className={light ? "font-medium text-champagne" : "font-medium text-maroon"}
                >
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    to={crumb.path}
                    className={
                      light
                        ? "text-cream/70 transition-colors hover:text-champagne"
                        : "text-ink-soft transition-colors hover:text-maroon"
                    }
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRightIcon
                    className={light ? "h-3.5 w-3.5 text-cream/40" : "h-3.5 w-3.5 text-ink-soft/50"}
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
