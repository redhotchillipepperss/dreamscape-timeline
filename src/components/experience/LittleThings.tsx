import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { littleThings } from "@/data/story";
import { Section, SectionHeading } from "./Section";

function ThingCard({ text, index }: { text: string; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 140, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 140, damping: 18 });

  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", animationDelay: `${index * 0.5}s` }}
        className="glass glow-violet flex min-h-36 items-center justify-center rounded-2xl p-7 text-center [animation:soft-bob_7s_ease-in-out_infinite]"
      >
        <p className="font-serif text-xl leading-snug text-cream sm:text-2xl">{text}</p>
      </motion.div>
    </motion.div>
  );
}

export function LittleThings() {
  return (
    <Section id="little-things" className="section-seam">
      <SectionHeading
        eyebrow="the little things"
        title="The Little Things"
        intro="Not the milestones. The tiny, ordinary moments that quietly became everything."
      />
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {littleThings.map((t, i) => (
          <ThingCard key={t} text={t} index={i} />
        ))}
      </div>
    </Section>
  );
}
