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
assets/img/telefoon/            # échte iOS-screenshots met iPhone-frame (bron-originelen)
assets/img/telefoon/web/        # geoptimaliseerde web-versies (~700px) die de site toont
.github/workflows/pages.yml     # auto-deploy naar GitHub Pages
```

## Screenshots
De DiscVault-sectie toont drie echte iOS-screenshots (Library, Loans, Wishlist) uit
`assets/img/telefoon/web/`. De originelen op ware grootte staan in `assets/img/telefoon/`;
de andere schermen (Watch History, onboarding, Collectors Mode, "Scan & add") staan daar ook
en kun je zo inruilen.

**Een screenshot vervangen of toevoegen:**
- Maak een web-versie (~700px breed) en zet die in `assets/img/telefoon/web/`.
- Pas in `index.html` in de `.phones`-sectie de betreffende `<img class="shot" src="…">` aan.
- De screenshots bevatten al een iPhone-frame, dus er hoort **geen** extra frame omheen —
  alleen een `<img class="shot">` (de CSS geeft schaduw en afronding).

## ✅ Nog te doen / aan te leveren

### 1. TestFlight-link
De bèta-knop staat in de `#beta`-sectie. Zoek in `index.html` naar de comment `TESTFLIGHT:`
en vervang de placeholder-URL:
```html
<a id="testflight-link" ... href="https://testflight.apple.com/join/XXXXXXXX" ...>
```
Vul je publieke TestFlight-uitnodigingslink in. Klaar.

### 2. App-icoon (optioneel)
`assets/img/discvault-icon.svg` is een placeholder. Vervang door het echte DiscVault-icoon
(SVG of PNG ≥512px) en werk zo nodig de `src` in de apps-kaart bij.

### 3. Controleren
- Featurelijst in de DiscVault-sectie afstemmen op wat de **iOS-app** daadwerkelijk kan.
- Social-links in de footer (Bluesky/Instagram/Threads) kloppen met flux76.com — pas aan indien nodig.
