const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers(); // Załaduj użytkowników przy starcie aplikacji

    const form = document.querySelector('.form');
    form.addEventListener('submit', handleFormSubmit); // Obsługa formularza
}

// Funkcja do załadowania użytkowników
function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

// Funkcja do obsługi zapytania GET
function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        });
}

// Funkcja do wstawiania użytkowników do listy
function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = ''; // Czyścimy listę przed załadowaniem nowych danych
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

// Funkcja obsługująca przesłanie formularza
function handleFormSubmit(event) {
    event.preventDefault(); // Zapobiegamy domyślnej akcji formularza (przeładowanie strony)

    const firstName = document.querySelector('.form__field--first-name').value;
    const lastName = document.querySelector('.form__field--last-name').value;

    if (firstName && lastName) {
        const newUser = {
            firstName,
            lastName
        };

        // Wysyłamy dane do API metodą POST
        fetchPost(apiUrl, newUser)
            .then(() => loadUsers()) // Po dodaniu nowego użytkownika, odśwież listę
            .catch(err => console.error(err))
            .finally(() => {
                // Opcjonalnie, możesz wyczyścić formularz po dodaniu użytkownika
                document.querySelector('.form').reset();
            });
    } else {
        alert('Proszę wypełnić oba pola!');
    }
}

// Funkcja do obsługi zapytania POST
function fetchPost(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Informujemy serwer, że wysyłamy dane w formacie JSON
        },
        body: JSON.stringify(data) // Konwertujemy dane na format JSON
    })
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        return Promise.reject(resp);
    });
}
