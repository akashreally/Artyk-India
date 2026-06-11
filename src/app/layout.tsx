import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { InitialLoadGate } from "@/components/ui/InitialLoadGate";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artykindia.com"),
  title: {
    default: "Artyk India",
    template: "%s | Artyk India",
  },
  description:
    "Artyk India is a 25,000 sq.ft. European furniture experience centre in Jubilee Hills, Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-ivory text-onyx antialiased">
        <InitialLoadGate>
          <Header />
          <PageTransition>
            <main className="pt-24 md:pt-28">{children}</main>
          </PageTransition>
          <Footer />
          <CustomCursor />
        </InitialLoadGate>
      </body>
    </html>
  );
}