import { motion } from "motion/react";
import { finalQuote, gratitude } from "@/data/story";

export function Gratitude() {
  return (
    <section
      id="thank-you"
      className="section-seam relative z-10 overflow-hidden px-6 py-32 sm:py-48"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.08_0.02_300)]/90 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[50vh] w-[60vw] -translate-x-1/2 rounded-full bg-violet/20 blur-[180px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {gratitude.lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 22, filter: "blur(16px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2.6, delay: i * 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-glow-violet mb-8 text-balance font-serif text-2xl leading-tight text-cream sm:text-5xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

export function FinalQuote() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-32 sm:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[45vh] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum/30 blur-[160px]" />
      <motion.blockquote
        initial={{ opacity: 0, scale: 0.98, filter: "blur(18px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-2xl text-center"
      >
        {finalQuote.map((line, i) => (
          <p
            key={line}
            className={`text-glow-violet text-balance font-serif leading-tight text-cream ${
              i === 0 ? "text-2xl sm:text-4xl" : "mt-8 text-3xl text-lavender sm:text-5xl"
            }`}
          >
            {line}
          </p>
        ))}
      </motion.blockquote>
    </section>
  );
}
