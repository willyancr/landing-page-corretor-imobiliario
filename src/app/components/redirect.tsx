import Link from "next/link";
import { cn } from "../lib/utils";

interface RedirectProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function Redirect({ href, className, children }: RedirectProps) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-all duration-300 ease-linear hover:mb-[-5px] hover:border-b-2 hover:border-secondary hover:text-secondary",
        className,
      )}
    >
      {children}{" "}
    </Link>
  );
}
