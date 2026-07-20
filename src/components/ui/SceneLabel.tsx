import { motion } from "framer-motion";

type SceneLabelProps = {
  scene: number;
  label: string;
  align?: "center" | "start";
};

/**
 * A viewfinder-style chapter marker ("SCENE 03 · REC") shown above
 * section titles, tying the page together like a film timeline.
 */
const SceneLabel = ({ scene, label, align = "center" }: SceneLabelProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`flex mb-5 ${align === "center" ? "justify-center" : "justify-start"}`}
  >
    <span className="scene-label" dir="ltr">
      <span className="scene-label-dot" />
      SCENE {String(scene).padStart(2, "0")}
      <span className="text-foreground-muted/60 normal-case tracking-normal" dir="rtl">
        {label}
      </span>
    </span>
  </motion.div>
);

export default SceneLabel;
