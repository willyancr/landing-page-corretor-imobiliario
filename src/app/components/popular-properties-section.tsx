import { Bath, BedDouble, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PopularPropertiesSection() {
  const cardsProperties = [
    {
      id: 1,
      title: "Apartamento no centro, Palmas - TO",
      price: "R$ 5.000.000",
      image: "/state1.png",
    },
    {
      id: 2,
      title: "Apartamento 304 sul, Palmas - TO",
      price: "R$ 1.000.000",
      image: "/state2.png",
    },
    {
      id: 3,
      title: "Casa 104 Norte, Palmas - TO",
      price: "R$ 700.000",
      image: "/state3.png",
    },
    {
      id: 4,
      title: "Apartamento JK, Palmas - TO",
      price: "R$ 2.500.000",
      image: "/state4.png",
    },
    {
      id: 5,
      title: "Casa no centro, Palmas - TO",
      price: "R$ 1.000.000",
      image: "/state1.png",
    },
    {
      id: 6,
      title: "Apartamento 504 norte, Palmas - TO",
      price: "R$ 500.000",
      image: "/state2.png",
    },
  ];

  return (
    <div className="my-text-mt mx-auto max-w-[1200px] space-y-8 px-12 py-12">
      <div className="mb-20 flex items-center justify-between">
        <h1 className="font-CoHeadlineBold text-4xl font-bold">
          Imóveis em destaque
        </h1>
        <Link
          href="/imoveis"
          className="flex items-center gap-1 transition-all hover:text-primary"
        >
          Explorar+
          <Image
            src="/logo-componente_right.png"
            alt="Image 1"
            width={20}
            height={20}
            quality={100}
          />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-10 xl:justify-between">
        {cardsProperties.map((card) => (
          <div
            key={card.id}
            className="flex w-[350px] flex-col gap-4 lg:w-[300px]"
          >
            <Link href="/detalhes-imoveis/">
              <Image
                src={card.image}
                alt="Image 1"
                width={300}
                height={300}
                quality={100}
                className="lg:w-[300px] w-[370px]  rounded-md shadow-md transition-all duration-200 ease-linear hover:scale-105"
              />
            </Link>
            <div className="w-32 border-b-2 border-zinc-950" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">{card.price}</span>
              <span className="text-sm">{card.title}</span>
            </div>
            <div className="w-full border-b-[1px] border-zinc-200" />
            <div className="flex items-center justify-between">
              <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm">
                <House size={16} />
                1500m²
              </div>
              <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm">
                <BedDouble size={16} /> 6
              </div>
              <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm">
                <Bath size={16} /> 3
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
