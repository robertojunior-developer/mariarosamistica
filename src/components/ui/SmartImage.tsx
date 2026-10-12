interface SmartImageProps {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
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
        src={src}
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
      <source srcSet={src} type="image/webp" />
      <img
        src={fallback}
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
