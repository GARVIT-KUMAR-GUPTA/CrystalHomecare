import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonial from '../components/common/Testimonial';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <ContactSection />
    </>
  );
};

export default Home;
