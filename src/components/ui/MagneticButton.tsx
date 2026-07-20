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
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
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
