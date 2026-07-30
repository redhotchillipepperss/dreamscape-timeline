import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { song } from "@/data/story";

type MusicCtx = {
  playing: boolean;
  toggle: () => void;
  muted: boolean;
  toggleMute: () => void;
  unavailable: boolean;
  started: boolean;
};

const Ctx = createContext<MusicCtx | null>(null);

export function useMusic() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useMusic must be used inside MusicProvider");
  return ctx;
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.55;
    const onErr = () => setUnavailable(true);
    a.addEventListener("error", onErr);
    return () => a.removeEventListener("error", onErr);
  }, []);

  const value = useMemo<MusicCtx>(
    () => ({
      playing,
      muted,
      unavailable,
      started,
      toggle: () => {
        const a = audioRef.current;
        if (!a) return;
        setStarted(true);
        if (a.paused) {
          a.play()
            .then(() => setPlaying(true))
            .catch(() => setUnavailable(true));
        } else {
          a.pause();
          setPlaying(false);
        }
      },
      toggleMute: () => {
        const a = audioRef.current;
        if (!a) return;
        a.muted = !a.muted;
        setMuted(a.muted);
      },
    }),
    [playing, muted, unavailable, started],
  );

  return (
    <Ctx.Provider value={value}>
      <audio ref={audioRef} src={song.src} loop preload="none" />
      {children}
    </Ctx.Provider>
  );
}

/** Big glowing invitation card shown near the top of the page. */
export function MusicCard() {
  const { playing, toggle, unavailable } = useMusic();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="glass glow-rose mx-auto grid max-w-lg grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-3xl p-5 sm:p-7"
    >
      <button
        onClick={toggle}
        aria-label={playing ? "Pause the music" : "Play the music"}
        className="grid size-14 shrink-0 place-items-center rounded-full bg-rose/40 text-cream transition-transform duration-300 active:scale-95 sm:size-16"
        style={{ animation: playing ? "none" : "breathe 3.4s ease-in-out infinite" }}
      >
        {playing ? <Pause className="size-5" /> : <Play className="ml-0.5 size-5" />}
      </button>
      <div className="min-w-0">
        <p className="font-serif text-xl text-cream sm:text-2xl">{song.prompt}</p>
        <p className="mt-1 truncate text-xs tracking-wide text-muted-foreground">
          {song.title} — {song.artist}
        </p>
        {unavailable ? (
          <p className="mt-2 text-[0.68rem] leading-relaxed text-blush/70">
            Add your audio file at <code>public/media/audio/about-you.mp3</code>
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

/** Persistent floating player. */
export function FloatingPlayer() {
  const { playing, toggle, muted, toggleMute, started } = useMusic();

  return (
    <AnimatePresence>
      {started ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full py-2 pl-2 pr-3 sm:bottom-6 sm:left-6"
        >
          <button
            onClick={toggle}
            aria-label={playing ? "Pause the music" : "Play the music"}
            className="grid size-9 place-items-center rounded-full bg-rose/40 text-cream active:scale-95"
          >
            {playing ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4" />}
          </button>
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-[0.7rem] text-cream">{song.title}</p>
            <p className="truncate text-[0.62rem] text-muted-foreground">{song.artist}</p>
          </div>
          <Music className="size-3.5 text-blush/60 sm:hidden" />
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="grid size-8 place-items-center rounded-full text-blush/70 active:scale-95"
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
