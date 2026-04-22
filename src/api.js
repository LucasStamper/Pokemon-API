// Fonction pour récupérer la liste brute
async function getPokemonList(limit, offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data.results; 
}

// Fonction pour récupérer les détails (images, stats, types)
async function getPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Récupère la liste de tous les types disponibles dans PokeAPI
async function getPokemonTypes() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const data = await response.json();
        return data.results; // Retourne [{name: "fire", url: "..."}, ...]
    } catch (error) {
        console.error("Erreur types :", error);
    }
}