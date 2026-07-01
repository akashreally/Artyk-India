"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import Container from "@/components/_dormant/ui/Container";
import SectionHeading from "@/components/_dormant/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { FeatureItem } from "@/data/siteContent";

type DesignPhilosophyProps = {
  items: FeatureItem[];
};

export default function DesignPhilosophy({ items }: DesignPhilosophyProps) {
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
              eyebrow="Our Philosophy"
              title="Where Design Meets Discipline"
              description="Four principles guide every piece we select, every space we shape."
              align="center"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-px bg-brand-text/10 md:grid-cols-2 lg:grid-cols-4"
          >
            {items.map((item, index) => (
              <motion.article
                key={index}
                variants={fadeUp}
                className="bg-brand-bg p-8 md:p-10"
              >
                <span className="mb-5 inline-block text-[11px] uppercase tracking-[0.25em] text-brand-text/40 font-body">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl tracking-[0.01em]">
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
