# NEGOCE Decor House SARL — Vitrine pierres décoratives

**Objectif :** Vitrine professionnelle qui valorise pierres décoratives et transforme visiteurs en appels, WhatsApp & demandes de devis. Particuliers + entreprises (maisons, bureaux, commerces, hôtels).

**Live preview :** `python3 -m http.server 5173` → https://5173-{sandbox}.e2b.app

## Structure (inspirée Reenoma.webflow.io — analyse fidèle)
Reenoma = editorial chaleureux, pas bling-bling : fond crème #F9F5EF, typo serif (Instrument Serif) + sans (Inter), gros radius 22-28px, pill buttons, header blur, marquee infinie, cards avec arrow slide, reveal on scroll, parallax subtil, sections aérées. On a reproduit :

- **Header sticky blur** + top bar dark (tel/livraison)
- **Hero 2 colonnes** : eyebrow, H1 serif 78px avec italic, dual CTA (dark + light), trust row 4.9, feature bar 3 colonnes
- **Marquee** pierres en boucle
- **Grille services 4 col** → 8 pierres (filtre Tous/Intérieur/Extérieur/Sol/Mur) avec hover lift + arrow 45°
- **À propos** grid texte + visuel arrondi + stat float (7 ans / 4.9)
- **Solutions 2 cartes** : Particuliers (clair) vs Entreprises (dark)
- **Témoignages** scroll snap (5 cartes)
- **Trust** image + 3 points
- **Réalisations** masonry 3 col → 12 vignettes (extensible à 30) + lightbox
- **Vidéos** grid 3 col → 6 cartes (ID YouTube à remplacer, ou mp4 compressé)
- **Process 4 étapes** 01-04
- **Blog 4 cartes**
- **FAQ accordion**
- **CTA dark** + formulaire devis intégré
- **Contact** + map
- **Footer** 4 col

> Photos volontairement **non luxueuses** : lumière naturelle douce, maisons réelles à Douala/Bonabéri (pas hôtel 5*), textures mates, styling Reenoma éditorial. Respect du brief.

## Pages demandées
Tout en one-page avec ancres pour conversion rapide, + fichiers miroir pour SEO :
- `/` Accueil
- `/#apropos` À propos
- `/#pierres` Pierres & produits
- `/#realisations` Réalisations (30 photos max)
- `/#videos` Vidéos (6 max)
- `/#contact` & `/#devis` Contact & demande de devis

Fichiers physiques `apropos.html`, `pierres.html`, `realisations.html`, `contact.html` (copies index, titres adaptés) + sitemap.

## Formulaire devis
Champs : nom, téléphone, besoin (select), type de pierre, lieu du projet, message. 
- Validation front
- **Submit → ouvre WhatsApp pré-rempli** `wa.me/237694000000` + copie presse-papier + fallback `tel:`
- À brancher ensuite sur Formspree / Netlify Forms / PHP mail si besoin.

## WhatsApp & téléphone
- Top bar + header CTA + CTA dark + floating buttons (wa vert #25D366 + tel blanc) + contact cards → 5 points de conversion.
- Numéro à remplacer : `+237 6 94 00 00 00` (chercher/remplacer global).

## Galerie & vidéos
- Galerie : `columns:3` masonry, 12 exemples fournis, ajouter jusqu’à 30 en dupliquant `<figure class="gal-item">`. Lightbox intégré. Images à optimiser (compresser <300KB, WebP).
- Vidéos : 6 `div.video-card` avec `data-yt="ID"` → remplacer ID. Si fichier lourd, uploader compressé H.264 720p ou héberger YouTube en `youtube-nocookie.com`.

## Google — réglages de base
- `<title>` + `<meta description>` optimisés (Douala, pierres décoratives, parement…)
- Open Graph + favicon
- JSON-LD `LocalBusiness` (Douala, tel, horaires)
- `robots.txt` + `sitemap.xml`
- À faire à la mise en ligne : Search Console, Google Business Profile (photos + avis 4.9), titres H1/H2 cohérents.

## Mise en ligne
- **Hébergement** : Netlify / Vercel / Hostinger (statique). Déposer tout le dossier.
- **Domaine** : pointer DNS A/CNAME, activer HTTPS (Let’s Encrypt auto)
- **Certificat** : inclus gratuit via hébergeur
- **Tests** : responsive (Chrome DevTools 390/768/1280), Lighthouse >90, tester formulaire WA sur mobile, vérifier lightbox & vidéos.
- **Corrections convenues** : incluses (ajuster textes, remplacer 30 photos client, remplacer 6 vidéos, changer numéro/adresse)

## Stack
100% statique HTML/CSS/JS vanilla. Pas de build. Typo Google Fonts (Instrument Serif / Inter). Aucune dépendance lourde. Preview instantané.

## À remplacer avant prod
- `+237 6 94 00 00 00` → vrai numéro (3 occurrences + JS)
- `negocedecorhouse@gmail.com` → vrai email
- `assets/images/*.jpg` → 30 photos client optimisées (garder même ratio)
- `data-yt="ScMzIvxBSi4"` → 6 vrais ID YouTube
- `https://negocedecorhouse.cm` dans sitemap/canonical → vrai domaine

## Dév
```bash
python3 -m http.server 5173 --bind 0.0.0.0
# ou npx serve .
```
