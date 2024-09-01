import Header from "@/app/components/header";
import InputSearchState from "@/app/components/input-search-state";
import RealEstate from "@/app/components/real-estate";
import Image from "next/image";

export default function Imoveis() {
  return (
    <div className="h-screen">
      <Header />
      <div className="relative mx-auto w-full max-w-[1200px]">
        <Image
          src="/bg-imoveis.png"
          alt="Logo"
          width={1200}
          height={1200}
          quality={100}
          className="mx-auto h-[800px] w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 mx-auto flex h-full w-full flex-col items-center justify-center gap-20 text-5xl text-zinc-50">
          <div className="flex items-center gap-6">
            <Image
              src="/logo-componente.png"
              alt="Logo"
              width={70}
              height={70}
              quality={100}
            />
            <h1 className="font-CoHeadlineBold">
              Encontre seu imovél favorito
            </h1>
          </div>
          <InputSearchState />
        </div>
      </div>
      <RealEstate />
    </div>
  );
}
