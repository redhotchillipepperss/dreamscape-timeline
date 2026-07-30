import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { memoryJar } from "@/data/story";
import { Section, SectionHeading } from "./Section";

const notePositions = [
  { x: 14, y: 62, r: -12 },
  { x: 44, y: 70, r: 8 },
  { x: 68, y: 60, r: -5 },
  { x: 28, y: 46, r: 14 },
  { x: 56, y: 44, r: -9 },
  { x: 40, y: 32, r: 5 },
  { x: 22, y: 78, r: 3 },
  { x: 64, y: 78, r: -14 },
];

export function MemoryJar() {
  const [memory, setMemory] = useState<string | null>(null);

  const pick = () => {
    const next = memoryJar[Math.floor(Math.random() * memoryJar.length)];
    setMemory(next);
  };

  return (
    <Section id="jar">
      <SectionHeading
        eyebrow="memory jar"
        title="Little things we kept"
        intro="Tap a folded note and see which memory floats up."
      />

      <div className="mx-auto max-w-md">
        <div className="glass relative mx-auto h-80 w-64 overflow-hidden rounded-b-[3.5rem] rounded-t-2xl sm:h-96 sm:w-72">
          <div className="absolute inset-x-6 -top-2 h-6 rounded-full bg-blush/20 blur-[2px]" />
          {notePositions.map((p, i) => (
            <motion.button
              key={i}
              aria-label="Open a random memory"
              onClick={pick}
              animate={{ y: [0, -10, 0], rotate: [p.r, p.r + 4, p.r] }}
              transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
              whileTap={{ scale: 1.2 }}
              className="absolute size-8 rounded-[3px] bg-paper/90 shadow-[0_4px_14px_oklch(0_0_0/50%)] sm:size-9"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/10 via-transparent to-rose/15" />
        </div>

        <div className="mt-8 min-h-24">
          <AnimatePresence mode="wait">
            {memory ? (
              <motion.p
                key={memory}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="paper-card mx-auto max-w-sm rounded-md px-6 py-5 text-center font-hand text-xl leading-snug text-ink/80 sm:text-2xl"
              >
                {memory}
              </motion.p>
            ) : (
              <p className="text-center text-xs uppercase tracking-[0.3em] text-blush/50">tap a note</p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
