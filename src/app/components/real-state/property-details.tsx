"use client";
import PropertyFeaturesList from "./property-features-list";
import { DataRealState } from "@/app/types/real-state";
import { useLoadScript } from "@react-google-maps/api";
import { Bath, BedDouble, House } from "lucide-react";
import CardFormContact from "./card-form-contact";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/app/lib/axios";
import Loading from "../loading";
import Map from "../google-map";
import Image from "next/image";

type Coordinates = {
  lat: number;
  lng: number;
};

const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export default function PropertyDetails({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [data, setData] = useState<DataRealState>();
  const [isLoading, setIsLoading] = useState(true);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    api
      .get(
        `/imoveis?filters[slug][$eq]=${params.slug}&populate[capa]=*&populate[galeria]=*&populate[categoria]=*`,
      )
      .then((respose) => {
        setData(respose.data.data[0]);
      });
  }, [params.slug]);

  useEffect(() => {
    // Carrega a API do Google Maps
    if (isLoaded && data && data?.attributes.endereco) {
      // Cria um objeto geocoder
      const geocoder = new google.maps.Geocoder();

      // Tenta geocodificar o endereço do imóvel
      geocoder.geocode(
        { address: data?.attributes.endereco },
        (results, status) => {
          if (status === "OK" && results && results[0]) {
            // Extrai as coordenadas do resultado
            const { lat, lng } = results[0].geometry.location;
            // Atualiza o estado com as coordenadas
            setCoordinates({ lat: lat(), lng: lng() });
          } else {
            console.error("Geocodificação falhou devido a: " + status);
          }
        },
      );
    }
  }, [isLoaded, data]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-[1200px] space-y-10 px-4 py-10 sm:px-12">
      <div className="m-auto flex w-full max-w-[450px] flex-col gap-5">
        <h1 className="text-center font-CoHeadlineBold text-4xl font-bold md:text-5xl">
          Detalhes do imóvel
        </h1>

        <span className="text-center text-xs md:text-sm">
          Home / Imóveis / Detalhes
        </span>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button className="w-full md:w-44">
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
            className="w-full bg-tertiary md:w-44"
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
          className={`mx-auto h-[300px] w-full rounded-lg object-cover md:h-[500px] ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoadingComplete={() => setIsLoading(false)}
        />

        <span className="absolute left-4 top-4 w-fit rounded-lg bg-zinc-50 px-2 py-1 text-sm font-semibold shadow-xl md:left-6 md:top-6 md:px-3 md:py-2 md:text-base">
          {data?.attributes.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <h2 className="text-xl font-medium md:text-2xl">
            {data?.attributes.titulo}
          </h2>
          <div className="flex flex-wrap items-center gap-2">
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

        <div className="mb-10 flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex-1 space-y-5">
            <h1 className="text-2xl font-medium">Sobre a propriedade</h1>
            {data?.attributes.descricao.map((text, index) => (
              <p key={index}>{text.children[0].text}</p>
            ))}
          </div>

          <div className="w-full md:w-auto">
            <CardFormContact params={params} />
          </div>
        </div>

        <PropertyFeaturesList params={params} />

        <div className="my-10 w-full border-b-[1px] border-zinc-200" />

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-medium">
            Localização do imóvel no mapa
          </h2>
          {coordinates && (
            <Map latitude={coordinates.lat} longitude={coordinates.lng} />
          )}
        </div>

        <div className="my-10 w-full border-b-[1px] border-zinc-200" />

        <div className="mb-10 space-y-5">
          <h1 className="text-2xl font-medium md:text-2xl">
            Galeria do imóvel
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {data?.attributes.galeria.data.map((foto) => (
              <Image
                key={foto.id}
                src={foto.attributes.url}
                alt="Imagem do imóvel"
                width={1000}
                height={1000}
                quality={100}
                className="h-[200px] w-[310px] rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105 sm:h-[300px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:w-[350px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
