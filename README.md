# flux76.app — Flux76 apps-promotiesite

Statische promotiesite voor de apps van [Flux76](https://flux76.com). De homepage geeft een
rustig overzicht van alle apps. Iedere app krijgt een eigen promotiepagina: **DiscVault** voor
iPhone en iPad, en **Colors of the Day** voor iPhone (bèta op TestFlight).

- **Techniek:** statische HTML met gedeelde CSS en JavaScript, zonder build-stap.
- **Talen:** dezelfde 20 locales als discvault.eu, met de bestaande DiscVault-vertalingen
  onder `assets/locales/` en de Colors of the Day-teksten onder
  `assets/locales/colors-of-the-day/`.
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
colors-of-the-day/index.html    # Colors of the Day-promotiepagina
colors-of-the-day/privacy/      # privacybeleid (Engels; nl/ is de Nederlandse versie)
assets/site.css                 # gedeelde responsieve vormgeving
assets/colors-of-the-day.css    # Colors of the Day-vormgeving (eigen designsysteem)
assets/site.js                  # taal- en weergavevoorkeuren
assets/locales/                 # gedeelde DiscVault-locales (20 talen)
assets/locales/colors-of-the-day/ # Colors of the Day-teksten (20 talen)
assets/fonts/manrope/           # Manrope (SIL OFL), zelf gehost voor Colors of the Day
assets/img/colors-of-the-day/   # appicoon, merkteken (licht/donker) en social preview
favicon.svg, og-image.png       # merk-assets (uit flux76.com)
CNAME                           # flux76.app
assets/img/discvault-icon.png   # officieel DiscVault-appicoon
assets/img/discvault-library.png # aangeleverd transparant DiscVault-productbeeld
assets/img/flux76-lockup-*.svg  # officiële Flux76-lockups
assets/img/flux76-mark.svg      # compacte Flux76-markering voor mobiel
assets/img/app-store-badge-*.svg # officiële Apple-badges voor alle 20 talen
assets/img/discvault-og.png      # DiscVault social preview (1200×630)
assets/img/telefoon/web/        # geoptimaliseerde screenshots voor het web
.github/workflows/pages.yml     # auto-deploy naar GitHub Pages
llms.txt                        # compacte Engelse productfeiten voor AI-systemen
sitemap.xml                     # canonieke URLs met lastmod
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

## Colors of the Day

De pagina `colors-of-the-day/` volgt het **Color of the Day-designsysteem** (werktitel van de
app), niet het Flux76-palet:

- **Neutraal kader.** Alle interface-elementen zijn grijs (`surface`, `surface-raised`, `ink`,
  `ink-muted`, `control`). Kleur verschijnt alleen als spelkleur (doel, keuze, gesplitste cirkel)
  en in het merkteken. `assets/colors-of-the-day.css` zet de gedeelde site-variabelen om naar
  deze tokens, zodat ook header en footer op deze pagina neutraal worden.
- **Licht en donker** volgen dezelfde keuze als de rest van de site; de deelkaart is altijd donker.
- **Lettertype:** Manrope, zelf gehost (geen verzoeken naar Google Fonts).
- **Beelden:** `icon.png` (512 px, uit `AppIcon-1024.png`), `mark-light.webp` / `mark-dark.webp`
  (uit `Mark-light.png` / `Mark-dark.png`) en `og.png` (1200 × 630). Het merkteken wordt nooit
  nagetekend; de gesplitste cirkels, timerring en kleurkiezer op de pagina zijn HTML/CSS.

### Privacybeleid

Het privacybeleid staat op twee vaste adressen, zoals App Store Connect ze per taal vraagt:

| App Store Connect-taal | Privacy Policy URL |
|---|---|
| English (U.S.) | `https://flux76.app/colors-of-the-day/privacy` |
| Dutch | `https://flux76.app/colors-of-the-day/privacy/nl` |

GitHub Pages stuurt beide adressen zonder slash door naar de map met slash. De pagina's zijn
statisch en per taal geschreven (geen vertaling via JavaScript); `site.js` laat taal en
taalvoorkeur op deze pagina's met rust.

De tekst komt uit `docs/privacy-policy.md` op de `beta`-branch van
`Flux76HQ/ios_color-of-the-day` (Nederlands en Engels, laatst bijgewerkt 10 november 2026). De vier invulplekken zijn ingevuld:
publicatiedatum 10 november 2026, bedrijfsgegevens "Flux76, Nederland" (geen adres of
KvK-nummer), Supabase-regio Ierland, en `support@flux76.com` (het feedbackadres in de app).

Getoetst aan de code op `beta`: de app stuurt na een gespeelde dag alleen dagnummer, dagtotaal en
een willekeurige installatiecode (UUID in de Keychain, zodat een herinstallatie niet als nieuwe
speler telt) naar de Supabase-functie `submit_score`; die slaat geen IP-adres op. Met
iCloud-synchronisatie aan (standaard, uit te zetten op het infoscherm) staat de speelgeschiedenis
ook in de eigen iCloud van de speler; Flux76 kan daar niet bij. Game Center krijgt dagtotaal en
beste reeks. Uitdaging-links staan in de app nog uit (`challengeLinkBase = nil`).

**Verandert de app hierin (andere gegevens, een andere server of regio, accounts, Pro-aankoop),
werk dan eerst dit beleid bij**, in beide talen, met een nieuwe datum, en pas het App
Privacy-label in App Store Connect aan.

### TestFlight

De openbare bèta staat op TestFlight: <https://testflight.apple.com/join/hN7d5dkp>. De pagina linkt ernaar met een neutrale knop
(`.cotd-beta-link`, tekst `beta_join`), en het feitenblok gebruikt `facts_text_beta`. Op de
homepage staat bij de app "iPhone · Beta on TestFlight" (`home_platform`). Alle drie zijn vertaald
in de 20 talen.

Verandert de uitnodigingslink, pas dan de `href` van `.cotd-beta-link` in
`colors-of-the-day/index.html` en de link in `llms.txt` aan. Komt de app in de App Store, vervang
de knop dan door de App Store-badge (zoals op de DiscVault-pagina) en werk `home_platform`,
`facts_text_beta` en `llms.txt` bij.
