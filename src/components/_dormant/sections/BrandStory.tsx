"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import Container from "@/components/_dormant/ui/Container";
import { fadeUp, slideFromRight, viewportOnce, viewportHalf } from "@/lib/motion";

type BrandStoryProps = {
  title?: string;
  paragraphs?: string[];
};

export default function BrandStory({
  title = "A House Of Curated Luxury",
  paragraphs = [
    "Artyk is a luxury, curated, timeless furniture label built on the belief that exceptional homes are edited, not crowded.",
    "We work with discerning homeowners, architects, and interior designers to shape spaces that feel personal, layered, and enduring.",
    "Every selection reflects our guiding idea—Curated Living—where quality and individuality stand above fleeting trends.",
  ],
}: BrandStoryProps) {
  return (
    <section className="border-y border-brand-text/10 py-16 md:py-24 lg:py-28">
      <Container>
        <motion.div
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="space-y-8 md:space-y-12 lg:grid lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-5">
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-brand-text/60 font-body">
              The Brand
            </p>
            <h2 className="font-heading text-3xl leading-[1.08] tracking-[0.01em] md:text-5xl">
              {title}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-brand-text/80 font-body md:text-lg lg:col-span-6 lg:col-start-7">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
