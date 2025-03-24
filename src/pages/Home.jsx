import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import PhotoGallery from "@/components/photo-gallery";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div className="bg-muted/50">
          <ServicesSection />
        </div>
        <AboutSection />
        <div className="bg-muted/50">
          <PhotoGallery />
        </div>
        {/* <Testimonials /> */}
        <div className="bg-muted/50">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}