import Button from "@/app/components/button";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-8 px-12 py-40">
      <div className="relative m-auto flex flex-col rounded-xl bg-primary shadow-xl sm:w-[800px] sm:flex-row">
        <div>
          <Image
            src={"/bg-newsletter.svg"}
            alt="Newsletter"
            width={800}
            height={800}
            className="h-[150px] object-cover sm:h-[250px] "
          />
          <h2 className="absolute left-[5%] top-[10%] w-[350px] font-CoHeadlineBold text-3xl font-bold text-secondary sm:left-[5%] sm:top-[30%] sm:w-[350px]">
            Assine nossa newsletter semanal
          </h2>
        </div>
        <form className="flex items-center justify-between rounded-lg bg-zinc-50 px-2 py-2 sm:absolute sm:right-[5%] sm:top-[40%] sm:w-[370px]">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="bg-zinc-50 px-2 py-3 outline-none"
          />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
