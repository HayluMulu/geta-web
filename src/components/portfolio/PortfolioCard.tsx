import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent } from "react";

import type { Project } from "./portfolio.data";
import { CARD_WIDTH } from "./portfolio.constants";
import { IconPause, IconPlay, IconVolumeOff, IconVolumeOn } from "./icons";
import { CLOUD_NAME } from "./portfolio.constants";
import { cldPoster, cldVideo } from "@/lib/cloudinary";

type PortfolioCardProps = {
  project: Project;
  cardKey: string;
  isPlaying: boolean;
  isHovered: boolean;
  isMuted: boolean;
  onEnter: (key: string) => void;
  onLeave: (key: string) => void;
  onClick: (key: string) => void;
  onToggleMute: (event: MouseEvent<HTMLButtonElement>) => void;
  registerVideoRef: (key: string) => (element: HTMLVideoElement | null) => void;
};

export const PortfolioCard = ({
  project,
  cardKey,
  isPlaying,
  isHovered,
  isMuted,
  onEnter,
  onLeave,
  onClick,
  onToggleMute,
  registerVideoRef,
}: PortfolioCardProps) => (
  <div
    className="relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer bg-black"
    style={{ width: CARD_WIDTH, aspectRatio: "9/16" }}
    onMouseEnter={() => onEnter(cardKey)}
    onMouseLeave={() => onLeave(cardKey)}
    onClick={() => onClick(cardKey)}>
    <video
      ref={registerVideoRef(cardKey)}
      src={cldVideo(CLOUD_NAME, project.publicId)}
      poster={cldPoster(CLOUD_NAME, project.publicId)}
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <motion.div
      animate={{ opacity: isPlaying ? 0.1 : 0.65 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"
    />

    <AnimatePresence>
      {!isPlaying && (
        <motion.div
          key="play"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0.45,
            scale: isHovered ? 1 : 0.88,
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-primary/25 backdrop-blur-sm border border-primary/50 flex items-center justify-center shadow-lg">
            <IconPlay />
          </div>
        </motion.div>
      )}
      {isPlaying && isHovered && (
        <motion.div
          key="pause"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none"
          style={{ zIndex: 5 }}>
          <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <IconPause />
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isPlaying && (
        <motion.button
          key="mute"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={onToggleMute}
          style={{ zIndex: 20 }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-primary/40 hover:border-primary/50 transition-colors">
          {isMuted ? <IconVolumeOff /> : <IconVolumeOn />}
        </motion.button>
      )}
    </AnimatePresence>

    <motion.div
      animate={{ y: isPlaying ? 0 : 8 }}
      transition={{ duration: 0.25 }}
      className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none"
      style={{ zIndex: 5 }}>
      <span className="font-display text-lg font-semibold text-primary uppercase tracking-widest">
        {project.name}
      </span>
      <h3 className="font-display text-base font-medium text-white mt-0.5 leading-snug">
        {project.profession}
      </h3>
    </motion.div>
  </div>
);

export default PortfolioCard;

