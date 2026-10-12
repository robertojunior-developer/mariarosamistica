import { Gift, Heart, Sparkle } from 'lucide-react';
import { introContent } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const icons = [Sparkle, Heart, Gift];

export default function Introduction() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom flex flex-col items-center gap-14">
        <SectionHeading title={introContent.title} text={introContent.text} />

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {introContent.differentiators.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal
                key={item.title}
                delay={index * 0.1}
                className="flex flex-col items-center gap-4 rounded-3xl bg-cream px-6 py-10 text-center ring-1 ring-brown/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-rose-dark">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-semibold text-brown-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/75">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
