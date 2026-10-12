import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { heroContent } from '../../data/siteContent';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { ensureGsapRegistered, prefersReducedMotion } from '../../utils/gsap';
import SmartImage from '../ui/SmartImage';

const AUTOPLAY_MS = 5500;

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroContent.images.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, []);

  // Cinematic parallax: background drifts slower than scroll, image slowly zooms (Ken Burns).
  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current || !bgRef.current) return;
    const gsapInstance = ensureGsapRegistered();
    const ctx = gsapInstance.context(() => {
      gsapInstance.to(bgRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="inicio" className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-brown-dark">
      <div ref={bgRef} className="absolute inset-0 -z-10 h-[120%]">
        {heroContent.images.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === activeImage ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <motion.div
              className="h-full w-full"
              animate={{ scale: shouldReduceMotion ? 1 : index === activeImage ? 1.12 : 1 }}
              transition={{ duration: AUTOPLAY_MS / 1000 + 1, ease: 'linear' }}
            >
              <SmartImage
                src={image.src}
                fallback={image.fallback}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </motion.div>
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/85 via-brown-dark/55 to-brown-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 via-transparent to-brown-dark/20" />
      </div>

      <div className="container-custom relative py-28 sm:py-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream shadow-sm ring-1 ring-gold/40 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            {heroContent.badge}
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-semibold uppercase leading-[1.15] tracking-wide text-cream sm:text-5xl lg:text-[3.4rem]">
            {heroContent.titleLines.map((line, index) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {index === 1 ? <span className="text-gold-light">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream/85"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brown-dark shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
            >
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={getWhatsAppLink('Olá! Conheci a Maria Rosa Mística pelo site e gostaria de fazer um pedido.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              {heroContent.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:left-auto sm:right-10 sm:translate-x-0">
        {heroContent.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`Mostrar imagem ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeImage ? 'w-8 bg-gold' : 'w-3 bg-cream/40 hover:bg-cream/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-cream/70"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Role a página</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
