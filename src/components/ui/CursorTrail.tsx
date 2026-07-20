import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: string;
}

/** Palette hues: nebula cyan, cosmic purple, aurora pink */
const HUES = ["185 85% 60%", "265 70% 62%", "320 80% 65%"];

/**
 * A soft glowing particle trail that follows the cursor,
 * drawn with additive blending so overlapping particles bloom
 * like light on film. Desktop pointers only.
 */
const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let hueIndex = 0;
    const particles: Particle[] = [];
    const last = { x: -1, y: -1 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const spawn = (x: number, y: number, dx: number, dy: number) => {
      const speed = Math.min(Math.hypot(dx, dy), 40);
      const count = speed > 2 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        hueIndex = (hueIndex + 1) % HUES.length;
        particles.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: dx * 0.06 + (Math.random() - 0.5) * 0.5,
          vy: dy * 0.06 + (Math.random() - 0.5) * 0.5,
          life: 0,
          maxLife: 28 + Math.random() * 18,
          size: 1.5 + Math.random() * 2.5 + speed * 0.08,
          hue: HUES[hueIndex],
        });
      }
      if (particles.length > 160) particles.splice(0, particles.length - 160);
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        const t = 1 - p.life / p.maxLife;
        const radius = Math.max(p.size * t, 0.1);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        gradient.addColorStop(0, `hsl(${p.hue} / ${0.5 * t})`);
        gradient.addColorStop(1, `hsl(${p.hue} / 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      if (particles.length > 0) {
        raf = requestAnimationFrame(tick);
      } else {
        // Idle: stop the loop entirely until the mouse moves again
        running = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const onMove = (e: MouseEvent) => {
      const dx = last.x < 0 ? 0 : e.clientX - last.x;
      const dy = last.y < 0 ? 0 : e.clientY - last.y;
      last.x = e.clientX;
      last.y = e.clientY;
      spawn(e.clientX, e.clientY, dx, dy);
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        running = false;
        particles.length = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 65 }}
    />
  );
};

export default CursorTrail;
