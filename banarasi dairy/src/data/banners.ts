/**
 * ============================================================
 * HOMEPAGE ADVERTISING BANNERS
 * ------------------------------------------------------------
 * This is the ONLY place the homepage banner is defined.
 *
 * To use your own Banarasi Dudh Dairy advertising banner:
 *   1. Save your banner image as public/images/banner.jpg.
 *   2. Keep the 20:8 aspect ratio — it is displayed with
 *      object-fit: contain so nothing is cropped or stretched.
 *   3. Add more entries to the array below to turn the hero
 *      into an automatic slider with transition dots.
 * ============================================================
 */

export type Banner = {
  /** Path to the banner image. */
  image: string;
  /** Fallback image path. */
  fallback: string;
  /** Describe the banner for screen readers and image SEO. */
  alt: string;
};

export const HERO_BANNERS: Banner[] = [
  {
    image: "/images/banner.jpg",
    fallback: "/images/banner.jpg",
    alt: "Banarasi Dudh Dairy — Traditional Indian Sweets and Dairy, Powai Mumbai",
  },
];
