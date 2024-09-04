import { ComponentProps } from "react";

interface RedirectProps extends ComponentProps<"a"> {}

export default function RedirectMidiaSocial({ href, children }: RedirectProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 transition-all hover:text-secondary"
    >
      {children}
    </a>
  );
}
