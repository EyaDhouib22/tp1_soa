// bonus_apis/randomuser_example.js
const axios = require('axios');

async function getRandomUser() {
    const url = `https://randomuser.me/api/`;
    try {
        const response = await axios.get(url);
        const user = response.data.results[0];
        console.log("\nUtilisateur Aléatoire (RandomUser API):");
        console.log(`  Nom: ${user.name.title} ${user.name.first} ${user.name.last}`);
        console.log(`  Email: ${user.email}`);
        console.log(`  Nationalité: ${user.nat}`);
        console.log(`  Photo: ${user.picture.large}`);
    } catch (error) {
        console.error("Erreur avec RandomUser API:", error.message);
    }
}

getRandomUser();