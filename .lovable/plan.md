## Goal
Update the existing site — same layout, theme structure and animation language — with purple accents, interactive cursor, ambient hearts, real memories, and three new emotional sections.

## 1. Global atmosphere (no redesign)
- `src/styles.css`: add purple/lavender tokens (`--violet`, `--plum`, `--lavender`) alongside existing wine/rose, plus `--glow-violet`. Add `glow-violet`, `text-glow-violet` utilities and a purple-pink glow on the existing button/glass utilities. Keep background as deep as it is — no brightening.
- `Ambient.tsx`: add deep purple gradient orbs to the existing bloom set, mix a few lavender glow particles in, and add a slow parallax translate on the orbs tied to scroll (`useScroll` + `useTransform`).
- New `CursorGlow.tsx`: desktop-only (pointer: fine), spring-followed soft purple-pink aura, scales up over `button, a, img, [data-cursor]`, ripple burst on click. Hides native cursor only where safe; respects reduced motion. Mounted once in `src/routes/index.tsx`.
- New `FloatingHearts.tsx`: fixed, `pointer-events-none`, low z-index behind content — tiny translucent hearts with randomized size/opacity/speed drifting upward, mixed with a few glowing dots. Count reduced on mobile/low-power.
- `Section.tsx`: add a shared soft gradient divider + slightly longer fade/blur-in transition so every section blends into the next.

## 2. Content personalization (`src/data/story.ts`)
All new copy lives here, editable in one place.
- Timeline rewritten with the real story: the Instagram story reply ("The Man Who Sold The World" / Nirvana / Hail Kurt Cobain), first meeting 21 March at Dahanu Festival with her nervous-hands story, the proposal 19 April 2026, 2:19 AM ("The Night I Asked You"), and first kiss 6 June ("Our First Kiss"). The kiss card gets extra-slow fade timing.
- Love notes replaced with five personal letters: "The Story Reply That Changed Everything", "The Girl From Dahanu", "2:19 AM", "June 6", "Dear Rawrokiebye" — written in a plain, in-love voice, using Divyangi ❤️ and Rawrokiebye occasionally.
- Gallery captions renamed to: Our First Selfie, Festival Memories, Us, Random Happy Days, Favorite Pictures, Late Night Memories (placeholder images kept).
- Hero/ending/secret copy lightly reworded to use her name.

## 3. Remove "100 Reasons"
Delete `Reasons.tsx`, the `reasons` array, and its import/usage in `index.tsx`.

## 4. New section — "If We Could Pause Time" (replaces it)
- New `PauseTime.tsx`: darker local backdrop overlay, slower particle feel, each sentence fades in individually on scroll with long easing and elegant serif type.
- Bottom: glowing purple "One More Memory" button. Each click pulls a random entry from an editable `pauseTimeMemories` array in `story.ts` and reveals it with an old-photograph feel (sepia→color, grain, blur-out), cycling through a few different transition variants so no two reveals look identical.

## 5. New section — "The Little Things"
- New `LittleThings.tsx`: floating glass cards from an editable `littleThings` array, each with its own gentle idle float and a subtle cursor-reactive tilt/parallax on hover (disabled on touch).

## 6. Ending
- New `Gratitude.tsx` placed before `Ending`: large serif text on a darker panel, very slow line-by-line fade for the "Thank you… we'll look back at this website together" passage.
- New quote block before the finale: "In the end, it was never about grand moments. It was always the little things… and you." — slow fade, generous space, purple glow.
- Existing `Ending.tsx` (fading lines + confetti) kept as-is, with confetti tinted to include purple/lavender.

## Technical notes
- Stack stays TanStack Start + Tailwind v4 + Motion; no new dependencies.
- All colors go through semantic tokens in `styles.css`; no hardcoded hex in components.
- All new decorative layers are `pointer-events-none` and sit below text z-index.
- Everything respects `prefers-reduced-motion` and scales down effect counts on mobile.
- Verified with Playwright screenshots at mobile and desktop widths after the build.
