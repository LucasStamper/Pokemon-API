// src/app.js

let offset = 0;
const limit = 20;

async function init() {
    // 1. Charger les filtres
    const types = await getPokemonTypes();
    populateTypeFilter(types);

    // 2. Charger les premiers Pokémon
    await startProject();

    // 3. Activer les écouteurs
    setupEventListeners();
}

async function startProject() {
    const list = await getPokemonList(limit, offset);

    for (const item of list) {
        const details = await getPokemonData(item.url);
        const card = createCard(details); 

        card.addEventListener('click', () => {
            const modal = createDetailedView(details);
            document.body.appendChild(modal);
        });

        addCardToGrid(card);
    }
    
    // On applique le filtre sur les nouveaux arrivants
    appliquerFiltrage();
}

function appliquerFiltrage() {
    const selectedType = document.getElementById('type-filter').value;
    const searchName = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.pokemon-card');

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const badges = Array.from(card.querySelectorAll('.badge'))
                          .map(b => b.textContent.toLowerCase());

        const matchType = (selectedType === "all" || badges.includes(selectedType));
        const matchName = name.includes(searchName);

        // La carte s'affiche uniquement si elle valide le NOM ET le TYPE
        card.style.display = (matchType && matchName) ? "block" : "none";
    });
}

function setupEventListeners() {
    // Écouteur pour le type
    document.getElementById('type-filter').addEventListener('change', appliquerFiltrage);

    // Écouteur pour la recherche (temps réel)
    document.getElementById('search-input').addEventListener('input', appliquerFiltrage);

    // Écouteur charger plus
    document.getElementById('load-more').addEventListener('click', () => {
        offset += limit;
        startProject();
    });
}

init();