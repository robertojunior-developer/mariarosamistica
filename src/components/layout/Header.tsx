import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { address, brand, contact, navLinks } from '../../data/siteContent';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../../utils/whatsapp';
import SmartImage from '../ui/SmartImage';
import InstagramIcon from '../ui/InstagramIcon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Top info bar */}
      <div
        className={`overflow-hidden bg-brown-dark text-cream/85 transition-all duration-300 ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-custom flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-gold-light"
            >
              <Phone className="h-3.5 w-3.5" />
              {contact.phoneDisplay}
            </a>
            <a
              href={address.mapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 transition-colors hover:text-gold-light sm:flex"
            >
              <MapPin className="h-3.5 w-3.5" />
              {address.city}
            </a>
          </div>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-gold-light"
            aria-label="Instagram da Maria Rosa Mística"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{contact.instagramHandle}</span>
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-cream/95 shadow-soft backdrop-blur-md' : 'bg-cream/80 backdrop-blur-sm'
        }`}
      >
        <div
          className={`container-custom flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
            <SmartImage
              src={brand.logo}
              fallback={brand.logoFallback}
              alt={`${brand.name} - ${brand.tagline}`}
              className={`object-contain transition-all duration-300 ${isScrolled ? 'h-11 w-11' : 'h-14 w-14'}`}
              loading="eager"
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-lg font-semibold text-brown-dark">{brand.name}</span>
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-rose-dark">{brand.tagline}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 font-sans text-sm font-medium text-brown-dark/85 transition-colors hover:text-rose-dark"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brown px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brown-dark"
            >
              <MessageCircle className="h-4 w-4" />
              Fale Conosco
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-brown-dark lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-brown-dark/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col gap-1 bg-cream px-6 py-8 shadow-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-brown-dark">{brand.name}</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-brown-dark hover:bg-rose-light/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-3 py-3 font-sans text-base font-medium text-brown-dark transition-colors hover:bg-rose-light/15"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brown px-5 py-3 text-sm font-semibold text-cream"
              >
                <MessageCircle className="h-4 w-4" />
                Fale Conosco
              </a>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
