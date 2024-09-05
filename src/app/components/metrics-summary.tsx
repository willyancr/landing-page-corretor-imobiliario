export default function MetricsSummary() {
  return (
    <div className="flex gap-2">
      <div className="flex w-28 flex-col rounded-lg bg-primary/30 px-3 py-2 text-sm">
        <p className="text-lg font-semibold">24h</p>
        <span className="text-xs">Atendimento</span>
        <span className="text-xs">personalizado</span>
      </div>
      <div className="flex w-28 flex-col rounded-lg bg-primary/30 px-3 py-2 text-sm">
        <p className="text-lg font-semibold">4.9/5</p>
        <span className="text-xs">Avaliações</span>
        <span className="text-xs">positivas</span>
      </div>
      <div className="flex w-28 flex-col rounded-lg bg-primary/30 px-3 py-2 text-sm">
        <p className="text-lg font-semibold">
          10<span className="text-zinc-950">+</span>
        </p>
        <span className="text-xs">Anos atuando</span>
        <span className="text-xs">no mercado</span>
      </div>
    </div>
  );
}
