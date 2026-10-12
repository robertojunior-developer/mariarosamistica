interface SmartImageProps {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

/**
 * Prefixes root-relative paths (e.g. "/images/foo.webp") with Vite's BASE_URL so
 * assets resolve correctly when the app is published under a sub-path (e.g. GitHub Pages).
 */
function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.slice(1)}`;
}

/** Renders a <picture> with a webp source and a jpg/png fallback for broad browser support. */
export default function SmartImage({
  src,
  fallback,
  alt,
  className,
  loading = 'lazy',
  width,
  height,
}: SmartImageProps) {
  if (!fallback) {
    return (
      <img
        src={withBase(src)}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
      />
    );
  }

  return (
    <picture>
      <source srcSet={withBase(src)} type="image/webp" />
      <img
        src={withBase(fallback)}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
      />
    </picture>
  );
}
