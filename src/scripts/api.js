const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-7",
    headers: {
        authorization: "1bfc1549-f875-4034-870b-38d795fda2ac",
        "Content-Type": "application/json",
    },
};

// Функция для загрузки данных о пользователе с сервера
export function getUser() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: {
            authorization: config.headers.authorization,
            "Content-Type": config.headers["Content-Type"],
        }
    })
        .then(res => res.json())
        .then(userData => {

            console.log(userData)

            return userData;
        })
        .catch(error => {
            // Обработка ошибки
            console.error('Ошибка при загрузке информации о пользователе:', error);
            throw error; // Пробрасываем ошибку дальше для обработки
        });
}

export async function deleteCardApi(cardId) {
    try {
        // Отправляем DELETE-запрос для удаления карточки
        const response = await fetch(`${config.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: config.headers.authorization,
                "Content-Type": config.headers["Content-Type"],
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка при удалении карточки: ${response.status}`);
        }


    } catch (error) {
        console.error('Ошибка при удалении карточки:', error);
    }
}

// Функция для загрузки карточек с сервера
export async function getCards() {
    try {

        // Получаем карточки с сервера
        const cardsResponse = await fetch(`${config.baseUrl}/cards`, {
            headers: {
                authorization: config.headers.authorization,
                "Content-Type": config.headers["Content-Type"],
            }
        });
        const cardsData = await cardsResponse.json();

        console.log(cardsData)

        return cardsData;
    } catch (error) {
        // Обработка ошибки
        console.error('Ошибка при загрузке карточек:', error);
        throw error;
    }
}

// Функция редактирования профиля
export function editProfileApi(newName, newAbout) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: config.headers.authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            about: newAbout
        })
    });
}

// Функция добавления новой карточки
export function addNewCardApi(newName, newLink) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: {
            authorization: config.headers.authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            link: newLink
        })
    });
}

// Функция вывода количества лайков
export function showLikesApi() {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: {
            authorization: config.headers.authorization,
            "Content-Type": config.headers["Content-Type"],
        }
    });
}

// Постановка лайка
export function setCardLikeApi(cardsData) {
    return fetch(`${config.baseUrl}/cards/likes/${cardsData._id}`, {
        method: 'PUT',
        headers: {
            authorization: config.headers.authorization,
            "Content-Type": config.headers["Content-Type"],
        }
    });
}

// Снятие лайка
export function deleteCardLikeApi(cardsData) {
    return fetch(`${config.baseUrl}/cards/likes/${cardsData._id}`, {
        method: 'DELETE',
        headers: {
            authorization: config.headers.authorization,
            "Content-Type": config.headers["Content-Type"],
        }
    });
}

// Функция обновления аватара пользователя
export function updateAvatar(avatarUrl) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: config.headers.authorization,
            "Content-Type": config.headers["Content-Type"],
        },
        body: JSON.stringify({ avatar: avatarUrl })
    })

}
