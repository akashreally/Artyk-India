"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import ImageCard from "@/components/_dormant/ui/ImageCard";
import SectionHeading from "@/components/_dormant/ui/SectionHeading";
import Container from "@/components/_dormant/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { CollectionItem } from "@/data/siteContent";

type CollectionGridProps = {
  items: CollectionItem[];
};

export default function CollectionGrid({ items }: CollectionGridProps) {
  return (
    <section id="collections" className="py-16 md:py-24 lg:py-28">
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
              eyebrow="Curated Collections"
              title="Distinct Worlds, One Refined Language"
              description="Collections composed with restraint and material richness for elevated daily living."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {items.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <ImageCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  href={item.href}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
