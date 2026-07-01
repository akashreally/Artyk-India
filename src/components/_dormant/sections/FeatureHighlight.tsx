"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import SectionHeading from "@/components/_dormant/ui/SectionHeading";
import Container from "@/components/_dormant/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { FeatureItem } from "@/data/siteContent";

type FeatureHighlightProps = {
  items: FeatureItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function FeatureHighlight({
  items,
  eyebrow = "Craftsmanship & Philosophy",
  title = "Designed To Endure",
  description = "An uncompromising approach to quality, tactility, and timeless proportion.",
}: FeatureHighlightProps) {
  return (
    <section className="border-y border-brand-text/10 py-16 md:py-24 lg:py-28">
      <Container>
        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-14"
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {items.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="border border-brand-text/10 p-8 md:p-10"
              >
                <h3 className="font-heading text-xl md:text-2xl tracking-[0.01em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-text/75 font-body">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
