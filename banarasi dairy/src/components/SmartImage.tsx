import { cn } from "../utils/cn";

type SmartImageProps = {
  /** Path to an image in /public, e.g. "/images/sweets/peda.jpg" */
  src: string;
  alt: string;
  className?: string;
  /** Tailwind aspect class for the wrapper, e.g. "aspect-[4/3]" */
  aspect?: string;
  /** Mark false for above-the-fold hero images. */
  eager?: boolean;
  sizes?: string;
  caption?: string;
  imgClassName?: string;
};

/**
 * Responsive image using the JPEG assets shipped in /public.
 * Uses intrinsic width/height to keep layout stable (CLS = 0)
 * and native lazy-loading for anything below the fold.
 */
export function SmartImage({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  eager = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  caption,
  imgClassName,
}: SmartImageProps) {
  return (
    <figure className={cn("overflow-hidden", className)}>
      <div className={cn("relative w-full bg-maroon/5", aspect)}>
        <img
          src={src}
          alt={alt}
          width={1200}
          height={900}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          decoding={eager ? "sync" : "async"}
          fetchPriority={eager ? "high" : "auto"}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-ink-soft italic">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
