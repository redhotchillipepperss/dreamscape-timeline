import { useEffect, useRef } from "react";

type Piece = { x: number; y: number; vx: number; vy: number; r: number; rot: number; vr: number; c: string };

const COLORS = [
  "oklch(0.78 0.062 12)",
  "oklch(0.94 0.015 60)",
  "oklch(0.46 0.14 8)",
  "oklch(0.62 0.16 305)",
  "oklch(0.82 0.075 300)",
];

/** Soft, slow petal confetti — cheap enough for low-powered phones. */
export function Confetti({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = window.innerWidth < 640 ? 40 : 90;
    const pieces: Piece[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * -canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: Math.random() * 0.7 + 0.35,
      r: Math.random() * 5 + 3,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.02,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let raf = 0;
    const tick = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > h + 20) {
          p.y = -20;
          p.x = Math.random() * w;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = 0.55;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
