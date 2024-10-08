"use client";
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
  SearchIcon,
  ShapesIcon,
} from "lucide-react";
import { useSearch } from "@/app/context/input-search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputSearchState() {
  const { search, setSearch, setRoom, setTransactionType, setTypeRealState } =
    useSearch();

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100/70 p-4 text-zinc-900 md:flex-row">
      <div className="flex w-[300px] flex-col items-center space-y-4 md:flex-row md:w-full md:space-x-2 md:space-y-0">
        <MapPinIcon className="h-5 w-5" />
        <Input
          type="text"
          placeholder="Buscar imoveis"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full placeholder:text-zinc-900 md:w-64"
        />
      </div>
      <div className="flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Select onValueChange={setTransactionType}>
          <SelectTrigger className="w-full md:w-40">
            <ShapesIcon className="h-5 w-5" />
            <SelectValue placeholder="Imoveis" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="compra">Compra</SelectItem>
            <SelectItem value="venda">Venda</SelectItem>
            <SelectItem value="locacao">Locação</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setRoom}>
          <SelectTrigger className="w-full md:w-40">
            <BedDouble className="h-5 w-5" />
            <SelectValue placeholder="Quartos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="1">1 quarto</SelectItem>
            <SelectItem value="2">2 quartos</SelectItem>
            <SelectItem value="3">3 quartos</SelectItem>
            <SelectItem value="4">4 quartos</SelectItem>
            <SelectItem value="5">5 quartos</SelectItem>
            <SelectItem value="6">6 quartos</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setTypeRealState}>
          <SelectTrigger className="w-full md:w-40">
            <HomeIcon className="h-5 w-5" />
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="casa">Casa</SelectItem>
            <SelectItem value="apartamento">Apartamento</SelectItem>
            <SelectItem value="lote">Lote</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full bg-primary text-white md:w-auto">
          Buscar
          <SearchIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
