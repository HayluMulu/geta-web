import { motion } from "framer-motion";

const GlowOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Primary cyan orb - top right */}
      <motion.div
        className="glow-orb glow-orb-primary w-[600px] h-[600px]"
        style={{ top: "-10%", right: "-5%" }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary purple orb - bottom left */}
      <motion.div
        className="glow-orb glow-orb-secondary w-[500px] h-[500px]"
        style={{ bottom: "10%", left: "-10%" }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Accent pink orb - center */}
      <motion.div
        className="glow-orb glow-orb-accent w-[400px] h-[400px] opacity-30"
        style={{ top: "40%", left: "50%", transform: "translateX(-50%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GlowOrbs;
