import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredProducts } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../ui/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FeaturedProducts() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container-custom flex flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Vitrine" title="Peças que encantam e inspiram." />
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Produto anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/20 text-brown-dark transition-colors hover:border-gold hover:bg-gold/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo produto"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/20 text-brown-dark transition-colors hover:border-gold hover:bg-gold/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={(instance) => {
            swiperRef.current = instance;
          }}
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="w-full !overflow-visible !pb-4"
        >
          {featuredProducts.map((product, index) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <ProductCard product={product} delay={(index % 3) * 0.08} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
