"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArtykPreloader } from "@/components/ui/ArtykPreloader";

const STORAGE_KEY = "artyk-initial-preloader-complete";
const IS_DEV = process.env.NODE_ENV !== "production";

type InitialLoadGateProps = {
  children: ReactNode;
};

export function InitialLoadGate({ children }: InitialLoadGateProps) {
  const [showPreloader, setShowPreloader] = useState<boolean>(() => {
    if (IS_DEV) return true;
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(STORAGE_KEY) !== "1";
  });
  const reducedMotion = useReducedMotion();

  const handleComplete = useCallback(() => {
    if (!IS_DEV) {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setShowPreloader(false);
  }, []);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showPreloader ? <ArtykPreloader onComplete={handleComplete} /> : null}
      </AnimatePresence>
    </>
  );
}