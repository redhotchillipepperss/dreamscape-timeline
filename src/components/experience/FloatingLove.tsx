import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Heart } from "lucide-react";
import { loveMessages } from "@/data/story";

export function FloatingLove() {
  const [message, setMessage] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  const reveal = () => {
    setMessage(loveMessages[Math.floor(Math.random() * loveMessages.length)]);
    setKey((k) => k + 1);
  };

  return (
    <>
      <button
        onClick={reveal}
        aria-label="Show a random I love you"
        className="glass glow-rose fixed bottom-4 right-4 z-40 grid size-12 place-items-center rounded-full text-blush active:scale-95 sm:bottom-6 sm:right-6 sm:size-14"
      >
        <Heart className="size-5 fill-rose/50" style={{ animation: "breathe 3s ease-in-out infinite" }} />
      </button>

      <AnimatePresence>
        {message ? (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMessage(null)}
            className="glass fixed bottom-20 right-4 z-40 max-w-[min(20rem,calc(100vw-2rem))] rounded-2xl px-5 py-4 text-right font-serif text-lg text-cream sm:bottom-24 sm:right-6 sm:text-xl"
          >
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
