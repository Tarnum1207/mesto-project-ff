import {createCard, toggleLike, deleteCard} from "./card";
import {openPopup, closePopup, closePopupByOverlay} from "./modal";
import {updateInput, formValidation} from "./validation";
import {addNewCardApi, editProfileApi, getCards, getUser, updateAvatar} from "./api";

const placesList = document.querySelector('.places__list');

// Вызов функций для получения данных о пользователе и карточек с сервера одновременно
 Promise.all([getUser(), getCards()])
     .then(([userData]) => {

         outputUserData(userData);
     })
     .catch(error => {
         // Обработка ошибок
         console.error('Ошибка при загрузке данных:', error);
     });

// Функция открытия попапа с изображением
 function openImagePopup(imageSrc, imageName) {
    const imagePopup = document.querySelector('.popup_type_image');

    const imagePopupImage = imagePopup.querySelector('.popup__image');
    const imagePopupCaption = imagePopup.querySelector('.popup__caption');

    imagePopupImage.src = imageSrc;
    imagePopupImage.alt = imageName;
    imagePopupCaption.textContent = imageName;

    openPopup(imagePopup);
}

// Открытие и закрытие модального окна
// @todo: DOM узлы
document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.querySelector('.profile__edit-button');
    const addButton = document.querySelector('.profile__add-button');
    const image = document.querySelector('.profile__image');
    const editPopup = document.querySelector('.popup_type_edit');
    const newCardPopup = document.querySelector('.popup_type_new-card');
    const closeButtons = document.querySelectorAll('.popup__close');
    const formEdit = document.querySelector('.popup_type_edit .popup__form');
    const formNewCard = document.querySelector('.popup_type_new-card .popup__form');
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');


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
    async function handleNewCardFormSubmit(evt) {
        evt.preventDefault(); // Отменяем стандартное действие формы
        const user = await getUser();

        // Получаем значения из полей формы
        const newName = formNewCard.elements['place-name'].value;
        const newLink = formNewCard.elements['link'].value;

        // Создаем новую карточку с правильными данными
        const newCard = createCard(
            {name: newName, link: newLink},
            deleteCard,
            toggleLike,
            user._id,
            openImagePopup
        );

        // Добавляем новую карточку в начало контейнера
        setCards()

        // Закрываем модальное окно
        closePopup(newCardPopup);

        // Очищаем поля формы
        formNewCard.reset();
    }

    formNewCard.addEventListener('submit', handleNewCardFormSubmit);

    // Открытие/закрытие модальных окон при клике на кнопки и крестик
    editButton.addEventListener('click', function () {
        // Заполнение инпутов актуальными данными из профиля
        const profileTitleValue = profileTitle.textContent;
        const profileDescriptionValue = profileDescription.textContent;
        const nameInput = editPopup.querySelector('.popup__input_type_name');
        const descriptionInput = editPopup.querySelector('.popup__input_type_description');
        const formEditProfile = editPopup.querySelector('.popup__form');

        nameInput.value = profileTitleValue;
        descriptionInput.value = profileDescriptionValue;

        // Открытие попапа редактирования профиля
        openPopup(editPopup);
        updateInput(formValidationConfig,formEditProfile);

        const button = formEditProfile.querySelector('.popup__button');

        if (button.classList.contains('submit-disabled')) {
            button.classList.remove('submit-disabled');
        }

    });

        // Открытие попапа добавления новой карточки
    addButton.addEventListener('click', function () {
        const newCardsForm = document.forms['new-place'];


        openPopup(newCardPopup);
        formValidation(newCardsForm)
    });

    image.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const popup = button.closest('.popup');
            closePopup(popup);
        });
    });

});

//Функция вывода данных о пользователе с сервера
  function outputUserData(userData) {

    const userName = document.getElementById('userName');
    userName.textContent = userData.name;

    const userAbout = document.getElementById('userAbout');
    userAbout.textContent = userData.about;

    const userAvatar = document.getElementById('userAvatar');
    userAvatar.style.backgroundImage = `url('${userData.avatar}')`;
}

document.addEventListener('click', closePopupByOverlay);

  function getAvatar() {
      const avatarUrlInput = document.querySelector('.popup__input_type_avatar');
      const avatarUrl = avatarUrlInput.value.trim(); // Получаем значение URL из поля формы и удаляем лишние пробелы

      return(avatarUrl)
  }

// Изменение аватара
async function updateAvatarAction() {
      const avatar = getAvatar()
        await updateAvatar(getAvatar())

            .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка обновления аватара');
            }
            console.log('Аватар успешно обновлен');
            // После успешного обновления аватара, можно также обновить его на странице
            const userAvatar = document.getElementById('userAvatar');
            userAvatar.style.backgroundImage = `url('${getAvatar()}')`;
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

    // Изменяем текст кнопки на "Сохранение..."
    saveAvatarButton.textContent = 'Сохранение...';

    // Если все в порядке, вызываем функцию обновления аватара
    updateAvatarAction()
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
    formValidation(avatarForm);
});

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

// Вызов функции редактирования профиля
editProfile()

async function setCards() {

    try {
        // Получаем данные о пользователе
        const user = await getUser();
        getCards().then(cardsData => {
            placesList.innerHTML = '';
            // Отображаем карточки на странице
            cardsData.forEach(card => {
                const newCard = createCard(card, deleteCard, toggleLike, user._id, openImagePopup);
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
        addNewCardApi(newName, newLink)
            .then(res => {
                return res;
            })
            .then(newCardData => {
                // Обработка успешного создания новой карточки
                console.log('Новая карточка успешно создана:', newCardData);
                // Можно обновить данные на странице, если необходимо
                // Например, добавить новую карточку в интерфейс
                setCards()
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

// Вызов функции добавления новой карточки
addNewCard();

//Валидация форм

const formValidationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "submit-disabled",
    inputErrorClass: "input_type-invalid",
    errorClass: "input_span",
};

formValidation(formValidationConfig)

//Новая карточка появляется без количества лайков под кнопкой лайка (сначала должен быть виден 0).

