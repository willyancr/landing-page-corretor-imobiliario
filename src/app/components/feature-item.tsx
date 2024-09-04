import { CircleCheckBig } from "lucide-react";

interface FeatureItemProps {
  title: string;
}

export default function FeatureItem({ title }: FeatureItemProps) {
  return (
    <li className="flex items-center gap-2">
      <CircleCheckBig size={16} /> {title}
    </li>
  );
}
