import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { translations, type Lang } from "../i18n/translations";
import GradientBar from "./GradientBar";
import BlurFade from "./BlurFade";

const LINKEDIN_URL = "https://www.linkedin.com/in/dalwhin-dijkstra/";

/** Liquid glass on colored background */
const liquidGlass = {
  background: "rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(24px) saturate(180%)",
  WebkitBackdropFilter: "blur(24px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.22)",
  boxShadow:
    "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(255, 255, 255, 0.1)",
} as const;

export default function App() {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];
  const toggleLang = () => setLang((prev) => (prev === "de" ? "en" : "de"));

  return (
    <div className="min-h-screen font-display">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Diagonal gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "#00B4D8" }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, transparent 30%, #38B249 30%, #38B249 55%, transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, transparent 50%, #B5D63D 50%, #B5D63D 80%, transparent 80%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, transparent 40%, rgba(255,255,255,0.08) 45%, transparent 50%)",
            }}
          />
        </div>

        {/* Language toggle */}
        <motion.div
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <button
            onClick={toggleLang}
            className="cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-[0.15em] text-white/90 transition-all hover:text-white hover:scale-105"
            style={liquidGlass}
          >
            <span className={lang === "de" ? "text-white" : "text-white/50"}>de</span>
            <span className="mx-1 text-white/30">/</span>
            <span className={lang === "en" ? "text-white" : "text-white/50"}>en</span>
          </button>
        </motion.div>

        {/* Name */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="12px">
            <h1
              className="text-4xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ letterSpacing: "0.25em" }}
            >
              dalwhin dijkstra
            </h1>
          </BlurFade>
        </div>

        {/* LinkedIn icon */}
        <BlurFade delay={0.8} duration={0.6} yOffset={15} className="absolute bottom-20 z-10">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-white/80 transition-all hover:text-white hover:scale-105"
            style={liquidGlass}
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </BlurFade>

        {/* Scroll */}
        <motion.div
          className="absolute bottom-6 text-white/40 text-xs tracking-[0.15em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            scroll
          </motion.span>
        </motion.div>
      </section>

      {/* CONTACT - gradient continues, content in liquid glass */}
      <section id="contact" className="relative px-6 py-24 md:px-12 lg:px-24 overflow-hidden">
        {/* Continuing diagonal gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "#38B249" }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, #00B4D8 0%, transparent 35%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, transparent 40%, #B5D63D 65%, #B5D63D 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, transparent 30%, rgba(255,255,255,0.06) 35%, transparent 40%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <BlurFade delay={0.1} inView>
            <h2 className="mb-12 text-sm tracking-[0.2em] text-white/60">
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang + "-contact-title"}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                >
                  {t.contact.title}
                </motion.span>
              </AnimatePresence>
            </h2>
          </BlurFade>

          {/* Contact card - liquid glass */}
          <BlurFade delay={0.2} inView>
            <div className="rounded-3xl p-8 sm:p-10" style={liquidGlass}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang + "-contact-rows"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactRow label={t.contact.email} value="post@d-dijkstra.de" href="mailto:post@d-dijkstra.de" />
                  <ContactRow label={t.contact.phone} value="+49 176 476 316 17" href="tel:+4917647631617" />
                  <ContactRow label={t.contact.web} value="d-dijkstra.de" href="https://d-dijkstra.de" />
                  <ContactRow label={t.contact.address} value={t.contact.addressValue} last />
                </motion.div>
              </AnimatePresence>
            </div>
          </BlurFade>

          {/* LinkedIn CTA - liquid glass */}
          <BlurFade delay={0.35} inView>
            <div className="mt-8 flex justify-center">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl px-8 py-5 transition-all hover:scale-[1.02]"
                style={liquidGlass}
              >
                <svg className="h-5 w-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang + "-cta"}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    className="text-sm font-medium tracking-[0.1em] text-white/80 group-hover:text-white transition-colors"
                  >
                    {t.hero.cta}
                  </motion.span>
                </AnimatePresence>
                <svg
                  className="h-4 w-4 text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* IMPRINT - gradient continues */}
      <section id="imprint" className="relative px-6 py-24 md:px-12 lg:px-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "#B5D63D" }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, #38B249 0%, transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, transparent 20%, rgba(255,255,255,0.06) 25%, transparent 30%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <BlurFade delay={0.1} inView>
            <h2 className="mb-12 text-sm tracking-[0.2em] text-white/60">
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang + "-imprint-title"}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                >
                  {t.imprint.title}
                </motion.span>
              </AnimatePresence>
            </h2>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="rounded-3xl p-8 sm:p-10" style={liquidGlass}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang + "-imprint"}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 text-white/70"
                >
                  <div>
                    <h3 className="mb-2 text-xs tracking-[0.15em] text-white/40">
                      {t.imprint.responsible}
                    </h3>
                    <p className="text-white/90">dalwhin dijkstra</p>
                    <p className="whitespace-pre-line">Gudvanger Str. 52{"\n"}10439 Berlin</p>
                    <p className="mt-2">post@d-dijkstra.de</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xs tracking-[0.15em] text-white/40">
                      {t.imprint.disclaimer}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed">{t.imprint.disclaimerText}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative px-6 py-6 overflow-hidden"
      >
        <div className="absolute inset-0" style={{ background: "#B5D63D" }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(155deg, #38B249 0%, transparent 60%)" }}
        />
        <div className="relative z-10 mx-auto flex max-w-3xl items-center justify-center gap-3 text-xs tracking-[0.1em] text-white/60">
          <span>dalwhin dijkstra</span>
          <span className="text-white/30">//</span>
          <a href="mailto:post@d-dijkstra.de" className="transition-colors hover:text-white">
            post@d-dijkstra.de
          </a>
          <span className="text-white/30">//</span>
          <a href="#imprint" className="transition-colors hover:text-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={lang + "-footer-imprint"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {t.imprint.title}
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
  last = false,
}: {
  label: string;
  value: string;
  href?: string;
  last?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between ${
        last ? "" : "border-b border-white/10"
      }`}
    >
      <span className="text-xs tracking-[0.15em] text-white/50">{label}</span>
      {href ? (
        <a
          href={href}
          className="text-base font-medium text-white/90 transition-colors group-hover:text-white"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      ) : (
        <span className="text-base font-medium text-white/90 whitespace-pre-line">{value}</span>
      )}
    </div>
  );
}
