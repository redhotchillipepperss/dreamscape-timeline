import { useEffect, useState } from "react";

type Floater = {
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  drift: number;
  heart: boolean;
};

/** Tiny translucent hearts + glowing motes drifting upward behind all content. */
export function FloatingHearts() {
  const [items, setItems] = useState<Floater[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lowPower = window.innerWidth < 640 || navigator.hardwareConcurrency <= 4;
    const count = lowPower ? 14 : 30;
    setItems(
      Array.from({ length: count }, (_, i) => ({
        x: Math.random() * 100,
        size: Math.random() * 12 + 7,
        delay: Math.random() * -40,
        duration: Math.random() * 26 + 26,
        opacity: Math.random() * 0.22 + 0.08,
        drift: (Math.random() - 0.5) * 120,
        heart: i % 4 !== 0,
      })),
    );
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {items.map((f, i) => (
        <span
          key={i}
          className="absolute bottom-[-8vh] block"
          style={{
            left: `${f.x}%`,
            width: f.heart ? f.size : f.size * 0.28,
            height: f.heart ? f.size : f.size * 0.28,
            ["--heart-opacity" as string]: f.opacity,
            ["--heart-drift" as string]: `${f.drift}px`,
            animation: `float-up ${f.duration}s linear ${f.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        >
          {f.heart ? (
            <svg viewBox="0 0 24 24" className="h-full w-full" fill="oklch(0.74 0.11 330)">
              <path d="M12 21s-7.5-4.7-9.6-9A5.4 5.4 0 0 1 12 6.3 5.4 5.4 0 0 1 21.6 12c-2.1 4.3-9.6 9-9.6 9Z" />
            </svg>
          ) : (
            <span
              className="block h-full w-full rounded-full bg-lavender"
              style={{ boxShadow: "0 0 8px 2px oklch(0.72 0.14 305 / 45%)" }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
