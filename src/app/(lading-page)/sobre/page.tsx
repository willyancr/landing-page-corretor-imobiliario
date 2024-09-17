import ContentAbout from "@/app/components/about/content-about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Artur Ribeiro",
};

export default function About() {
  return (
    <div>
      <ContentAbout />
    </div>
  );
}
