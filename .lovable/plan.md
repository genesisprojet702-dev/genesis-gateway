
# Correction de la page `/login` — champs opaques

## Problème

Sur `/login`, l'image de fond contient déjà un formulaire dessiné (email, mot de passe, boutons…). Les champs React superposés sont transparents (`glass-input` translucide), donc on voit en double le formulaire de l'image derrière les vrais champs. Sur `/` (Créer un compte), les champs sont opaques noirs et c'est le rendu attendu.

## Solution

Garder l'image de fond uniquement comme décor pour le **haut** (logo Genesis + halo + wordmark + "BON RETOUR"), et masquer tout le bas de l'image avec un panneau opaque qui contient les vrais champs interactifs — exactement comme sur la page Créer un compte.

### Changements dans `src/routes/login.tsx`

1. **Ajouter un dégradé masquant** au-dessus de l'image de fond, depuis ~55% de la hauteur jusqu'en bas : noir opaque (`var(--background)`) pour cacher complètement le formulaire dessiné dans l'image. Le haut reste 100% visible (logo + "BON RETOUR").
2. **Envelopper le formulaire dans un `glass-panel` opaque** (même style que le panneau de `/` — fond sombre, bordure cyan subtile, blur, shadow) au lieu du conteneur transparent actuel.
3. **Rendre les champs `.glass-input` réellement opaques** (déjà le cas via la classe, mais s'assurer qu'aucune transparence parente ne les laisse voir le fond).
4. Conserver toutes les animations holographiques, l'œil corrigé, les boutons sociaux, le lien "Créer un compte" et la barre de chips bottom.

### Aucun autre changement

- Pas de modification de `/` (Créer un compte).
- Pas de modification du backend, des assets, ni de `src/styles.css` (les classes existent déjà).
- Pas de base de données.

## Fichier touché

- `src/routes/login.tsx` — ajout du masque dégradé + wrapping `glass-panel` autour du formulaire.
