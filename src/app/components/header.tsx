"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Redirect from "./redirect";
import { Button } from "@/components/ui/button";
import { GlobeLock } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const home = pathname === "/";
  const logoHeader = home ? "/logo-header1.png" : "/logo-header.png";

  return (
    <header className="mx-auto w-full max-w-[1200px] px-12">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-20">
          <Image
            src={logoHeader}
            alt="Logo"
            width={200}
            height={200}
            quality={100}
          />

          <nav className="flex h-6 justify-center gap-8 font-extralight text-zinc-50/70">
            <Redirect href="/">Home</Redirect>
            <Redirect href="/imoveis">Imóveis</Redirect>
            <Redirect href="/sobre">Sobre</Redirect>
            {/* <Redirect href="/blog">Blog</Redirect> */}
          </nav>
        </div>
        <Button>
          <a
            href="https://project-stripe-artur.onrender.com/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GlobeLock className="h-5 w-5" />
            Acesso Restrito
          </a>
        </Button>
      </div>
    </header>
  );
}
