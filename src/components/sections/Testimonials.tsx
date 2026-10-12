import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * Ainda não há depoimentos reais autorizados para publicação. Em vez de inventar
 * avaliações, exibimos uma chamada institucional neutra. Assim que houver
 * depoimentos reais de clientes, substituir este bloco por cards com nome,
 * avaliação e produto adquirido.
 */
export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom flex flex-col items-center gap-8 text-center">
        <SectionHeading title="Carinho em cada detalhe." />
        <Reveal className="max-w-xl rounded-3xl bg-cream px-8 py-10 ring-1 ring-brown/5">
          <p className="text-base leading-relaxed text-ink/80">
            Estamos reunindo os depoimentos dos nossos clientes para compartilhar aqui em breve. Se você já
            comprou conosco e deseja deixar sua experiência, fale com a gente pelo WhatsApp.
          </p>
          <a
            href={getWhatsAppLink('Olá! Gostaria de compartilhar minha experiência com a Maria Rosa Mística.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brown/20 px-5 py-2.5 text-sm font-semibold text-brown-dark transition-colors hover:border-gold hover:bg-gold/10"
          >
            <MessageCircle className="h-4 w-4" />
            Compartilhar experiência
          </a>
        </Reveal>
      </div>
    </section>
  );
}
