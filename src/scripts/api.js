import {createCard, deleteCard, toggleLike} from "./card";
import {closePopup, openPopup} from "./modal";
import {openImagePopup} from "./index";

const token = '1bfc1549-f875-4034-870b-38d795fda2ac';
const groupID = 'wff-cohort-7';
const placesList = document.querySelector('.places__list');

// Вызов функций для получения данных о пользователе и карточек с сервера одновременно
Promise.all([getUser(), getCards()])
    .then(([userData, cardsData]) => {

        showLikes();
        outputUserData(userData);
        deleteUserCard(userData, cardsData);
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Ошибка при загрузке данных:', error);
    });

// Функция для загрузки данных о пользователе с сервера
function getUser() {
    return fetch(`https://nomoreparties.co/v1/${groupID}/users/me`, {
        headers: {
            authorization: token
        }
    })
        .then(res => res.json())
        .then(userData => {
            // Обработка полученных данных о пользователе
            console.log(userData);
            return userData;
        })
        .catch(error => {
            // Обработка ошибки
            console.error('Ошибка при загрузке информации о пользователе:', error);
            throw error; // Пробрасываем ошибку дальше для обработки
        });
}

// Функция удаления карточки
function deleteUserCard(userData, cardsData) {
    const userId = userData._id;

    cardsData.forEach((data, index) => {
        const deleteButton = document.querySelectorAll('.card__delete-button')[index];
        const ownerId = data.owner._id;

        // Проверяем, принадлежит ли карточка текущему пользователю
        if (ownerId === userId) {
            deleteButton.style.display = 'block';

            // Добавляем обработчик события для удаления карточки
            deleteButton.addEventListener('click', async () => {
                try {
                    // Отправляем DELETE-запрос для удаления карточки
                    const response = await fetch(`https://nomoreparties.co/v1/${groupID}/cards/${data._id}`, {
                        method: 'DELETE',
                        headers: {
                            authorization: token
                        }
                    });

                    if (!response.ok) {
                        throw new Error(`Ошибка при удалении карточки: ${response.status}`);
                    }

                    // Удаляем карточку из DOM
                    deleteButton.closest('.card').remove();
                } catch (error) {
                    console.error('Ошибка при удалении карточки:', error);
                }
            });
        }
    });
}

//Функция вывода данных о пользователе с сервера
function outputUserData(userData) {

    const userName = document.getElementById('userName');
    userName.textContent = userData.name;

    const userAbout = document.getElementById('userAbout');
    userAbout.textContent = userData.about;

    const userAvatar = document.getElementById('userAvatar');
    userAvatar.style.backgroundImage = `url('${userData.avatar}')`;
}

// Функция для загрузки карточек с сервера
function getCards() {
    return fetch(`https://nomoreparties.co/v1/${groupID}/cards`, {
        headers: {
            authorization: token
        }
    })
        .then(res => res.json())
        .then(cardsData => {
            // Обработка полученных данных о карточках
            console.log(cardsData);
            // Пример отображения карточек на странице
            cardsData.forEach(card => {
                const newCard = createCard(card, deleteCard, toggleLike, openImagePopup);
                placesList.appendChild(newCard);
            });
            return cardsData;
        })
        .catch(error => {
            // Обработка ошибки
            console.error('Ошибка при загрузке карточек:', error);
            throw error; // Пробрасываем ошибку дальше для обработки
        });
}

// Функция редактирования профиля
function editProfile() {
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
        fetch(`https://nomoreparties.co/v1/${groupID}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                about: newAbout
            })
        })
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


editProfile()

// Функция добавления новой карточки
function addNewCard() {
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
        fetch(`https://nomoreparties.co/v1/${groupID}/cards`, {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                link: newLink
            })
        })
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
            });
    });
}

addNewCard();


