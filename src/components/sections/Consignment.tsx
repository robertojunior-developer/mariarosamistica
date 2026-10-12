import { HandHeart, Users } from 'lucide-react';
import { consignmentContent } from '../../data/siteContent';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';

export default function Consignment() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        <Reveal delay={0.1} className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <span className="divider-ornament font-sans text-xs font-semibold uppercase tracking-[0.2em] text-rose-dark">
            Consignados para Eventos
          </span>
          <h2 className="text-balance font-display text-3xl font-semibold text-brown-dark sm:text-4xl">
            {consignmentContent.title}
          </h2>
          <p className="text-balance text-base leading-relaxed text-ink/80 sm:text-lg">{consignmentContent.text}</p>

          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-sm text-ink/75">
              <Users className="h-5 w-5 text-gold" />
              Encontros e retiros
            </span>
            <span className="flex items-center gap-2 text-sm text-ink/75">
              <HandHeart className="h-5 w-5 text-gold" />
              Consignação a combinar
            </span>
          </div>

          <a
            href={getWhatsAppLink(
              'Olá! Estou organizando um encontro/evento religioso e gostaria de consultar as condições de consignação de artigos religiosos.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-brown-dark shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {consignmentContent.cta}
          </a>
        </Reveal>

        <Reveal className="order-1 overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-brown/5 lg:order-2">
          <SmartImage
            src={consignmentContent.image}
            fallback={consignmentContent.imageFallback}
            alt="Artigos religiosos disponíveis na Maria Rosa Mística para encontros e eventos"
            className="h-80 w-full object-cover sm:h-[26rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
