"use client";
import PropertyFeaturesList from "./property-features-list";
import { DataRealState } from "@/app/types/real-state";
import { Bath, BedDouble, House } from "lucide-react";
import CardFormContact from "./card-form-contact";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/app/lib/axios";
import Image from "next/image";
import Loading from "../loading";

export default function PropertyDetails({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [data, setData] = useState<DataRealState>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(
        `/imoveis?filters[slug][$eq]=${params.slug}&populate[capa]=*&populate[galeria]=*&populate[categoria]=*`,
      )
      .then((respose) => {
        setData(respose.data.data[0]);
      });
  }, [params.slug]);

  if (!data) {
    return <Loading />; // Exibe algo enquanto os dados são carregados
  }

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-12 py-10">
      <div className="m-auto flex w-[450px] flex-col gap-5">
        <h1 className="font-CoHeadlineBold text-5xl font-bold">
          Detalhes do imóvel
        </h1>

        <span className="text-center text-sm">Home / Imóveis / Detalhes</span>

        <div className="flex items-center justify-center gap-4">
          <Button className="w-44">
            <a
              href="https://api.whatsapp.com/message/T65AYX4JNWVCO1?autoload=1&app_absent=0"
              target="_blank"
              className="flex items-center gap-2"
            >
              Entre em contato
              <FaWhatsapp size={20} />
            </a>
          </Button>
          <Button
            className="w-44 bg-tertiary"
            onClick={() => router.push("/imoveis")}
          >
            Voltar
          </Button>
        </div>
      </div>

      <div className="relative flex flex-col gap-5">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse rounded-lg bg-gray-200" />
        )}
        <Image
          src={data?.attributes.capa.data.attributes.url}
          alt="Imagem do imóvel"
          width={1200}
          height={1200}
          quality={100}
          className={`mx-auto h-[500px] w-full rounded-lg object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoadingComplete={() => setIsLoading(false)}
        />

        <span className="absolute left-6 top-6 w-fit rounded-lg bg-zinc-50 px-3 py-2 font-semibold shadow-xl">
          {data?.attributes.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">{data?.attributes.titulo}</h2>
          <div className="flex items-center gap-2">
            <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm">
              <House size={16} />
              {data?.attributes.metragem}m²
            </div>
            <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm">
              <BedDouble size={16} /> {data?.attributes.quartos}
            </div>
            <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm">
              <Bath size={16} /> {data?.attributes.banheiros}
            </div>
          </div>
        </div>

        <div className="my-10 w-full border-b-[1px] border-zinc-200" />

        <div className="mb-10 flex justify-between gap-12">
          <div className="flex-1 space-y-5">
            <h1 className="text-2xl font-medium">Sobre a propriedade</h1>
            {data?.attributes.descricao.map((text, index) => (
              <p key={index}>{text.children[0].text}</p>
            ))}
          </div>

          <div className=" ">
            <CardFormContact params={params} />
          </div>
        </div>

        <PropertyFeaturesList params={params} />

        <div className="my-10 w-full border-b-[1px] border-zinc-200" />

        <div className="mb-10 space-y-5">
          <h1 className="text-2xl font-medium">Galeria do imóvel</h1>

          <div className="flex flex-wrap justify-center gap-4">
            {data?.attributes.galeria.data.map((foto) => (
              <Image
                key={foto.id}
                src={foto.attributes.url}
                alt="Imagem do imóvel"
                width={1000}
                height={1000}
                quality={100}
                className="h-[300px] w-[325px] rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
