# Plan N8N + Réseaux Sociaux — Setup Télétravail & FacturNow

> Date : 23 mars 2026
> Statut : En attente — à lancer dès que possible

---

## PHASE 1 : Infrastructure N8N (VPS Oracle Cloud)

### 1.1 Créer le compte Oracle Cloud Free Tier
- [ ] Aller sur cloud.oracle.com > Sign Up
- [ ] Choisir la région France Sud (Marseille) ou Germany (Frankfurt)
- [ ] CB requise (pas débitée, juste vérification)
- [ ] Sélectionner le Free Tier (Always Free)
- Specs gratuites : 4 vCPU, 24 Go RAM (ARM Ampere) — à vie

### 1.2 Installer le VPS (avec Claude)
- [ ] Créer une instance VM Ubuntu (ARM Ampere)
- [ ] Installer Docker + Docker Compose
- [ ] Déployer N8N
- [ ] Configurer un sous-domaine (ex: n8n.setup-teletravail.fr)
- [ ] Sécuriser avec HTTPS (Let's Encrypt)

---

## PHASE 2 : Préparer les comptes réseaux sociaux

### Pour Setup Télétravail
| Plateforme | Action | Statut |
|------------|--------|--------|
| **Pinterest** | Créer/convertir en compte Business sur business.pinterest.com + créer tableau "Setup Télétravail" / "Home Office" | [ ] |
| **Reddit** | Créer un compte + rejoindre r/homeoffice, r/desksetup, r/teleworking, r/france | [ ] |
| **LinkedIn** | Profil perso suffit pour commencer | [ ] |
| **Facebook** | Vérifier si Page pro existe, sinon créer "Setup Télétravail" | [ ] |
| **Instagram** | Vérifier si compte pro/créateur + relier à la Page Facebook | [ ] |

### Pour FacturNow (à définir plus tard)
- Réseaux probablement différents (LinkedIn, Twitter/X, IndieHackers, Product Hunt...)
- Même infrastructure N8N, workflows séparés

---

## PHASE 3 : Créer les workflows N8N

### Workflow Setup Télétravail
**Déclencheur** : nouvel article publié (webhook Vercel ou polling sitemap)

**Actions automatiques :**
- [ ] Pinterest : créer une épingle avec image + lien article
- [ ] Reddit : poster dans les subs pertinents (attention au spam)
- [ ] LinkedIn : publier un post avec résumé + lien en commentaire
- [ ] Facebook : publier sur la Page
- [ ] Instagram : publier un visuel (via l'API Meta)

### Workflow FacturNow (à faire après)
- Même logique, réseaux différents
- Workflows séparés dans N8N

---

## PHASE 4 : Publier les 3 articles existants

### Articles Setup Télétravail à poster sur tous les réseaux
1. [ ] "Comment Aménager son Bureau de Télétravail : Le Guide Complet en 2026" (NOUVEAU)
2. [ ] "Le Guide Complet pour Choisir son Écran de Télétravail en 2025"
3. [ ] "Le Guide Ultime du Fauteuil Ergonomique pour Télétravail en 2025"

> Pour chaque article : créer les visuels adaptés à chaque plateforme
> Pinterest = vertical (1000x1500), Instagram = carré (1080x1080), LinkedIn/Facebook = horizontal (1200x630)

---

## Stratégie de publication — Rappel des priorités

| Priorité | Canal | Pourquoi |
|----------|-------|----------|
| 1 | **Pinterest** | Niche très visuelle, trafic passif long terme |
| 2 | **SEO / Blog** | Déjà en place, continuer 1 article/semaine |
| 3 | **LinkedIn** | Cible pro en remote |
| 4 | **Reddit** | Trafic immédiat si bien fait |
| 5 | **Facebook Groups** | Volume communauté FR |
| 6 | **Instagram/TikTok** | Pour scaler plus tard |

---

## PHASE 5 : Liens d'affiliation Fnac & Darty

> Nouveaux partenariats obtenus le 23 mars 2026

- [ ] Récupérer tous les liens d'affiliation Fnac pour chaque produit référencé chez eux
- [ ] Récupérer tous les liens d'affiliation Darty pour chaque produit référencé chez eux
- [ ] Ajouter les liens Fnac dans les fiches produits (JSON data)
- [ ] Ajouter les liens Darty dans les fiches produits (JSON data)
- [ ] Vérifier que les boutons/liens s'affichent correctement sur chaque fiche produit
- [ ] Mettre à jour la page /affiliation si nécessaire

> Rappel : les liens Cdiscount étaient en attente aussi — vérifier leur statut

---

## Notes
- Reddit : ne pas spammer, poster comme "ressource utile" pas comme pub
- LinkedIn : post texte + lien en commentaire (meilleur reach)
- Pinterest : 5-10 pins/jour avec mots-clés FR
- Prévoir aussi une newsletter à terme (collecte emails sur le site)
