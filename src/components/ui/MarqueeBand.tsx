import { Fragment } from "react";

type MarqueeBandProps = {
  words: string[];
  /** Tilt the whole band slightly for energy */
  tilt?: number;
};

/**
 * An endless film-credits strip: alternating gradient-filled and
 * hollow outline words sliding across the page between sections.
 */
const MarqueeBand = ({ words, tilt = -1.5 }: MarqueeBandProps) => {
  const renderSet = (ariaHidden: boolean) => (
    <span className="inline-flex items-center" aria-hidden={ariaHidden}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            className={`font-display font-bold text-4xl md:text-6xl px-6 md:px-10 ${
              i % 2 === 0 ? "text-gradient-cosmic" : "text-outline-cosmic"
            }`}
          >
            {word}
          </span>
          <span className="text-primary/50 text-2xl md:text-3xl select-none">✦</span>
        </Fragment>
      ))}
    </span>
  );

  return (
    <div className="relative py-10 md:py-14 overflow-hidden" dir="ltr">
      <div className="marquee-band" style={{ transform: `rotate(${tilt}deg)` }}>
        <div className="marquee-band-track">
          {renderSet(false)}
          {renderSet(true)}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBand;
