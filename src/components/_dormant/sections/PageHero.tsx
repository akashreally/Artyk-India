"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import Container from "@/components/_dormant/ui/Container";
import { heroFade } from "@/lib/motion";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <motion.section
      initial={false}
      animate="visible"
      variants={heroFade}
      className="border-b border-brand-text/10"
    >
      <Container className="py-16 md:py-24 lg:py-28">
        {eyebrow && (
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-brand-text/60 font-body">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-4xl leading-[1.08] tracking-[0.01em] md:text-6xl lg:text-[4.5rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-text/75 font-body md:text-lg">
            {description}
          </p>
        )}
      </Container>
    </motion.section>
  );
}
