import type { MouseEvent } from "react";
import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useVideoRegistry } from "@/hooks/use-video-registry";
import SceneLabel from "@/components/ui/SceneLabel";

import { projects } from "./portfolio.data";
import PortfolioMarquee from "./PortfolioMarquee";
import PortfolioTitle from "./PortfolioTitle";

const PortfolioSection = () => {

  const { register, stopAll, get } = useVideoRegistry();

  const [playingKey, setPlayingKey] = useState<string | null>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  // paused = CSS animation-play-state
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (playingKey) {
      const video = get(playingKey);
      if (video) {
        video.muted = isMuted;
      }
    }
  }, [get, isMuted, playingKey]);

  const handleMouseEnter = (key: string) => {
    setHoveredKey(key);
    if (!playingKey) {
      setPaused(true);
    }
  };

  const handleMouseLeave = (key: string) => {
    setHoveredKey(null);
    if (!playingKey) {
      setPaused(false);
    }
  };

  const handleCardClick = (key: string) => {
    const video = get(key);
    if (!video) return;

    if (playingKey === key) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      setPlayingKey(null);
      setIsMuted(false);
      setPaused(false);
    } else {
      stopAll();
      video.muted = false;
      // play() returns a promise; fire and forget to preserve prior behavior
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // ignore autoplay errors to match previous behavior
        });
      }
      setPlayingKey(key);
      setIsMuted(false);
      setPaused(true);
    }
  };

  const handleToggleMute = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMuted((previous) => !previous);
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden"
    >
      <div className="container relative z-10 px-6">
        <SceneLabel scene={4} label="העבודות" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-8"
        >
          הנה כמה מהעבודות שלנו
        </motion.h2>
        <PortfolioTitle />
      </div>

      <PortfolioMarquee
        projects={projects}
        paused={paused}
        playingKey={playingKey}
        hoveredKey={hoveredKey}
        isMuted={isMuted}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onCardClick={handleCardClick}
        onToggleMute={handleToggleMute}
        registerVideoRef={register}
      />
    </section>
  );
};

export default PortfolioSection;

