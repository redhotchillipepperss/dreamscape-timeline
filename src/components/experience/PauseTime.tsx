import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { pausedMemories, pauseTime } from "@/data/story";

const variants = [
  { initial: { opacity: 0, scale: 1.08, filter: "blur(16px) sepia(1)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px) sepia(0)" } },
  { initial: { opacity: 0, y: 30, filter: "blur(12px) brightness(0.4)" }, animate: { opacity: 1, y: 0, filter: "blur(0px) brightness(1)" } },
  { initial: { opacity: 0, rotate: -2.5, scale: 0.94, filter: "blur(10px) contrast(0.6)" }, animate: { opacity: 1, rotate: 0, scale: 1, filter: "blur(0px) contrast(1)" } },
  { initial: { opacity: 0, x: -26, filter: "blur(14px) saturate(0)" }, animate: { opacity: 1, x: 0, filter: "blur(0px) saturate(1)" } },
];

export function PauseTime() {
  const [memory, setMemory] = useState<{ text: string; key: number; v: number } | null>(null);

  const reveal = () => {
    const text = pausedMemories[Math.floor(Math.random() * pausedMemories.length)];
    setMemory((prev) => ({
      text,
      key: (prev?.key ?? 0) + 1,
      v: Math.floor(Math.random() * variants.length),
    }));
  };

  return (
    <section
      id="pause-time"
      className="section-seam relative z-10 overflow-hidden px-5 py-32 sm:px-8 sm:py-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/85 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum/25 blur-[170px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-10 text-[0.62rem] uppercase tracking-[0.5em] text-lavender/60">{pauseTime.eyebrow}</p>

        {pauseTime.lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.8, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`text-glow-violet mb-7 text-balance font-serif leading-tight text-cream ${
              i === 0 ? "text-3xl sm:text-5xl" : "text-2xl sm:text-4xl"
            }`}
          >
            {line}
          </motion.p>
        ))}

        <div className="mt-16 min-h-40">
          <AnimatePresence mode="wait">
            {memory ? (
              <motion.div
                key={memory.key}
                initial={variants[memory.v].initial}
                animate={variants[memory.v].animate}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass film-grain relative mx-auto max-w-xl overflow-hidden rounded-2xl p-8"
              >
                <p className="font-serif text-xl leading-relaxed text-cream sm:text-2xl">{memory.text}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <button
          onClick={reveal}
          className="glow-romance mt-10 rounded-full bg-violet/45 px-9 py-4 text-[0.68rem] uppercase tracking-[0.32em] text-cream transition-colors duration-500 hover:bg-violet/65 active:scale-95"
        >
          {pauseTime.button}
        </button>
      </div>
    </section>
  );
}
