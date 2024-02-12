import {openImagePopup} from "./modal";
 const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

// @todo: Вывести карточки на страницу

export function addCardsToPage() {
    const cardsContainer = document.querySelector('.places__list');

    initialCards.forEach(cardData => {
        const cardElement = createCard(cardData, deleteCard, toggleLike, openImagePopup);
        cardsContainer.appendChild(cardElement);

        // Найти изображение внутри карточки и добавить обработчик события клика
        const cardImage = cardElement.querySelector('.card__image');
        cardImage.addEventListener('click', function () {
            openImagePopup(cardData.link, cardData.name);
        });
    });
}

// @todo: Темплейт карточки
const cardTemplate = document.getElementById('card-template');

// @todo: Функция создания карточки
export function createCard(cardData, onDelete, onLike, onImageClick) {
    const cardClone = cardTemplate.content.cloneNode(true).querySelector('.places__item');
    const cardTitle = cardClone.querySelector('.card__title');
    const cardImage = cardClone.querySelector('.card__image');
    const deleteButton = cardClone.querySelector('.card__delete-button');
    const likeButton = cardClone.querySelector('.card__like-button');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    // Добавляем обработчики событий для кнопок удаления и лайка
    deleteButton.addEventListener('click', () => onDelete(cardClone));
    likeButton.addEventListener('click', () => onLike(likeButton));

    // Отладочный вывод для проверки содержимого cardImage
    console.log(cardImage);

    // Добавляем обработчик события для изображения (картинки)
    cardImage.addEventListener('click', () => onImageClick(cardData.link, cardData.name));

    return cardClone;
}

// Функция обработки события лайка
export function toggleLike(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

// @todo: Функция удаления карточки
export function deleteCard(cardElement) {
    cardElement.remove();
}
