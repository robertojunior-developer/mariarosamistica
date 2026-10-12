import { contact } from '../../data/siteContent';
import { galleryImages } from '../../data/gallery';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';
import InstagramIcon from '../ui/InstagramIcon';

export default function Instagram() {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="section-padding bg-rose/10">
      <div className="container-custom flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Instagram"
          title="A fé também nos conecta."
          text="Acompanhe novidades, produtos, personalizações e momentos especiais da Maria Rosa Mística."
        />

        <Reveal>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-brown-dark"
          >
            <InstagramIcon className="h-4 w-4" />
            Seguir no Instagram
          </a>
        </Reveal>

        <div className="grid w-full grid-cols-3 gap-3 sm:gap-4">
          {previewImages.map((image, index) => (
            <Reveal key={image.id} delay={(index % 6) * 0.05}>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl shadow-card ring-1 ring-brown/5"
              >
                <SmartImage
                  src={image.src}
                  fallback={image.srcFallback}
                  alt={image.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
