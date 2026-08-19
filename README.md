# flux76.app — Flux76 apps-promotiesite

Statische promotiesite voor de apps van [Flux76](https://flux76.com). De homepage geeft een
rustig overzicht van alle apps. Iedere app krijgt een eigen promotiepagina, te beginnen met
**DiscVault** voor iPhone en iPad.

- **Techniek:** statische HTML met gedeelde CSS en JavaScript, zonder build-stap.
- **Talen:** dezelfde 20 locales als discvault.eu, met de bestaande DiscVault-vertalingen
  onder `assets/locales/`.
- **Weergave:** Light / Dark / System, lokaal onthouden in de browser.
- **Hosting:** GitHub Pages — zie [`DEPLOY.md`](DEPLOY.md).

## Lokaal bekijken
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structuur
```
index.html                      # rustig overzicht van alle apps
discvault/index.html            # DiscVault-promotiepagina
assets/site.css                 # gedeelde responsieve vormgeving
assets/site.js                  # taal- en weergavevoorkeuren
assets/locales/                 # gedeelde DiscVault-locales (20 talen)
favicon.svg, og-image.png       # merk-assets (uit flux76.com)
CNAME                           # flux76.app
assets/img/discvault-icon.png   # officieel DiscVault-appicoon
assets/img/discvault-library.png # aangeleverd transparant DiscVault-productbeeld
assets/img/flux76-lockup-*.svg  # officiële Flux76-lockups
assets/img/flux76-mark.svg      # compacte Flux76-markering voor mobiel
assets/img/app-store-badge-*.svg # officiële Apple-badges voor alle 20 talen
assets/img/telefoon/web/        # geoptimaliseerde screenshots voor het web
.github/workflows/pages.yml     # auto-deploy naar GitHub Pages
```

## Screenshots
De DiscVault-pagina toont één aangeleverd transparant productbeeld:
`assets/img/discvault-library.png`.

**Een screenshot vervangen of toevoegen:**
- Lever een geoptimaliseerde PNG met transparante achtergrond aan.
- Pas de `<img class="product-screenshot">` in `discvault/index.html` aan.
- De afbeelding bevat al een iPhone-frame en alfakanaal; de gedeelde CSS behoudt
  de transparantie en voegt alleen een alpha-aware slagschaduw toe.

De App Store-link gebruikt de live DiscVault-listing met ID `6788772918`.
