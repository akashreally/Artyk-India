"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { brands } from "@/data/brands";

export default function CollaborationsList() {
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div className="relative" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <ul>
        {brands.map((b, i) => (
          <li key={b.slug} className="border-b border-cognac/20 first:border-t">
            <Link
              href={`/collaborations/${b.slug}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group flex items-baseline justify-between gap-6 py-7 md:py-10"
            >
              <span className="font-display text-[clamp(1.9rem,6vw,4.5rem)] font-light leading-none tracking-[-0.01em] text-onyx transition-colors duration-300 group-hover:text-forest">
                {b.name}
              </span>
              <span className="shrink-0 font-sans text-[11px] uppercase tracking-[0.24em] text-cognac">
                {b.meta}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* cursor-following preview (desktop) */}
      <AnimatePresence>
        {hover !== null && (
          <motion.div
            key={hover}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed z-40 hidden h-72 w-96 overflow-hidden shadow-2xl md:block"
            style={{ left: pos.x + 28, top: pos.y - 140 }}
          >
            <Image src={brands[hover].image} alt="" fill sizes="384px" className="object-cover" />
            <div className="absolute inset-0 bg-onyx/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
