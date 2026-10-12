import { MapPin, MessageCircle } from 'lucide-react';
import { address, brand, contact, navLinks } from '../../data/siteContent';
import { categories } from '../../data/categories';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../../utils/whatsapp';
import SmartImage from '../ui/SmartImage';
import InstagramIcon from '../ui/InstagramIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-cream/90">
      <div className="container-custom grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <SmartImage
              src={brand.logo}
              fallback={brand.logoFallback}
              alt={`${brand.name} - ${brand.tagline}`}
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold text-cream">{brand.name}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-gold-light">{brand.tagline}</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/70">
            Artigos religiosos, terços personalizados e presentes de fé em Valparaíso de Goiás — GO.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-base font-semibold text-cream">Links Rápidos</h3>
          <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-cream/70 transition-colors hover:text-gold-light">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-base font-semibold text-cream">Categorias</h3>
          <nav className="flex flex-col gap-2" aria-label="Categorias de produtos">
            {categories.map((category) => (
              <a
                key={category.id}
                href="#categorias"
                className="text-sm text-cream/70 transition-colors hover:text-gold-light"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-base font-semibold text-cream">Contato</h3>
          <a
            href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold-light"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            {contact.phoneDisplay}
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold-light"
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            {contact.instagramHandle}
          </a>
          <a
            href={address.mapsQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-cream/70 transition-colors hover:text-gold-light"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{address.full}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="container-custom text-center text-xs text-cream/50">
          © {year} {brand.name} — {brand.tagline}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
