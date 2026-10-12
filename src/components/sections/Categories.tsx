import { categories } from '../../data/categories';
import SectionHeading from '../ui/SectionHeading';
import CategoryCard from '../ui/CategoryCard';

export default function Categories() {
  return (
    <section id="categorias" className="section-padding bg-cream">
      <div className="container-custom flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Categorias"
          title="Encontre algo especial para cada momento de fé."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} delay={(index % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
