import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuthorityStrip from "@/components/AuthorityStrip";
import PainSection from "@/components/PainSection";
import ResultsGallery from "@/components/ResultsGallery";
import MethodSection from "@/components/MethodSection";
import TransformationSection from "@/components/TransformationSection";
import AboutFer from "@/components/AboutFer";
import TestimonialsSection from "@/components/TestimonialsSection";
import TargetAudience from "@/components/TargetAudience";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingAccess from "@/components/FloatingAccess";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityStrip />
        <PainSection />
        <ResultsGallery />
        <MethodSection />
        <TransformationSection />
        <AboutFer />
        <TestimonialsSection />
        <TargetAudience />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingAccess />
    </>
  );
}
