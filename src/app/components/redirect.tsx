"use client";
import Link from "next/link";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

interface RedirectProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function Redirect({ href, children }: RedirectProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const home = pathname === "/";
  const textColor = home ? "text-zinc-50" : "text-zinc-950";
  const colorActive = home
    ? "mb-[-5px] border-b-2 border-zinc-950 text-zinc-950 font-semibold"
    : "mb-[-5px] border-b-2 border-secondary text-secondary font-semibold";

  return (
    <Link
      href={href}
      className={cn(
        "transition-all duration-300 ease-linear hover:mb-[-5px] hover:border-b-2 hover:border-secondary hover:text-secondary",
        textColor,
        isActive && colorActive,
      )}
    >
      {children}{" "}
    </Link>
  );
}
