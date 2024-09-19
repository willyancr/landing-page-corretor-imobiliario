import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataRealState } from "@/app/types/real-state";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { api } from "@/app/lib/axios";

export default function CardFormContact({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<DataRealState | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    api.get(`/imoveis?filters[slug][$eq]=${params.slug}`).then((response) => {
      setData(response.data.data[0]);
    });
  }, [params.slug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Email enviado com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Ocorreu um erro ao enviar o email => " + res.statusText);
      }
    } catch (error) {
      alert("Error de rede" + error);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg font-normal">Valor do Imóvel</CardTitle>
        <p className="text-4xl font-bold">
          {data?.attributes.preco?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <h3 className="text-sm font-medium">
            Entre em contato para obter mais informações
          </h3>
          <Input
            name="name"
            placeholder="Seu nome"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Seu email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Mensagem"
            className="min-h-[80px] resize-none"
            value={formData.message}
            onChange={handleChange}
          />
          <Button className="w-full bg-primary" type="submit">
            Solicitar informações
          </Button>
        </CardContent>
      </form>
    </Card>
  );
}
