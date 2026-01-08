# Setup Télétravail Beta

Site web pour Setup Télétravail - Guides et conseils pour optimiser votre espace de télétravail.

Ce projet est construit avec [Next.js](https://nextjs.org) et utilise TypeScript, Tailwind CSS, et React Markdown.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Gestion des articles de blog

### Créer un nouvel article

1. **Créez un fichier Markdown** dans `content/blog/` :

```bash
content/blog/mon-article.md
```

2. **Ajoutez les métadonnées** au début du fichier :

```markdown
---
id: mon-article-unique
title: "Titre de mon article"
desc: "Description courte pour la prévisualisation"
tag: "Guide Complet"
postby: "L'équipe Setup Télétravail"
date: "8 janvier 2026"
image: "/blog/mon-image.jpg"
imageDet: "/blog/mon-image.jpg"
---

# Contenu de votre article

Écrivez votre contenu en Markdown ici...
```

3. **Générez le JSON** :

```bash
npm run generate:blog
```

4. **Vérifiez le résultat** sur http://localhost:3000/blog

📚 **Documentation complète** : Voir `content/blog/README.md`

### Commandes disponibles

```bash
npm run dev              # Démarrer le serveur de développement
npm run build           # Builder pour la production
npm run start           # Démarrer en production
npm run generate:blog   # Générer BlogData.json depuis les fichiers Markdown
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
