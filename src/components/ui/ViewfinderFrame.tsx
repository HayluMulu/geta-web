import { cn } from "@/lib/utils";

type ViewfinderFrameProps = {
  className?: string;
  /** Soft pulse on the corner brackets */
  live?: boolean;
};

/** Camera viewfinder L-brackets — frames any hero or media block. */
const ViewfinderFrame = ({ className, live = false }: ViewfinderFrameProps) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute inset-0 z-20", className)}
  >
    {[
      "top-3 left-3 border-t-2 border-l-2",
      "top-3 right-3 border-t-2 border-r-2",
      "bottom-3 left-3 border-b-2 border-l-2",
      "bottom-3 right-3 border-b-2 border-r-2",
    ].map((pos) => (
      <span
        key={pos}
        className={cn(
          "absolute h-8 w-8 md:h-12 md:w-12 border-primary/70",
          live && "viewfinder-pulse",
          pos,
        )}
      />
    ))}
  </div>
);

export default ViewfinderFrame;
