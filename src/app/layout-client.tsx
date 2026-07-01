'use client';

import { useEffect } from 'react';
import { InitialLoadGate } from '@/components/ui/InitialLoadGate';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/ui/PageTransition';
import { CustomCursor } from '@/components/ui/CustomCursor';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  // On a fresh document load (including reload), always start at the top of the
  // landing page rather than restoring the previous scroll position.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <InitialLoadGate>
      <Header />
      <PageTransition>
        <main className="min-h-screen">{children}</main>
      </PageTransition>
      <Footer />
      <CustomCursor />
    </InitialLoadGate>
  );
}
