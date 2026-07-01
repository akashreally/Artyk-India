"use client";
// ⚠️ DORMANT — not wired to any route (unused; uses valid tokens). Do not use as a pattern for new work. See design-system audit.

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    title: "Furniture",
    href: "/furniture",
    img: "/images/services/service-furniture.jpg",
    body: "Twenty-five thousand square feet of collectible European furniture and lighting, arranged like an exhibition and changed like one.",
  },
  {
    title: "Sourcing",
    href: "/sourcing",
    img: "/images/services/service-sourcing.jpg",
    body: "Access to the rare and the made-to-order, sourced and brought to Hyderabad through our partner houses.",
  },
  {
    title: "Consulting",
    href: "/consulting",
    img: "/images/services/consulting.jpg",
    body: "Considered guidance for the whole space — composition, material, and light, in quiet dialogue with your architecture.",
  },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <section className="px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between border-t border-cognac/25 pt-8">
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-light text-onyx">
            What ARTYK is
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-12 md:gap-14">
          {/* LEFT — swapping image, with a button to the discipline's page */}
          <div className="relative aspect-[5/4] overflow-hidden md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={cur.img}
                  alt={cur.title}
                  fill
                  sizes="(max-width:768px) 100vw, 58vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/55 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 font-sans text-[11px] uppercase tracking-[0.28em] text-ivory">
              {cur.title}
            </span>
            <Link
              href={cur.href}
              className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-ivory/50 bg-onyx/20 px-5 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory backdrop-blur-sm transition hover:bg-ivory hover:text-onyx"
              aria-label={`Discover ${cur.title}`}
            >
              Discover <span aria-hidden>→</span>
            </Link>
          </div>

          {/* RIGHT — the three disciplines, styled like the ARTYK signboard */}
          <div className="flex flex-col justify-center md:col-span-5">
            {items.map((it, i) => (
              <button
                key={it.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group border-b border-cognac/15 py-7 text-left first:border-t"
                aria-pressed={active === i}
              >
                <div className="flex items-center gap-5">
                  <span
                    className={`h-px shrink-0 transition-all duration-500 ease-out ${
                      active === i ? "w-16 bg-corten" : "w-9 bg-cognac/40"
                    }`}
                  />
                  <h3
                    className={`font-display text-[clamp(1.7rem,3.6vw,2.8rem)] font-normal uppercase tracking-[0.04em] transition-colors ${
                      active === i ? "text-onyx" : "text-cognac/55"
                    }`}
                  >
                    {it.title}
                  </h3>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 pl-[5.25rem] text-sm leading-relaxed text-cognac">{it.body}</p>
                </motion.div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
