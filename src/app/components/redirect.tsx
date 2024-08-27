import Link from "next/link";
import { cn } from "../lib/utils";

interface RedirectProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function Redirect({ href, className, children }: RedirectProps) {
  return (
    <Link href={href} className={cn("w-12 transition-all hover:font-medium hover:text-zinc-50", className)}>
      {children}{" "}
    </Link>
  );
}
