import { Check } from 'lucide-react';
import { personalizedRosariesContent } from '../../data/siteContent';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';

export default function PersonalizedRosaries() {
  return (
    <section id="personalizados" className="section-padding bg-rose/10">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/50">
          <SmartImage
            src={personalizedRosariesContent.image}
            fallback={personalizedRosariesContent.imageFallback}
            alt="Terço personalizado nas mãos de uma noiva, artigo da Maria Rosa Mística"
            className="h-80 w-full object-cover sm:h-[26rem]"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start gap-6">
          <span className="divider-ornament font-sans text-xs font-semibold uppercase tracking-[0.2em] text-rose-dark">
            Terços Personalizados
          </span>
          <h2 className="text-balance font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
            {personalizedRosariesContent.title}
          </h2>
          <p className="text-balance text-base leading-relaxed text-ink/80 sm:text-lg">
            {personalizedRosariesContent.text}
          </p>

          <ul className="grid w-full gap-3 sm:grid-cols-2">
            {personalizedRosariesContent.options.map((option) => (
              <li key={option} className="flex items-center gap-2 text-sm text-ink/80">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                {option}
              </li>
            ))}
          </ul>
          <p className="text-xs text-ink/60">
            * Personalizações sujeitas à consulta de disponibilidade de modelos, cores e materiais.
          </p>

          <a
            href={getWhatsAppLink(
              'Olá! Conheci a Maria Rosa Mística pelo site e gostaria de informações sobre terços personalizados.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-brown-dark"
          >
            {personalizedRosariesContent.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
