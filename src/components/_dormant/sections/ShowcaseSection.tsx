"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import SectionHeading from "@/components/_dormant/ui/SectionHeading";
import ImageCard from "@/components/_dormant/ui/ImageCard";
import Container from "@/components/_dormant/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { ShowcaseItem } from "@/data/siteContent";

type ShowcaseSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ShowcaseItem[];
};

export default function ShowcaseSection({
  id,
  eyebrow,
  title,
  description,
  items,
}: ShowcaseSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-28">
      <Container>
        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-14"
        >
          <motion.div variants={fadeUp}>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {items.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <ImageCard title={item.title} subtitle={item.subtitle} image={item.image} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
