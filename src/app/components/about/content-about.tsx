"use client";
import BadgeAbout from "@/app/components/about/badge-about";
import { DataAbout } from "@/app/types/sobre";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { useEffect, useState } from "react";
import { api } from "@/app/lib/axios";
import Image from "next/image";

export default function ContentAbout() {
  const [data, setData] = useState<DataAbout[]>([]);

  useEffect(() => {
    api.get("/sobres?populate[fotoPerfil]=*").then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <section className="w-full bg-greyGeometry p-12">
        {data?.map((item, index) => (
          <div
            key={index}
            className="mx-auto flex max-w-[1200px] items-center gap-20 px-12"
          >
            <div className="flex flex-1 flex-col gap-10">
              <h1 className="font-CoHeadlineBold text-5xl font-bold text-primary lg:text-6xl">
                Artur Ribeiro
              </h1>
              <p className="text-3xl font-bold">Sobre mim</p>
              {item.attributes.descricao.map((block, index) => (
                <p key={index}>
                  {block.children.map((child, childIndex) => {
                    if (child.bold) {
                      return <strong key={childIndex}>{child.text}</strong>;
                    }
                    return <span key={childIndex}>{child.text}</span>;
                  })}
                </p>
              ))}

              <BadgeAbout />
            </div>
            <div className="flex-1">
              <Image
                src={item.attributes.fotoPerfil.data.attributes.url}
                alt="Logo"
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
