# TP1: Introduction aux APIs RESTful

**Matière:** SoA et Microservices
**Enseignant:** Dr. Salah Gontara
**Classe:** 4 Info
**A.U.:** 2024/2025

## OBJECTIF(S)

*   Compréhension des principes de l'API RESTful
*   Utilisation du format de données JSON

## OUTILS UTILISÉS

*   NodeJS
*   API OpenWeatherMap
*   Bibliothèques HTTP: `request`, `node-fetch` (pour `fetch` côté serveur si Node < v18), `axios`

## Prérequis

*   Node.js et npm installés sur votre machine.
*   Un compte OpenWeatherMap et une clé API (API Key).
*   Un éditeur de code (VS Code, Sublime Text, etc.).
*   Un terminal ou une invite de commandes.
*   Git pour la gestion de version.

## Étapes de Réalisation

### Étape 0: Configuration du Projet

**Créez un fichier `.env` à la racine du projet et ajoutez votre clé API OpenWeatherMap :**
    ``` API_KEY=VOTRE_CLE_API_OPENWEATHERMAP
    
### Étapes 1 à 5: Intégration de l'API OpenWeatherMap avec la librairie `request`
Le script `tp1_request.js` implémente la récupération des données météo pour Sousse, en Celsius et en français, en utilisant la bibliothèque `request`.
**Exécution :**
node tp1_request.js

Résultat Attendu  :
![alt text](tp1_soa/screenshots/TP1.1.png)

### Étape 6.1: Refaire avec fetch
Le script tp1_fetch.js réalise la même tâche en utilisant l'API fetch
Exécution :
node tp1_fetch.js

Résultat Attendu  :
![alt text](./screenshots/TP1.2.png)

### Étape 6.2: Refaire avec axios
Le script tp1_axios.js réalise la même tâche en utilisant la bibliothèque axios
Exécution :
node tp1_axios.js

Résultat Attendu:
![alt text](./screenshots/TP1.3.png)

### Étape 7: Tester d'autres APIs RESTful (Bonus)
**Open Library API**
Exécution :
node bonus_apis/openlibrary_example.js

Résultat Attendu  :
![alt text](./screenshots/TP1.4.png)

**NASA API (APOD)** 
Exécution :
node bonus_apis/nasa_example.js

Résultat Attendu :
![alt text](./screenshots/TP1.5.png)

**RandomUser API**
Exécution :
node bonus_apis/randomuser_example.js
Résultat Attendu  :
![alt text](./screenshots/TP1.6.png)

# Conclusion
Ce TP a permis de mettre en pratique la consommation d'APIs RESTful en utilisant différentes approches en Node.js (request, fetch, axios). Il a également couvert la récupération de données spécifiques, la gestion des paramètres d'API (comme les unités et la langue), et l'analyse des réponses JSON. Les exemples bonus ont étendu cette pratique à d'autres APIs publiques.
