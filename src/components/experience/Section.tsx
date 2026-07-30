import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto mb-12 max-w-2xl px-1 text-center sm:mb-16"
    >
      {eyebrow ? (
        <p className="mb-4 text-[0.68rem] uppercase tracking-[0.42em] text-blush/70">{eyebrow}</p>
      ) : null}
      <h2 className="text-glow text-balance text-3xl leading-[1.15] text-cream sm:text-5xl">{title}</h2>
      {intro ? (
        <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      ) : null}
    </motion.header>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative z-10 px-5 py-24 sm:px-8 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
