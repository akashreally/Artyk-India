import type { Metadata } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layout-client";

// Approved type direction (from "The Quiet Atelier"): serif-led, editorial.
// These are the FREE stand-ins. To ship the licensed Editorial New + Tiempos
// Text later, replace these two with next/font/local and keep the same
// variable names (--font-display / --font-sans) — nothing else needs to change.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
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
    <html lang="en" className={`${fraunces.variable} ${newsreader.variable}`}>
      <body className="bg-stone text-onyx antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}