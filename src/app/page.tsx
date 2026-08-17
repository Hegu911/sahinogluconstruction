import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero/HeroSection";
import GiftsSection from "@/components/gifts/GiftsSection";
import StatsSection from "@/components/stats/StatsSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProcessSection from "@/components/process/ProcessSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import BeforeAfterSection from "@/components/before-after/BeforeAfterSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import CtaSection from "@/components/cta/CtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GiftsSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
