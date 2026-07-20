import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MagneticButtonProps = ButtonProps & {
  strength?: number;
};

/**
 * Primary CTA that gently pulls toward the cursor —
 * feels tactile without fighting clicks.
 */
const MagneticButton = ({
  children,
  className,
  strength = 0.35,
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const box = useRef({ left: 0, top: 0, w: 0, h: 0 });
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const cacheBox = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    box.current = { left: rect.left, top: rect.top, w: rect.width, h: rect.height };
  };

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion) return;
    const { left, top, w, h } = box.current;
    if (!w) cacheBox();
    const b = box.current;
    x.set((e.clientX - (b.left + b.w / 2)) * strength);
    y.set((e.clientY - (b.top + b.h / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={reduceMotion ? undefined : { x: springX, y: springY }} className="inline-flex">
      <Button
        ref={ref}
        className={cn("btn-shine", className)}
        onMouseEnter={cacheBox}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default MagneticButton;
