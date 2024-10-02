"use client";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import RedirectMidiaSocial from "./redirect-midia-social";
import { DataFooter } from "../types/footer";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [data, setData] = useState<DataFooter[]>([]);

  useEffect(() => {
    api.get("/rodapes?populate[Logo]=*").then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <footer className="bg-zinc-950 bg-home bg-center">
      <div className="mx-auto max-w-[1200px] px-4 pb-6 pt-8 text-zinc-50 md:px-12">
        {data?.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-0"
          >
            <div className="mt-8 flex flex-col items-center gap-2 md:items-start">
              <Image
                src={item.attributes.Logo.data.attributes.url}
                alt="Logo"
                width={200}
                height={200}
                quality={100}
              />
              <span className="text-center text-sm text-zinc-300 md:text-left">
                {item.attributes.Endereco}
              </span>
              <span className="text-center text-sm text-zinc-300 md:text-left">
                {item.attributes.Cidade}
              </span>
              <span className="text-center text-sm text-zinc-300 md:text-left">
                CEP: {item.attributes.CEP}
              </span>
            </div>

            <nav className="flex flex-col items-center gap-8 font-extralight md:flex-row md:items-start md:gap-32">
              <div className="space-y-4 text-center md:text-left">
                <span className="font-medium text-primary">Footer Menu</span>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="transition-all hover:text-secondary"
                  >
                    Home
                  </Link>
                  <Link
                    href="/imoveis"
                    className="transition-all hover:text-secondary"
                  >
                    Imóveis
                  </Link>
                  <Link
                    href="/sobre"
                    className="transition-all hover:text-secondary"
                  >
                    Sobre
                  </Link>
                  <span className="transition-all hover:text-secondary">
                    Blog
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <span className="font-medium text-primary">Redes Sociais</span>

                <div className="flex flex-col gap-2">
                  <RedirectMidiaSocial href={`${item.attributes.Instagram}`}>
                    <FaInstagram />
                    Instagram
                  </RedirectMidiaSocial>

                  <RedirectMidiaSocial href={`${item.attributes.WhatsApp}`}>
                    <FaWhatsapp />
                    WhatsApp
                  </RedirectMidiaSocial>

                  <RedirectMidiaSocial href={`${item.attributes.Youtube}`}>
                    <FaYoutube />
                    Youtube
                  </RedirectMidiaSocial>

                  <RedirectMidiaSocial href={`${item.attributes.TwitterX}`}>
                    <FaXTwitter />
                    X/Twitter
                  </RedirectMidiaSocial>
                </div>
              </div>
            </nav>
          </div>
        ))}
        <span className="mt-16 flex justify-center text-sm font-light text-tertiary/50">
          © 2024. Todos os direitos reservados | Desenvolvido por{" "}
          <a
            href="https://github.com/willyancr"
            target="_blank"
            className="ml-1 underline"
          >
            Willyan Costa
          </a>
        </span>
      </div>
    </footer>
  );
}
