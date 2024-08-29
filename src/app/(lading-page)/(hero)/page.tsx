import PopularPropertiesSection from "@/app/components/popular-properties-section";
import Home from "../home/page";
import DreamHomeSection from "@/app/components/dream-home-section";
import NewsletterSection from "@/app/components/newsletter-section";
import Footer from "@/app/components/footer";

export default function HeroPage() {
  return (
    <div>
      <Home />
      <PopularPropertiesSection />
      <DreamHomeSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
