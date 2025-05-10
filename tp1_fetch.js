// tp1_fetch.js
require('dotenv').config();

// Si vous utilisez une version de Node < 18 et avez installé node-fetch:
// const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const city = "Sousse";
const units = "metric";
const lang = "fr";

const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=${units}&lang=${lang}`;

async function getWeatherDataFetch() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            // Si la réponse n'est pas OK (ex: 404, 401), lire le corps pour plus de détails
            const errorBody = await response.text();
            throw new Error(`Erreur HTTP ${response.status}: ${errorBody}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données météo (fetch):", error.message);
        throw error; // Re-lancer pour que l'appelant puisse gérer
    }
}

// Appel de la fonction et affichage des données
getWeatherDataFetch()
    .then(data => {
        if (data && data.weather && data.weather.length > 0 && data.main) {
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;

            console.log(`\nMétéo actuelle à ${city} (via fetch):`);
            console.log(`  Description: ${description}`);
            console.log(`  Température: ${temperature}°C`);
            console.log(`  Humidité: ${humidity}%`);
        } else {
            console.error("Données météo (fetch) reçues invalides ou incomplètes:", data);
        }
    })
    .catch(error => {
        // L'erreur est déjà logguée dans la fonction, ici on pourrait faire un traitement supplémentaire si besoin
        // console.error("Erreur finale (fetch):", error);
    });