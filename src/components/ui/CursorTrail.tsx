import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

/** Precomputed palette colors — avoid HSL string work in the hot path */
const COLORS = [
  "rgba(64, 224, 230, 0.55)",
  "rgba(155, 110, 230, 0.5)",
  "rgba(235, 110, 190, 0.5)",
];

const MAX_PARTICLES = 48;
const SPAWN_THROTTLE_MS = 16;

/**
 * Lightweight cursor trail: simple filled circles, no per-frame gradients,
 * capped particle count, throttled spawn. Desktop pointers only.
 */
const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let colorIndex = 0;
    let lastSpawn = 0;
    const particles: Particle[] = [];
    const last = { x: -1, y: -1 };

    const resize = () => {
      // 1x resolution keeps fill cost low; trail is soft anyway
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    resize();

    const spawn = (x: number, y: number, dx: number, dy: number, now: number) => {
      if (now - lastSpawn < SPAWN_THROTTLE_MS) return;
      lastSpawn = now;

      const speed = Math.min(Math.hypot(dx, dy), 28);
      colorIndex = (colorIndex + 1) % COLORS.length;
      particles.push({
        x,
        y,
        vx: dx * 0.04 + (Math.random() - 0.5) * 0.35,
        vy: dy * 0.04 + (Math.random() - 0.5) * 0.35,
        life: 0,
        maxLife: 18 + Math.random() * 10,
        size: 2.2 + speed * 0.06,
        color: COLORS[colorIndex],
      });

      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, particles.length - MAX_PARTICLES);
      }
    };

    const tick = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        if (p.life >= p.maxLife) {
          particles[i] = particles[particles.length - 1];
          particles.pop();
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;

        const t = 1 - p.life / p.maxLife;
        ctx.globalAlpha = t * 0.7;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size * t, 0.4), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (particles.length > 0) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
        ctx.clearRect(0, 0, width, height);
      }
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dx = last.x < 0 ? 0 : e.clientX - last.x;
      const dy = last.y < 0 ? 0 : e.clientY - last.y;
      last.x = e.clientX;
      last.y = e.clientY;
      spawn(e.clientX, e.clientY, dx, dy, now);
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
    window.addEventListener("resize", resize, { passive: true });
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
      style={{ zIndex: 65, transform: "translateZ(0)" }}
    />
  );
};

export default CursorTrail;
