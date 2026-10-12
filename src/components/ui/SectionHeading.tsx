import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ eyebrow, title, text, align = 'center' }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? (
        <span className="divider-ornament font-sans text-xs font-semibold uppercase tracking-[0.2em] text-rose-dark">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold text-brown-dark sm:text-4xl">{title}</h2>
      {text ? <p className="text-balance text-base leading-relaxed text-ink/80 sm:text-lg">{text}</p> : null}
    </Reveal>
  );
}
