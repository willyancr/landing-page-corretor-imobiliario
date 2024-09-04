export default function MetricsSummary() {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col bg-primary/30 px-3 py-2 text-sm rounded-lg w-28">
        <p className="text-lg font-semibold">
          500<span className="text-zinc-950">+</span>
        </p>
        <span className="text-xs">Imóveis</span>
        <span className="text-xs">anunciados</span>
      </div>
      <div className="flex flex-col bg-primary/30 px-3 py-2 text-sm rounded-lg w-28">
        <p className="text-lg font-semibold">
          500<span className="text-zinc-950">+</span>
        </p>
        <span className="text-xs">Famílias</span>
        <span className="text-xs">felizes</span>
      </div>
      <div className="flex flex-col bg-primary/30 px-3 py-2 text-sm rounded-lg w-28">
        <p className="text-lg font-semibold">
          09<span className="text-zinc-950">+</span>
        </p>
        <span className="text-xs">Anos atuando</span>
        <span className="text-xs">no mercado</span>
      </div>
    </div>
  );
}
