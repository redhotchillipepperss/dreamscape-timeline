import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { starMessage } from "@/data/story";
import { Section, SectionHeading } from "./Section";

type Star = { x: number; y: number; size: number; delay: number; duration: number };

export function StarMap() {
  const [stars, setStars] = useState<Star[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const count = window.innerWidth < 640 ? 60 : 130;
    setStars(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.6,
        delay: Math.random() * -12,
        duration: Math.random() * 8 + 6,
      })),
    );
  }, []);

  return (
    <Section id="stars">
      <SectionHeading eyebrow="the night sky" title="Somewhere up there, there's one that's ours" />

      <div className="relative mx-auto h-[26rem] w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-background/60 sm:h-[32rem]">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cream"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              opacity: 0.7,
              animation: `drift ${s.duration}s ease-in-out ${s.delay}s infinite`,
              willChange: "transform",
            }}
          />
        ))}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Reveal our star"
          className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center"
        >
          <span
            className="block size-3 rounded-full bg-cream shadow-[0_0_40px_10px_oklch(0.78_0.062_12/60%)]"
            style={{ animation: "breathe 3.6s ease-in-out infinite" }}
          />
          <span className="mt-4 block text-[0.58rem] uppercase tracking-[0.35em] text-blush/70">us</span>
        </button>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass absolute inset-x-4 bottom-4 rounded-2xl p-6 text-center sm:inset-x-auto sm:left-1/2 sm:w-[26rem] sm:-translate-x-1/2"
            >
              <h3 className="font-serif text-2xl text-cream">{starMessage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{starMessage.body}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,oklch(0.12_0.012_285/85%)_100%)]" />
      </div>
    </Section>
  );
}
