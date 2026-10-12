import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Flower2 } from 'lucide-react';
import { aboutContent } from '../../data/siteContent';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="sobre" className="section-padding relative overflow-hidden bg-cream">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        <Reveal y={32} className="flex flex-col items-start gap-5">
          <span className="divider-ornament font-sans text-xs font-semibold uppercase tracking-[0.2em] text-rose-dark">
            {aboutContent.eyebrow}
          </span>
          <h2 className="text-balance font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
            {aboutContent.title}
          </h2>
          <p className="text-balance text-base leading-relaxed text-ink/80 sm:text-lg">{aboutContent.text}</p>

          <a
            href="#loja"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brown-dark"
          >
            {aboutContent.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={0.1} y={32} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-brown/5">
            <SmartImage
              src={aboutContent.image}
              fallback={aboutContent.imageFallback}
              alt="Interior da loja física Maria Rosa Mística"
              className="h-80 w-full object-cover sm:h-[26rem]"
            />
          </div>

          <motion.span
            aria-hidden
            className="absolute -left-6 -top-6 hidden h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold sm:flex"
            animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Flower2 className="h-7 w-7" strokeWidth={1.25} />
          </motion.span>
          <motion.span
            aria-hidden
            className="absolute -bottom-7 -right-5 hidden h-20 w-20 items-center justify-center rounded-full border border-rose-light/60 bg-white/70 text-rose-dark sm:flex"
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <Flower2 className="h-8 w-8" strokeWidth={1.25} />
          </motion.span>
        </Reveal>
      </div>
    </section>
  );
}
