# d-dijkstra.de - Tech Stack & Architecture

---

## Stack-Uebersicht

| Layer | Technologie | Begruendung |
|---|---|---|
| Framework | Astro 5 + React Islands + TS strict | Statisch + interaktive Inseln fuer Animationen |
| Datenbank | Keine | Rein statische Seite |
| Auth | Keine | Oeffentliche Seite |
| Deploy | Vercel | Auto-deploy on push, kostenlos |
| Styling | Tailwind CSS 4 | Utility-first, schnell iterierbar |
| Animationen | motion (framer-motion) | React-kompatibel, 21st.dev Standard |
| Fonts | Montserrat via Google Fonts CDN | Brand-Font |
| i18n | Eigenes System (translations.ts) | Leichtgewichtig, kein Framework noetig |

---

## Verzeichnisstruktur

```
~/Desktop/d-dijkstra-web/
+-- CLAUDE.md
+-- AGENTS.md
+-- astro.config.mjs
+-- package.json
+-- tsconfig.json
+-- public/
|   +-- favicon.svg
|   +-- favicon.ico
+-- src/
|   +-- pages/
|   |   +-- index.astro          <- Hauptseite (Shell)
|   +-- components/
|   |   +-- App.tsx              <- React Island (gesamte interaktive UI)
|   |   +-- AnimatedGradientBg.tsx
|   |   +-- GradientBar.tsx
|   |   +-- LanguageToggle.tsx
|   |   +-- MagneticButton.tsx
|   |   +-- MarqueeText.tsx
|   |   +-- ScrollReveal.tsx
|   |   +-- TextReveal.tsx
|   +-- i18n/
|   |   +-- translations.ts     <- DE/EN Texte
|   +-- styles/
|       +-- global.css           <- Tailwind + CSS Variables
+-- docs/
    +-- CI.md
    +-- APPS.md
    +-- TECH.md
    +-- STRATEGIE.md
    +-- changelog/
        +-- OPEN.md
```

---

## Deployment

GitHub Push auf main -> Vercel baut automatisch und deployed.

```bash
# Lokaler Build-Test:
npm run build

# Dev-Server:
npm run dev
```

---

## Git-Konventionen

Branch: `fix/{bereich}-T-{NNN}` oder `feat/{bereich}-T-{NNN}`
Commits: `feat(scope): what` / `fix(scope): what`

---

## Security

- Keine Secrets, keine API-Keys
- Rein statische Seite, kein serverseitiger Code
- Externe Links mit `rel="noopener noreferrer"`
