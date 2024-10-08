import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DreamHomeSection() {
  return (
    <div className="my-text-mt bg-greyGeometry px-4 py-8 md:px-12 md:py-12">
      <div className="mx-auto flex flex-col md:flex-row max-w-[1200px] items-center gap-8 md:gap-20 px-4 md:px-12 min-h-screen">
        <Image
          src="/dream-home.png"
          alt="Imagens de imoveis"
          width={450}
          height={500}
          quality={100}
          className="mx-auto h-[300px] md:h-[500px] w-full rounded-lg object-cover"
        />
        <div className="space-y-8 md:space-y-12">
          <h1 className="font-CoHeadlineBold text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
            Com a gente você encontra o imóvel dos seus sonhos
          </h1>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                  Você quer comprar?
                </AccordionTrigger>
                <AccordionContent>
                  Encontre o imóvel dos seus sonhos! Com nossa expertise, você
                  terá acesso às melhores opções do mercado, desde apartamentos
                  aconchegantes até casas espaçosas. Conte com a nossa
                  assessoria completa para encontrar o imóvel perfeito para sua
                  família.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                  Você quer vender?
                </AccordionTrigger>
                <AccordionContent>
                  Quer vender seu imóvel de forma rápida e segura? Nós cuidamos
                  de todo o processo para você! Realizamos uma avaliação precisa
                  do seu imóvel, criamos um plano de marketing eficaz e
                  negociamos as melhores condições para você.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                  Você quer alugar ou locar?
                </AccordionTrigger>
                <AccordionContent>
                  Alugar ou locar seu imóvel? Nós te ajudamos! Oferecemos um
                  serviço completo de locação, desde a divulgação do imóvel até
                  a gestão do contrato. Conte com a nossa experiência para
                  garantir a tranquilidade na hora de alugar ou locar seu
                  imóvel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
