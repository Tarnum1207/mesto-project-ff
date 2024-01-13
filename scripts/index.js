// @todo: Темплейт карточки

const cardTemplate = document.getElementById('card-template');

// @todo: DOM узлы

// @todo: Функция создания карточки

function createCard(cardData) {

    const cardClone = cardTemplate.content.cloneNode(true).querySelector('.places__item');
    const cardTitle = cardClone.querySelector('.card__title');
    const cardImage = cardClone.querySelector('.card__image');
    const deleteButton = cardClone.querySelector('.card__delete-button');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;

    return cardClone;
}

// @todo: Функция удаления карточки

function removeCard(event) {
    const cardToDelete = event.target.closest('.places__item');

    if (cardToDelete) {
        cardToDelete.remove();
    }
}

// Добавление обработчика события для каждой кнопки удаления
function addDeleteButtonHandlers() {
    const deleteButtons = document.querySelectorAll('.card__delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', removeCard);
    });
}

// @todo: Вывести карточки на страницу

function addCardsToPage() {
    const placesList = document.querySelector('.places__list');

    initialCards.forEach(cardData => {
        const cardElement = createCard(cardData);
        placesList.appendChild(cardElement);
    });

    addDeleteButtonHandlers();
}

addCardsToPage();
