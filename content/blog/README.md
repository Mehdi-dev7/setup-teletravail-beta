# 📝 Guide d'Utilisation - Articles de Blog en Markdown

## 🎯 Vue d'ensemble

Ce dossier contient tous vos articles de blog au format Markdown (`.md`). Écrire en Markdown est **beaucoup plus simple** que de gérer du JSON directement !

## ✍️ Créer un nouvel article

### 1. Créer un fichier `.md`

Créez un nouveau fichier dans `content/blog/` avec un nom descriptif :

```
content/blog/mon-nouvel-article.md
```

### 2. Ajouter les métadonnées (Front Matter)

Commencez votre fichier avec les métadonnées entre `---` :

```markdown
---
id: mon-nouvel-article
title: "Le titre de mon article"
desc: "Une courte description qui apparaîtra dans la liste des articles"
tag: "Guide Complet"
postby: "L'équipe Setup Télétravail"
date: "8 janvier 2026"
image: "/blog/mon-image.jpg"
imageDet: "/blog/mon-image-detail.jpg"
---
```

#### Champs obligatoires :

- **id** : Identifiant unique (utilisé dans l'URL)
- **title** : Titre de l'article
- **desc** : Description courte pour la prévisualisation
- **tag** : Catégorie (ex: "Guide", "Tutoriel", "Actualité")
- **postby** : Nom de l'auteur
- **date** : Date de publication
- **image** : Image de prévisualisation (pour la liste)
- **imageDet** : Image détaillée (pour la page de l'article)

### 3. Écrire le contenu

Après les métadonnées, écrivez votre contenu en Markdown :

```markdown
# Mon Premier Article

## Introduction

Voici le début de mon article...

### Section 1

Contenu de la section...

- Point 1
- Point 2
- Point 3

**Texte en gras** et *texte en italique*.

> Citation importante

[Un lien](https://example.com)
```

### 4. Générer le fichier JSON

Une fois votre article terminé, lancez la commande :

```bash
npm run generate:blog
```

Cette commande va :
- ✅ Lire tous les fichiers `.md` dans `content/blog/`
- ✅ Extraire les métadonnées et le contenu
- ✅ Générer le fichier `JsonData/JsonBlog/BlogData.json`
- ✅ Afficher un résumé des articles créés

### 5. Vérifier le résultat

Votre site Next.js va automatiquement recharger et afficher les nouveaux articles !

## 📋 Exemple complet

Voir le fichier `exemple-article.md` pour un exemple complet avec tous les types de formatage Markdown.

## 🎨 Formatage Markdown disponible

### Titres
```markdown
# Titre H1
## Titre H2
### Titre H3
#### Titre H4
```

### Texte
```markdown
**Gras**
*Italique*
***Gras et italique***
```

### Listes
```markdown
- Liste à puces
- Élément 2

1. Liste numérotée
2. Élément 2
```

### Citations
```markdown
> Ceci est une citation
```

### Liens
```markdown
[Texte du lien](https://example.com)
```

### Code
```markdown
`code inline`

\`\`\`javascript
// Bloc de code
const variable = "valeur";
\`\`\`
```

## 🖼️ Gestion des images

1. **Placez vos images** dans le dossier `public/blog/`
2. **Référencez-les** dans le front matter avec `/blog/nom-image.jpg`
3. **Dimensions recommandées** : 6000x4000 pixels (ratio 3:2)

### Redimensionner une image :
```bash
sips -z 4000 6000 public/blog/mon-image.jpg
```

## 🔄 Workflow complet

1. 📝 Écrire l'article en Markdown dans `content/blog/`
2. 🖼️ Ajouter les images dans `public/blog/`
3. ⚙️ Lancer `npm run generate:blog`
4. ✅ Vérifier sur le site local (http://localhost:3000/blog)

## 🚀 Commandes utiles

```bash
# Générer le JSON depuis les fichiers Markdown
npm run generate:blog

# Démarrer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## ⚠️ Important

- Le fichier `JsonData/JsonBlog/BlogData.json` est **généré automatiquement**
- Ne le modifiez pas manuellement, vos modifications seront écrasées !
- Travaillez toujours sur les fichiers `.md` dans `content/blog/`

## 💡 Conseils

- **Nommage des fichiers** : Utilisez des noms clairs et en kebab-case
  - ✅ `guide-ecran-teletravail.md`
  - ❌ `Guide Écran Télétravail.md`

- **ID unique** : Assurez-vous que chaque `id` est unique

- **Images optimisées** : Compressez vos images avant de les ajouter

- **Prévisualisation** : Testez toujours localement avant de publier

## 🆘 Dépannage

### "Aucun fichier Markdown trouvé"
→ Vérifiez que vos fichiers sont bien dans `content/blog/` et ont l'extension `.md`

### "Champs manquants"
→ Vérifiez que tous les champs obligatoires sont présents dans le front matter

### "L'article ne s'affiche pas"
→ Vérifiez l'`id` dans le front matter et relancez `npm run generate:blog`

---

**Bon travail d'écriture ! ✍️**
