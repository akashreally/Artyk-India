import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // — Ink & dark neutrals —
        onyx: "#1F2420", // deep forest-ink (primary text / dark panels)
        cognac: "#5B5F54", // de-golded: quiet taupe-grey for secondary text & borders

        // — Accent: forest green (the approved single accent) —
        // `brass` value re-skinned gold -> green so the ~27 existing classes shift
        // without renaming; `forest` is the canonical accent token going forward.
        brass: "#2E4033",
        forest: "#2E4033",
        sage: "#7E9A6E", // accent on dark backgrounds
        corten: "#A85838", // signature material accent (exterior CORTEN wall)

        // — Light neutrals —
        greige: "#B5A898",
        mist: "#E8E2DA",
        ivory: "#F4F1E9", // light canvas / text on dark
        stone: "#E6E3DA", // page canvas
        oat: "#ECE7DB",
        camel: "#B59B87",
        walnut: "#5C3D26",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      spacing: {
        section: "7rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};

export default config;
