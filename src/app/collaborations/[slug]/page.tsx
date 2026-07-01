import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { brands, getBrand } from "@/data/brands";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBrand(slug);
  return { title: b ? `${b.name} — Collaborations` : "Collaborations" };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBrand(slug);
  if (!b) notFound();

  return (
    <>
      <section className="relative h-[74vh] min-h-[460px] w-full overflow-hidden">
        <Image src={b.image} alt={b.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-onyx/50" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-16 md:pb-24">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/80">{b.meta}</p>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,8vw,6rem)] font-light leading-none text-ivory">
            {b.name}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 md:py-36">
        <Reveal>
          <p className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-light leading-[1.25] text-onyx">
            {b.tagline}
          </p>
          <p className="mt-8 text-lg leading-relaxed text-cognac">{b.description}</p>
          <p className="mt-8 font-sans text-[12px] uppercase tracking-[0.18em] text-cognac">
            Curated in the ARTYK gallery — Jubilee Hills, Hyderabad.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-onyx px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory transition hover:bg-forest"
            >
              Enquire about {b.name}
            </Link>
            <a
              href={`https://instagram.com/${b.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cognac/40 px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-onyx transition hover:border-forest hover:text-forest"
            >
              @{b.instagram}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-cognac/20 px-6 py-14 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Link href="/collaborations" className="font-sans text-[11px] uppercase tracking-[0.24em] text-forest underline-sweep">
            ← All collaborations
          </Link>
        </div>
      </section>
    </>
  );
}
