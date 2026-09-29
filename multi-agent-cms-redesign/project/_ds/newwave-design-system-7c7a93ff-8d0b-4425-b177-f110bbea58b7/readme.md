# NEWWAVE Design System

A brand-driven design system for **NEWWAVE** — a Vietnam-based **B2B technology services** company (custom software, AI, DevOps, eLearning, staff augmentation, MVP development). The identity reads *trustworthy, clear, modern and always oriented toward digital growth* ("tin cậy, rõ ràng và luôn hướng về tăng trưởng số").

This system is derived from the official **Brand Guideline 2026 v1.0** (106 pages across two PDFs, bilingual VI/EN) plus the supplied logo, icon, font and sample-design packages. There is **no attached codebase or Figma file** — the guideline is the single source of truth, so the reusable components below are original constructions built to the brand's documented foundations, while `slides/` and `social/` reproduce the supplied sample designs.

## Brand story (§01–02)
- **Positioning:** *Trusted Tech Partner In Digital Transformation.* NEWWAVE is a technology partner that helps global enterprises adopt advanced technology for sustainable growth.
- **Vision:** become the trusted technology partner enabling global enterprises to grow sustainably through advanced technology.
- **Mission:** accompany clients from understanding the need, through solution design, to effective system delivery — supporting stable, reliable, scalable operations.
- **Core values:** Customer centricity · Commitment · Consistency · Innovation · Respect · Synergy.
- **Logo meaning:** an upward wave — progress, momentum, scalability. The **rounded square frame** stands for structure, reliability and systems thinking; the **three ascending waves** reference the three great waves of human change (agricultural, industrial, knowledge) and the obstacles Newers keep meeting and overcoming.
- **2026 refresh rationale:** the previous navy + pale-blue palette read safe, old and traditional; the new palette is brighter and higher-contrast for a global, digital-first market. Typography moved from **Bai Jamjuree** (robotic, mechanical, hard-tech) to **Manrope** (modern, geometric, minimal but friendly). "Solutions" was dropped from the primary lockup so the masterbrand stays lean and flexible for future products and sub-brands.

## Sources provided
- `uploads/Newwave Brand Guideline 2026 Part 1-compressed.pdf` (66 pp) — brand intro, logo, typography, color.
- `uploads/Newwave Brand Guideline 2026 Part 2-compressed.pdf` (40 pp) — layout, iconography, moodboard & style guide, pattern.
- `uploads/Brand Guideline/JPEG/` — page-by-page JPEG renders of the guideline.
- `uploads/_logo/` — 10 SVG + 10 PNG lockups (Primary, Extended, Vertical; color / negative full white / negative full black). Copied into `assets/logo/`.
- `uploads/_icon/` — 71 PNG feature icons (glassmorphic, cyan-blue gradient). Copied into `assets/icons/`.
- `uploads/Fonts/` — Manrope (variable + 7 static weights). Static weights copied into `assets/fonts/`.
- `uploads/_sample/` — 15 real applied designs (1:1 social carousels + 16:9 slides). Reproduced in `social/` and `slides/`.

---

## CONTENT FUNDAMENTALS
How NEWWAVE writes.

- **Voice:** Corporate-confident but human. Positions NEWWAVE as a dependable technology *partner*, not a vendor. Recurring value words: *trust (tin cậy), clarity (rõ ràng), structure (cấu trúc), growth (tăng trưởng số), modern, future-ready.*
- **Person:** Brand-forward third person for identity copy ("NEWWAVE delivers…"); shifts to **you** when addressing the client/prospect in marketing and product surfaces. Avoid "I".
- **Tone:** Precise, structured, accessible. Sentences are declarative and benefit-led. Technical when needed but never jargon for its own sake — the guideline stresses *readability across a global, multilingual B2B audience*.
- **Casing:** Sentence case for body and UI. Product/section labels and short nav items may be Title Case. Reserve ALL-CAPS for the wordmark, tiny eyebrow labels, and short stat captions (with wide letter-spacing).
- **Numbers & data:** Manrope's even, tabular-friendly figures are a deliberate brand asset — lead with concrete metrics (hours delivered, partner nations, years of experience) in dashboards, reports and proposals.
- **Emoji:** **Not used.** The brand expresses warmth through soft gradients, rounded geometry and glassmorphic icons — never emoji.
- **Vibe:** "Digital growth wave." Clean, airy, forward-moving. Example brand line from the guideline: *"Typography gives language a visual voice, shaping rhythm, hierarchy, and readability."*

