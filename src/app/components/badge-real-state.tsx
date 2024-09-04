import { House, BedDouble, Bath } from "lucide-react";

export default function BadgeRealState() {
  return (
    <div className="flex items-center gap-3 lg:justify-between">
      <div className="flex w-[100px] items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm xl:w-28 xl:text-sm">
        <House size={16} />
        1500m²
      </div>
      <div className="flex w-[100px] items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm xl:w-28 xl:text-sm">
        <BedDouble size={16} /> 6
      </div>
      <div className="flex w-[100px] items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm xl:w-28 xl:text-sm">
        <Bath size={16} /> 3
      </div>
    </div>
  );
}
