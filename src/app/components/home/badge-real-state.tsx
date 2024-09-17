import { House, BedDouble, Bath } from "lucide-react";

type BadgeRealStateProps = {
  children?: React.ReactNode;
};

export default function BadgeRealState({ children }: BadgeRealStateProps) {
  return (
    <div className="flex w-[100px] items-center justify-center gap-1 rounded-md bg-tertiary/30 px-3 py-2 text-sm xl:w-28 xl:text-sm">
      {children}
    </div>
  );
}
