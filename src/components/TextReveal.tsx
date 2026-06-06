import { motion } from "motion/react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

/** Animates text character by character */
export default function TextReveal({ text, className = "", delay = 0 }: Props) {
  const letters = text.split("");

  return (
    <span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${i}-${letter}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : undefined }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
