import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brown text-cream hover:bg-brown-dark shadow-soft',
  secondary: 'bg-gold text-brown-dark hover:bg-gold-light shadow-soft',
  outline: 'border border-brown/30 text-brown-dark hover:border-gold hover:bg-gold/10',
  ghost: 'text-brown-dark hover:bg-rose-light/20',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50';

interface ButtonVariantProps {
  variant?: Variant;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  icon,
  className = '',
  children,
  ...buttonProps
}: ButtonVariantProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  icon,
  className = '',
  children,
  ...anchorProps
}: ButtonVariantProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...anchorProps}>
      {children}
      {icon}
    </a>
  );
}

export default Button;
