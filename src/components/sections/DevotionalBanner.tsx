import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { devotionalBannerContent } from '../../data/siteContent';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { ensureGsapRegistered, prefersReducedMotion } from '../../utils/gsap';
import SmartImage from '../ui/SmartImage';

export default function DevotionalBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current || !imageRef.current) return;
    const gsapInstance = ensureGsapRegistered();
    const ctx = gsapInstance.context(() => {
      gsapInstance.fromTo(
        imageRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden py-28 sm:py-36">
      <div ref={imageRef} className="absolute inset-0 -z-10 h-[130%] -top-[15%]">
        <SmartImage
          src={devotionalBannerContent.image}
          fallback={devotionalBannerContent.imageFallback}
          alt="Imagem sacra da Sagrada Família, fundo devocional"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/80 via-brown-dark/70 to-brown-dark/85" />
      </div>

      <div className="container-custom relative flex flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-display text-3xl font-semibold uppercase leading-tight text-cream sm:text-4xl lg:text-5xl"
        >
          {devotionalBannerContent.title[0]}
          <br />
          <span className="text-gold-light">{devotionalBannerContent.title[1]}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl text-balance text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          {devotionalBannerContent.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brown-dark shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {devotionalBannerContent.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={getWhatsAppLink('Olá! Gostaria de conhecer presentes religiosos da Maria Rosa Mística.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            {devotionalBannerContent.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
