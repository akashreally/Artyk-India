"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer } from "@/lib/motion";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
};

export default function SectionShell({
  children,
  id,
  className = "",
  border = false,
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      className={`py-16 md:py-24 lg:py-28 ${
        border ? "border-y border-brand-text/10" : ""
      } ${className}`}
    >
      {children}
    </motion.section>
  );
}
