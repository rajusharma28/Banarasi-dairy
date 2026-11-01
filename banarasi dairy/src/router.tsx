import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

/* ============================================================
   LIGHTWEIGHT HASH ROUTER
   Hash routing keeps the build a single portable index.html
   while still giving every page its own unique, crawlable URL
   (e.g. #/blog/top-10-traditional-indian-sweets).
   ============================================================ */

type RouterValue = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterValue>({ path: "/", navigate: () => {} });

export function useRouter(): RouterValue {
  return useContext(RouterContext);
}

function readPath(): string {
  if (typeof window === "undefined") return "/";
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw || raw === "/") return "/";
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  return path.replace(/\/+$/, "") || "/";
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onChange = () => setPath(readPath());
    window.addEventListener("hashchange", onChange);

    // Graceful support for someone landing on a clean path:
    // rewrite it to the hash route so a refresh never 404s.
    if (!window.location.hash) {
      const clean = window.location.pathname.replace(/\/+$/, "");
      if (clean && clean !== "/index.html") {
        window.location.replace(`/#${clean}`);
      }
    }

    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((to: string) => {
    const target = to.startsWith("/") ? to : `/${to}`;
    if (readPath() === target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = `#${target}`;
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

/** Anchor that routes through the hash router. */
export function Link({
  to,
  children,
  className,
  ...rest
}: { to: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = to === "/" ? "#/" : `#${to}`;
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}

/** True when the current route matches `to` exactly. */
export function useIsActive(to: string): boolean {
  const { path } = useRouter();
  if (to === "/") return path === "/";
  return path === to || path.startsWith(`${to}/`);
}

/** Scrolls to the top whenever the route changes. */
export function ScrollToTop() {
  const { path } = useRouter();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);
  return null;
}
