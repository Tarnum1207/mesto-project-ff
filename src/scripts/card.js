import {deleteCardLikeApi, showLikesApi, setCardLikeApi, deleteCardApi, getCards, getUser, editProfileApi, addNewCardApi} from "./api";
import {openImagePopup} from "./index";
// @todo: Темплейт карточки
const cardTemplate = document.getElementById('card-template');
const placesList = document.querySelector('.places__list');

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
        likeCard(likeButton, cardData, cardClone);
        onLike(likeButton);
    });

    // Добавляем обработчик события  удаления карточки на кнопку удаления
    deleteButton.addEventListener('click', () => {
        onDelete(cardClone);
    });

    // Добавляем обработчик события для изображения (картинки)
    cardImage.addEventListener('click', () => onImageClick(cardData.link, cardData.name));

   cardData?.likes?.forEach((like) => {
       if(like._id === userId) {
           toggleLike(likeButton)
       }
   })
    toggleDeleteButton(deleteButton, cardData?.owner?._id, userId, cardData?._id);

    return cardClone;
}

export function toggleDeleteButton(deleteButton, ownerId, userId, cardId) {
    if (ownerId === userId) {
        deleteButton.style.display = 'block';

        // Добавляем обработчик события для удаления карточки
        deleteButton.addEventListener('click', async () => {

            await deleteCardApi(cardId)

            // Удаляем карточку из DOM
            deleteButton.closest('.card').remove();

        });
    }
}

export async function setCards() {

    try {

        // Получаем данные о пользователе
        const user = await getUser();

        getCards().then(cardsData => {
            placesList.innerHTML = '';
            // Отображаем карточки на странице
            cardsData.forEach(card => {
                const newCard = createCard(card, deleteCard, toggleLike, openImagePopup, user._id);
                placesList.appendChild(newCard);
            });
        })

    } catch (error) {
        // Обработка ошибки
        console.error('Ошибка при загрузке карточек:', error);
        throw error;
    }

}

setCards()

// Функция редактирования профиля
export function editProfile() {
    const editProfileForm = document.querySelector('.popup_type_edit .popup__form');
    const saveButton = editProfileForm.querySelector('.popup__button');

    editProfileForm.addEventListener('submit', function (evt) {
        evt.preventDefault(); // Отменяем стандартное действие формы

        // Получаем значения из полей формы
        const newName = editProfileForm.querySelector('.popup__input_type_name').value;
        const newAbout = editProfileForm.querySelector('.popup__input_type_description').value;

        // Изменяем текст кнопки на "Сохранение..."
        saveButton.textContent = 'Сохранение...';

        // Отправляем запрос на сервер для обновления данных профиля
        editProfileApi(newName, newAbout)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .then(updatedUserData => {
                // Обработка успешного обновления данных профиля
                console.log('Данные профиля успешно обновлены:', updatedUserData);
                // Можно обновить данные на странице, если необходимо
            })
            .catch(error => {
                // Обработка ошибки
                console.error('Ошибка при обновлении данных профиля:', error);
            })
            .finally(() => {
                // Возвращаем исходный текст кнопки после завершения запроса
                saveButton.textContent = 'Сохранить';
            });
    });
}

// Функция добавления новой карточки
export function addNewCard() {
    const newCardForm = document.querySelector('.popup_type_new-card .popup__form');
    const saveButton = newCardForm.querySelector('.popup__button');

    newCardForm.addEventListener('submit', function (evt) {
        evt.preventDefault(); // Отменяем стандартное действие формы

        // Получаем значения из полей формы
        const newName = newCardForm.querySelector('.popup__input_type_card-name').value;
        const newLink = newCardForm.querySelector('.popup__input_type_url').value;

        // Изменяем текст кнопки на "Сохранение..."
        saveButton.textContent = 'Сохранение...';

        // Отправляем запрос на сервер для создания новой карточки
        addNewCardApi(newName, newLink)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .then(newCardData => {
                // Обработка успешного создания новой карточки
                console.log('Новая карточка успешно создана:', newCardData);
                // Можно обновить данные на странице, если необходимо
                // Например, добавить новую карточку в интерфейс
            })
            .catch(error => {
                // Обработка ошибки
                console.error('Ошибка при создании новой карточки:', error);
            })
            .finally(() => {
                // Возвращаем исходный текст кнопки после завершения запроса
                saveButton.textContent = 'Сохранить';
                setCards()
            });
    });
}

// Функция удаления карточки
export function deleteUserCard(userData, cardsData) {
    const userId = userData._id;

    cardsData.forEach((data, index) => {
        const deleteButton = document.querySelectorAll('.card__delete-button')[index];
        const ownerId = data.owner._id;

        // Проверяем, принадлежит ли карточка текущему пользователю
        toggleDeleteButton(deleteButton, ownerId, userId, data._id);
    });
}

// Функция обработки события лайка
export function toggleLike(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

// Снятие лайка
export async function deleteCardLike(cardsData, stroke) {
    try {
        const response = await deleteCardLikeApi(cardsData);
        if (!response.ok) {
            throw new Error(`Ошибка при снятии лайка: ${response.status}`);
        }
        const data = await response.json();
        updateLikeCardUser(stroke, data);
    } catch (error) {
        console.error('Ошибка при снятии лайка:', error);
    }
}

// Функция вывода количества лайков
export async function showLikes() {
    try {
        const response = await showLikesApi();
        if (!response.ok) {
            throw new Error(`Ошибка при получении данных карточки: ${response.status}`);
        }
        const cards = await response.json();
        const likesCounters = document.querySelectorAll('.card__likes-counter');
        cards.forEach((card, index) => {
            likesCounters[index].textContent = card.likes.length || 0;
        });
    } catch (error) {
        console.error('Ошибка при получении данных карточки', error);
    }
}

// Постановка лайка
export async function setCardLike(cardsData, stroke) {
    try {
        const response = await setCardLikeApi(cardsData);
        if (!response.ok) {
            throw new Error('Ошибка при постановке лайка');
        }
        const data = await response.json();
        updateLikeCardUser(stroke, data);
    } catch (error) {
        console.error('Ошибка при постановке лайка:', error);
    }
}

//Обновление количества лайков
export function updateLikeCardUser(stroke,cardsData) {
    stroke.textContent = cardsData.likes.length;
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
            })
            .catch(error => {
                // Обработка ошибки при постановке лайка
                console.error('Ошибка при постановке лайка:', error);
            });
    }
}
