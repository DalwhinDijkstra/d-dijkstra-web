import { motion } from "motion/react";
import type { Lang } from "../i18n/translations";

interface Props {
  lang: Lang;
  onToggle: () => void;
  label: string;
}

export default function LanguageToggle({ lang, onToggle, label }: Props) {
  return (
    <motion.button
      onClick={onToggle}
      className="relative flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold tracking-widest text-text-muted uppercase transition-colors hover:border-primary hover:text-primary cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={lang === "de" ? "text-primary" : ""}>DE</span>
      <span className="text-border">/</span>
      <span className={lang === "en" ? "text-primary" : ""}>EN</span>
    </motion.button>
  );
}
