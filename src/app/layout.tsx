import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { SearchProvider } from "./context/input-search";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Artur Ribeiro | Consultor Imobiliário",
  description:
    "Quer Comprar, Vender ou Locar imóveis? Este é o lugar certo para você encontrar informações sobre nossos serviços e como nossos imóveis podem melhorar sua vida.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchProvider>
      <html lang="pt-br" className={poppins.className}>
        <body>{children}</body>
      </html>
    </SearchProvider>
  );
}
