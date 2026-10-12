import { MessageCircle } from 'lucide-react';
import { ctaFinalContent } from '../../data/siteContent';
import { getWhatsAppLink } from '../../utils/whatsapp';
import Reveal from '../ui/Reveal';

export default function Contact() {
  return (
    <section id="contato" className="section-padding bg-brown-dark">
      <div className="container-custom flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <h2 className="text-balance font-display text-3xl font-semibold text-cream sm:text-4xl">
            {ctaFinalContent.title}
          </h2>
          <p className="max-w-xl text-balance text-base leading-relaxed text-cream/80 sm:text-lg">
            {ctaFinalContent.text}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={getWhatsAppLink(
              'Olá! Conheci a Maria Rosa Mística pelo site e gostaria de conhecer os produtos disponíveis.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-brown-dark shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" />
            {ctaFinalContent.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
