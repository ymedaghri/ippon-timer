# IPPON Timer
Ce projet est une application Next.js qui affiche un timer qui se décrémente chaque seconde.

![Timer App](https://raw.githubusercontent.com/ymedaghri/ippon-timer/main/read_me_image_timer_app.png)

## Démarrage

D'abord, lançez le serveur de développement :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

Il est possible de spécifier le nombre initial de secondes, minutes et heures via la query string par exemple : 
http://localhost:3000?hours=1&minutes=20&seconds=30

Vous pouvez n'indiquer que certains de ces paramètre ou bien aucun de ces paramètres, dans ce dernier cas le Timer sera configuré à 10 minutes

## 🌟 Fonctionnalités
- 🕒 Affichage d'un timer qui se décrémente chaque seconde.
- 📌 Possibilité de spécifier seconds, minutes, et hours via la query string.
- 📌 L'état est stocké en localStorage durant la durée de vie du timer, ainsi même si la fenêtre est fermée, l'ouverture de la même url (avec paramètres identiques) continurea le timer précédent
- 📌 Tout changement de paramètres (minutes, seconde, heures) créera un nouveau timer et mettra à jour le localStorage avec ce dernier
- 🚀 Préparé pour un déploiement sur fly.io.
- 🚀 Démarrage rapide


## 🌍 Déploiement sur fly.io

```bash
fly deploy
```
Vous pouvez accéder à la version en ligne de l'application ici : https://ippon-timer.fly.dev/?minutes=5

## Développé avec NextJS

Pour en savoir plus sur Next.js, jetez un oeil sur les ressources suivantes :

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Contactez moi pour plus de détails
[Ymedaghri@gmail.com](mailto:Ymedaghri@gmail.com)
