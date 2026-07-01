"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/_dormant/ui/Button";
import Container from "@/components/_dormant/ui/Container";
import { heroFade, imageReveal } from "@/lib/motion";

type HeroProps = {
  badge?: string;
  heading?: string;
  subheading?: string;
  heroImage?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function Hero({
  badge = "Luxury Furniture • Jubilee Hills",
  heading = "Curated Living For Design-Led Spaces",
  subheading =
    "Artyk India presents a refined edit of furniture where craftsmanship, proportion, and material depth define every interior.",
  heroImage = "/images/hero/hero-showroom.svg",
  primaryLabel = "Book A Consultation",
  secondaryLabel = "Explore Collections",
}: HeroProps) {
  return (
    <section className="pb-16 md:pb-24 pt-10 md:pt-16">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={false}
            animate="visible"
            variants={heroFade}
            className="space-y-8"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-brand-text/60 font-body">
              {badge}
            </p>
            <h1 className="max-w-3xl font-heading text-[2.75rem] leading-[1.02] tracking-[0.01em] md:text-[4.5rem] lg:text-[5.5rem]">
              {heading}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-brand-text/75 font-body md:text-lg">
              {subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">{primaryLabel}</Button>
              <Button href="/collections" variant="outline">
                {secondaryLabel}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate="visible"
            variants={imageReveal}
            transition={{ delay: 0.3 }}
            className="relative aspect-4/5 overflow-hidden border border-brand-text/10 lg:aspect-auto lg:min-h-130"
          >
            <Image
              src={heroImage}
              alt="Artyk India luxury interior composition"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
