import BadgeAbout from "@/app/components/badge-about";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen">
      <Header />
      <section className="w-full bg-greyGeometry p-12">
        <div className="mx-auto flex max-w-[1200px] items-center gap-20 px-12">
          <div className="flex flex-1 flex-col gap-10">
            <h1 className="font-CoHeadlineBold lg:text-6xl text-5xl font-bold text-primary">
              Artur Ribeiro
            </h1>
            <p className="text-3xl font-bold">Sobre mim</p>
            <p>
              Me chamo <strong>Artur Ribeiro</strong> consultor imobiliário, com
              a inscrição CRECI de nº 3257, com mais de 09 anos de experiência
              no mercado, especializado em proporcionar um atendimento
              personalizado para quem busca{" "}
              <strong>comprar, vender ou alugar imóveis</strong>. Ao longo da
              minha carreira, construi uma reputação sólida, sempre colocando as
              necessidades dos meus clientes em primeiro lugar, e ajudando-os a
              encontrar o imóvel dos seus sonhos. <br />
              Com mais de <strong> 200 imóveis vendidos</strong>, já realizei o
              sonho de mais de <strong>200 famílias</strong>, garantindo a
              satisfação e a felicidade de cada uma delas. Se você está à
              procura de um profissional confiável e dedicado para auxiliá-lo em
              seu próximo investimento imobiliário, eu sou a escolha certa para
              transformar sua busca em realidade.
            </p>
            <BadgeAbout />
          </div>
          <div className="flex-1">
            <Image
              src="/logo-header.png"
              alt="Logo"
              width={500}
              height={500}
              quality={100}
            />
            <span>** no lugar da logo, por foto profissional</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
