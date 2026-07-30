import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Ambient } from "@/components/experience/Ambient";
import { Landing } from "@/components/experience/Landing";
import { MusicProvider, MusicCard, FloatingPlayer } from "@/components/experience/Music";
import { Timeline } from "@/components/experience/Timeline";
import { Gallery } from "@/components/experience/Gallery";
import { Videos } from "@/components/experience/Videos";
import { LoveNotes } from "@/components/experience/LoveNotes";
import { PauseTime } from "@/components/experience/PauseTime";
import { LittleThings } from "@/components/experience/LittleThings";
import { MemoryJar } from "@/components/experience/MemoryJar";
import { Scrapbook } from "@/components/experience/Scrapbook";
import { Favorites } from "@/components/experience/Favorites";
import { StarMap } from "@/components/experience/StarMap";
import { SecretMessage } from "@/components/experience/SecretMessage";
import { FloatingLove } from "@/components/experience/FloatingLove";
import { Gratitude, FinalQuote } from "@/components/experience/Gratitude";
import { Ending } from "@/components/experience/Ending";
import { VideoLightbox } from "@/components/experience/VideoLightbox";
import { CursorGlow } from "@/components/experience/CursorGlow";
import { FloatingHearts } from "@/components/experience/FloatingHearts";
import { hero } from "@/data/story";

const title = "Happy Girlfriend's Day — For You";
const description =
  "A cinematic, personal keepsake: our timeline, photographs, letters, reasons and the star that belongs to us.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [landing, setLanding] = useState(true);
  const [video, setVideo] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    document.body.style.overflow = landing ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [landing]);

  const openVideo = (src: string, t: string) => setVideo({ src, title: t });

  return (
    <MusicProvider>
      <Ambient />
      <Landing open={landing} onBegin={() => setLanding(false)} />

      <main className="relative">
        <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center gap-14 px-5 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={landing ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-2xl"
          >
            <p className="mb-6 text-[0.62rem] uppercase tracking-[0.5em] text-blush/60">our story, in full</p>
            <h1 className="text-glow text-balance text-4xl leading-[1.1] text-cream sm:text-6xl">{hero.title}</h1>
            <p className="mx-auto mt-6 max-w-md text-pretty text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              {hero.subtitle}
            </p>
          </motion.div>

          <MusicCard />

          <motion.p
            initial={{ opacity: 0 }}
            animate={landing ? {} : { opacity: 1 }}
            transition={{ delay: 2, duration: 1.4 }}
            className="text-[0.6rem] uppercase tracking-[0.4em] text-blush/40"
          >
            scroll
          </motion.p>
        </section>

        <Timeline onVideo={openVideo} />
        <Gallery />
        <Videos onVideo={openVideo} />
        <LoveNotes />
        <PauseTime />
        <MemoryJar />
        <Scrapbook />
        <Favorites />
        <LittleThings />
        <StarMap />
        <Gratitude />
        <FinalQuote />
        <Ending />
      </main>

      <VideoLightbox video={video} onClose={() => setVideo(null)} />
      <FloatingPlayer />
      <FloatingLove />
      <SecretMessage />
    </MusicProvider>
  );
}
