# CLAUDE.md - d-dijkstra.de Master Rules

> Diese Datei ist die absolute Autoritaet fuer alle Agenten. Komplett lesen vor jeder Aktion.

@AGENTS.md
@docs/CI.md
@docs/APPS.md
@docs/TECH.md
@docs/STRATEGIE.md

---

## 0. PROJEKT-MODUS

```
MODUS: SINGLE-SITE
PROJEKTNAME: d-dijkstra.de
LIVE-URL: https://d-dijkstra.de
LOKALER PFAD: ~/Desktop/d-dijkstra-web
REPO: https://github.com/DalwhinDijkstra/d-dijkstra-web
DEPLOY: Vercel
```

---

## 0a. ARCHITEKT

**Der PL-Agent ist Architekt - `Dalwhin Dijkstra` ist Auftraggeber (Vision + Budget, keine technischen Entscheidungen).**

PL-Agent entscheidet eigenstaendig: Stack, Hosting, Code-Struktur, Sicherheit, neue Tools.

Pflichten: Begruenden, Auftraggeber aktiv korrigieren, KERN-ENTSCHEIDUNGEN schuetzen, Proaktiv eskalieren.

---

## 0b. MODELL-EMPFEHLUNG

| Modell | Wann |
|---|---|
| **Haiku 4.5** | Einfache Edits, CSS-Tweaks, Tippfehler |
| **Sonnet 4.6** <- Standard | Multi-File-Features, Debugging, UI-Komponenten |
| **Opus 4.6** | Architektur, komplexes Cross-System-Debugging |

---

## 0c. KERN-ENTSCHEIDUNGEN - Stand 06.06.2026

**Lokale Umgebung:**
- Projektpfad: `~/Desktop/d-dijkstra-web`
- Runtime: Node.js 24 (unter `~/Desktop/104LABS/_tools/node/bin`)
- Keine .env noetig (keine Secrets, rein statische Seite)

| Bereich | Entscheidung |
|---|---|
| Framework | Astro 5 + React Islands + TypeScript strict |
| Datenbank | Kein DB |
| Auth | Kein Auth |
| Deploy | Vercel (auto-deploy on push to main) |
| Styling | Tailwind CSS 4 + CSS Variables |
| Icons | Inline SVG (kein Icon-Framework noetig) |
| Fonts | Montserrat (Google Fonts CDN) |
| Animationen | motion (framer-motion) fuer React Islands |
| i18n | Eigenes leichtgewichtiges System (src/i18n/translations.ts) |

---

## 0d. KEINE RUECKFRAGEN WENN DOCS DIE ANTWORT GEBEN

Wenn eine Handlung in den MD-Dateien dokumentiert ist -> direkt ausfuehren.

---

## 1. SESSION-START

1. `cd ~/Desktop/d-dijkstra-web && git pull origin main`
2. `docs/changelog/OPEN.md` lesen
3. Nach Code-Aenderungen: `npm run build`

---

## 4. PFLICHTABLAUF VOR JEDER ARBEIT

1. **Verstehen formulieren**
2. **Task-Frage** - anlegen oder sofort?
3. **3 Loesungsvorschlaege**
4. **Auf Bestaetigung warten**

---

## 4b. TASK-WORKFLOW

Task-ID: `T-YYYYMMDD-HHMMSS`
Branch: `fix/{bereich}-T-XXXX`
Worktree-Pflicht: Hauptverzeichnis bleibt auf main.

---

## 5. SPRACH- & FORMATIERUNGSSTANDARD

| Was | Regel |
|---|---|
| Sprache(n) | Deutsch + Englisch (umschaltbar) |
| UI-Labels | DE + EN via translations.ts |
| Anrede | Du |
| Kommentare | Englisch |
| MD-Dokumentation | Deutsch |
| Git-Commits | Englisch |
| Bezeichner (Vars, CSS) | Englisch, kebab-case fuer CSS |

**Datum:** DD.MM.YYYY

---

## 7. CI-REGELN

Vollstaendige Spezifikation: `docs/CI.md`

- **Icons:** Inline SVG - kein Icon-Framework
- **Fonts:** Montserrat (Google Fonts)
- **Farben:** exakt nach `docs/CI.md`
- **Theme:** Light only
- **CSS:** Tailwind CSS 4 + CSS Variables in global.css

---

## 8. CODE-KONVENTIONEN

- Kein DB, kein Auth, kein API
- Rein statische Seite
- React nur fuer interaktive Inseln (Animationen, Language Toggle)
- Astro fuer alles Statische

---

## 10. DOKUMENTATIONS-UEBERSICHT

| Datei | Inhalt |
|---|---|
| `CLAUDE.md` | Master-Regeln |
| `AGENTS.md` | PL-Agent Protokoll |
| `docs/CI.md` | Design System |
| `docs/APPS.md` | Seiten-Uebersicht |
| `docs/TECH.md` | Stack & Architektur |
| `docs/STRATEGIE.md` | Zielgruppe, Ton |

---

## 11. PRODUKTPHILOSOPHIE

**Klarheit:** Digitale Visitenkarte - kein Bloat, kein CMS, kein Backend. So schlank wie moeglich.

**Tonalitaet:** Professionell, direkt, modern. Kein KI-Text ohne Review.
