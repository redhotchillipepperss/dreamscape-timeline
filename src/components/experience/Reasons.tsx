import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { reasons } from "@/data/story";
import { Section, SectionHeading } from "./Section";

export function Reasons() {
  const [i, setI] = useState(0);

  return (
    <Section id="reasons">
      <SectionHeading eyebrow="the list" title="100 Reasons I Love You" intro="One at a time. We have plenty of time." />

      <div className="glass relative mx-auto flex min-h-64 max-w-2xl flex-col items-center justify-between gap-8 rounded-3xl p-7 text-center sm:min-h-72 sm:p-12">
        <p className="text-[0.62rem] uppercase tracking-[0.4em] text-blush/60">
          reason {String(i + 1).padStart(2, "0")} / {reasons.length}
        </p>

        <div className="flex flex-1 items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance font-serif text-2xl leading-snug text-cream sm:text-4xl"
            >
              {reasons[i]}
            </motion.p>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setI((v) => (v + 1) % reasons.length)}
          className="glow-rose rounded-full bg-rose/35 px-8 py-3 text-[0.68rem] uppercase tracking-[0.3em] text-cream transition-colors duration-300 hover:bg-rose/50 active:scale-95"
        >
          one more
        </button>
      </div>
    </Section>
  );
}