---

## VISUAL FOUNDATIONS

### Color
- **Primary — Tech Blue `#002B9C`**: the corporate anchor; trust, stability, expertise. Deep, saturated.
- **Primary — Vivid Wave Blue `#006BFF`**: energy, motion, innovation. The main interactive/accent blue.
- **Primary — Bright Cyan `#3FE7FF`**: openness and breathing room; backgrounds, gradients, highlights.
- **Secondary:** Soft Cloud Blue `#22AEDF` (digital), Mint Green `#00D8A3` (success/growth), Light Blue `#E6F6FF` (surfaces), Amber Yellow `#FFC857` (optimistic highlight — *never* the danger color, and avoid placing the logo on amber, contrast is too low).
- **Signature gradient:** Tech Blue → Wave Blue → Bright Cyan (`--nw-gradient`), used on hero banners, covers, key visuals and large surfaces. **Text stays solid color** for legibility — gradients are for surfaces, not paragraphs.
- Each core hue ships a tint/shade ramp (see `tokens/colors.css`). Contrast targets from the guideline: body pairings score 5.3–10.4 (Good–Very good).
- **Palette discipline:** cool, blue-forward. Warm tones appear only as the single Amber accent. Neutrals are cool-tinted grays.

### Typography (§03)
- **Manrope** is the brand font — a contemporary geometric sans, 7 weights (ExtraLight 200 → ExtraBold 800). Chosen for the balance of geometric precision and friendly readability, and for stable, evenly-proportioned numerals that hold up in tables, reports, dashboards and financial data.
- **Official hierarchy:** Display XXL 72/110% ExtraBold · Display XL 56/110% Bold · H1 40/120% Bold · H2 32/120% Bold · H3 24/130% SemiBold · H4 20/130% SemiBold · Body large 18/150% Regular · Body 16/150% Regular · Caption 14/130% Regular · Label 12/140% Medium.
- **Tracking:** headline −2%, subheading −1%, body 0%. Proportion rule: sub-heading ≈ ⅓ the headline point size; body ≈ ½ the sub-heading, with a floor of 12pt print / 16px digital.
- **Web spec:** H1 56/110% (−2%), H2 32/120% (−1%), body 18/160%, button 16/120% SemiBold. **Mobile:** H1 40/120%, H2 28/120%, body 16/150%.
- **Japanese:** **Noto Sans JP**, set at **90–95%** of the English size, same weight and hierarchy. Never mismatch the language/typeface pairing.
- **Office font:** **Open Sans** for Word, PowerPoint, Excel and any file co-edited outside the organisation. PDFs and image exports may keep Manrope where licensed. Never mix Manrope and Open Sans at the same content level.
- **Don'ts:** no excessive letter-spacing, no distorting the typeface, no random font mixing, no inconsistent hierarchy, no more than a few weights at once, no all-caps paragraphs, no low-contrast backgrounds.
- **Print sizes:** brochure/flyer headline 28–36pt Bold, sub-headline 16–22pt SemiBold, body 10–12pt Regular, caption 8–10pt. Packaging product name 28–40pt Bold.

