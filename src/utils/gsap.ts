import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Registers GSAP plugins exactly once and disables heavy scrubbing when the user prefers reduced motion. */
export function ensureGsapRegistered() {
  if (registered) return gsap;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
  return gsap;
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export { gsap, ScrollTrigger };
