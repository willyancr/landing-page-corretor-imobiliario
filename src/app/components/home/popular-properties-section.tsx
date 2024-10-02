"use client";

import { DataRealState } from "@/app/types/real-state";
import { Bath, BedDouble, House } from "lucide-react";
import { formatCurrency } from "@/app/utils/moeda";
import BadgeRealState from "./badge-real-state";
import { useEffect, useState } from "react";
import { api } from "@/app/lib/axios";
import Image from "next/image";
import Link from "next/link";

export default function PopularPropertiesSection() {
  const [data, setData] = useState<DataRealState[]>([]);

  useEffect(() => {
    api
      .get(
        "/imoveis?filters[destaque][$eq]=true&pagination[limit]=6&sort[0]=createdAt:desc&populate[capa]=*",
      )
      .then((response) => {
        setData(response.data.data);
      });
  }, []);

  return (
    <div className="my-text-mt container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
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
            alt="logo componente"
            width={20}
            height={20}
            quality={100}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((card) => (
          <div key={card.id} className="flex w-full flex-col gap-4">
            <Link href={`/detalhes-imoveis/${card.attributes.slug}`}>
              <Image
                src={card.attributes.capa.data.attributes.url}
                alt="Imagem do imóvel"
                width={500}
                height={300}
                quality={100}
                className="h-[200px] w-full rounded-md object-cover shadow-md transition-all duration-200 ease-linear hover:scale-105"
              />
            </Link>

            <div className="w-32 border-b-2 border-zinc-950" />

            <div className="flex flex-col">
              <span className="text-2xl font-semibold">
                {formatCurrency(card.attributes.preco)}
              </span>
              <span className="text-sm">{card.attributes.titulo}</span>
            </div>

            <div className="w-full border-b-[1px] border-zinc-200" />
            <div className="flex items-center gap-3 lg:justify-between">
              <BadgeRealState>
                <House size={16} />
                {card.attributes.metragem}m²
              </BadgeRealState>
              <BadgeRealState>
                <BedDouble size={16} />
                {card.attributes.quartos}
              </BadgeRealState>
              <BadgeRealState>
                <Bath size={16} />
                {card.attributes.banheiros}
              </BadgeRealState>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
