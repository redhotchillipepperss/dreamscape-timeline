import { motion } from "motion/react";
import { timeline } from "@/data/story";
import { Section, SectionHeading } from "./Section";

export function Timeline({ onVideo }: { onVideo: (src: string, title: string) => void }) {
  return (
    <Section id="story">
      <SectionHeading
        eyebrow="our story"
        title="Everything that led to now"
        intro="Scroll slowly. Every one of these still lives somewhere in me."
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-transparent via-rose/50 to-transparent sm:left-1/2" />

        <ol className="space-y-14 sm:space-y-24">
          {timeline.map((entry, i) => (
            <motion.li
              key={entry.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative pl-10 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
              }`}
            >
              <span
                className={`absolute left-[0.42rem] top-2 size-2.5 rounded-full bg-blush shadow-[0_0_18px_2px_oklch(0.78_0.062_12/60%)] sm:left-auto ${
                  i % 2 === 0 ? "sm:-right-[0.31rem]" : "sm:-left-[0.31rem]"
                }`}
              />
              <div className="glass rounded-2xl p-5 sm:p-7">
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-blush/70">{entry.date}</p>
                <h3 className="mt-3 font-serif text-2xl text-cream sm:text-3xl">{entry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>

                {entry.photo ? (
                  <img
                    src={entry.photo}
                    alt={entry.title}
                    loading="lazy"
                    width={1024}
                    height={720}
                    className="mt-5 aspect-[4/3] w-full rounded-xl object-cover opacity-90"
                  />
                ) : null}

                {entry.video ? (
                  <button
                    onClick={() => onVideo(entry.video!, entry.title)}
                    className="glass-soft mt-5 w-full rounded-xl px-4 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-cream active:scale-[0.98]"
                  >
                    Play the clip
                  </button>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
