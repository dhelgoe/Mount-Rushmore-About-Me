const headerImage = document.getElementById('header-image');
const gridContainer = document.getElementById('grid-container');

headerImage.addEventListener('click', () => {
    gridContainer.classList.remove('hidden');
    // Create and append your card elements here
});

function createCard(title, items) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-face', 'card-front');
    cardFront.textContent = title;

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-face', 'card-back');

    // Populate the back of the card with items
    for (const item of items) {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        cardBack.appendChild(itemElement);
    }

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    gridContainer.appendChild(card);
}

const scrollButton = document.querySelector('.scroll-button');

scrollButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const cardsSection = document.getElementById('grid-container');
    cardsSection.scrollIntoView({ behavior: 'smooth' });
});


createCard('TV Shows', ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4']);
createCard('Sports', ['Book 1', 'Book 2', 'Book 3', 'Book 4']);
createCard('Cocktails', ['Game 1', 'Game 2', 'Game 3', 'Game 4']);
createCard('States', ['Game 1', 'Game 2', 'Game 3', 'Game 4']);
createCard('Games', ['Game 1', 'Game 2', 'Game 3', 'Game 4']);
createCard('Foods', ['Game 1', 'Game 2', 'Game 3', 'Game 4']);
createCard('Places to be', ['Game 1', 'Game 2', 'Game 3', 'Game 4']);
createCard('Condiments', ['Game 1', 'Game 2', 'Game 3', 'Game 4']);
createCard('Games', ['Game 1', 'Game 2', 'Game 3', 'Game 4']);
// Repeat for other categories
