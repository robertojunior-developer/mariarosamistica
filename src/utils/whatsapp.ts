export const WHATSAPP_NUMBER = '5561991676833';

/**
 * Builds a wa.me link with an URL-encoded message.
 * Always opens in a new tab via rel="noopener noreferrer" at the call site.
 */
export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Conheci a Maria Rosa Mística pelo site e gostaria de conhecer os produtos disponíveis.';
