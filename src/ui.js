// src/ui.js

function createCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const name = pokemon.name.toUpperCase();
    const sprite = pokemon.sprites.front_default;
    const id = pokemon.id;
    
    // On génère le HTML des types pour que le filtre puisse les lire
    const typesHtml = pokemon.types.map(t => 
        `<span class="badge ${t.type.name}">${t.type.name}</span>`
    ).join('');

    card.innerHTML = `
        <span class="pokemon-id">#${id}</span>
        <img src="${sprite}" alt="${name}" class="pokemon-img">
        <h3>${name}</h3>
        <div class="card-types">${typesHtml}</div>
    `;

    return card;
}

function addCardToGrid(cardElement) {
    const grid = document.getElementById('pokedex-container');
    grid.appendChild(cardElement);
}

function populateTypeFilter(types) {
    const select = document.getElementById('type-filter');
    types.forEach(type => {
        if (type.name !== "shadow" && type.name !== "unknown") {
            const option = document.createElement('option');
            option.value = type.name;
            option.textContent = type.name.charAt(0).toUpperCase() + type.name.slice(1);
            select.appendChild(option);
        }
    });
}

function createDetailedView(pokemon) {
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    
    const statsHtml = pokemon.stats.map(s => `
        <div class="stat-line">
            <span class="stat-name">${s.stat.name.toUpperCase()}</span>
            <div class="stat-bar-container">
                <div class="stat-bar" style="width: ${(s.base_stat / 255) * 100}%"></div>
            </div>
            <span class="stat-value">${s.base_stat}</span>
        </div>
    `).join('');

    overlay.innerHTML = `
        <div class="modal-content">
            <button id="close-modal">X</button>
            <h2>${pokemon.name.toUpperCase()}</h2>
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
            <div class="stats-container">${statsHtml}</div>
        </div>
    `;

    overlay.addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay' || e.target.id === 'close-modal') {
            overlay.remove();
        }
    });

    return overlay;
}