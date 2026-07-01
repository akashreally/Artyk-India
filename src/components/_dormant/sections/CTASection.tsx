"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import { motion } from "framer-motion";
import Button from "@/components/_dormant/ui/Button";
import Container from "@/components/_dormant/ui/Container";
import { fadeUp, viewportHalf } from "@/lib/motion";

type CTASectionProps = {
  title?: string;
  supportingText?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function CTASection({
  title = "Create A Home That Feels Singularly Yours",
  supportingText =
    "Book a private consultation with our design team or visit the Jubilee Hills showroom to experience Artyk in person.",
  primaryLabel = "Book A Consultation",
  secondaryLabel = "Visit The Showroom",
}: CTASectionProps) {
  return (
    <motion.section
      initial={false}
      whileInView="visible"
      viewport={viewportHalf}
      variants={fadeUp}
      className="py-16 md:py-24 lg:py-28"
    >
      <Container>
        <div className="border border-brand-text/10 p-10 md:p-16 lg:p-20">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-brand-text/60 font-body">
            Consultation
          </p>
          <h2 className="max-w-3xl font-heading text-3xl leading-[1.08] tracking-[0.01em] md:text-5xl lg:text-[3.5rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-text/75 font-body md:text-lg">
            {supportingText}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact">{primaryLabel}</Button>
            <Button href="/contact#showroom" variant="outline">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
