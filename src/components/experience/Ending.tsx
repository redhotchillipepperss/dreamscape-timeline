import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ending } from "@/data/story";
import { Confetti } from "./Confetti";

export function Ending() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      id="ending"
      className="relative z-10 flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      <Confetti active={inView} />

      <div className="relative mx-auto max-w-2xl text-center">
        {ending.lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5 + i * 2.2, duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-glow mb-8 text-balance font-serif text-3xl leading-tight text-cream sm:text-6xl"
          >
            {line}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 5.4, duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-sm uppercase tracking-[0.35em] text-blush"
        >
          {ending.closing}
        </motion.p>
      </div>
    </section>
  );
}
