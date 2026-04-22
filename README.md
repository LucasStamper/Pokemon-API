# 📱 Pokédex Web App - PokeAPI Project

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![JS](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![HTML/CSS](https://img.shields.io/badge/Layout-Modern_CSS-orange.svg)

## 📝 Présentation du projet
Ce projet est une application web interactive permettant de consulter les données officielles de l'univers Pokémon en temps réel. Il a été réalisé dans le cadre de ma formation **BTS SIO (option SLAM)** pour démontrer ma capacité à consommer des API REST et à structurer une application de manière modulaire.

L'application permet de naviguer à travers plus de 1000 Pokémon, de filtrer les résultats par type ou par nom, et de consulter les statistiques détaillées via une interface moderne et responsive.

---

## 🚀 Fonctionnalités principales
* **Consommation d'API :** Récupération dynamique des données depuis la [PokeAPI](https://pokeapi.co/).
* **Lazy Loading :** Système de pagination avec bouton "Charger plus" pour optimiser les performances.
* **Filtrage Avancé :** Recherche par nom et filtrage par type cumulables.
* **Vue Détaillée :** Fenêtre modale affichant les statistiques de base (HP, Attaque, etc.) sous forme de barres de progression colorées.
* **Design Moderne :** Interface utilisant le *Glassmorphism*, des éléments *Sticky/Fixed* et un design responsive.

---

## 🛠️ Architecture Technique
Pour ce projet, j'ai choisi de suivre une architecture **modulaire** (séparation des responsabilités) afin de faciliter la maintenance :

* **`api.js`** : Gère exclusivement les appels réseaux (`fetch`) et la communication avec les endpoints de la PokeAPI.
* **`ui.js`** : Contient toute la logique de création des éléments du DOM (cartes, badges, modales).
* **`app.js`** : Le contrôleur principal qui synchronise les données et gère les événements utilisateurs (clics, inputs).

---

## 💡 Concepts SLAM mis en œuvre
Au cours de ce développement, j'ai approfondi plusieurs notions clés :
1.  **Asynchronisme :** Utilisation intensive de `async/await` pour gérer les flux de données sans bloquer l'UI.
2.  **Manipulation du DOM :** Création dynamique d'éléments HTML complexes.
3.  **Algorithmique de Filtrage :** Implémentation d'une logique de tri croisé (Nom + Type) sur une liste d'objets.
4.  **Optimisation UX :** Mise en place d'un système de "sticky header" pour améliorer la navigation.

---

## 📸 Aperçu de l'interface
* **Accueil :** Grille de cartes Pokémon avec badges colorés.
* **Filtre :** Barre de recherche réactive.
* **Détails :** Modale avec statistiques visuelles.

---

## ⚙️ Installation
1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/votre-pseudo/pokedex-api.git](https://github.com/votre-pseudo/pokedex-api.git)
