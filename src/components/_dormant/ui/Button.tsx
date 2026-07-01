// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "px-5 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: ButtonProps) {
  const base =
    "focus-ring inline-flex items-center justify-center border font-body tracking-[0.16em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const variants = {
    solid:
      "border-brand-text bg-brand-text text-brand-bg hover:bg-brand-accent hover:border-brand-accent hover:text-brand-text",
    outline:
      "border-brand-text/40 text-brand-text hover:border-brand-text hover:bg-brand-text/[0.04]",
    ghost:
      "border-transparent text-brand-text hover:border-brand-text/20 hover:bg-brand-text/[0.03]",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizeMap[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
