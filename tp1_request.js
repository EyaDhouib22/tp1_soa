// tp1_request.js
require('dotenv').config(); // Charger les variables d'environnement
const request = require('request');

const API_KEY = process.env.API_KEY;
const city = "Sousse";
const units = "metric"; // Pour obtenir la température en Celsius
const lang = "fr";      // Pour obtenir la description en français

// Construction de l'URL de base
// Note: l'exemple du TP concatène API_KEY et q directement.
// Ici, nous ajoutons aussi units et lang.
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=${units}&lang=${lang}`;

function getWeatherDataRequest(callback) {
    request(BASE_URL, function (error, response, body) {
        if (error) {
            callback(error, null);
        } else if (response.statusCode !== 200) {
            // Gérer les erreurs HTTP (ex: ville non trouvée, clé API invalide)
            callback(new Error(`Erreur HTTP ${response.statusCode}: ${body}`), null);
        }
        else {
            try {
                const weatherData = JSON.parse(body);
                callback(null, weatherData);
            } catch (parseError) {
                callback(parseError, null);
            }
        }
    });
}

// Appel de la fonction et affichage des données
getWeatherDataRequest((error, data) => {
    if (error) {
        console.error("Erreur lors de la récupération des données météo (request):", error.message);
        return;
    }

    // Analyse et affichage des données demandées
    if (data && data.weather && data.weather.length > 0 && data.main) {
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;

        console.log(`Météo actuelle à ${city} (via request):`);
        console.log(`  Description: ${description}`);
        console.log(`  Température: ${temperature}°C`);
        console.log(`  Humidité: ${humidity}%`);
    } else {
        console.error("Données météo reçues invalides ou incomplètes:", data);
    }
});