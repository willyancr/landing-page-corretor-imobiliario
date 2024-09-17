import { DataRealState } from "@/app/types/real-state";
import { CircleCheckBig } from "lucide-react";
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
      <div className="grid grid-cols-2 gap-4">
        {data?.attributes.comodidade.map((item, index) => (
          <ul
            key={item.id}
            className={`flex ${index % 4 === 0 ? "col-start-1" : ""}`}
          >
            <li className="flex items-center gap-2">
              <CircleCheckBig size={16} />
              {item.comodidade}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
