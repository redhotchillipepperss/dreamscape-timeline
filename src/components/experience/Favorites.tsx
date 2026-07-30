import { motion } from "motion/react";
import { favorites } from "@/data/story";
import { Section, SectionHeading } from "./Section";

export function Favorites() {
  return (
    <Section id="favorites">
      <SectionHeading eyebrow="all the details" title="The things that are so you" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((group, i) => (
          <motion.article
            key={group.label}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1"
          >
            <h3 className="font-serif text-xl text-cream">{group.label}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-blush/70" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
