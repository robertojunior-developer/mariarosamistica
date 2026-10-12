import { ArrowRight } from 'lucide-react';
import type { Category } from '../../data/categories';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SmartImage from './SmartImage';
import PlaceholderImage from './PlaceholderImage';
import Reveal from './Reveal';

interface CategoryCardProps {
  category: Category;
  delay?: number;
}

export default function CategoryCard({ category, delay = 0 }: CategoryCardProps) {
  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-3xl border border-transparent bg-white shadow-card ring-1 ring-brown/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-soft"
    >
      <div className="relative h-56 overflow-hidden">
        {category.image ? (
          <SmartImage
            src={category.image}
            fallback={category.imageFallback}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <PlaceholderImage className="h-full w-full" label="Foto em breve" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-semibold text-brown-dark transition-colors duration-300 group-hover:text-rose-dark">
          {category.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-ink/75">{category.description}</p>
        <a
          href={getWhatsAppLink(category.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-dark transition-colors hover:text-gold"
        >
          Ver Produtos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Reveal>
  );
}
