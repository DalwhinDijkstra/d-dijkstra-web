import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { translations, type Lang } from "../i18n/translations";
import GradientBar from "./GradientBar";

const LINKEDIN_URL = "https://www.linkedin.com/in/dalwhin-dijkstra/";

export default function App() {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];
  const toggleLang = () => setLang((prev) => (prev === "de" ? "en" : "de"));

  return (
    <div className="min-h-screen font-display">
      {/* HERO - fullscreen with diagonal gradient stripes like original */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Diagonal gradient background - matching original site */}
        <div className="absolute inset-0">
          {/* Base cyan */}
          <div
            className="absolute inset-0"
            style={{ background: "#00B4D8" }}
          />
          {/* Green diagonal */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(155deg, transparent 30%, #38B249 30%, #38B249 55%, transparent 55%)",
            }}
          />
          {/* Lime diagonal */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(155deg, transparent 50%, #B5D63D 50%, #B5D63D 80%, transparent 80%)",
            }}
          />
          {/* Subtle light overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(155deg, transparent 40%, rgba(255,255,255,0.08) 45%, transparent 50%)",
            }}
          />
        </div>

        {/* Language toggle - liquid glass */}
        <motion.div
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={toggleLang}
            className="cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white/90 transition-all hover:text-white"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            }}
          >
            <span className={lang === "de" ? "text-white" : "text-white/50"}>de</span>
            <span className="mx-1 text-white/30">/</span>
            <span className={lang === "en" ? "text-white" : "text-white/50"}>en</span>
          </button>
        </motion.div>

        {/* Name */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.h1
            className="text-4xl font-bold tracking-[0.25em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontWeight: 700, letterSpacing: "0.25em" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            dalwhin dijkstra
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lang + "-role"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-sm tracking-[0.2em] text-white/70"
              >
                {t.hero.role}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* LinkedIn icon - bottom center like original */}
        <motion.a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-20 z-10 flex h-14 w-14 items-center justify-center rounded-xl text-white/80 transition-all hover:text-white hover:scale-105"
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 text-white/40 text-xs tracking-[0.15em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            scroll
          </motion.span>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-bg px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="mb-16 text-sm tracking-[0.2em] text-text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang + "-contact-title"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {t.contact.title.toLowerCase()}
              </motion.span>
            </AnimatePresence>
          </motion.h2>

          <div className="space-y-0">
            <ContactRow label={t.contact.email} value="post@d-dijkstra.de" href="mailto:post@d-dijkstra.de" />
            <ContactRow label={t.contact.phone} value="+49 176 476 316 17" href="tel:+4917647631617" />
            <ContactRow label={t.contact.web} value="d-dijkstra.de" href="https://d-dijkstra.de" />
            <ContactRow label={t.contact.address} value={t.contact.addressValue} />
          </div>

          {/* LinkedIn CTA - liquid glass card */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl px-8 py-5 transition-all hover:scale-[1.02]"
              style={{
                background: "rgba(0, 180, 216, 0.06)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(0, 180, 216, 0.15)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
              }}
            >
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang + "-cta"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-medium tracking-[0.1em] text-text group-hover:text-primary transition-colors"
                >
                  {t.hero.cta.toLowerCase()}
                </motion.span>
              </AnimatePresence>
              <svg className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* IMPRINT */}
      <section id="imprint" className="bg-surface px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="mb-16 text-sm tracking-[0.2em] text-text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang + "-imprint-title"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {t.imprint.title.toLowerCase()}
              </motion.span>
            </AnimatePresence>
          </motion.h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={lang + "-imprint"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 text-text-muted"
            >
              <div>
                <h3 className="mb-2 text-xs tracking-[0.15em] text-text-muted/60">
                  {t.imprint.responsible.toLowerCase()}
                </h3>
                <p className="text-text">dalwhin dijkstra</p>
                <p className="whitespace-pre-line">Gudvanger Str. 52{"\n"}10439 Berlin</p>
                <p className="mt-2">post@d-dijkstra.de</p>
              </div>

              <div>
                <h3 className="mb-2 text-xs tracking-[0.15em] text-text-muted/60">
                  {t.imprint.disclaimer.toLowerCase()}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed">{t.imprint.disclaimerText}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FOOTER - matching original: name // email // imprint */}
      <footer className="border-t border-border bg-bg px-6 py-6">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 text-xs tracking-[0.1em] text-text-muted">
          <span>dalwhin dijkstra</span>
          <span className="text-border">//</span>
          <a href="mailto:post@d-dijkstra.de" className="transition-colors hover:text-primary">
            post@d-dijkstra.de
          </a>
          <span className="text-border">//</span>
          <a href="#imprint" className="transition-colors hover:text-primary">
            <AnimatePresence mode="wait">
              <motion.span
                key={lang + "-footer-imprint"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {t.imprint.title.toLowerCase()}
              </motion.span>
            </AnimatePresence>
          </a>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <motion.div
      className="group flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-center sm:justify-between"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-xs tracking-[0.15em] text-text-muted">
        {label.toLowerCase()}
      </span>
      {href ? (
        <a
          href={href}
          className="text-base font-medium text-text transition-colors group-hover:text-primary"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      ) : (
        <span className="text-base font-medium text-text whitespace-pre-line">{value}</span>
      )}
    </motion.div>
  );
}
