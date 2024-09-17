import PropertyDetails from "@/app/components/real-state/property-details";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalhes do Imóvel | Artur Ribeiro",
};
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
