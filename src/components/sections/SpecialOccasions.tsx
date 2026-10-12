import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight, PartyPopper } from 'lucide-react';
import { specialOccasions } from '../../data/siteContent';
import { getWhatsAppLink } from '../../utils/whatsapp';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import 'swiper/css';

export default function SpecialOccasions() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Ocasiões Especiais"
          title="Para celebrar momentos que ficam na memória."
        />

        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="w-full !overflow-visible !pb-4"
        >
          {specialOccasions.map((occasion, index) => (
            <SwiperSlide key={occasion.title} className="!h-auto">
              <Reveal
                delay={(index % 3) * 0.08}
                className="flex h-full flex-col gap-4 rounded-3xl bg-white p-7 shadow-card ring-1 ring-brown/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-light/25 text-rose-dark">
                  <PartyPopper className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-semibold text-brown-dark">{occasion.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink/75">{occasion.description}</p>
                <a
                  href={getWhatsAppLink(
                    `Olá! Gostaria de consultar opções de artigos religiosos para ${occasion.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-dark transition-colors hover:text-gold"
                >
                  Consultar opções
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
