import { motion } from "motion/react";
import { scrapbook } from "@/data/story";
import { Section, SectionHeading } from "./Section";

export function Scrapbook() {
  return (
    <Section id="scrapbook">
      <SectionHeading
        eyebrow="scrapbook"
        title="Pages I'd glue into a real book"
        intro="Tape, bad handwriting, and everything I couldn't throw away."
      />

      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        {scrapbook.map((item, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="paper-card tape relative rounded-sm p-4 pt-7"
          >
            <img
              src={item.photo}
              alt={item.caption}
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 flex items-end justify-between gap-3">
              <span className="font-hand text-2xl text-ink/80">{item.caption}</span>
              <svg viewBox="0 0 40 24" className="h-5 w-10 shrink-0 opacity-50" aria-hidden>
                <path
                  d="M2 18 C 8 4, 16 4, 20 14 C 24 4, 32 4, 38 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
