import Button from "@/app/components/button";
import Header from "@/app/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-zinc-950 bg-home bg-no-repeat text-zinc-50">
      <Header />
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-12 pt-10">
        <div className="flex items-center gap-20">
          <h1 className="flex-1 font-CoHeadlineBold text-[3.4rem] font-bold leading-tight">
            O melhor lugar para encontrar a{" "}
            <span className="text-secondary">casa dos seus sonhos</span>
          </h1>

          <div className="flex-1 space-y-6 px-5">
            <span className="font-light">
              Sou{" "}
              <span className="font-medium text-secondary">Artur Ribeiro</span>,
              corretor de imóveis, auxiliando-o na COMPRA, VENDA ou ALUGUEL do
              seu imóvel. Vamos conversar?
            </span>

            <Button>Entre em contato</Button>

            <div className="flex gap-12">
              <div className="flex flex-col">
                <p className="text-lg font-semibold">
                  500<span className="text-secondary">+</span>
                </p>
                <span className="text-xs">Imóveis</span>
                <span className="text-xs">anunciados</span>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">
                  500<span className="text-secondary">+</span>
                </p>
                <span className="text-xs">Famílias</span>
                <span className="text-xs">felizes</span>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">
                  09<span className="text-secondary">+</span>
                </p>
                <span className="text-xs">Anos atuando</span>
                <span className="text-xs">no mercado</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/state-home.png"
            width={1240}
            height={465}
            alt="state home"
            quality={100}
          />
        </div>
      </main>
    </div>
  );
}
