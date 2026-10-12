export type GalleryFilter = 'todos' | 'imagens' | 'tercos' | 'biblias' | 'presentes' | 'personalizados';

export interface GalleryImage {
  id: string;
  name: string;
  src: string;
  srcFallback: string;
  alt: string;
  category: Exclude<GalleryFilter, 'todos'>;
}

export const galleryFilters: { key: GalleryFilter; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'imagens', label: 'Imagens' },
  { key: 'tercos', label: 'Terços' },
  { key: 'biblias', label: 'Bíblias' },
  { key: 'presentes', label: 'Presentes' },
  { key: 'personalizados', label: 'Personalizados' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'terco-noiva',
    name: 'Terço para Noiva',
    src: '/images/terco-noiva.webp',
    srcFallback: '/images/terco-noiva.jpg',
    alt: 'Terço de pérolas com crucifixo dourado nas mãos de uma noiva',
    category: 'tercos',
  },
  {
    id: 'nossa-senhora-fatima',
    name: 'Nossa Senhora de Fátima',
    src: '/images/nossa-senhora-fatima.webp',
    srcFallback: '/images/nossa-senhora-fatima.jpg',
    alt: 'Imagem de Nossa Senhora de Fátima',
    category: 'imagens',
  },
  {
    id: 'sagrada-familia',
    name: 'Sagrada Família',
    src: '/images/sagrada-familia.webp',
    srcFallback: '/images/sagrada-familia.jpg',
    alt: 'Imagem da Sagrada Família',
    category: 'imagens',
  },
  {
    id: 'imagens-sao-jose',
    name: 'Artigos de São José',
    src: '/images/imagens-sao-jose.webp',
    srcFallback: '/images/imagens-sao-jose.jpg',
    alt: 'Coleção de imagens e artigos devocionais de São José',
    category: 'presentes',
  },
  {
    id: 'loja-interior-01',
    name: 'Bíblias e Artigos da Loja',
    src: '/images/loja-interior-01.webp',
    srcFallback: '/images/loja-interior-01.jpg',
    alt: 'Interior da loja física Maria Rosa Mística com livros e artigos religiosos',
    category: 'biblias',
  },
  {
    id: 'loja-interior-02',
    name: 'Acessórios Personalizados',
    src: '/images/loja-interior-02.webp',
    srcFallback: '/images/loja-interior-02.jpg',
    alt: 'Interior da loja física Maria Rosa Mística com acessórios e terços',
    category: 'personalizados',
  },
];
