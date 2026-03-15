import type { MouseEvent } from "react";
import { useRef, useState, useCallback, useEffect } from "react";

import "./portfolio-marquee.css";

import { GAP } from "./portfolio.constants";
import type { Project } from "./portfolio.data";
import { PortfolioCard } from "./PortfolioCard";

type PortfolioMarqueeProps = {
  projects: Project[];
  paused: boolean;
  playingKey: string | null;
  hoveredKey: string | null;
  isMuted: boolean;
  onMouseEnter: (key: string) => void;
  onMouseLeave: (key: string) => void;
  onCardClick: (key: string) => void;
  onToggleMute: (event: MouseEvent<HTMLButtonElement>) => void;
  registerVideoRef: (key: string) => (element: HTMLVideoElement | null) => void;
};

export const PortfolioMarquee = ({
  projects,
  paused,
  playingKey,
  hoveredKey,
  isMuted,
  onMouseEnter,
  onMouseLeave,
  onCardClick,
  onToggleMute,
  registerVideoRef,
}: PortfolioMarqueeProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragMoved = useRef(false);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animFrame = useRef<number>(0);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragMoved.current = false;
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    velocity.current = 0;
    cancelAnimationFrame(animFrame.current);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 3) dragMoved.current = true;

    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = (e.clientX - lastX.current) / dt;
    }
    lastX.current = e.clientX;
    lastTime.current = now;

    scrollRef.current.scrollLeft = scrollLeft.current - dx;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Momentum / inertia
    const el = scrollRef.current;
    if (!el) return;
    let v = velocity.current * -1; // invert for scrollLeft direction
    const decel = 0.95;

    const step = () => {
      if (Math.abs(v) < 0.1) return;
      el.scrollLeft += v * 16;
      v *= decel;
      animFrame.current = requestAnimationFrame(step);
    };
    animFrame.current = requestAnimationFrame(step);
  }, []);

  const handleCardClickWrapper = useCallback(
    (key: string) => {
      // Prevent click if user was dragging
      if (dragMoved.current) return;
      onCardClick(key);
    },
    [onCardClick],
  );

  // Infinite scroll: when reaching an edge, jump to the other copy
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft <= 0) {
        el.scrollLeft += halfWidth;
      } else if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
    };
    el.addEventListener("scroll", handleScroll);
    el.scrollLeft = el.scrollWidth / 4;
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll when not dragging and not playing a video
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.8; // px per frame
    let rafId: number;
    const autoScroll = () => {
      if (!isDragging.current && !paused) {
        el.scrollLeft += speed;
      }
      rafId = requestAnimationFrame(autoScroll);
    };
    rafId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  return (
    <div className="mt-12 relative w-full overflow-hidden" dir="ltr">
      {/* Edge fades */}
      <div
        className="portfolio-edge-fade-start"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background)), transparent)",
        }}
      />
      <div
        className="portfolio-edge-fade-end"
        style={{
          background:
            "linear-gradient(to left, hsl(var(--background)), transparent)",
        }}
      />

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide touch-pan-x"
        style={{
          gap: GAP,
          paddingInlineStart: GAP,
          paddingInlineEnd: GAP,
          cursor: isDragging.current ? "grabbing" : "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {[0, 1].map((setIndex) =>
          projects.map((project) => {
            const cardKey = `${setIndex}-${project.publicId}`;
            const isPlaying = playingKey === cardKey;
            const isHovered = hoveredKey === cardKey;

            return (
              <PortfolioCard
                key={cardKey}
                project={project}
                cardKey={cardKey}
                isPlaying={isPlaying}
                isHovered={isHovered}
                isMuted={isMuted}
                onEnter={onMouseEnter}
                onLeave={onMouseLeave}
                onClick={handleCardClickWrapper}
                onToggleMute={onToggleMute}
                registerVideoRef={registerVideoRef}
              />
            );
          }),
        )}
      </div>
    </div>
  );
};

export default PortfolioMarquee;
