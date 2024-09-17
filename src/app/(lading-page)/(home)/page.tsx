import PopularPropertiesSection from "@/app/components/home/popular-properties-section";
import NewsletterSection from "@/app/components/home/newsletter-section";
import DreamHomeSection from "@/app/components/home/dream-home-section";
import MainHome from "@/app/components/home/main-home";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="background h-screen">
      <Header />
      <MainHome />
      <PopularPropertiesSection />
      <DreamHomeSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
