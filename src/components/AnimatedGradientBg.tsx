import { motion } from "motion/react";

/** Full-screen animated gradient orbs for the hero background */
export default function AnimatedGradientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large cyan orb */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[80vh] w-[80vh] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00B4D8 0%, transparent 70%)" }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Green orb */}
      <motion.div
        className="absolute top-1/3 -right-1/4 h-[60vh] w-[60vh] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, #38B249 0%, transparent 70%)" }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Lime accent orb */}
      <motion.div
        className="absolute -bottom-1/4 left-1/3 h-[50vh] w-[50vh] rounded-full opacity-12 blur-[80px]"
        style={{ background: "radial-gradient(circle, #B5D63D 0%, transparent 70%)" }}
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
