import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artur Ribeiro | Corretor de Imóveis",
  description:
    "Site de apresentação do corretor de imóveis Artur Ribeiro, onde você pode encontrar informações sobre ele e seus serviços.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body >{children}</body>
    </html>
  );
}
