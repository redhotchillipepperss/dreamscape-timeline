import { AnimatePresence, motion } from "motion/react";
import { hero } from "@/data/story";

export function Landing({ onBegin, open }: { onBegin: () => void; open: boolean }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="landing"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background px-6"
          exit={{ opacity: 0, filter: "blur(14px)", scale: 1.06 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="relative z-10 mx-auto max-w-xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-[0.65rem] uppercase tracking-[0.5em] text-blush/60"
            >
              a small place made for you
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.2, duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="text-glow text-balance text-4xl leading-[1.1] text-cream sm:text-6xl md:text-7xl"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-md text-pretty text-sm font-light leading-relaxed text-muted-foreground sm:text-base"
            >
              {hero.subtitle}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.97 }}
              onClick={onBegin}
              className="glass glow-rose mt-12 rounded-full px-9 py-4 text-xs uppercase tracking-[0.32em] text-cream transition-all duration-500 hover:bg-rose/25 active:bg-rose/25"
            >
              {hero.cta}
            </motion.button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
