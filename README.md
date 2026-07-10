# flux76.app — Flux76 apps-promotiesite

Statische promotiesite voor de apps van [Flux76](https://flux76.com). Nu met **DiscVault**
(native iOS-app voor het beheren van je 4K UHD-, Blu-ray- & DVD-collectie), met ruimte om later
meer apps toe te voegen. Zelfde huisstijl als flux76.com.

- **Techniek:** één zelfstandige `index.html` (inline CSS + JS), geen build-stap.
- **Talen:** NL / EN / DE / FR via de taalwisselaar (alle teksten staan in het `I18N`-object in `index.html`).
- **Hosting:** GitHub Pages — zie [`DEPLOY.md`](DEPLOY.md).

## Lokaal bekijken
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structuur
```
index.html                      # de hele site
favicon.svg, og-image.png       # merk-assets (uit flux76.com)
CNAME                           # flux76.app
assets/img/discvault-icon.svg   # DiscVault app-icoon (placeholder — vervang door het echte)
assets/img/screenshots/         # iOS-screenshots (nu tijdelijke mockups)
.github/workflows/pages.yml     # auto-deploy naar GitHub Pages
```

## ✅ Nog te doen / aan te leveren

### 1. Echte iOS-screenshots
In `assets/img/screenshots/` staan nu **tijdelijke mockups** (`dv-library.svg`, `dv-loans.svg`,
`dv-wishlist.svg`) die op de echte app zijn gebaseerd. Vervang ze door de echte screenshots:

- Zet de bestanden (PNG of JPG) in `assets/img/screenshots/`.
- Pas in `index.html` in de `.phones`-sectie de drie `<img src="…">` aan naar de nieuwe bestanden.
- **Tip:** als je screenshots al een telefoon-frame bevatten (zoals de oranje iPhone-frames),
  verwijder dan de omhullende `<div class="device">…</div>` en houd alleen de `<img>` over —
  de CSS-frame is alleen bedoeld voor kale schermafbeeldingen.

### 2. TestFlight-link
De bèta-knop staat in de `#beta`-sectie. Zoek in `index.html` naar de comment `TESTFLIGHT:`
en vervang de placeholder-URL:
```html
<a id="testflight-link" ... href="https://testflight.apple.com/join/XXXXXXXX" ...>
```
Vul je publieke TestFlight-uitnodigingslink in. Klaar.

### 3. App-icoon (optioneel)
`assets/img/discvault-icon.svg` is een placeholder. Vervang door het echte DiscVault-icoon
(SVG of PNG ≥512px) en werk zo nodig de `src` in de apps-kaart bij.

### 4. Controleren
- Featurelijst in de DiscVault-sectie afstemmen op wat de **iOS-app** daadwerkelijk kan.
- Social-links in de footer (Bluesky/Instagram/Threads) kloppen met flux76.com — pas aan indien nodig.
