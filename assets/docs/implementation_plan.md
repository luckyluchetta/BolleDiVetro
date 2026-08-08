# Implementation Plan — Bolle Di Vetro Website

> Copia di riferimento del piano di implementazione. Vedi il progetto per i file sorgente.

## Overview
Sito web statico bilingue (IT/EN) per la struttura "Bolle Di Vetro" con **due appartamenti**.
Single-page con sezioni ancorate, HTML5/CSS3/JS vanilla, deploy su Netlify.

## Struttura Cartelle
```
BolleDiVetro/
├── index.html
├── netlify.toml
├── robots.txt
├── sitemap.xml
├── manifest.json
├── README.md
├── assets/
│   ├── css/style.css
│   ├── js/main.js, i18n.js, gallery.js
│   ├── img/
│   │   ├── hero.jpg
│   │   ├── og-image.jpg
│   │   ├── gallery/apt1/ (foto-01..06.jpg)
│   │   └── gallery/apt2/ (foto-01..06.jpg)
│   ├── icons/ (SVG amenità)
│   └── docs/ (questo file)
└── lang/it.json, en.json
```

## Due Appartamenti — Struttura Sezioni
- **Hero** (condiviso) — foto principale + CTA
- **Appartamento 1** — descrizione, galleria, servizi
- **Appartamento 2** — descrizione, galleria, servizi
- **Posizione** (condiviso) — mappa + punti di interesse
- **Prenotazione** — CTA per entrambi gli appartamenti (Airbnb + Booking per ciascuno)
- **Recensioni** (condiviso, nascosto) — predisposto
- **Contatti + Footer** (condiviso)

## Design System
- Primary: #C4956A (terracotta), Accent: #2E6B62 (verde salvia)
- Background: #FAF6F1 (crema), Text: #2D2926 (marrone scuro)
- Fonts: Playfair Display (titoli), Inter (corpo)
- Mobile-first responsive (480, 768, 1024, 1280px)

## Placeholder Markers
Tutti i contenuti personalizzabili sono marcati con commenti:
- `<!-- BLOCCO_DESCRIZIONE_APTx_IT/EN -->`
- `<!-- BLOCCO_SERVIZI_APTx_IT/EN -->`
- `<!-- BLOCCO_POSIZIONE_IT/EN -->`
- `<!-- BLOCCO_CONTATTI -->`
- `<!-- BLOCCO_LINK_AIRBNB_APTx / BLOCCO_LINK_BOOKING_APTx -->`
