import { CircleCheckBig } from "lucide-react";

export default function BadgeAbout() {
  const badges = [
    { id: 1, tag: "Experiência mais de 10 Anos" },
    { id: 2, tag: "Atendimento Personalizado" },
    { id: 3, tag: "Avaliações Positivas" },
    { id: 4, tag: "Satisfação Garantida" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {badges.map((badge) => (
        <p
          key={badge.id}
          className="flex w-[300px] items-center gap-2 rounded-lg bg-primary px-3 py-2 font-medium text-zinc-50 shadow-md"
        >
          <CircleCheckBig size={16} />
          {badge.tag}
        </p>
      ))}
    </div>
  );
}
