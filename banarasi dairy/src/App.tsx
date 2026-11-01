import { RouterProvider, ScrollToTop, useRouter } from "./router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Sweets from "./pages/Sweets";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

function CurrentPage() {
  const { path } = useRouter();

  if (path === "/") return <Home />;
  if (path === "/about") return <About />;
  if (path === "/sweets") return <Sweets />;
  if (path === "/blog") return <Blog />;
  if (path.startsWith("/blog/")) return <BlogPost />;
  if (path === "/contact") return <Contact />;
  if (path === "/privacy-policy") return <Privacy />;
  if (path === "/terms-and-conditions") return <Terms />;
  if (path === "/sitemap") return <Sitemap />;

  return <NotFound />;
}

function Shell() {
  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-maroon focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main" className="flex-1">
        <CurrentPage />
      </main>

      <Footer />
      <WhatsAppFab />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
