import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BedDouble,
  HomeIcon,
  MapPinIcon,
  SearchIcon
} from "lucide-react";

export default function InputSearchState() {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-gray-100/70 p-4 text-zinc-900">
      <div className="flex items-center space-x-2">
        <MapPinIcon className="h-5 w-5" />
        <Input
          type="text"
          placeholder="Buscar imoveis"
          className="w-64 placeholder:text-zinc-900"
        />
        <Button className="bg-primary text-white">
          Buscar
          <SearchIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Select>
          <SelectTrigger className="w-40">
            <MapPinIcon className="h-5 w-5" />
            <SelectValue placeholder="Localização" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="location1">Localização 1</SelectItem>
            <SelectItem value="location2">Localização 2</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <BedDouble className="h-5 w-5" />
            <SelectValue placeholder="Quartos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="property1">1 quarto</SelectItem>
            <SelectItem value="property2">2 quartos</SelectItem>
            <SelectItem value="property2">3 quartos</SelectItem>
            <SelectItem value="property2">4 quartos</SelectItem>
            <SelectItem value="property2">5 quartos</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <HomeIcon className="h-5 w-5" />
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="type1">Casa</SelectItem>
            <SelectItem value="type2">Apartamento</SelectItem>
            <SelectItem value="type3">Lote</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
