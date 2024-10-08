"use client";
import { DataRealState } from "@/app/types/real-state";
import { useSearch } from "@/app/context/input-search";
import { Bath, BedDouble, House } from "lucide-react";
import BadgeRealState from "../home/badge-real-state";
import { useEffect, useState } from "react";
import { api } from "@/app/lib/axios";
import Image from "next/image";
import Link from "next/link";

export default function RealState() {
  const { search, transactionType, room, typeRealState } = useSearch();
  const [data, setData] = useState<DataRealState[]>([]);

  useEffect(() => {
    api
      .get("/imoveis?populate[capa]=*&populate[categoria]=*")
      .then((response) => {
        setData(response.data.data);
      });
  }, []);

  return (
    <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
      <div className="mb-10 flex items-center gap-2">
        <h1 className="font-CoHeadlineBold text-4xl font-bold">
          Imóveis disponíveis
        </h1>
        <Image
          src="/logo-componente_right.png"
          alt="Image 1"
          width={100}
          height={100}
          quality={100}
          className="mt-2.5 size-16 rotate-90 sm:size-10 sm:w-8"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data
          ?.filter((card) =>
            card.attributes.titulo
              ?.toLowerCase()
              ?.includes(search.toLowerCase()),
          )
          .filter((card) =>
            transactionType === "todos"
              ? true
              : card.attributes.tipoImoveis?.toString() === transactionType,
          )
          .filter((card) =>
            room === "todos"
              ? true
              : card.attributes.quartos?.toString() === room,
          )
          .filter((card) =>
            typeRealState === "todos"
              ? true
              : card.attributes.categoria?.data?.attributes?.Titulo?.toLowerCase() ===
                typeRealState,
          )
          .map((card) => (
            <div key={card.id} className="flex flex-col gap-4">
              <Link href={`/detalhes-imoveis/${card.attributes.slug}`}>
                <Image
                  src={card.attributes.capa.data.attributes.url}
                  alt="Imagem do imóvel"
                  width={300}
                  height={200}
                  quality={100}
                  className="h-48 w-full rounded-md object-cover shadow-md transition-all duration-200 ease-linear hover:scale-105"
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
              <div className="flex items-center justify-between">
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
