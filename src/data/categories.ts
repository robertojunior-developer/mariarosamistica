export interface Category {
  id: string;
  name: string;
  description: string;
  /** Caminho da fotografia real do produto/loja. `null` quando ainda não há imagem confirmada. */
  image: string | null;
  imageFallback?: string;
  whatsappMessage: string;
}

export const categories: Category[] = [
  {
    id: 'imagens-santos',
    name: 'Imagens de Santos',
    description: 'Imagens de Nossa Senhora, São José e outros santos para sua casa ou oratório.',
    image: '/images/nossa-senhora-fatima.webp',
    imageFallback: '/images/nossa-senhora-fatima.jpg',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as Imagens de Santos da Maria Rosa Mística.',
  },
  {
    id: 'tercos-rosarios',
    name: 'Terços e Rosários',
    description: 'Terços personalizados, para noivas e demais modelos, consultados conforme disponibilidade.',
    image: '/images/terco-noiva.webp',
    imageFallback: '/images/terco-noiva.jpg',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os Terços e Rosários da Maria Rosa Mística.',
  },
  {
    id: 'biblias-livros',
    name: 'Bíblias e Livros',
    description: 'Materiais de leitura e formação religiosa para toda a família.',
    image: '/images/loja-interior-01.webp',
    imageFallback: '/images/loja-interior-01.jpg',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre Bíblias e Livros Católicos da Maria Rosa Mística.',
  },
  {
    id: 'artigos-veiculos',
    name: 'Artigos para Veículos',
    description: 'Adesivos e artigos devocionais para levar a fé também no seu veículo.',
    image: null,
    whatsappMessage: 'Olá! Gostaria de saber mais sobre artigos para veículos da Maria Rosa Mística.',
  },
  {
    id: 'camisetas-religiosas',
    name: 'Camisetas Religiosas',
    description: 'Peças com estampas e mensagens de fé, disponíveis em modelos variados.',
    image: '/images/loja-interior-02.webp',
    imageFallback: '/images/loja-interior-02.jpg',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as Camisetas Religiosas da Maria Rosa Mística.',
  },
  {
    id: 'presentes-personalizados',
    name: 'Presentes e Personalizados',
    description: 'Lembranças e artigos personalizados para presentear em momentos especiais de fé.',
    image: '/images/imagens-sao-jose.webp',
    imageFallback: '/images/imagens-sao-jose.jpg',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre presentes e artigos personalizados da Maria Rosa Mística.',
  },
];
