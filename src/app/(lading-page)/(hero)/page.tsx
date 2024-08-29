import PopularPropertiesSection from "@/app/components/popular-properties-section";
import Home from "../home/page";
import DreamHomeSection from "@/app/components/dream-home-section";

export default function HeroPage() {
  return (
    <div>
      <Home />
      <PopularPropertiesSection />
      <DreamHomeSection />
    </div>
  );
}
