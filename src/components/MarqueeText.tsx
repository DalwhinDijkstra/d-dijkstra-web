import { motion } from "motion/react";

interface Props {
  text: string;
  speed?: number;
}

/** Infinite scrolling text marquee */
export default function MarqueeText({ text, speed = 20 }: Props) {
  const repeated = `${text} \u00B7 `.repeat(6);

  return (
    <div className="overflow-hidden whitespace-nowrap py-6 border-y border-border">
      <motion.div
        className="inline-block text-6xl md:text-8xl font-black tracking-tight text-text/5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <span>{repeated}</span>
        <span>{repeated}</span>
      </motion.div>
    </div>
  );
}
