import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { loveNotes } from "@/data/story";
import { Section, SectionHeading } from "./Section";

export function LoveNotes() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="letters">
      <SectionHeading
        eyebrow="love notes"
        title="Letters I'll Never Stop Writing"
        intro="Unfold one whenever you need it."
      />

      <div className="mx-auto grid max-w-3xl gap-5">
        {loveNotes.map((note, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="paper-card relative w-full rounded-md px-6 py-5 text-left"
                style={{ transform: `rotate(${i % 2 ? 0.5 : -0.6}deg)` }}
              >
                <span className="block font-hand text-2xl text-ink/85 sm:text-3xl">{note.title}</span>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="block overflow-hidden"
                    >
                      <span className="mt-4 block font-hand text-xl leading-relaxed text-ink/75 sm:text-2xl">
                        {note.body}
                      </span>
                    </motion.span>
                  ) : null}
                </AnimatePresence>
                <span className="mt-4 block text-[0.6rem] uppercase tracking-[0.3em] text-ink/45">
                  {isOpen ? "fold it back" : "unfold"}
                </span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
