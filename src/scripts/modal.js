// Функция открытия попапа
export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}

// Функция открытия попапа с изображением
export function openImagePopup(imageSrc, imageName) {
    const imagePopup = document.querySelector('.popup_type_image');

    const imagePopupImage = imagePopup.querySelector('.popup__image');

    const imagePopupCaption = imagePopup.querySelector('.popup__caption');

    imagePopupImage.src = imageSrc;
    imagePopupImage.alt = imageName;
    imagePopupCaption.textContent = imageName;

    openPopup(imagePopup);
}

// Функция закрытия попапа
export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}
