# ARTYK — Website Re-Alignment Brief (paste into Claude Code in this repo)

You are working **inside the existing `Artyk-India` repo** (Next.js 16 App Router · TypeScript · Tailwind v4 · Sanity · Framer Motion). The site is already substantially built, but in a **different visual direction** than the client approved. Your job is to **re-align the existing build to the approved direction** — re-skin, re-type, reconcile the navigation, and add a working enquiry email. **Do not rebuild from scratch and do not discard the infrastructure** (Sanity schema, components, assets, logo, intro video). Reuse everything; change the skin, type, IA, and wire the form.

Work in small, reviewable commits. After changes, ensure `npm run build`, typecheck, and lint all pass.

---

## 0. Brand (context)
- **ARTYK** — ultra-premium furniture gallery, Jubilee Hills, Hyderabad. A 25,000 sq.ft European furniture experience centre, presented as a **private, by-appointment gallery** — an invitation, not a shop.
- **Tagline:** *Curated Living.*  **Founder:** Prachi Agarwal.  **Domain:** artykindia.com.
- **Not ecommerce. No pricing anywhere.** Audience: ultra-wealthy homeowners, architects, elite interior designers.
- Showcases partnerships with elite **Italian & Spanish** houses as proof of ARTYK's curation — **never advertises the partner brands**.
- **Values:** Sophistication, Craftsmanship, Quality, Luxury, Timelessness.

## 1. The approved creative direction (single source of truth)
The client approved **"Atelier typography + Threshold everything-else."**
- **Typography (from "The Quiet Atelier"):** serif-led, editorial, warm. Italic for captions/quotes.
  - Production faces (license later): **Editorial New** (display) + **Tiempos Text** (body).
  - **Ship now (free):** **Fraunces** (display) + **Newsreader** (body). Wire via CSS variables so the licensed faces drop in later with a one-file change.
  - Keep a **mono** for small eyebrows/labels/nav (uppercase, letter-spaced) — e.g. JetBrains Mono.
