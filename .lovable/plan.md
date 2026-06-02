## Objectif

Reproduire fidèlement le design de l'image envoyée (logo cristal bleu Genesis, fond cosmique sombre avec éclats latéraux, titre "CRÉER VOTRE COMPTE", champs, bouton bleu glacé, Google/Facebook, bandeau bas) tout en gardant les champs **fonctionnels** (saisie, toggle œil mot de passe, etc.).

## Approche

1. **Utiliser l'image uploadée comme asset de référence visuel**
   - Uploader `file_00000000e6ec7246a0a7dbf15ec26918.png` via `lovable-assets` → pointer dans `src/assets/`.
   - En extraire le **logo Genesis ailé** (recadré) et le **fond cosmique** (recadré) pour les utiliser comme images réelles dans la page, plutôt que de re-générer.
   - Alternative plus simple : utiliser l'image entière en background décoratif et superposer uniquement les éléments interactifs (inputs, boutons) parfaitement alignés. Je propose plutôt l'extraction (option 1) pour garder une mise en page responsive propre.

2. **Refonte `src/routes/index.tsx`** pour matcher le mockup :
   - Logo ailé cristal (image extraite) + wordmark "GENESIS" chromé argenté (remplace le titre Orbitron bleu actuel par un rendu plus métallique, ou image).
   - Sous-titre "**CRÉER** VOTRE COMPTE" (bleu + blanc) + tagline "Accédez à vos cartes, votre espace IA et vos récompenses."
   - Panneau verre avec coins à losanges (◇ aux 4 coins comme sur l'image).
   - 4 champs : Nom d'utilisateur, Adresse e-mail, Mot de passe (œil), Confirmer le mot de passe (œil) — icônes outline fines bleues, placeholders gris.
   - Bouton "CRÉER MON COMPTE" : dégradé bleu glacé avec texture, bordure lumineuse, flèche.
   - Séparateur "OU" avec losanges.
   - Boutons "Continuer avec Google" / "Continuer avec Facebook" (logos officiels colorés, fond noir verre).
   - Lien "Déjà un compte ? **SE CONNECTER ›**".
   - Bandeau bas avec bordure fine et 3 chips : 🛡 SÉCURISÉ — ◆ VOTRE UNIVERS — ⚡ SANS LIMITES.

3. **Ajustements `src/styles.css`** :
   - Wordmark argent chromé (gradient blanc/gris + text-stroke).
   - Bouton primaire avec texture bleu glacé plus marquée (gradient + noise/shine).
   - Coins en losanges (pseudo-éléments rotate-45).

## Points techniques

- Pas de backend / Supabase (respect de la consigne précédente).
- Champs gardent leur état React (`useState`) et toggles œil.
- Aucune modification de la logique de routing.

## Fichiers touchés

- `src/assets/genesis-mockup.png.asset.json` (nouvel asset CDN depuis l'upload)
- éventuellement `src/assets/genesis-logo-v2.png.asset.json` (logo recadré via edit_image)
- `src/routes/index.tsx` (refonte JSX)
- `src/styles.css` (wordmark chromé + bouton glacé + coins losange)

## Question avant de coder

Préfères-tu :
- **A)** Que j'utilise **l'image entière** comme fond fixe et que je superpose uniquement les 4 champs + boutons interactifs par-dessus (rendu pixel-perfect identique au mockup, mais moins flexible si on change de taille d'écran), ou
- **B)** Que j'**extraie le logo + fond** et que je **reconstruise** les champs/boutons en HTML/CSS stylés pour matcher visuellement (responsive propre, plus maintenable, ~98% fidèle) ?

Je recommande **B**. Dis-moi ton choix et je lance l'implémentation.
