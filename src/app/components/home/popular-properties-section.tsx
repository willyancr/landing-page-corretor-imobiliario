"use client";
import { DataRealState } from "@/app/types/real-state";
import BadgeRealState from "./badge-real-state";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/app/lib/axios";
import { House, BedDouble, Bath } from "lucide-react";

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
            alt="logo componente"
            width={20}
            height={20}
            quality={100}
          />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-10 lg:justify-normal">
        {data?.map((card) => (
          <div
            key={card.id}
            className="flex w-[460px] flex-col gap-4 md:w-[410px] lg:w-[280px] xl:w-[340px]"
          >
            <Link href={`/detalhes-imoveis/${card.attributes.slug}`}>
              <Image
                src={card.attributes.capa.data.attributes.url}
                alt="Imagem do imóvel"
                width={300}
                height={300}
                quality={100}
                className="h-[200px] w-[460px] rounded-md shadow-md transition-all duration-200 ease-linear hover:scale-105 md:w-[410px] lg:w-[280px] xl:w-[340px]"
              />
            </Link>

            <div className="w-32 border-b-2 border-zinc-950" />

            <div className="flex flex-col">
              <span className="text-2xl font-semibold">
                {card.attributes.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
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
