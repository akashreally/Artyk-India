"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

type ArtykPreloaderProps = {
  onComplete: () => void;
};

const LOGO_SRC = "/videos/primary-logo-artyk-removebg-preview copy.png";

// Intrinsic logo dimensions (px). Used to lock exact proportions.
const LOGO_WIDTH = 742;
const LOGO_HEIGHT = 336;

// Horizontal split (% of height) that sits in the whitespace gap between the
// ARTYK wordmark and the original "CURATED LIVING" subtitle baked into the PNG.
const SPLIT = 55;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export function ArtykPreloader({ onComplete }: ArtykPreloaderProps) {
  const wordmark = useAnimationControls();
  const subtitle = useAnimationControls();
  const shell = useAnimationControls();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    async function runSequence() {
      if (reducedMotion) {
        await Promise.all([wordmark.start("visible"), subtitle.start("visible")]);
        await wait(420);
        await shell.start("hidden");
        if (!cancelled) onComplete();
        return;
      }

      // Phase 2 runs concurrently with Phase 1 (fire-and-forget).
      void subtitle.start("visible");

      // Phase 1 — progressive left-to-right reveal of the original wordmark.
      await wordmark.start("visible");

      // Phase 3 — hold so the fully-revealed logo can be appreciated.
      await wait(900);

      // Phase 4 — fade the preloader away to reveal the homepage beneath.
      await shell.start("hidden");

      if (!cancelled) onComplete();
    }

    void runSequence();

    return () => {
      cancelled = true;
    };
  }, [onComplete, reducedMotion, shell, subtitle, wordmark]);

  return (
    <motion.div
      initial="visible"
      animate={shell}
      variants={{
        visible: { opacity: 1 },
        hidden: {
          opacity: 0,
          transition: {
            duration: reducedMotion ? 0.3 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-[#ece9e0]"
      aria-hidden="true"
    >
      <div className="relative flex w-full items-center justify-center px-6">
        <div
          className="relative w-[min(62vw,380px)] sm:w-[min(46vw,320px)]"
          style={{ aspectRatio: `${LOGO_WIDTH} / ${LOGO_HEIGHT}` }}
        >
          {/* Wordmark band — clipped to the top of the original logo, then
              progressively unveiled from the left edge of the "A" to the "K". */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 ${100 - SPLIT}% 0)` }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ willChange: "clip-path" }}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={wordmark}
              variants={{
                visible: {
                  clipPath: "inset(0 0% 0 0)",
                  transition: {
                    duration: reducedMotion ? 0.3 : 3.2,
                    ease: [0.76, 0, 0.24, 1],
                  },
                },
              }}
            >
              <Image
                src={LOGO_SRC}
                alt="ARTYK Curated Living"
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 62vw, 320px"
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Subtitle band — the original "CURATED LIVING" lockup, revealed
              separately with a subtle upward rise and fade, slightly delayed. */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(${SPLIT}% 0 0 0)` }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ willChange: "transform, opacity" }}
              initial={{ opacity: 0, y: 16 }}
              animate={subtitle}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: reducedMotion ? 0 : 1.0,
                    duration: reducedMotion ? 0.3 : 1.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <Image
                src={LOGO_SRC}
                alt=""
                aria-hidden="true"
                fill
                unoptimized
                sizes="(max-width: 640px) 62vw, 320px"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
