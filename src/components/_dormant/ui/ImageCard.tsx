"use client";
// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type ImageCardProps = {
  title: string;
  description?: string;
  subtitle?: string;
  image: string;
  href?: string;
  aspect?: "4/5" | "3/4" | "1/1" | "16/9";
};

const aspectMap = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
} as const;

export default function ImageCard({
  title,
  description,
  subtitle,
  image,
  href,
  aspect = "4/5",
}: ImageCardProps) {
  const content = (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden border border-brand-text/10 bg-brand-bg"
    >
      <div className={`relative ${aspectMap[aspect]} overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="space-y-2 p-6 md:p-7">
        <h3 className="font-heading text-xl md:text-2xl tracking-[0.01em]">{title}</h3>
        {subtitle && (
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-text/60 font-body">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-sm leading-relaxed text-brand-text/75 font-body">
            {description}
          </p>
        )}
      </div>
    </motion.article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="focus-ring block">
      {content}
    </Link>
  );
}
