"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import Container from "@/components/_dormant/ui/Container";
import SectionHeading from "@/components/_dormant/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { TestimonialItem } from "@/data/siteContent";

type TestimonialSectionProps = {
  items: TestimonialItem[];
};

export default function TestimonialSection({ items }: TestimonialSectionProps) {
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
              eyebrow="Client Perspectives"
              title="Voices Of Our Community"
              description="The shared language of quality, space, and lasting craft."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            {items.map((item, index) => (
              <motion.article
                key={index}
                variants={fadeUp}
                className="border border-brand-text/10 p-8 md:p-10"
              >
                <svg
                  className="mb-6 h-8 w-8 text-brand-text/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11 7.14V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.37a4 4 0 0 1-2.1 4.7A4 4 0 0 1 2.12 20H4a7 7 0 0 0 7-7v-5.86Zm10 0V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.37a4 4 0 0 1-2.1 4.7A4 4 0 0 1 12.12 20H14a7 7 0 0 0 7-7v-5.86Z" />
                </svg>
                <blockquote className="text-base leading-relaxed text-brand-text/80 font-body">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-brand-text/10 pt-6">
                  <p className="text-sm font-heading tracking-[0.02em]">
                    {item.author}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-text/50 font-body">
                    {item.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
