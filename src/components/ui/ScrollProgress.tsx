import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gold progress bar fixed to the top of the viewport, tracking scroll position. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold via-rose to-gold-light"
      style={{ scaleX }}
    />
  );
}
