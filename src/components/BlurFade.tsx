import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  inView?: boolean;
}

export default function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 6,
  blur = "6px",
  inView: useInViewProp = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldAnimate = useInViewProp ? isInView : true;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      animate={shouldAnimate ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
