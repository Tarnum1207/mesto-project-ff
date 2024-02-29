//Валидация форм

//Проверка данных форм
const formValidation = () => {
    const findForm = Array.from(document.querySelectorAll('.popup__form'));

    findForm.forEach((form) => {
        arrayInput(form);
    })
}

//Проверка всех инпутов
const arrayInput = (form) => {
    const findInput = Array.from(form.querySelectorAll('.popup__input'))
    const saveButton = form.querySelector('.popup__button')

    findInput.forEach((input) => {
        input.addEventListener('input', () => {
            isValid(input);
            toggleButton(form, saveButton);


        })
    })

}

//Функция не прошла проверку валидации
function showError(input, messageError) {
    const spanError = document.querySelector(`.${input.id}-error`);

    input.classList.add('input_type-invalid');
    spanError.classList.add('input_span');
    spanError.textContent = messageError
}

//Функция прошла проверку валидации
function hideError(input) {
    const spanError = document.querySelector(`.${input.id}-error`);

    input.classList.remove('input_type-invalid');
    spanError.classList.remove('input_span');
    spanError.textContent = ''
}

//Функция проверки валидности
function isValid(input) {
    const regEx = /^[a-zа-я\s\-]+$/i;

    if (input.hasAttribute('data-validate-url')) {
        if (!checkURLValidity(input.value.trim())) {
            showError(input, input.validationMessage);
        } else {
            hideError(input);
        }
        return
    }

    if (input.value.trim() == '') {
        showError(input, input.validationMessage)
    }  else if (!regEx.test(input.value)) {
        input.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы");

        showError(input, input.validationMessage)
    }  else {
        input.setCustomValidity("");
        hideError(input)
    }

    if (!input.validity.valid) {
        showError(input, input.validationMessage)
    } else {
        hideError(input)
    }

}

//Функция проверки валидности url
function checkURLValidity(element) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(element);
}

//Сброс ошибки
export const updateInput = (form) => {
    const inputList = Array.from(form.querySelectorAll('.popup__input'));

    inputList.forEach((input) => {
        hideError(input);
    })

}

const toggleButton = (form, button) => {
    const inputList = Array.from(form.querySelectorAll('.popup__input'));
    const hasError = inputList.some(input => !input.validity.valid);

    if (hasError) {
        button.classList.add('submit-disabled');
    } else {
        button.classList.remove('submit-disabled');
    }
};

formValidation()

// Функция очистки полей формы и ошибок валидации
 export function clearFormFieldsAndValidation(popup) {
     const form = popup.querySelector('.popup__form');
     if (form) {
         form.reset(); // Очищаем поля формы
         const errorMessages = form.querySelectorAll('.input-error');
         errorMessages.forEach(errorMessage => {
             errorMessage.textContent = ''; // Очищаем текст ошибок валидации
         });
     }

     // Удаляем красное подчёркивание у всех инпутов в попапе
     const inputs = popup.querySelectorAll('input');
     inputs.forEach(input => {
         input.classList.remove('input_type-invalid');
     });
 }
