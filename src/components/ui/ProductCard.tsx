import { Heart } from 'lucide-react';
import type { Product } from '../../data/products';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SmartImage from './SmartImage';
import Reveal from './Reveal';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const message = `Olá! Tenho interesse no produto "${product.name}" que vi no site da Maria Rosa Mística.`;

  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-brown/5 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <SmartImage
          src={product.image}
          fallback={product.imageFallback}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brown-dark shadow-sm">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-brown-dark">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-ink/75">{product.description}</p>
        <a
          href={getWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-brown/20 px-4 py-2.5 text-sm font-semibold text-brown-dark transition-colors hover:border-gold hover:bg-gold/10"
        >
          <Heart className="h-4 w-4" />
          Tenho interesse
        </a>
      </div>
    </Reveal>
  );
}
