import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import SkillsSection from "@/components/skills-section";
import SummarySection from "@/components/summary-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SummarySection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
