import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export function VideoLightbox({
  video,
  onClose,
}: {
  video: { src: string; title: string } | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {video ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/92 p-4 backdrop-blur-xl"
        >
          <button
            aria-label="Close video"
            onClick={onClose}
            className="glass absolute right-4 top-4 grid size-11 place-items-center rounded-full text-cream"
          >
            <X className="size-5" />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={video.src}
              controls
              autoPlay
              playsInline
              className="max-h-[72vh] w-full rounded-2xl bg-black"
            />
            <p className="mt-4 text-center font-serif text-xl text-cream">{video.title}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
