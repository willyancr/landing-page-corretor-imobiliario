"use client";
import { api } from "@/app/lib/axios";
import { DataRealState } from "@/app/types/real-state";
import { Bath, BedDouble, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BadgeRealState from "../home/badge-real-state";

export default function RealState() {
  const [data, setData] = useState<DataRealState[]>([]);

  useEffect(() => {
    api
      .get(
        "/imoveis?populate[capa]=*&populate[categoria]=*",
      )
      .then((response) => {
        setData(response.data.data);
      });
  }, []);

  return (
    <div className="mx-auto my-12 max-w-[1200px] space-y-8 px-12">
      <div className="flex gap-4">
        <h1 className="font-CoHeadlineBold text-4xl font-bold">
          Imóveis disponíveis
        </h1>
        <Image
          src="/logo-componente_right.png"
          alt="Image 1"
          width={30}
          height={30}
          quality={100}
          className="mt-2.5 rotate-90"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-10 lg:justify-normal">
        {data?.map((card) => (
          <div
            key={card.id}
            className="flex w-[460px] flex-col gap-4 md:w-[410px] lg:w-[280px] xl:w-[340px]"
          >
            <Link href={`/detalhes-imoveis/${card.attributes.slug}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_URL_IMAGE}${card.attributes.capa.data.attributes.url}`}
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
