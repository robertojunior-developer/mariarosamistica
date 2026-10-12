import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas Frequentes" />

        <div className="w-full max-w-3xl divide-y divide-brown/10 rounded-3xl bg-white shadow-card ring-1 ring-brown/5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-brown-dark sm:text-lg"
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-rose-dark transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink/75 sm:text-base">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
