import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import PropertyDetails from "@/app/components/real-state/property-details";

export default function DetalhesImoveis({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="h-screen">
      <Header />
      <PropertyDetails params={params} />
      <Footer />
    </div>
  );
}
