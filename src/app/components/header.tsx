"use client";
import { Button } from "@/components/ui/button";
import { GlobeLock } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Redirect from "./redirect";

export default function Header() {
  const pathname = usePathname();
  const home = pathname === "/";
  const logoHeader = home ? "/logo-header1.png" : "/logo-header.png";

  return (
    <header className="mx-auto w-full max-w-[1200px] px-4 sm:px-12">
      <div className="flex flex-col items-center justify-between py-5 sm:flex-row">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-20">
          <Image
            src={logoHeader}
            alt="Logo"
            width={150}
            height={150}
            quality={100}
            className="w-48 "
          />

          <nav className="flex h-6 justify-center gap-4 font-extralight text-zinc-50/70 sm:gap-8">
            <Redirect href="/">Home</Redirect>
            <Redirect href="/imoveis">Imóveis</Redirect>
            <Redirect href="/sobre">Sobre</Redirect>
          </nav>
        </div>
        <Button className="mt-4 hidden sm:mt-0 sm:flex">
          <a
            href="https://project-stripe-artur.onrender.com/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GlobeLock className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </header>
  );
}
