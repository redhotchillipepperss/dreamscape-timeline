import { useEffect, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

/** Desktop-only glowing cursor with a soft purple-pink aura. */
export function CursorGlow() {
  const dot = useRef<HTMLDivElement | null>(null);
  const aura = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let ax = tx;
    let ay = ty;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const interactive = "a, button, img, input, [role='button'], [data-cursor]";

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const el = e.target as HTMLElement | null;
      targetScale = el?.closest?.(interactive) ? 2.1 : 1;
    };

    const click = (e: PointerEvent) => {
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((p) => p.id !== id)), 700);
    };

    const tick = () => {
      ax += (tx - ax) * 0.16;
      ay += (ty - ay) * 0.16;
      scale += (targetScale - scale) * 0.12;
      if (dot.current) dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      if (aura.current)
        aura.current.style.transform = `translate3d(${ax}px, ${ay}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", click, { passive: true });
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", click);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[95]">
      <div
        ref={aura}
        className="absolute left-0 top-0 size-16 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.17 305 / 34%) 0%, oklch(0.62 0.14 350 / 18%) 45%, transparent 70%)",
          filter: "blur(6px)",
          willChange: "transform",
        }}
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 size-1.5 rounded-full bg-lavender"
        style={{ boxShadow: "0 0 14px 3px oklch(0.72 0.15 305 / 65%)", willChange: "transform" }}
      />
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full border border-lavender/50"
          style={{
            left: r.x,
            top: r.y,
            width: 12,
            height: 12,
            transform: "translate(-50%, -50%)",
            animation: "cursor-ripple 700ms ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}