// Функция вывода количества лайков
function showLikes() {
    fetch(`https://nomoreparties.co/v1/${groupID}/cards`, {
        method: 'GET',
        headers: {
            authorization: token
        }
    })
        .then(res => res.json())
        .then(cards => {
            // Получаем элемент счетчика лайков для каждой карточки
            const likesCounters = document.querySelectorAll('.card__likes-counter');

            // Перебираем каждую карточку и устанавливаем текст с количеством лайков
            cards.forEach((card, index) => {
                likesCounters[index].textContent = card.likes.length;
            });
        })
        .catch(error => {
            console.error('Ошибка при получении данных карточки', error);
        });
}

//Обновление количества лайков
export function updateLikeCardUser(stroke,cardsData) {
    stroke.textContent = cardsData.likes.length;
}

// Постановка лайка
export function setCardLike(cardsData, stroke) {
    return fetch(`https://nomoreparties.co/v1/${groupID}/cards/likes/${cardsData._id}`, {
        method: 'PUT',
        headers: {
            authorization: token
        }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Ошибка при постановке лайка');
            }
            return res.json();
        })
        .then((data) => {
            updateLikeCardUser(stroke, data);
        })
        .catch(error => {
            console.error('Ошибка при постановке лайка:', error);
            throw error; // Пробрасываем ошибку дальше для обработки
        });
}

// Снятие лайка
export function deleteCardLike(cardsData, stroke) {
    return fetch(`https://nomoreparties.co/v1/${groupID}/cards/likes/${cardsData._id}`, {
        method: 'DELETE',
        headers: {
            authorization: token
        }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Ошибка при снятии лайка');
            }
            return res.json();
        })
        .then((data) => {
            updateLikeCardUser(stroke, data);
        })
        .catch(error => {
            console.error('Ошибка при снятии лайка:', error);
            throw error; // Пробрасываем ошибку дальше для обработки
        });
}

//Проверка активного класса лайка


// Функция обновления аватара пользователя
function updateAvatar(avatarUrl) {
    fetch(`https://nomoreparties.co/v1/${groupID}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: token
        },
        body: JSON.stringify({ avatar: avatarUrl })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка обновления аватара');
            }
            console.log('Аватар успешно обновлен');
            // После успешного обновления аватара, можно также обновить его на странице
            const userAvatar = document.getElementById('userAvatar');
            userAvatar.style.backgroundImage = `url('${avatarUrl}')`;
        })
        .catch(error => {
            console.error('Ошибка при обновлении аватара:', error);
        })
        .finally(() => {
            // Возвращаем исходный текст кнопки после завершения запроса
            saveAvatarButton.textContent = 'Сохранить';
        });
}

// Получаем кнопку "Сохранить" из попапа
const saveAvatarButton = document.querySelector('.popup_type_avatar .popup__button');

// Назначаем обработчик события клика на кнопку "Сохранить"
saveAvatarButton.addEventListener('click', function(event) {
    handleAvatarSubmit(event, popupAvatar);
});

// Обработчик для изменения аватара
function handleAvatarSubmit(event, popup) {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы

    const avatarUrlInput = document.querySelector('.popup__input_type_avatar');
    const avatarUrl = avatarUrlInput.value.trim(); // Получаем значение URL из поля формы и удаляем лишние пробелы

    // Изменяем текст кнопки на "Сохранение..."
    saveAvatarButton.textContent = 'Сохранение...';

    // Если все в порядке, вызываем функцию обновления аватара
    updateAvatar(avatarUrl);
    closePopup(popup);

}

// Получаем форму из DOM
const avatarForm = document.forms['edit-avatar'];

// Назначаем обработчик события submit формы
avatarForm.addEventListener('submit', function(event) {
    handleAvatarSubmit(event, popup); // Передаем также попап, чтобы закрыть его после обновления аватара
});

const avatarImage = document.getElementById('userAvatar'); // Получаем элемент из DOM
const popupAvatar = document.querySelector('.popup_type_avatar'); // Получаем попап из DOM

// Назначаем обработчик события клика на аватар
avatarImage.addEventListener('click', function() {
    // Открываем попап
    openPopup(popupAvatar);
});
