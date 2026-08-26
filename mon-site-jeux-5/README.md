# Mon site de jeux quotidiens

## 1. Ouvrir le projet en local (VS Code)

1. Dézippe ce dossier, ouvre-le dans VS Code (`Fichier > Ouvrir le dossier`).
2. Installe l'extension VS Code **"Live Server"** (Ritwick Dey).
3. Clique droit sur `index.html` → **"Open with Live Server"**.
4. Ton site s'ouvre dans le navigateur, avec rechargement automatique à chaque modification.

Aucune installation de Node, npm ou autre n'est nécessaire pour l'instant : tout est en HTML/CSS/JS pur, donc ça marche partout, tout de suite.

## 2. Structure du projet

```
mon-site-jeux/
├── index.html          → page d'accueil (liste des 3 jeux)
├── style.css            → design global du site
├── jeux/
│   └── chronolog/
│       ├── index.html   → page du jeu
│       ├── chronolog.css
│       ├── data.js       → toutes les données (thèmes, dates)
│       └── script.js     → logique du jeu
└── README.md
```

Pour ajouter un 2e ou 3e jeu : crée un nouveau dossier dans `jeux/`, copie la structure de `chronolog/`, et adapte `data.js` + `script.js` à la logique du nouveau jeu.

## 3. Comment fonctionne la grille "du jour"

Le calcul de la grille se fait **uniquement côté navigateur**, à partir de la date du jour (`getDailyPuzzle()` dans `data.js`). Résultat :
- tout le monde a la même grille le même jour, sans base de données ni serveur ;
- tu peux ajouter autant de thèmes/puzzles que tu veux dans `data.js`, ils se répètent en tournant automatiquement.

Le score de chaque joueur est stocké uniquement dans son propre navigateur (`localStorage`) — pas de compte, pas de serveur, donc pas de coût et une charge serveur proche de zéro.

## 4. Héberger le site (gratuit et scalable à 10 000+ visiteurs)

Comme le site est 100% statique, ces hébergeurs le serviront via un CDN mondial, gratuitement, et absorberont largement 10 000 visiteurs simultanés :

- **Cloudflare Pages** (recommandé) — gratuit, bande passante illimitée, déploiement en connectant ton dépôt GitHub.
- **Netlify** — gratuit jusqu'à un bon volume, glisser-déposer le dossier possible sans même passer par Git.
- **GitHub Pages** — gratuit, simple si le code est déjà sur GitHub.

Étapes générales (valables pour les trois) :
1. Crée un compte GitHub, mets ton dossier dans un dépôt.
2. Connecte ce dépôt à Cloudflare Pages / Netlify.
3. Choisis "aucune commande de build" (site statique pur) — le déploiement se fait en quelques secondes.
4. Tu obtiens une URL type `mon-site.pages.dev`, puis tu peux brancher ton propre nom de domaine (~10€/an chez un registrar comme OVH, Gandi, Namecheap).

## 5. Quand faudra-t-il un vrai serveur/backend ?

Tant que tu restes sur "un jeu par jour, pas de compte, pas de classement mondial en direct", tu n'en as pas besoin. Le jour où tu voudras :
- un vrai classement mondial partagé entre joueurs,
- des comptes utilisateurs,
- des statistiques centralisées,

... la solution la moins chère et la plus simple à ajouter par-dessus ce site statique est **Cloudflare Workers + D1** (base de données) — ça reste gratuit ou presque jusqu'à un trafic très élevé, sans gérer de serveur classique.

## 6. Pour la partie publicité

Deux emplacements (`.ad-left` / `.ad-right`) sont déjà prévus dans `style.css` et se masquent automatiquement sur mobile pour ne pas gêner le jeu. Quand tu seras prêt, la voie la plus simple reste **Google AdSense**, mais certains réseaux exigent un minimum de trafic avant validation — à vérifier au moment venu. Pour du démarchage direct de marques, avoir des vraies stats (visiteurs/jour, taux de retour) sera ton meilleur argument de négociation.
