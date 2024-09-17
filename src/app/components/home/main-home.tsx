"use client";
import Button from "@/app/components/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import MetricsSummary from "./metrics-summary";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { DataHome } from "../../types/home";

export default function MainHome() {
  const [data, setData] = useState<DataHome[]>([]);

  useEffect(() => {
    api.get("/homes?populate[foto1]=*&populate[foto2]=*").then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <>
      {data?.map((item) => (
        <main
          key={item.id}
          className="my-text-mt mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-12 py-10 text-zinc-50"
        >
          <div className="flex items-center gap-20">
            <h1 className="flex-1 font-CoHeadlineBold text-4xl font-bold leading-loose md:text-5xl lg:text-6xl">
              {item.attributes.tituloPrincipal}
              <span className="text-zinc-950">
                {item.attributes.tituloPrincipalDestaque}
              </span>
            </h1>

            <div className="flex-1 space-y-5 px-5">
              {item.attributes.descricao.map((block, index) => (
                <span key={index}>
                  {block.children.map((child, childIndex) => {
                    if (child.bold) {
                      return (
                        <span
                          className="font-medium text-zinc-950"
                          key={childIndex}
                        >
                          {child.text}
                        </span>
                      );
                    }
                    return <span key={childIndex}>{child.text}</span>;
                  })}
                </span>
              ))}

              <Button>
                <a
                  href={item.attributes.linkWhatsapp}
                  target="_blank"
                  className="flex items-center gap-2 transition-all hover:text-secondary"
                >
                  Entre em contato
                  <FaWhatsapp size={20} />
                </a>
              </Button>

              <MetricsSummary />
            </div>
          </div>
          <div className="flex justify-center gap-20">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_IMAGE}${item.attributes.foto2.data.attributes.url}`}
              width={1000}
              height={1000}
              alt="state home"
              quality={100}
              className="image-home-hidden h-[220px] w-[510px] rounded-lg object-cover shadow-xl"
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_IMAGE}${item.attributes.foto1.data.attributes.url}`}
              width={1000}
              height={1000}
              alt="state home"
              quality={100}
              className="image-home h-[220px] w-[510px] rounded-lg object-cover shadow-2xl"
            />
          </div>
        </main>
      ))}
    </>
  );
}
