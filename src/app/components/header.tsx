"use client";
import { KeyRound } from "lucide-react";
import Image from "next/image";
import Redirect from "./redirect";

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-[1200px] px-12">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-20">
          <Image src="/logo-header.png" alt="Logo" width={200} height={200} />

          <nav className="flex h-6 justify-center gap-8 font-extralight text-zinc-50/70">
            <Redirect href="/">Home</Redirect>
            <Redirect href="/sobre">Sobre</Redirect>
            <Redirect href="/imoveis">Imóveis</Redirect>
            <Redirect href="/blog">Blog</Redirect>
          </nav>
        </div>
        <button className="flex items-center gap-1 rounded-lg bg-tertiary px-4 py-2 font-medium text-zinc-950 shadow-md transition-all hover:brightness-75">
          Acesso Restrito
          <KeyRound size={18} />
        </button>
      </div>
    </header>
  );
}
