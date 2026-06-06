import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  text: string;
  className?: string;
  duration?: number;
  animateOnLoad?: boolean;
}

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";

export default function HyperText({
  text,
  className = "",
  duration = 800,
  animateOnLoad = true,
}: Props) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationRef = useRef(0);

  const triggerAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    iterationRef.current = 0;

    const interval = setInterval(() => {
      iterationRef.current += 1;
      const progress = iterationRef.current;

      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < progress) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (progress >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, duration / text.length);
  };

  useEffect(() => {
    if (animateOnLoad) {
      const timeout = setTimeout(triggerAnimation, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return (
    <motion.span
      className={className}
      onMouseEnter={triggerAnimation}
      style={{ cursor: "default" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {displayText.split("").map((char, i) => (
          <motion.span
            key={`${i}-${char}`}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.span>
  );
}
