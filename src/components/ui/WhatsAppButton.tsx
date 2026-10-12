import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../../utils/whatsapp';

/** Floating global WhatsApp button, discreet and accessible. */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Maria Rosa Mística"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} fill="white" />
      <span className="sr-only">Falar no WhatsApp</span>
    </motion.a>
  );
}
