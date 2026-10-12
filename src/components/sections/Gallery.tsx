import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { galleryFilters, galleryImages, type GalleryFilter } from '../../data/gallery';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('todos');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () => (activeFilter === 'todos' ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)),
    [activeFilter],
  );

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close]);

  const activeImage = activeIndex !== null ? filteredImages[activeIndex] : null;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Galeria" title="Conheça um pouco do nosso universo." />

        <div className="flex flex-wrap items-center justify-center gap-2">
          {galleryFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 sm:text-sm ${
                activeFilter === filter.key
                  ? 'border-brown bg-brown text-cream shadow-soft'
                  : 'border-brown/20 text-brown-dark hover:border-gold hover:bg-gold/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Reveal delay={(index % 3) * 0.06} className="h-full">
                  <div className="group relative block h-full w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-brown/5">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="block h-full w-full"
                      aria-label={`Ampliar imagem: ${image.alt}`}
                    >
                      <SmartImage
                        src={image.src}
                        fallback={image.srcFallback}
                        alt={image.alt}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-56"
                      />
                    </button>
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brown-dark/80 via-brown-dark/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="translate-y-2 text-sm font-semibold text-cream transition-transform duration-300 group-hover:translate-y-0">
                        {image.name}
                      </span>
                      <a
                        href={getWhatsAppLink(`Olá! Gostaria de consultar o produto "${image.name}" que vi na galeria do site.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto mt-2 inline-flex w-fit translate-y-2 items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-brown-dark opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Consultar no WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brown-dark/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <SmartImage
                src={activeImage.src}
                fallback={activeImage.srcFallback}
                alt={activeImage.alt}
                className="max-h-[85vh] w-full rounded-2xl object-contain"
                loading="eager"
              />
              <button
                type="button"
                onClick={close}
                autoFocus
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-brown-dark shadow-soft"
                aria-label="Fechar imagem ampliada"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
