import {deleteCardLike,setCardLike,updateLikeCardUser} from "./api";
// @todo: Темплейт карточки
const cardTemplate = document.getElementById('card-template');

// Функция создания карточки
export function createCard(cardData, onDelete, onLike, onImageClick, userId) {
    const cardClone = cardTemplate.content.cloneNode(true).querySelector('.places__item');
    const cardTitle = cardClone.querySelector('.card__title');
    const cardImage = cardClone.querySelector('.card__image');
    const deleteButton = cardClone.querySelector('.card__delete-button');
    const likeButton = cardClone.querySelector('.card__like-button');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    // Добавляем обработчики событий для кнопок удаления и лайка
    likeButton.addEventListener('click', () => {
        likeCard(likeButton, cardData, cardClone, userId);
        onLike(likeButton);
    });


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

//Возможность лайкать
export function likeCard(likeButton, cardData, cardClone) {
    const numberLike = cardClone.querySelector('.card__likes-counter');

    if (likeButton.classList.contains('card__like-button_is-active')) {
        // Если лайк уже был поставлен, отправляем запрос на снятие лайка
        deleteCardLike(cardData, numberLike)
            .then(() => {
                // Успешно удален лайк, обновляем UI
                likeButton.classList.remove('card__like-button_is-active');
                updateLikeCardUser(numberLike);
            })
            .catch(error => {
                // Обработка ошибки при снятии лайка
                console.error('Ошибка при снятии лайка:', error);
            });
    } else {
        // Если лайк не был поставлен, отправляем запрос на установку лайка
        setCardLike(cardData, numberLike)
            .then(() => {
                // Успешно поставлен лайк, обновляем UI
                likeButton.classList.add('card__like-button_is-active');
                updateLikeCardUser(numberLike);
            })
            .catch(error => {
                // Обработка ошибки при постановке лайка
                console.error('Ошибка при постановке лайка:', error);
            });
    }
}




