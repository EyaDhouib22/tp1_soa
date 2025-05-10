// bonus_apis/nasa_example.js
require('dotenv').config(); // Si vous stockez votre clé NASA dans .env (NASA_API_KEY)
const axios = require('axios');

// Utilisez votre clé personnelle ou DEMO_KEY pour des tests
const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';

async function getApod() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
    try {
        const response = await axios.get(url);
        console.log("\nNASA - Astronomy Picture of the Day (APOD):");
        console.log(`  Titre: ${response.data.title}`);
        console.log(`  Date: ${response.data.date}`);
        console.log(`  Explanation: ${response.data.explanation.substring(0, 150)}...`);
        console.log(`  Image URL: ${response.data.url}`);
    } catch (error) {
        console.error("Erreur avec NASA APOD API:", error.message);
    }
}

getApod();