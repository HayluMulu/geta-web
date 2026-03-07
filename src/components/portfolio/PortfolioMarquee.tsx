import type { MouseEvent } from "react";

import "./portfolio-marquee.css";

import { GAP, MARQUEE_DURATION } from "./portfolio.constants";
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
  const duration = MARQUEE_DURATION;

  return (
    <div className="mt-12 relative w-full overflow-hidden" dir="ltr">
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />

      {/* Marquee track — exactly 2 sets, animation moves by 1 set width */}
      <div
        className={`portfolio-track flex${paused ? " paused" : ""}`}
        style={{
          gap: GAP,
          paddingLeft: GAP,
          width: "max-content",
          animationDuration: `${duration}s`,
        }}
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
                onClick={onCardClick}
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

