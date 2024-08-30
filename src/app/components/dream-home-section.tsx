import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DreamHomeSection() {
  return (
    <div className="mx-auto h-screen max-w-[1200px] space-y-8 bg-greyGeometry px-12 pt-32">
      <div className="flex items-center gap-20">
        <Image
          src="/dream-home.png"
          alt="Dream Home"
          width={450}
          height={500}
          quality={100}
        />
        <div className="space-y-12">
          <h1 className="font-CoHeadlineBold text-5xl">
            Com a gente você encontra a casa dos seus sonhos
          </h1>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
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
                <AccordionTrigger className="text-xl">
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
                <AccordionTrigger className="text-xl">
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
