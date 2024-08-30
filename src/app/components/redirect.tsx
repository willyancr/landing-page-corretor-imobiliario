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
  const heroSection = pathname === "/";
  const textColor = heroSection ? "text-zinc-50" : "text-zinc-950";

  return (
    <Link
      href={href}
      className={cn(
        "transition-all duration-300 ease-linear hover:mb-[-5px] hover:border-b-2 hover:border-secondary hover:text-secondary",
        textColor,
        isActive && "mb-[-5px] border-b-2 border-secondary text-secondary",
      )}
    >
      {children}{" "}
    </Link>
  );
}
