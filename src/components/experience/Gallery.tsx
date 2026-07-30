import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/data/story";
import { Section, SectionHeading } from "./Section";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow="the gallery"
        title="Frames I keep going back to"
        intro="Tap any photo to sit with it for a second."
      />

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
        {gallery.map((photo, i) => (
          <motion.button
            key={`${photo.src}-${i}`}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.8 : -2.2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActive(i)}
            className="paper-card group rounded-sm p-2 pb-8 text-left transition-transform duration-500 hover:rotate-0 hover:scale-[1.03] sm:p-3 sm:pb-11"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <span className="mt-2 block px-1 font-hand text-base leading-tight text-ink/80 sm:mt-3 sm:text-lg">
              {photo.caption}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full glass text-cream"
              onClick={() => setActive(null)}
            >
              <X className="size-5" />
            </button>
            <motion.figure
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[active].src}
                alt={gallery[active].alt}
                className="max-h-[72vh] w-full rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center font-hand text-2xl text-blush">
                {gallery[active].caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
