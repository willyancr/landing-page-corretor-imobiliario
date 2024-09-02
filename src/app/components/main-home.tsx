import Button from "@/app/components/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export default function MainHome() {
  return (
    <main className="my-text-mt mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-12 py-10 text-zinc-50">
      <div className="flex items-center gap-20">
        <h1 className="flex-1 font-CoHeadlineBold text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          O melhor lugar para encontrar a{" "}
          <span className="text-secondary">casa dos seus sonhos</span>
        </h1>

        <div className="flex-1 space-y-6 px-5">
          <span className="font-light">
            Sou{" "}
            <span className="font-medium text-secondary">Artur Ribeiro</span>,
            consultor imobiliário, auxiliando-o na COMPRA, VENDA ou ALUGUEL do
            seu imóvel. Vamos conversar?
          </span>

          <Button>
            <a
              href="https://api.whatsapp.com/message/T65AYX4JNWVCO1?autoload=1&app_absent=0"
              target="_blank"
              className="flex items-center gap-2 transition-all hover:text-secondary"
            >
              Entre em contato
              <FaWhatsapp size={20} />
            </a>
          </Button>

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
      <div className="flex justify-center gap-20">
        <Image
          src="/state-home1.jpeg"
          width={1000}
          height={1000}
          alt="state home"
          quality={100}
          className="image-home-hidden h-[220px] w-[510px] rounded-lg object-cover"
        />
        <Image
          src="/state-home1.png"
          width={1000}
          height={1000}
          alt="state home"
          quality={100}
          className="image-home h-[220px] w-[510px] rounded-lg object-cover"
        />
      </div>
    </main>
  );
}
