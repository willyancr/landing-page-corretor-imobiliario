import Button from "@/app/components/button";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-8 px-12 py-40">
      <div className="relative m-auto flex w-[800px] rounded-xl bg-primary shadow-xl">
        <Image
          src={"/bg-newsletter.svg"}
          alt="Newsletter"
          width={800}
          height={800}
        />
        <h2 className="absolute left-[5%] top-[30%] w-[350px] font-CoHeadlineBold text-3xl font-bold text-secondary">
          Assine nossa newsletter semanal
        </h2>
        <form className="absolute right-[5%] top-[40%] flex w-[370px] items-center justify-between rounded-lg bg-zinc-50 px-2 py-2">
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
