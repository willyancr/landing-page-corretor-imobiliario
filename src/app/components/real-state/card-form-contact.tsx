import { api } from "@/app/lib/axios";
import { DataRealState } from "@/app/types/real-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

export default function CardFormContact({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<DataRealState>();

  useEffect(() => {
    api.get(`/imoveis?filters[slug][$eq]=${params.slug}`).then((respose) => {
      setData(respose.data.data[0]);
    });
  }, [params.slug]);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg font-normal">Valor do Imóvel</CardTitle>
        <p className="text-4xl font-bold">
          {data?.attributes.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-sm font-medium">
          Entre em contato para obter mais informações
        </h3>
        <Input placeholder="Seu nome" type="text" />
        <Input placeholder="Seu email" type="email" />
        <Textarea placeholder="Mensagem" className="min-h-[80px] resize-none" />
        <Button className="w-full bg-primary">Solicitar informações</Button>
      </CardContent>
    </Card>
  );
}
