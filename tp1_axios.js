// tp1_axios.js
require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const city = "Sousse";
const units = "metric";
const lang = "fr";

const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=${units}&lang=${lang}`;

async function getWeatherDataAxios() {
    try {
        const response = await axios.get(URL);
        return response.data; // axios parse automatiquement le JSON
    } catch (error) {
        // Axios encapsule l'erreur HTTP dans error.response
        if (error.response) {
            console.error(`Erreur HTTP ${error.response.status} (axios): ${JSON.stringify(error.response.data)}`);
        } else if (error.request) {
            // La requête a été faite mais aucune réponse n'a été reçue
            console.error("Erreur de requête (axios), pas de réponse:", error.request);
        } else {
            // Quelque chose s'est mal passé lors de la configuration de la requête
            console.error("Erreur de configuration (axios):", error.message);
        }
        throw error; // Re-lancer pour que l'appelant puisse gérer
    }
}

// Appel de la fonction et affichage des données
getWeatherDataAxios()
    .then(data => {
        if (data && data.weather && data.weather.length > 0 && data.main) {
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;

            console.log(`\nMétéo actuelle à ${city} (via axios):`);
            console.log(`  Description: ${description}`);
            console.log(`  Température: ${temperature}°C`);
            console.log(`  Humidité: ${humidity}%`);
        } else {
            console.error("Données météo (axios) reçues invalides ou incomplètes:", data);
        }
    })
    .catch(error => {
        // L'erreur est déjà logguée, on peut choisir de ne rien faire de plus ici
    });