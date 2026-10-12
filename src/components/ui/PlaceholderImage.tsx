import { Flower } from 'lucide-react';

interface PlaceholderImageProps {
  className?: string;
  label?: string;
}

/** Neutral, easily replaceable visual used when no confirmed photograph is available yet. */
export default function PlaceholderImage({ className, label }: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-cream-dark to-rose-light/30 text-brown/40 ${className ?? ''}`}
      role="img"
      aria-label={label ?? 'Imagem em breve'}
    >
      <Flower className="h-8 w-8" strokeWidth={1.25} />
      <span className="font-serif text-sm italic">{label ?? 'Imagem em breve'}</span>
    </div>
  );
}
