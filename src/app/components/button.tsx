import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export default function button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="flex rounded-lg bg-primary px-4 py-2 font-medium text-zinc-50 shadow-md transition-all hover:brightness-75"
      {...props}
    >
      {children}
    </button>
  );
}