### Spacing, grid & layout (§05)
- 4px base spacing grid. Icons live on a 24×24 grid / 2px baseline with a 20px live area.
- **Grid:** 12 columns for print; 4 / 6 / 12 for digital and social. **Margins:** ≥10mm print (A4 spec 7mm), 40–80px digital. **Gutters:** 5–6mm print (A4 spec 5.5mm), ≥40px digital. **Social post 1080×1080:** 4 columns, 70px margins, 70px gutters.
- **Layout archetypes:** **Split** (copy one side, image the other), **Full Bleed** (edge-to-edge image with overlay copy), **Minimal** (type-led with generous space).
- **Layout principles:** Grid & Structure · Focus & Hierarchy · Direction & Flow · Balance & Space. Use only as many hierarchy levels as the content needs.
- **Layout don'ts:** unbalanced compositions, text overlapping imagery, over-long copy blocks, logo floated to the centre of a layout, too many graphic elements at once.
- **Logo placement:** top-left by default; top-right when the primary content sits left; top-centre for symmetric layouts; bottom-left/right when the top is occupied by a headline. Always respect clear-space (measured in symbol units) and min size (**24px digital / 10mm print** — below that, switch to the vertical or symbol-only lockup).
- **Logo lockup ratios:** Primary 12x × 61x · Extended 12x × 32x · Vertical 12x × 16x · Extended Vertical 12x × 18x · Symbol 12x × 12x.

### Backgrounds, texture & motion
- **Backgrounds:** clean light surfaces or the brand gradient on hero/cover areas. Two wave textures exist — **Outlined Wave** (light, airy, soft cyan glow — for calm layouts) and **Filled Wave** (bold solid wave blocks — for high-impact accents). Used as footers, framing shapes and social key visuals.
- **Glassmorphism** is a core motif (from the icon system): semi-transparent layers, soft blur, floating elements for depth and hierarchy.
- **Motion:** smooth, forward-moving — fades and gentle rises. Easing is standard/ease-out; **no bouncy or playful springs** (would undercut the corporate-trust tone).
- **Hover:** deepen brand blue or lift with shadow/glow. **Press:** slightly darker + subtle scale-down (~0.98). Focus: 3px Wave-Blue ring.

### Applied layout motifs (from the brand sample set)
The supplied `_sample/` designs (social carousels + presentation slides) reveal the brand's applied composition language, which the `slides/` and `social/` kits reproduce exactly:
- **Two backgrounds:** a deep radial/linear blue gradient (Tech Blue → Wave Blue, often with a bright hotspot) for high-impact frames, and a very-light blue-to-white gradient for airy, content-heavy ones. Both carry faint **concentric ring lines** (anchored off the left edge) and subtle **vertical light streaks**.
- **Two-tone headlines:** Manrope ExtraBold, with the emphasis word in **Bright Cyan** (on dark) or **Cyan/Wave-Blue** (on light) and the rest white or ink. Frequently ALL-CAPS for punchy hooks.
- **Glass cards:** white ~92% opaque panels, ~22px radius, with a **cyan→blue glowing offset shadow** behind them; glass icon circles/squares (translucent white, blurred) hold the brand PNG icons.
- **Signature devices:** an **arrow pill** (navy filled or glass) bottom-right for carousels; a small **page-number** top-right (`01`, `04`); logo top-center or top-left (white lockup on dark, color on light); giant **tabular stat numerals**; floating glass cubes/squares; big navy quotation marks; full-bleed cool business photography with a blue gradient overlay and bottom-left two-tone caption.

### Borders, radius, shadows
- **Corner radius:** rounded, friendly geometry — controls ~10px, cards ~16px, pills fully round. This softness is echoed in the icon language ("hình học bo tròn").
- **Borders:** thin, cool-gray (`--border-subtle/-default`). Brand-blue borders signal focus/selection.
- **Shadows:** soft, cool-blue-tinted, diffuse (never hard/black). Brand CTAs get a colored glow (`--shadow-brand`, `--shadow-cyan`). Cards = subtle border + soft shadow + 16px radius, on white.
- **Transparency & blur:** reserved for glass surfaces (overlays, floating cards, nav on imagery) — intentional, not decorative everywhere.
- **Imagery vibe:** cool, clean, modern, well-lit; blue-cast tech imagery; the logo goes light on dark/photographic backgrounds, full-color on clean light ones.

---

## ICONOGRAPHY (§06)
The guideline defines **two related icon layers**. Don't conflate them.

