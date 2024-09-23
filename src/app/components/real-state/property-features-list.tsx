import { DataRealState } from "@/app/types/real-state";
import { CircleCheckBig, ArrowBigRightDash } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "@/app/lib/axios";

export default function PropertyFeaturesList({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<DataRealState>();

  useEffect(() => {
    api
      .get(`/imoveis?filters[slug][$eq]=${params.slug}&populate[comodidade]=*`)
      .then((respose) => {
        setData(respose.data.data[0]);
      });
  }, [params.slug]);

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-medium">Comodidades da propriedade</h1>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        {data?.attributes.comodidade.map((item, index) => (
          <ul
            key={item.id}
            className={`flex ${index % 4 === 0 ? "col-start-1" : ""}`}
          >
            <li className="flex items-center gap-2">
              <CircleCheckBig size={16} className="hidden sm:block" />
              <span className="sm:hidden">-</span>
              {item.comodidade}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
