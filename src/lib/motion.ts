// ⚠️ DUPLICATE MOTION UTILITIES — overlaps with src/lib/motion/variants.ts. Do not merge yet; see Phase 0 report.
import type { Variants, Transition } from "framer-motion";

/* ─── Shared easing curves ─── */
const luxuryEase = [0.22, 1, 0.36, 1] as const;
const softEase = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── Base transition presets ─── */
export const luxuryTransition: Transition = {
  duration: 1,
  ease: luxuryEase,
};

export const softTransition: Transition = {
  duration: 0.7,
  ease: softEase,
};

/* ─── Fade up (primary entrance) ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: luxuryEase },
  },
};

/* ─── Fade in (no vertical motion) ─── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: softEase },
  },
};

/* ─── Fade up with slight scale ─── */
export const fadeUpScale: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: luxuryEase },
  },
};

/* ─── Cinematic hero entrance (slow, dramatic) ─── */
export const heroFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: luxuryEase },
  },
};

/* ─── Image reveal (scale down from slightly zoomed) ─── */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: luxuryEase },
  },
};

/* ─── Slide from left ─── */
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: luxuryEase },
  },
};

/* ─── Slide from right ─── */
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: luxuryEase },
  },
};

/* ─── Stagger container ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* ─── Stagger container (faster for smaller groups) ─── */
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* ─── Viewport config reusable defaults ─── */
export const viewportOnce = { once: true, amount: 0.2 } as const;
export const viewportHalf = { once: true, amount: 0.4 } as const;