**1. UI icon system — outline.** Minimal, modern, accessible outline icons.
- **Geometry:** rounded shapes and soft corners, matching the logo's rounded-square language.
- **Stroke:** one consistent weight across the whole set; **rounded caps and joins**.
- **Grid:** 24×24 with a 2px baseline grid; 2px padding each side → **20px live area**. Use a shared icon template so differently-shaped glyphs balance optically.
- **Clear space:** 2px at 16px and 24px · 4px at 32px · 6px at 48px · 8px at 64px. Nothing may enter it.
- **Sizes:** even pixels only — **16 / 20 / 24 / 32 / 48px**. Odd sizes (17, 21, 25, 33) blur the strokes.
- **Color:** Tech Blue or Vivid Wave Blue. Glow, blur and gradient only in restraint.
- **Detail:** keep to the core meaning; keep breathing room; no unnecessary detail.
- **Don'ts:** solid fills, altered stroke weight, distortion/stretching, changed corner radius, safe-zone violations, added effects.

**2. Feature / service icon set — glassmorphic.** The illustrative layer used for services, features and value props: **glassmorphism** (semi-transparent layers for depth and hierarchy), **rounded geometry**, **floating elements**, and **soft Tech-Blue→lighter gradients**. Its four stated qualities are *humane & trustworthy, flexible & consistent, clear & accessible, technology-led*.
- **Delivery:** shipped as **raster PNGs** with the gradient/glass rendering baked in — 71 in `assets/icons/` (e.g. `Artificial Intelligence.png`, `DevOps.png`, `Custom Elearning Development.png`, `Staff Augmentation.png`). Use these directly via the `BrandIcon` component; never redraw them as flat SVGs.
- **Application:** website feature grids, presentation highlight blocks, social posts — same style, color and proportion throughout.

**Substitution flag:** the brand's **outline UI glyph set was not supplied** (only the glassmorphic PNGs). Generic UI glyphs in this system (chevrons, close, arrows) are drawn inline as simple shapes/unicode and kept visually secondary. If you have the real outline icon library, send it and I'll swap it in.

**Emoji / unicode as icons:** not used.

---

## PATTERN & TEXTURE (§08)
- **Construction:** built from the logo's wave symbol, laid out in **staggered rows** — each row offset rather than repeated on a rigid grid, so the rhythm reads as successive waves (progress, scalability, forward momentum). Structured enough for B2B, moving enough to avoid feeling static.
- **Filled pattern:** full-color symbol, strong brand presence — slide covers, social posts, merchandise, key visuals, large-format print. Adjust crop, scale or opacity so it never competes with content.
- **Outlined pattern:** outline version of the symbol — lighter, more systematic. For secondary backgrounds, content slides, website section dividers, watermarks and corporate documents.
- **Applications:** slide covers, social posts, website components, merchandise, packaging, watermarks, brand backgrounds, event backdrops, decals.
- **Outlined Wave Texture:** outline wave lines with soft glow and cyan gradient — light, subtle, suggests data movement and digital flow.
- **Filled Wave Texture:** solid wave masses — bolder, more direct, higher-energy; for accent moments.
- **Watermark use:** symbol at low opacity, consistent spacing, plenty of breathing room.

---

## MOODBOARD & STYLE GUIDE (§07)
Directional, not templates to copy. Five foundations: **people, graphics, lighting, composition, tone & mood.**
- **Moodboard themes:** Digital Growth · Corporate B2B Tech · Soft Futurism · Modern & Clean · Connected Infrastructure. Visual subjects: data, connection, digital infrastructure, motion.
- **Graphics:** technology, data, infrastructure and scale, in the brand blue range with light glow, gradients and coherent structure. Modern and future-facing but restrained for B2B.
- **Lighting:** *Glow Accent* (focus and visual direction) · *Gradient Lighting* (soft depth) · *Directional Light* (highlight subject and key information) · *Ambient Depth* (subtle background light and shadow).
- **Tone & mood:** Professional · Modern · Innovative · Optimistic.
- **Photography — individuals:** professional, composed, confident; focused, presenting, researching or deciding; interacting with a tablet, laptop, UI or data screen; clean blue-toned lighting. No stiff or artificial posing.
- **Photography — groups:** genuine collaboration, discussion, strategic partnership and problem-solving — strategy meetings, teams around a laptop or dashboard, client consultations, handshakes, cross-functional teams reviewing data, UX, software or a digital roadmap. No generic stock-office poses.
- **Effects discipline:** light, gradient, glassmorphism, soft 3D and motion streaks are all tightly controlled — modern depth without losing professionalism.

