import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import InviteCTA from "@/components/sections/InviteCTA";

export const metadata = { title: "About Us" };

const stats = [
  { n: "25,000", label: "Square feet" },
  { n: "3", label: "Floors" },
  { n: "7", label: "Partner houses" },
];

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="px-6 pt-36 pb-16 md:px-16 md:pt-44 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-forest">About Us</p>
            <div className="mt-6 h-px w-16 bg-corten" />
          </div>
          <Reveal className="md:col-span-9">
            <h1 className="font-display text-[clamp(1.9rem,4.4vw,3.7rem)] font-light leading-[1.12] tracking-[-0.01em] text-onyx">
              ARTYK was founded to redefine how India experiences luxury design — a deeply curated,
              tactile gallery where European craft meets an Indian sensibility.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="px-6 pb-24 md:px-16 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/founder/founder-2.jpg"
                alt="Avinash & Prachi Agarwal, founders of ARTYK"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="md:col-span-6">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-forest">The Founders</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-light text-onyx">
              Avinash &amp; Prachi Agarwal
            </h2>
            <p className="mt-7 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-light italic leading-snug text-cognac">
              &ldquo;We want to redefine the way people engage with design.&rdquo;
            </p>
            <p className="mt-7 max-w-md leading-relaxed text-cognac">
              [Placeholder] A few lines on Avinash and Prachi — their story, their eye, and the
              conviction that led them to build ARTYK as a gallery rather than a showroom. Final copy
              to follow.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 md:mt-16 md:gap-6">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/3]">
              <Image src="/images/founder/founder-duo.jpg" alt="The founders of ARTYK" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/3]">
              <Image src="/images/founder/founder-1.jpg" alt="The founders of ARTYK" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-cognac/20 bg-oat/50 px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[clamp(2.6rem,5vw,4.2rem)] font-light leading-none text-onyx">{s.n}</p>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.24em] text-cognac">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <InviteCTA />
    </>
  );
}
