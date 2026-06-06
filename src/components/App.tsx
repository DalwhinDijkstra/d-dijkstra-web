import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { translations, type Lang } from "../i18n/translations";
import AnimatedGradientBg from "./AnimatedGradientBg";
import TextReveal from "./TextReveal";
import ScrollReveal from "./ScrollReveal";
import MarqueeText from "./MarqueeText";
import MagneticButton from "./MagneticButton";
import GradientBar from "./GradientBar";
import LanguageToggle from "./LanguageToggle";

const LINKEDIN_URL = "https://www.linkedin.com/in/dalwhin-dijkstra/";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-xs font-medium tracking-widest text-text-muted uppercase transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 text-sm font-semibold tracking-[0.3em] text-text-muted uppercase">
      {children}
    </h2>
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
    <div className="group flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-lg font-medium text-text transition-colors group-hover:text-primary"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      ) : (
        <span className="text-lg font-medium text-text whitespace-pre-line">{value}</span>
      )}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];

  const toggleLang = () => setLang((prev) => (prev === "de" ? "en" : "de"));

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <motion.nav
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl md:px-12"
        style={{ backgroundColor: "rgba(250, 251, 252, 0.85)" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center gap-3">
          <GradientBar className="h-6" />
          <span className="text-sm font-bold tracking-[0.2em] text-text uppercase">
            dalwhin dijkstra
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            <NavLink href="#about">{t.nav.about}</NavLink>
            <NavLink href="#contact">{t.nav.contact}</NavLink>
            <NavLink href="#imprint">{t.nav.imprint}</NavLink>
          </div>
          <LanguageToggle lang={lang} onToggle={toggleLang} label={t.langSwitch} />
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        <AnimatedGradientBg />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Name - massive typography */}
          <div className="mb-6">
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              <TextReveal text="dalwhin" delay={0.3} />
            </h1>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              <TextReveal text="dijkstra" delay={0.6} />
            </h1>
          </div>

          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mb-6"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang + "-role"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-block rounded-full border border-border bg-surface px-5 py-2 text-sm font-semibold tracking-widest text-text-muted uppercase"
              >
                {t.hero.role}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mb-10"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lang + "-subtitle"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-md text-lg text-text-muted"
              >
                {t.hero.subtitle}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <MagneticButton
              href={LINKEDIN_URL}
              target="_blank"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-shadow hover:shadow-lg"
            >
              <span
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #00B4D8 0%, #38B249 50%, #B5D63D 100%)",
                }}
              />
              <span className="relative flex items-center gap-3">
                {/* LinkedIn icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang + "-cta"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {t.hero.cta}
                  </motion.span>
                </AnimatePresence>
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="h-12 w-6 rounded-full border-2 border-text/20 p-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="h-2 w-full rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE DIVIDER */}
      <MarqueeText text="PROJECT MANAGEMENT" />

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <SectionTitle>{t.about.title}</SectionTitle>
          </ScrollReveal>

          <div className="flex flex-col gap-12 md:flex-row">
            <ScrollReveal className="flex-1" delay={0.1}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang + "-about"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl font-light leading-relaxed text-text md:text-3xl"
                >
                  {t.about.text}
                </motion.p>
              </AnimatePresence>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #00B4D8, #38B249)",
                  }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang + "-loc"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-lg font-medium text-text-muted"
                  >
                    {t.about.location}
                  </motion.span>
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-surface px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <SectionTitle>{t.contact.title}</SectionTitle>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={lang + "-contact"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ScrollReveal delay={0.1}>
                <ContactRow
                  label={t.contact.email}
                  value="post@d-dijkstra.de"
                  href="mailto:post@d-dijkstra.de"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <ContactRow
                  label={t.contact.phone}
                  value="+49 176 476 316 17"
                  href="tel:+4917647631617"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <ContactRow
                  label={t.contact.web}
                  value="d-dijkstra.de"
                  href="https://d-dijkstra.de"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <ContactRow
                  label={t.contact.address}
                  value={t.contact.addressValue}
                />
              </ScrollReveal>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SOCIAL / CONNECT */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <SectionTitle>{t.social.title}</SectionTitle>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <MagneticButton
              href={LINKEDIN_URL}
              target="_blank"
              className="group inline-flex flex-col items-center gap-4"
            >
              <div
                className="flex h-20 w-20 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #00B4D8 0%, #38B249 100%)",
                }}
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang + "-linkedin"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-semibold tracking-widest text-text-muted uppercase transition-colors group-hover:text-primary"
                >
                  {t.social.linkedin}
                </motion.span>
              </AnimatePresence>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE 2 */}
      <MarqueeText text="DALWHIN DIJKSTRA" speed={25} />

      {/* IMPRINT */}
      <section id="imprint" className="bg-surface px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <SectionTitle>{t.imprint.title}</SectionTitle>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={lang + "-imprint"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="mb-2 text-xs font-semibold tracking-widest text-text-muted uppercase">
                    {t.imprint.responsible}
                  </h3>
                  <p className="text-lg font-medium">Dalwhin Dijkstra</p>
                  <p className="whitespace-pre-line text-text-muted">
                    {`Gudvanger Str. 52\n10439 Berlin`}
                  </p>
                  <p className="mt-2 text-text-muted">post@d-dijkstra.de</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div>
                  <h3 className="mb-2 text-xs font-semibold tracking-widest text-text-muted uppercase">
                    {t.imprint.disclaimer}
                  </h3>
                  <p className="max-w-2xl text-text-muted">{t.imprint.disclaimerText}</p>
                </div>
              </ScrollReveal>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <GradientBar className="h-5" />
            <span className="text-xs font-bold tracking-[0.15em] text-text-muted uppercase">
              dalwhin dijkstra
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <a href="mailto:post@d-dijkstra.de" className="transition-colors hover:text-primary">
              post@d-dijkstra.de
            </a>
            <span className="text-border">|</span>
            <a href="#imprint" className="transition-colors hover:text-primary">
              {t.imprint.title}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
