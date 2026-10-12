import { Clock, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { address, brand, contact, openingHoursNote } from '../../data/siteContent';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Location() {
  return (
    <section id="loja" className="section-padding bg-white">
      <div className="container-custom flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Loja Física" title="Venha nos visitar." />

        <div className="grid w-full gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6 rounded-3xl bg-cream p-8 ring-1 ring-brown/5">
            <div>
              <h3 className="font-display text-xl font-semibold text-brown-dark">{brand.name}</h3>
              <p className="text-sm uppercase tracking-wide text-rose-dark">{brand.tagline}</p>
            </div>

            <div className="flex items-start gap-3 text-sm text-ink/80">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>
                {address.street} — {address.neighborhood}
                <br />
                {address.city}
                <br />
                {address.zip}
              </span>
            </div>

            <div className="flex items-start gap-3 text-sm text-ink/80">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>Horário informado no Instagram: {openingHoursNote}</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={address.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-5 py-3 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-brown-dark"
              >
                <Navigation className="h-4 w-4" />
                Como Chegar
              </a>
              <a
                href={getWhatsAppLink('Olá! Gostaria de saber mais sobre a loja física da Maria Rosa Mística.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brown/20 px-5 py-3 text-sm font-semibold text-brown-dark transition-colors hover:border-gold hover:bg-gold/10"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>

            <p className="text-xs text-ink/50">Telefone: {contact.phoneDisplay}</p>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-brown/5">
            <iframe
              title={`Mapa de localização da ${brand.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(address.mapsEmbedQuery)}&output=embed`}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
