import PopularPropertiesSection from "@/app/components/popular-properties-section";
import NewsletterSection from "@/app/components/newsletter-section";
import DreamHomeSection from "@/app/components/dream-home-section";
import MainHome from "@/app/components/main-home";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="h-screen background">
      <Header />
      <MainHome />
      <PopularPropertiesSection />
      <DreamHomeSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
