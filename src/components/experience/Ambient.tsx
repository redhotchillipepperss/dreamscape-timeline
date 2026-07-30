import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

type Particle = { x: number; y: number; size: number; delay: number; duration: number; opacity: number };

/** Ambient cinematic layer: bloom, particles, film grain, vignette. */
export function Ambient() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = window.innerWidth < 640 || navigator.hardwareConcurrency <= 4;
    if (reduced) return;
    const count = lowPower ? 18 : 42;
    setParticles(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * -20,
        duration: Math.random() * 16 + 14,
        opacity: Math.random() * 0.5 + 0.15,
      })),
    );
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-3xl"
      />
      <div className="absolute -left-1/4 top-0 h-[60vh] w-[60vw] rounded-full bg-burgundy/30 blur-[140px]" />
      <div className="absolute bottom-0 right-[-15%] h-[55vh] w-[55vw] rounded-full bg-rose/20 blur-[160px]" />
      <div className="absolute left-1/3 top-1/2 h-[40vh] w-[40vw] rounded-full bg-wine/40 blur-[150px]" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-blush"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: "blur(0.5px)",
            animation: `drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}

      <div className="film-grain vignette absolute inset-0" />
    </div>
  );
}
