import { api } from "@/app/lib/axios";
import { DataAbout } from "@/app/types/sobre";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";

export default function BadgeAbout() {
  const [data, setData] = useState<DataAbout[]>([]);

  useEffect(() => {
    api.get("/sobres?populate[diferencial]=*").then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <>
      {data?.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          {item.attributes.diferencial.map((item) => (
            <div
              key={item.id}
              className="flex w-[300px] items-center gap-2 rounded-lg bg-primary px-3 py-2 font-medium text-zinc-50 shadow-md"
            >
              <CircleCheckBig size={16} />
              {item.diferencial}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
