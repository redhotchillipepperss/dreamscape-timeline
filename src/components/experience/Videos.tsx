import { motion } from "motion/react";
import { Play } from "lucide-react";
import { videos } from "@/data/story";
import { Section, SectionHeading } from "./Section";

export function Videos({ onVideo }: { onVideo: (src: string, title: string) => void }) {
  return (
    <Section id="videos">
      <SectionHeading
        eyebrow="moving memories"
        title="Moments that wouldn't fit in a photo"
        intro="Sound on, if you can."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {videos.map((v, i) => (
          <motion.button
            key={v.title}
            initial={{ opacity: 0, y: 46 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileTap={{ scale: 0.985 }}
            onClick={() => onVideo(v.src, v.title)}
            className={`glass group relative overflow-hidden rounded-3xl text-left ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <img
              src={v.poster}
              alt={v.title}
              loading="lazy"
              width={1280}
              height={720}
              className="h-56 w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 sm:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-5 sm:p-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-rose/45 text-cream">
                <Play className="ml-0.5 size-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-serif text-xl text-cream sm:text-2xl">{v.title}</span>
                <span className="block truncate text-xs text-muted-foreground">{v.note}</span>
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </Section>
  );
}
