// bonus_apis/openlibrary_example.js
const axios = require('axios');

async function searchBookByISBN(isbn) {
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
    try {
        const response = await axios.get(url);
        console.log(`\nInformations pour ISBN ${isbn} (Open Library):`);
        if (response.data && response.data[`ISBN:${isbn}`]) {
            console.log(JSON.stringify(response.data[`ISBN:${isbn}`], null, 2));
        } else {
            console.log("Livre non trouvé ou données non disponibles.");
        }
    } catch (error) {
        console.error("Erreur avec Open Library API:", error.message);
    }
}

// Exemple d'utilisation avec un ISBN connu (Le Petit Prince)
searchBookByISBN("9782070612758");
searchBookByISBN("0385472579"); // The Da Vinci Code