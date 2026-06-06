# d-dijkstra.de - CI Guide

---

## Farben

| Name | Hex | Verwendung |
|---|---|---|
| Primary | `#00B4D8` | Cyan/Blau - Links, Hover-States |
| Secondary | `#38B249` | Gruen - Gradient Mitte |
| Accent | `#B5D63D` | Lime - Gradient Ende, Akzente |
| Background | `#FAFBFC` | Seitenhintergrund |
| Surface | `#FFFFFF` | Cards, Sektionen |
| Text | `#1A1A2E` | Headlines, Body |
| Text Muted | `#6B7280` | Subtext, Labels |
| Border | `#E5E7EB` | Dividers, Rahmen |

**Brand-Gradient:** `linear-gradient(135deg, #00B4D8 0%, #38B249 50%, #B5D63D 100%)`

---

## CSS-Variablen

Definiert in `src/styles/global.css` via Tailwind `@theme`.

| Variable | Wert | Verwendung |
|---|---|---|
| `--color-primary` | `#00B4D8` | Primaere Akzentfarbe |
| `--color-secondary` | `#38B249` | Sekundaere Akzente |
| `--color-accent` | `#B5D63D` | Tertiäre Akzente |
| `--color-bg` | `#FAFBFC` | Seitenhintergrund |
| `--color-surface` | `#FFFFFF` | Cards |
| `--color-text` | `#1A1A2E` | Haupttext |
| `--color-text-muted` | `#6B7280` | Subtext |
| `--color-border` | `#E5E7EB` | Borders |

**Theme:** Light only (kein Dark Mode)

---

## Typografie

| Font | Verwendung | Variable |
|---|---|---|
| Montserrat | Alles (Body + Display) | `--font-body`, `--font-display` |

Gewichte: 100-900 (variable font via Google Fonts CDN)

---

## Icons

Inline SVG - kein Icon-Framework. LinkedIn-Icon und Location-Pin als einzige Icons.

---

## Layout

One-Pager mit folgender Struktur:

```
+------------------------------------------+
| FIXED NAV (blur backdrop)                |
+------------------------------------------+
| HERO (fullscreen, animated gradient bg)  |
+------------------------------------------+
| MARQUEE DIVIDER                          |
+------------------------------------------+
| ABOUT                                    |
+------------------------------------------+
| CONTACT (surface bg)                     |
+------------------------------------------+
| SOCIAL / CONNECT                         |
+------------------------------------------+
| MARQUEE DIVIDER                          |
+------------------------------------------+
| IMPRINT (surface bg)                     |
+------------------------------------------+
| FOOTER                                   |
+------------------------------------------+
```

---

## Mobile & Responsive

| Breakpoint | Verhalten |
|---|---|
| Desktop (>= 1200px) | Volles Layout |
| Tablet (< 960px) | Nav-Links hidden |
| Mobile (< 768px) | Primaerer Breakpoint, stacked Layouts |
| Klein (< 480px) | Reduzierte Schriftgroessen |

---

## Animationen

| Element | Effekt | Bibliothek |
|---|---|---|
| Hero Background | Floating gradient orbs | motion |
| Hero Name | Character-by-character reveal | motion |
| Nav | Slide down on load | motion |
| Sections | Scroll reveal (fade up) | motion |
| CTA Button | Magnetic hover effect | motion |
| Marquee | Infinite horizontal scroll | motion |
| Language Toggle | Scale on hover/tap | motion |
| Text Content | AnimatePresence on lang switch | motion |

---

## Wording-Standards

| Richtig | Falsch |
|---|---|
| `Projektmanager` | `Project Manager` (in DE) |
| ` - ` oder Umformulierung | EM Dashes (`-`) |

**Verboten:** EM Dashes in allen sichtbaren Texten.