- **World (from "The Threshold"):** a calm, **daylit "garden gallery."** Neutral base — stone / oat / greige / walnut / camel — with **FOREST GREEN as the single accent**. Green *complements* the neutrals (like the showroom's window views); it is **not** a green theme and never a green background. **CORTEN** rust is the signature structural/material accent (it ties to the physical exterior wall).
- **Mood:** museum-quiet, modernist, biophilic, collectible, restrained. Daylight, not gold. Lots of air.

## 2. Design tokens — replace the current warm/gold system
Update **both** `tailwind.config.ts` (`theme.extend.colors`) **and** `src/app/globals.css` (`:root`).

**Colours (target):**
| Role | Hex | Replaces |
|---|---|---|
| Canvas / `--bg` | `#E6E3DA` (stone) | `#e9ddd0` |
| Paper / `--paper` | `#F2EFE7` | `#f6efe7` |
| Ink / `--ink` | `#1F2420` (forest-ink) | `#1c140f` |
| Ink-soft | `#5B5F54` | `#4d3a2f` |
| **Accent / `--accent` (forest)** | `#2E4033` | `#9d6744` (retire brown) |
| Accent-soft / sage (on dark) | `#7E9A6E` | `#c18f70` |
| Oat | `#ECE7DB` | — |
| Greige | `#D9D5C8` | tune `greige #B5A898` |
| Camel | `#B59B87` | — |
| Walnut | `#5C3D26` | — |
| **CORTEN** (signature) | `#A85838` | — |
| Line / `--line` | `rgba(47,64,52,0.18)` | warm line |

- In `tailwind.config.ts`: set `forest: "#2E4033"` and make it the accent; **remove or repurpose `brass`/`cognac`** (no gold anywhere). Keep `ivory`/`mist` as light neutrals; add `oat`, `camel`, `walnut`, `corten`.
- In `globals.css`: **delete the warm-brown radial-gradient `background-image`** on `body`; replace with a near-flat stone canvas (an optional *very* subtle daylight wash top-centre is fine). Keep `.grain`. Repoint `.underline-sweep::after`, `.glass-panel`, `.subtle-grid` etc. to the new neutrals + forest accent.

**Typography (`src/app/layout.tsx`):**
- Replace `Cormorant_Garamond` → **`Fraunces`** (`variable: "--font-display"`, weights ~300–500, include italic).
- Replace `Manrope` → **`Newsreader`** (`variable: "--font-sans"`, weights ~300–500, include italic) — this is now the **serif body**.
- Add a mono via `next/font` (e.g. `JetBrains_Mono`, `variable: "--font-mono"`) for eyebrows/labels/nav.
- In `globals.css`: `body { font-family: var(--font-sans), serif; }`. `.hero-display` / `.section-title` keep `var(--font-display)`.
- Leave a clearly-commented block in `layout.tsx` marking exactly where to swap in **Editorial New + Tiempos Text** later via `next/font/local`.

## 3. Information architecture — reconcile to the approved sitemap
**Fix the current mismatch** (`Header.tsx` links ≠ `siteContent.ts` navLinks). Make **one** canonical nav, used everywhere:

`Home · Collections · Services · Showroom Visit · Journal · Contact`

- **Home** `/`
- **Collections** `/collections` — the Italian/Spanish **partner houses** + curated rooms, shown as a **CORTEN partner-plaque wall**. Merge the current **Brands** concept into Collections. Frame as a gallery, **not** a product grid; avoid room-type "shop" framing.
- **Services** `/services` — **NEW page.** Three services: **Premium Furniture · Interior & Furniture Consulting · International Sourcing.**
- **Showroom Visit** `/visit` — **NEW page** (scaffold, can be light): address-as-invitation, hours, map, appointment CTA.
- **Journal** `/journal` — **rename `/editorial` → `/journal`** (keep Sanity `editorialPost`). Minimal for now.
- **Contact** `/contact` — enquiry form (see §5).
- Fold `/about` (founder Prachi note) into Home or Services, or keep in footer. **Retire or merge `/gallery` and `/lookbook`** into Collections (no ecommerce framing).

**This pass must fully deliver: Home, Collections, Services, Contact.** Scaffold Visit + Journal.

## 4. Signature interactions (keep & restyle to the new palette)
- **Intro loader** (`ArtykPreloader` + `InitialLoadGate`): the **ARTYK wordmark constructs itself stroke-by-stroke, then lifts away.** Once per session (`sessionStorage`), with a **Skip** affordance, Framer Motion, and **`prefers-reduced-motion` fully honored** (no draw → instant reveal). Use the SVG wordmark in §7 for the stroke-draw; the official PNG logo elsewhere. No layout shift on reveal.
- **Header**: keep the glass-pill; restyle to neutral + forest accent; use the **official ARTYK logo** (not the lowercase text "artyk."). Keep scroll-aware behavior.
- **RevealOnScroll**: keep; reduced-motion safe.
- **CustomCursor**: keep but subtle/optional; must not break touch/keyboard.
- **Home hero**: use the existing `public/videos/artyk-intro-desktop.mp4` / `-mobile.mp4` + `artyk-intro-poster.jpg` — `muted autoplay loop playsinline`, poster fallback if the video 404s. Overlay the approved essence line (§6).

## 5. Contact enquiry — real email via Resend
- Add `resend` to dependencies. Create `src/app/api/enquiry/route.ts` (POST): validate, then send to **prachi@artyk.in** via Resend.
- Env: `RESEND_API_KEY`, `ENQUIRY_TO=prachi@artyk.in`, verified `ENQUIRY_FROM`. Add `.env.local.example` documenting them.
- Wire the existing **`EnquiryDrawer`** and the `/contact` form to POST here. Fields: name, email, phone, **enquiry type** (Appointment · Consulting · International Sourcing · General), message, + a honeypot. Proper success/error states, disabled-while-sending, accessible labels. **No pricing/checkout.**

## 6. Content & copy
- **Voice:** editorial, restrained, confident, sensory. Short declarative lines. No marketing fluff, no exclamation marks, **no pricing**. Anchor lines:
  - Tagline: **"Curated Living."**
  - Home essence: *"A calm, daylit room — stone, oat and walnut — and, beyond the glass, the canopy. The green never colours the walls; it frames them. A few extraordinary objects, each given air and light."*
  - Services: Premium Furniture; Interior & Furniture Consulting; International Sourcing.
  - Collections: partner houses from Italy & Spain, shown as proof of ARTYK's curation — not as brand ads.
- Rewrite any gold/ecommerce-flavored copy into this gallery voice. **Replace the placeholder testimonials** (`siteContent.ts`) with real ones or remove them (mark `TODO`). Replace room-type `.svg` placeholder imagery with the real photography (§7).

## 7. Assets
- **Photography** — use the real showroom set. Place in `public/images/showroom/` and use throughout (hero, Collections, Visit): `living-room.jpg` (the hero — neutral room, green canopy beyond), `entrance.jpg`, `canopy.jpg`, `gallery-installation.jpg`, `second-floor.jpg`, `exterior-signage.jpg` (the CORTEN wall). *(Ask the user to drop these in, or they already exist — replace the `.svg` placeholders.)*
- **Logo** — `public/videos/primary-logo-artyk.png` (move to `public/images/`). Use it in Header/Footer.
- **Loader wordmark SVG** — stroke-drawable ARTYK, `viewBox="0 0 320 56"`, animate each `path` with `stroke-dasharray/offset`. The "A" is a flat-top cut with **no crossbar** (brand signature):
```html
<svg viewBox="0 0 320 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- A (flat-top, no crossbar) --><path d="M2 50 L18 6"/><path d="M18 6 L30 6"/><path d="M30 6 L46 50"/>
  <!-- R --><path d="M62 6 L62 50"/><path d="M62 6 Q92 6 92 16 Q92 26 62 26"/><path d="M74 26 L94 50"/>
  <!-- T --><path d="M108 6 L148 6"/><path d="M128 6 L128 50"/>
  <!-- Y --><path d="M158 6 L181 26"/><path d="M204 6 L181 26"/><path d="M181 26 L181 50"/>
  <!-- K --><path d="M218 6 L218 50"/><path d="M218 28 L248 6 M218 28 L250 50"/>
</svg>
```

## 8. Quality bar / acceptance
- **No gold/brown accent anywhere.** Forest green is the only accent; neutral base; serif type throughout; mono only for tiny labels.
- Header nav and `siteContent.ts` navLinks are **identical** and match §3.
- Loader: plays once/session, skippable, reduced-motion safe, no CLS.
- Contact form **actually emails** prachi@artyk.in (verify with a Resend test key).
- Lighthouse mobile: **a11y ≥ 95, performance ≥ 90**. Semantic HTML, alt text on all images, visible focus states, full keyboard nav, AA contrast.
- Responsive 360 → 1440+. `prefers-reduced-motion` fully honored. `npm run build` + typecheck + lint clean.

## 9. Fill-ins the client still owes (leave clearly-marked `TODO`s; don't block)
- Partner brand names (Italian/Spanish) for Collections.
- Real testimonials (or remove the section).
- Showroom hours, Instagram/social handles, WhatsApp number, Google Maps link.
- `RESEND_API_KEY` + verified sending domain.
- Licensed **Editorial New + Tiempos Text** font files (swap-in later).

---
**Suggested order:** (1) tokens + fonts → (2) Header/Footer + IA reconcile → (3) Home (hero video + essence + sections) → (4) Collections (CORTEN partner wall) → (5) Services → (6) Contact + Resend route → (7) scaffold Visit + Journal → (8) a11y/perf/reduced-motion pass → (9) `npm run build`.
