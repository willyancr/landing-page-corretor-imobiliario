import { KeyRound } from "lucide-react";
import Redirect from "./redirect";

export default function Header() {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-12">
      <div className="flex items-center justify-between py-10">
        <div className="flex items-center gap-20">
          <h1 className="font-bold"> 🏠 ARTUR RIBEIRO </h1>
          <nav className="flex gap-8 font-extralight text-zinc-50/70">
            <Redirect href="/">Home</Redirect>
            <Redirect href="/sobre">Sobre</Redirect>
            <Redirect href="/propriedades" className="w-24">
              Propiedades
            </Redirect>
            <Redirect href="/blog">Blog</Redirect>
          </nav>
        </div>
        <button className="flex items-center gap-1 rounded-lg bg-zinc-50 px-4 py-2 font-semibold text-zinc-950 shadow-md transition-all hover:brightness-75">
          Acesso Restrito
          <KeyRound size={18} />
        </button>
      </div>
    </div>
  );
}
