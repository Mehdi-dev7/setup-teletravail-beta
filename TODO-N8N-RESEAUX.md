# Plan N8N + Réseaux Sociaux — Setup Télétravail & FacturNow

> Date : 23 mars 2026
> Mise à jour : 24 mars 2026
> Statut : En cours

---

## PHASE 1 : Infrastructure N8N (VPS)

### 1.1 Compte Oracle Cloud Free Tier — Paris
- [x] Compte créé sur cloud.oracle.com
- [x] Région : eu-paris-1 (France Central)
- [x] Clés API configurées dans ~/.oci/config
- [x] SDK Python OCI installé
- [x] Script de création automatique lancé (~/.oracle-n8n-script/create_instance.py)
- [x] VCN + Subnet public créés automatiquement
- [ ] **Instance VM en attente de slot** — script tourne en boucle (toutes les 5 min)
  - Shape : VM.Standard.A1.Flex — 4 OCPUs / 24 Go RAM / 100 Go boot
  - Image : Ubuntu 22.04 aarch64

> ⚠️ Paris AD-1 est souvent plein (Out of host capacity)
> Le script relance automatiquement jusqu'au succès

### Plan B si Oracle ne trouve pas de slot (3-4 jours max)
1. Supprimer le compte Oracle Paris
2. Recréer un compte Oracle avec alias Gmail + région Frankfurt
   - Nécessite une CB différente (Revolut ou autre)
3. Si toujours impossible → **Hetzner VPS à ~4€/mois** (meilleure alternative)

### 1.2 Installer le VPS (une fois l'instance créée)
- [ ] Se connecter en SSH avec la clé privée téléchargée
- [ ] Installer Docker + Docker Compose
- [ ] Déployer N8N
- [ ] Configurer sous-domaine n8n.setup-teletravail.fr
- [ ] Sécuriser avec HTTPS (Let's Encrypt)

---

## PHASE 2 : Comptes réseaux sociaux ✅

### Stratégie multi-comptes
| Réseau | Stratégie |
|--------|-----------|
| Pinterest | 1 compte pro par site (algo par niche) |
| Reddit | 1 compte perso pour tous les projets |
| LinkedIn | 1 profil perso pour tous les projets |
| Facebook | 1 Page par site |
| Instagram | 1 compte créateur par site |

> Astuce : utiliser les alias Gmail (mehdi+insta.setup@gmail.com) pour créer plusieurs comptes sans multiplier les boîtes mail

### Pour Setup Télétravail
| Plateforme | Action | Statut |
|------------|--------|--------|
| **Pinterest** | Compte Business créé + tableau créé + site revendiqué + app API active | ✅ |
| **Reddit** | Compte créé + r/homeoffice, r/desksetup, r/remotework, r/france rejoints | ✅ |
| **LinkedIn** | Profil perso suffit pour commencer | [ ] |
| **Facebook** | Page "Setup Télétravail" créée | ✅ |
| **Instagram** | Compte créateur `setup.teletravail` créé + relié à la Page Facebook | ✅ |

### Credentials Pinterest API
- **App** : Setup-Teletravail Publisher
- **App ID** : 1555914
- **Token d'accès** : généré et sauvegardé (Trial access)
- **Clé secrète** : sauvegardée
- **Scopes** : pins:read, boards:read, user_accounts:read

> Pour publier (pins:write/boards:write) → accès Standard requis
> Demande de mise à niveau en attente ou à faire via N8N OAuth

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
| 4 | **Reddit** | Trafic immédiat si bien fait (ne pas spammer) |
| 5 | **Facebook** | Volume communauté FR |
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
- N8N peut servir pour TOUS les projets futurs (workflows séparés par projet)
