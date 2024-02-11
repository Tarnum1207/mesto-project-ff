import {initialCards,createCard,toggleLike,deleteCard} from "./cards";
import {openImagePopup,openPopup,closePopup} from "./modal";

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

// Открытие и закрытие модального окна
// @todo: DOM узлы
document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.querySelector('.profile__edit-button');
    const addButton = document.querySelector('.profile__add-button');
    const image = document.querySelector('.profile__image');
    const editPopup = document.querySelector('.popup_type_edit');
    const newCardPopup = document.querySelector('.popup_type_new-card');
    const imagePopup = document.querySelector('.popup_type_image');
    const closeButtons = document.querySelectorAll('.popup__close');
    const formEdit = document.querySelector('.popup_type_edit .popup__form');
    const formNewCard = document.querySelector('.popup_type_new-card .popup__form');
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    const placesList = document.querySelector('.places__list');

    // Обработчик события отправки формы редактирования профиля
    formEdit.addEventListener('submit', function (evt) {
        evt.preventDefault(); // Отменяем стандартное действие формы

    // Получаем значения из полей формы
        const newName = formEdit.querySelector('.popup__input_type_name').value;
        const newDescription = formEdit.querySelector('.popup__input_type_description').value;

        // Вставляем новые значения в профиль
        profileTitle.textContent = newName;
        profileDescription.textContent = newDescription;

        // Закрываем модальное окно
        closePopup(editPopup);

        // Очищаем поля формы
        formEdit.reset();
    });

    // Обработчик отправки формы для создания новой карточки
    function handleNewCardFormSubmit(evt) {
        evt.preventDefault(); // Отменяем стандартное действие формы

        // Получаем значения из полей формы
        const newName = formNewCard.elements['place-name'].value;
        const newLink = formNewCard.elements['link'].value;

        // Создаем новую карточку с правильными данными
        const newCard = createCard({name: newName, link: newLink}, deleteCard, toggleLike, openImagePopup);

        // Добавляем новую карточку в начало контейнера
        placesList.prepend(newCard);

        // Закрываем модальное окно
        closePopup(newCardPopup);

        // Очищаем поля формы
        formNewCard.reset();
    }

    formNewCard.addEventListener('submit', handleNewCardFormSubmit);

    // Обработчик события нажатия клавиши Esc
    function handleEscPress(event) {
        if (event.key === 'Escape') {
            closePopup(editPopup);
            closePopup(newCardPopup);
            closePopup(imagePopup);
        }
    }

    document.addEventListener('keydown', handleEscPress);

    // Открытие/закрытие модальных окон при клике на кнопки и крестик
    editButton.addEventListener('click', function () {
        openPopup(editPopup);
    });

    addButton.addEventListener('click', function () {
        openPopup(newCardPopup);
    });

    image.addEventListener('click', function () {
        openPopup(imagePopup);
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const popup = button.closest('.popup');
            closePopup(popup);
        });
    });

    // Закрытие модального окна при клике вне его области
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup')) {
            closePopup(event.target);
        }
    });

});