---

## Index / manifest
- `styles.css` — root entry; `@import`s the token + font closure. **Consumers link this one file.**
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `layout.css`, `effects.css`, `base.css`.
- `assets/` — `logo/` (10 PNG lockups: color / on-dark / vertical / negative full white / negative full black, primary + extended), `icons/` (71 brand PNGs), `fonts/` (Manrope static weights).
- `components/` — reusable React primitives (see below). Groups: `core/`, `forms/`, `feedback/`, `navigation/`.
- `ui_kits/marketing/` — corporate marketing website recreation.
- `slides/` — 16:9 presentation slide templates (`index.html` deck + one card per slide type).
- `social/` — 1:1 social-media post templates (`index.html` carousel + one card per post type).
- `guidelines/` — foundation specimen cards + iconography reference.
- `SKILL.md` — Agent-Skill wrapper for downstream use.

### Components
Core: Button, IconButton, Badge, Tag, Card, StatCard, Logo, BrandIcon, GradientText, WaveDivider. Forms: Input, Textarea, Select, Checkbox, Radio, Switch. Feedback: Alert, Tooltip, ProgressBar, Spinner. Navigation: Navbar, Tabs, Breadcrumb.

### Product surfaces (kits)
The brand's real applied outputs — confirmed by the sample set — are marketing collateral, presentation decks and social posts (NEWWAVE is a services company, not a SaaS product with an app UI):
- `ui_kits/marketing/` — NEWWAVE corporate marketing website: sticky glass nav, gradient hero with stat band + wave, services grid (brand icons), process, CTA, footer; interactive contact modal.
- `slides/` — 16:9 deck templates: Title/cover, Statement+icon, Big-stat, Feature-list, Quote+photo split. `index.html` is a click/arrow-key deck.
- `social/` — 1:1 post templates: Hook/question, Quote+glass-cubes, Contact/CTA, Photo statement, Big-stat. `index.html` is a swipeable carousel.

### Intentional additions
Because no source codebase defines a component inventory, a standard B2B primitive set was authored to the guideline's foundations. `BrandIcon` wraps the raster icon set; `Logo`, `GradientText` and `WaveDivider` encode brand-specific motifs (logo lockups, gradient text, wave texture) so downstream designs use them consistently.

## Known asset defect — logo SVGs
**The supplied logo SVGs are unusable and have been removed from `assets/`.** Every `.svg` in `uploads/_logo/` (and `uploads/Primary Logo Color.svg` / `Extended Logo Color.svg`) references `class="cls-1"`…`cls-6"` on its paths but ships with **no `<style>` block and no `fill` attributes** — the `<defs>` contains only a mask. With no class rules, every path falls back to SVG-default **solid black**, so all of them render as a black silhouette regardless of which file you open.

This system therefore uses the **PNG lockups as canonical** — they are correctly colored. `Logo` maps every variant to a PNG, and all cards reference PNGs.

**Ask:** please re-export the logo SVGs with fills applied (flattened, or with the `.cls-*` style block included). Vector lockups are needed for large-format print and for the wave pattern, which should be built from the symbol-only asset.

## CAVEATS
- No codebase/Figma was provided. Components are original constructions faithful to the guideline; the `slides/` and `social/` kits are close reproductions of the supplied `_sample/` designs; the `marketing/` site is a reasonable extrapolation (no website sample was provided).
- Photography is shown as labelled placeholders in the quote slide and photo post — drop in real cool-toned business imagery.
- Generic UI glyphs (chevrons, ×, arrows) are drawn inline/with unicode; all feature iconography uses the shipped brand PNGs.
