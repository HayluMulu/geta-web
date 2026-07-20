import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

const isMobile = () => window.innerWidth < 768;

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mobile = isMobile();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      // Sparser field = less per-frame work
      const density = mobile ? 40000 : 22000;
      const starCount = Math.floor((canvas.width * canvas.height) / density);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.4 + 0.4,
          opacity: Math.random() * 0.45 + 0.2,
          twinkleSpeed: Math.random() * 0.015 + 0.008,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const paintStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of starsRef.current) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.7})`;
        ctx.fill();
      }
    };

    if (mobile || reduceMotion) {
      resizeCanvas();
      paintStatic();
      const handleResize = () => {
        resizeCanvas();
        paintStatic();
      };
      window.addEventListener("resize", handleResize, { passive: true });
      return () => window.removeEventListener("resize", handleResize);
    }

    let lastPaint = 0;
    const TARGET_MS = 50; // ~20fps twinkle is enough; frees frames for the trail

    const animate = (time: number) => {
      if (time - lastPaint >= TARGET_MS) {
        lastPaint = time;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const star of starsRef.current) {
          const twinkle =
            Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default StarField;
