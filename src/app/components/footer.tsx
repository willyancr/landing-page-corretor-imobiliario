import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import RedirectMidiaSocial from "./redirect-midia-social";

export default function Footer() {
  return (
    <div className="bg-zinc-950 bg-home bg-center">
      <div className="mx-auto max-w-[1200px] px-12 pb-6 pt-16 text-zinc-50">
        <div className="grid grid-cols-2 items-center">
          <div className="mt-8 flex flex-col gap-2">
            <Image
              src="/logo-header1.png"
              alt="Logo"
              width={200}
              height={200}
            />
            <span className="text-sm text-zinc-300">
              Quadra 405 Sul - LO 11 - Lote 12 - Sala 03
            </span>
            <span className="text-sm text-zinc-300">Palmas - TO </span>
            <span className="text-sm text-zinc-300">CEP: 77015-613</span>
          </div>

          <nav className="flex items-center gap-32 font-extralight">
            <div className="space-y-4">
              <span className="font-medium text-primary">Footer Menu</span>
              <div className="flex flex-col gap-2">
                <Link href="/" className="transition-all hover:text-secondary">
                  Home
                </Link>
                <Link
                  href="/sobre"
                  className="transition-all hover:text-secondary"
                >
                  Sobre
                </Link>
                <Link
                  href="/imoveis"
                  className="transition-all hover:text-secondary"
                >
                  Imóveis
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
                <RedirectMidiaSocial href="https://www.instagram.com/arturfilhoo/">
                  <FaInstagram />
                  Instagram
                </RedirectMidiaSocial>

                <RedirectMidiaSocial href="https://api.whatsapp.com/message/T65AYX4JNWVCO1?autoload=1&app_absent=0">
                  <FaWhatsapp />
                  WhatsApp
                </RedirectMidiaSocial>

                <RedirectMidiaSocial href="https://www.youtube.com/?gl=BR">
                  <FaYoutube />
                  Youtube
                </RedirectMidiaSocial>

                <RedirectMidiaSocial href="https://x.com/home">
                  <FaXTwitter />
                  X/Twitter
                </RedirectMidiaSocial>
              </div>
            </div>
          </nav>
        </div>
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
