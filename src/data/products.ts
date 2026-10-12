export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  imageFallback: string;
  description: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'terco-noiva',
    name: 'Terço para Noiva',
    category: 'Terços',
    image: '/images/terco-noiva.webp',
    imageFallback: '/images/terco-noiva.jpg',
    description: 'Terço delicado em pérolas e detalhes dourados, ideal para compor a cerimônia de casamento.',
    featured: true,
  },
  {
    id: 'nossa-senhora-fatima',
    name: 'Nossa Senhora de Fátima',
    category: 'Imagens Sacras',
    image: '/images/nossa-senhora-fatima.webp',
    imageFallback: '/images/nossa-senhora-fatima.jpg',
    description: 'Imagem sacra de Nossa Senhora de Fátima, disponível conforme estoque da loja.',
    featured: true,
  },
  {
    id: 'sagrada-familia',
    name: 'Sagrada Família',
    category: 'Imagens Sacras',
    image: '/images/sagrada-familia.webp',
    imageFallback: '/images/sagrada-familia.jpg',
    description: 'Imagem da Sagrada Família em acabamento dourado, consultar disponibilidade.',
    featured: true,
  },
  {
    id: 'imagens-sao-jose',
    name: 'Imagens e Artigos de São José',
    category: 'Imagens Sacras',
    image: '/images/imagens-sao-jose.webp',
    imageFallback: '/images/imagens-sao-jose.jpg',
    description: 'Seleção de imagens e artigos devocionais de São José em diferentes tamanhos e acabamentos.',
    featured: true,
  },
  {
    id: 'camisetas-religiosas',
    name: 'Camisetas Religiosas',
    category: 'Camisetas',
    image: '/images/loja-interior-01.webp',
    imageFallback: '/images/loja-interior-01.jpg',
    description: 'Camisetas com estampas de fé, disponíveis em modelos e tamanhos variados na loja física.',
    featured: true,
  },
  {
    id: 'acessorios-religiosos',
    name: 'Acessórios Religiosos',
    category: 'Acessórios',
    image: '/images/loja-interior-02.webp',
    imageFallback: '/images/loja-interior-02.jpg',
    description: 'Terços, medalhas, pulseiras e acessórios devocionais expostos em nossa loja física.',
    featured: true,
  },
];

export const featuredProducts = products.filter((product) => product.featured);
