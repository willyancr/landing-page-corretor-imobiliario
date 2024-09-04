import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-zinc-950 bg-home bg-center">
      <div className="mx-auto max-w-[1200px] px-12 pb-6 pt-16 text-zinc-50">
        <div className="grid grid-cols-2 items-center">
          <Image src="/logo-header1.png" alt="Logo" width={200} height={200} />

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
                <a
                  href="https://www.instagram.com/arturfilhoo/"
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:text-secondary"
                >
                  <FaInstagram />
                  Instagram
                </a>
                <a
                  href="https://api.whatsapp.com/message/T65AYX4JNWVCO1?autoload=1&app_absent=0"
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:text-secondary"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <a
                  href="https://www.youtube.com/?gl=BR"
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:text-secondary"
                >
                  <FaYoutube />
                  Youtube
                </a>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:text-secondary"
                >
                  <FaXTwitter />
                  X/Twitter
                </a>
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
