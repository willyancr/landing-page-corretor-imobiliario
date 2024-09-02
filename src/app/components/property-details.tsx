"use client";
import { House, BedDouble, Bath, CircleCheckBig } from "lucide-react";
import CardFormContact from "./card-form-contact";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PropertyDetails() {
  const router = useRouter();
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
        <Image
          src="/state-details.jpeg"
          alt="Logo"
          width={1200}
          height={1200}
          quality={100}
          className="mx-auto h-[500px] w-full rounded-lg object-cover"
        />
        <span className="absolute left-6 top-6 w-fit rounded-lg bg-zinc-50 px-3 py-2 font-semibold shadow-xl">
          R$ 5.000.000
        </span>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Casa no centro, Palmas - TO</h2>
          <div className="flex items-center gap-2">
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
        <div className="my-10 w-full border-b-[1px] border-zinc-200" />
        <div className="mb-10 flex items-center justify-between gap-12">
          <div className="flex-1 space-y-5">
            <h1 className="text-2xl font-medium">Sobre a propriedade</h1>
            <div className="space-y-2">
              <h2>Seu lar dos sonhos, agora realidade.</h2>
              <p>
                Esta magnífica casa de 1500m² oferece todo o espaço e conforto
                que sua família precisa. Com 6 quartos, 3 banheiros e uma área
                externa convidativa, aqui você encontra o equilíbrio perfeito
                entre bem-estar e diversão.
              </p>

              <h2 className="font-medium">O que essa casa oferece:</h2>
              <ul>
                <li>
                  <strong>Ambientes amplos e aconchegantes:</strong> Ideais para
                  momentos inesquecíveis em família.
                </li>
                <li>
                  <strong>Área externa completa:</strong> Piscina, espaço
                  gourmet e muito mais para aproveitar os dias ensolarados.
                </li>
                <li>
                  <strong>Localização estratégica:</strong> Próximo a escolas,
                  parques e comércios, facilitando o dia a dia.
                </li>
              </ul>

              <p>
                Uma casa que reúne tudo o que você busca para viver com
                qualidade de vida.
              </p>
            </div>
          </div>
          <div className=" ">
            <CardFormContact />
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl font-medium">Comodidades da propriedade</h1>
          <ul className="flex flex-wrap gap-20">
            <div className="space-y-2">
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Aquecimento central
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Ar condicionado central
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Jadim
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Lavanderia
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Piscina
              </li>
            </div>
            <div className="space-y-2">
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Wifi
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Garagem 6 vagas
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Cameras de segurança
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig size={16} /> Home Theatre
              </li>
            </div>
          </ul>
        </div>
        <div className="my-10 w-full border-b-[1px] border-zinc-200" />
        <div className="mb-10 space-y-5">
          <h1 className="text-2xl font-medium">Galeria do imóvel</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <Image
                key={i}
                src="/state-details.jpeg"
                alt="Imagem 1"
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
