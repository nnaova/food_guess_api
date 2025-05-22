# API Food Guess

API pour l'application mobile Food Guess permettant de faire des paris sur les aliments distribués lors des collectes alimentaires.

## Installation

```bash
npm install
```

## Démarrage du serveur de développement

```bash
npm run start
```

## Déploiement

```bash
npm run deploy
```

## Endpoints API

### GET /api

Informations générales sur l'API.

**Réponse** :

```json
{
  "message": "API Food Guess",
  "version": "1.0.0",
  "description": "API pour l'application Food Guess qui permet de récupérer les informations sur les aliments disponibles lors des collectes alimentaires."
}
```

### GET /api/foods

Récupère la liste complète des aliments disponibles pour les collectes.

**Réponse** :

```json
{
  "betItems": [
    {
      "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      "name": "Riz",
      "description": "Riz blanc en sachet de 1kg",
      "isScoring": false,
      "points": 1,
      "imageUrl": "/images/foods/rice.jpg"
    }
    // ... autres aliments
  ],
  "exportDate": "2025-05-22T16:18:23.023589"
}
```

### GET /api/foods/:id

Récupère les informations d'un aliment spécifique par son identifiant.

**Paramètres** :

- `id` : Identifiant unique (UUID) de l'aliment

**Réponse** :

```json
{
  "betItems": [
    {
      "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      "name": "Riz",
      "description": "Riz blanc en sachet de 1kg",
      "isScoring": false,
      "points": 1,
      "imageUrl": "/images/foods/rice.jpg"
    }
  ],
  "exportDate": "2025-05-22T16:18:23.023589"
}
```

## Structure du projet

- `/api` : Contient les fichiers source de l'API
  - `/controllers` : Gestionnaires de routes
  - `/data` : Données statiques de l'API
  - `/routes` : Définition des routes
  - `/types` : Types TypeScript pour le projet
- `/public` : Fichiers statiques (images, etc.)
