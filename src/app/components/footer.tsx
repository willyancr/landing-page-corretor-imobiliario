"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import RedirectMidiaSocial from "./redirect-midia-social";
import { useEffect, useState } from "react";
import { DataFooter } from "../types/footer";
import { api } from "../lib/axios";

export default function Footer() {
  const [data, setData] = useState<DataFooter[]>([]);

  useEffect(() => {
    api.get("/rodapes?populate[Logo]=*").then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <div className="bg-zinc-950 bg-home bg-center">
      <div className="mx-auto max-w-[1200px] px-12 pb-6 pt-16 text-zinc-50">
        {data?.map((item) => (
          <div key={item.id} className="grid grid-cols-2 items-center">
            <div className="mt-8 flex flex-col gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL_IMAGE}${item.attributes.Logo.data.attributes.url}`}
                alt="Logo"
                width={200}
                height={200}
              />
              <span className="text-sm text-zinc-300">
                {item.attributes.Endereco}
              </span>
              <span className="text-sm text-zinc-300">
                {item.attributes.Cidade}
              </span>
              <span className="text-sm text-zinc-300">
                CEP: {item.attributes.CEP}
              </span>
            </div>

            <nav className="flex items-center gap-32 font-extralight">
              <div className="space-y-4">
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
                  <Link
                    href="/blog"
                    className="transition-all hover:text-secondary"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
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
        <span className="mt-10 flex justify-center text-sm font-light text-tertiary/70">
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
    </div>
  );
}
