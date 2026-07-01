"use client";
// ⚠️ DORMANT — not wired to any route (unused; uses valid tokens, not brand-*). Do not use as a pattern for new work. See design-system audit.

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { revealUp, staggerParent } from "@/lib/motion/variants";
import type { Collection } from "@/lib/sanity/types";
import { urlForImage } from "@/lib/sanity/image";
import { sampleImages } from "@/lib/sampleImages";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  const words = "A living gallery of European design.".split(" ");

  return (
    <motion.div className="absolute inset-0 flex items-center px-6 md:px-16" style={{ y, opacity }}>
      <div>
        <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-brass">Experience Centre · Jubilee Hills, Hyderabad</p>
        <h1 className="hero-display max-w-5xl font-display font-light italic">
          {words.map((word, index) => (
            <motion.span key={word} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.08 }} className="mr-3 inline-block">
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="mt-10 inline-block">
          <Link href="/contact" className="border border-brass px-7 py-3 text-xs uppercase tracking-[0.2em] text-brass transition hover:bg-brass hover:text-onyx">
            Discover Artyk
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function EditorialIntro() {
  return (
    <section className="bg-ivory px-6 py-section">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative h-[560px] overflow-hidden">
            <Image src={sampleImages.editorial} alt="Editorial introduction" fill className="object-cover" />
          </div>
        </motion.div>
        <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-[0.2em] text-brass">The Artyk Lens</p>
          <h2 className="mt-4 font-display text-5xl italic text-onyx">A curated dialogue between material, light and craft.</h2>
          <p className="mt-5 max-w-xl text-base font-light text-cognac">
            The experience centre presents furniture as architecture for everyday rituals, where every silhouette is chosen for longevity and emotional resonance.
          </p>
          <Link href="/editorial" className="mt-8 inline-block border border-brass px-6 py-3 text-xs uppercase tracking-[0.2em] text-brass">
            Read Editorial
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function CollectionGrid({ collections }: { collections: Collection[] }) {
  return (
    <section className="bg-ivory px-6 pb-section">
      <motion.div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3" variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {collections.slice(0, 3).map((collection, index) => (
          <motion.article key={collection._id} variants={revealUp} className={index === 1 ? "md:row-span-2" : ""}>
            <Link href={`/collections/${collection.slug.current}`} className="group block">
              <div className="relative h-[390px] overflow-hidden">
                <Image
                  src={collection.coverImage ? urlForImage(collection.coverImage).width(800).height(1000).url() : sampleImages.collectionLiving}
                  alt={collection.title}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brass">{collection.category}</p>
              <p className="underline-sweep mt-2 font-display text-3xl italic text-onyx">{collection.title}</p>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export function ExperienceSection() {
  const items = [
    { number: "01", title: "We Curate", description: "A precise edit of global brands selected for timeless relevance." },
    { number: "02", title: "We Showcase", description: "Layered spatial stories across 25,000 sq.ft. of material-led interiors." },
    { number: "03", title: "We Consult", description: "Collaborative guidance for collectors, homes, and design professionals." },
  ];
  return (
    <section className="bg-onyx px-6 py-section text-ivory">
      <motion.div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3" variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {items.map((item) => (
          <motion.article key={item.number} variants={revealUp}>
            <p className="font-display text-6xl italic text-ivory/20">{item.number}</p>
            <h3 className="mt-4 text-xl uppercase tracking-[0.12em] text-brass">{item.title}</h3>
            <p className="mt-3 max-w-sm font-light text-greige">{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

