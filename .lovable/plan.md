
# Plan — Corrections + animations holographiques

Réponse honnête sur mes capacités : oui, je peux faire les 3 choses. Je ne peux pas garantir un rendu pixel-perfect 100% identique à l'image (les inputs/boutons sont reconstruits en HTML/CSS pour rester fonctionnels), mais je peux utiliser **ton image comme fond fixe pleine page** pour la page `/login` afin que le logo, le wordmark "GENESIS", le texte "BON RETOUR", les vagues bleues latérales et le halo circulaire soient **exactement ceux de ton image**. Les champs et boutons sont ensuite superposés par-dessus, positionnés pour s'aligner sur les cases de l'image — visuellement quasi identique, mais 100% fonctionnel.

## 1. Bug eye / EyeOff (inscription + connexion)

Logique inversée actuellement. Correction :
- Œil **ouvert** (`Eye`) → mot de passe **visible** (type=text)
- Œil **barré** (`EyeOff`) → mot de passe **masqué** (type=password, points)

Fichiers : `src/routes/index.tsx`, `src/routes/login.tsx`.

## 2. Page `/login` refaite à l'identique de l'image

Approche : **uploader ton image fournie** comme asset CDN, l'utiliser en `background` plein écran `cover` + `top`, puis superposer uniquement les éléments interactifs aux bons endroits.

- Upload de `user-uploads://file_0000000085f4720a83807464b3a1b94e.png` via `lovable-assets` → `src/assets/genesis-login-bg.png.asset.json`
- Remplace l'ancienne hero `genesis-login-hero.jpg` (supprimée)
- Layout : image en fond fixe, container `max-w-md` centré, espace vide en haut pour laisser apparaître logo + "BON RETOUR" de l'image
- Champs superposés (email, mot de passe, confirmer mot de passe — comme sur ton image) en style verre transparent pour laisser transparaître le fond
- Bouton "SE CONNECTER" en glass transparent par-dessus le bouton bleu de l'image
- Liens Google / Facebook, "CRÉER UN COMPTE", barre bottom : positionnés sur les éléments correspondants
- Suppression du bloc texte "BON RETOUR" en React (déjà dans l'image)

Note : la page contient bien 3 champs comme dans ton image (email + mot de passe + confirmer mot de passe).

## 3. Micro-animations holographiques

CSS pur (pas de lib), ajoutés dans `src/styles.css` :

- **Au chargement** :
  - `fade-in` + `translateY` doux sur le panel formulaire (stagger sur les champs)
  - Halo holographique pulsant derrière le logo (`hologram-pulse` : opacity 0.4 → 0.8, scale 1 → 1.05, 4s)
  - Particules bleues flottantes (3-4 spans en `position:absolute`, animation `float` aléatoire)
  - Ligne de scan holographique qui traverse le panel une fois (`scan-line` 1.5s)

- **Au hover** :
  - Champs : bordure cyan s'illumine + reflet diagonal qui glisse (`shine` 0.8s)
  - Boutons sociaux : léger `scale(1.02)` + glow cyan
  - Bouton principal "SE CONNECTER" : intensification du shimmer + glow renforcé
  - Logo (hover sur le hero) : rotation lumineuse subtile du halo

- **Au focus** des inputs : pulse cyan sur l'icône gauche

## Fichiers touchés

- `src/routes/login.tsx` — refonte complète (image comme fond, eye fixé)
- `src/routes/index.tsx` — eye fixé + classes d'animation hover
- `src/styles.css` — keyframes : `hologram-pulse`, `float-particle`, `scan-line`, `shine`, `fade-in-up`
- `src/assets/genesis-login-bg.png.asset.json` — nouveau (upload de ton image)
- `src/assets/genesis-login-hero.jpg` — supprimé

Aucun changement backend, aucune base de données.
