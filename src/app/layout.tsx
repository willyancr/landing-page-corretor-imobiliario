import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Artur Ribeiro | Corretor de Imóveis",
  description:
    "Site de apresentação do corretor de imóveis Artur Ribeiro, onde você pode encontrar informações sobre ele e seus serviços.",
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
    <html lang="pt-br" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
