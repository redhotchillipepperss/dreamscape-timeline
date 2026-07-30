import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Moon, X } from "lucide-react";
import { secretMessage } from "@/data/story";

/** Hidden surprise: tap the moon, or type "love" on a keyboard. */
export function SecretMessage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      buffer = (buffer + e.key.toLowerCase()).slice(-4);
      if (buffer === "love") setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="A hidden message"
        title={secretMessage.hint}
        className="fixed right-4 top-4 z-40 grid size-11 place-items-center rounded-full text-blush/45 transition-colors duration-500 hover:text-blush active:text-blush sm:right-6 sm:top-6"
      >
        <Moon className="size-5" style={{ animation: "breathe 6s ease-in-out infinite" }} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/94 p-6 backdrop-blur-2xl"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="glass absolute right-4 top-4 grid size-11 place-items-center rounded-full text-cream"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 26, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="mb-5 text-[0.6rem] uppercase tracking-[0.45em] text-blush/60">a hidden page</p>
              <h3 className="text-glow font-serif text-3xl text-cream sm:text-5xl">{secretMessage.title}</h3>
              <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {secretMessage.body}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
