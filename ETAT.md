# État
## v0.1.0 (23/11/2026)
- Première version : détection des critiques/maladresses dans les cartes CoC7 (totaux `dice-total critical|fumble`), bouton Gardien sur la carte, tirage dans des RollTables du monde, carte de conséquence thémée, bouton « Retirer », réglages `auto` et `visibilite`.
- 12 familles × 2 tables × 8 résultats, textes dans `scripts/data.js`, créées au premier lancement (Gardien actif) dans le dossier « Critiques et maladresses ».
- Association compétence → famille : nom de l'objet compétence retrouvé via `flags.CoC7.load` si possible, sinon intitulé du jet (flavor), puis expressions régulières sur le nom sans accents.
- **Testé et approuvé par Stéphane en jeu (25/11/2026).** (Ancienne note : non testé, points incertains levés.) Points incertains : clés exactes de `flags.CoC7.load` (skillId…), format des résultats de RollTable en v14 (`name`), hook `renderChatMessageHTML` sur les cartes CoC7, affichage du bouton si la carte est re-rendue.
- À faire : version moderne des textes (2026) à part, import/export des tables, test avec un vrai 01 et une vraie maladresse.
- Fenêtre d'essai sans jet : bouton dans les réglages du module (menu), `api.tester()` pour une macro, `api.tester(cle, kind)` pour tirer directement ; déclenche aussi l'effet de Critiques du Mythe s'il est actif.

- Bannière 1280×320 (`.github/banner.png`) en tête du README, dépôt public créé par Stéphane le 25/11/2026, code poussé sur `main`.
