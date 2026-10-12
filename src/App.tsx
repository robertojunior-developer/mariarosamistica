import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import Hero from './components/sections/Hero';
import Introduction from './components/sections/Introduction';
import About from './components/sections/About';
import DevotionalBanner from './components/sections/DevotionalBanner';
import Categories from './components/sections/Categories';
import Gallery from './components/sections/Gallery';
import FeaturedProducts from './components/sections/FeaturedProducts';
import PersonalizedRosaries from './components/sections/PersonalizedRosaries';
import SpecialOccasions from './components/sections/SpecialOccasions';
import Consignment from './components/sections/Consignment';
import Instagram from './components/sections/Instagram';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Introduction />
        <About />
        <DevotionalBanner />
        <Categories />
        <Gallery />
        <FeaturedProducts />
        <PersonalizedRosaries />
        <SpecialOccasions />
        <Consignment />
        <Instagram />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

export default App;
