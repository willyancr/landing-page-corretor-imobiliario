import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CardFormContact() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg font-normal">Valor do Imóvel</CardTitle>
        <p className="text-4xl font-bold">R$ 5.000.000</p>
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
