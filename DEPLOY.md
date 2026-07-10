# flux76.app — live zetten via GitHub Pages

De site is een statische pagina (`index.html` + assets in `assets/`), dus GitHub Pages is
perfect. Twee delen: **(A)** Pages aanzetten, **(B)** het domein `flux76.app` koppelen.

Deze repo is `Flux76HQ/flux76-app`.

---

## A. GitHub Pages aanzetten (via Actions)

Er zit een workflow in `.github/workflows/pages.yml` die de site automatisch publiceert
bij elke push naar **`main`**.

1. Merge deze branch naar **`main`** (of push je site naar `main`).
2. Ga naar **Settings → Pages**.
   - **Build and deployment → Source:** kies **"GitHub Actions"**.
3. De workflow draait automatisch en zet de site live. Onder **Actions** zie je de voortgang;
   de deploy-URL verschijnt in de job (bijv. `https://flux76hq.github.io/flux76-app/`).

> Liever zonder Actions? Het kan ook via **"Deploy from a branch" → `main` / `/(root)`**.
> Het bestand `.nojekyll` staat er al zodat GitHub de map `assets/` niet negeert.

---

## B. Domein flux76.app koppelen

### B1. In GitHub (Pages-instellingen)
- **Settings → Pages → Custom domain:** typ `flux76.app` → Save.
  *(Het `CNAME`-bestand staat er al en bevat `flux76.app`.)*
- Aanrader: verifieer het domein op org-niveau (**Org Settings → Pages → Verified domains**).

### B2. Bij je domeinregistrar (DNS)
Verwijder eerst oude records/forwarding voor `flux76.app`. Maak dan:

**Apex (`flux76.app`) — 4 A-records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
*(Optioneel, voor IPv6, ook 4 AAAA-records:)*
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**www (`www.flux76.app`) — 1 CNAME-record:**
```
www  →  flux76hq.github.io
```

> Let op: `.app` is een HSTS-preload TLD — HTTPS is **verplicht**. GitHub geeft automatisch een
> certificaat uit; dat kan even duren. Zet daarna **"Enforce HTTPS"** aan.

### B3. HTTPS aanzetten
- **Settings → Pages → "Enforce HTTPS"** aanvinken zodra het certificaat er is.

---

## Controle
- DNS kan tot 24 uur duren (meestal sneller). Test in incognito: `https://flux76.app`.
- Terminal: `dig flux76.app +noall +answer -t A` → moet de vier GitHub-IP's teruggeven.
