const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

const form = document.querySelector(".form");
form.addEventListener("submit", (eve) => {
    event.preventDefault();
    const firstName = document.querySelector(".form__field--first-name").value;
    const lastName = document.querySelector(".form__field--last-name").value;
    const user = { firstName, lastName };
    fetchPost(apiUrl, user)
        .then(() => loadUsers())
        .catch(err => console.error(err))
    form.reset();
})

function init() {
    loadUsers();
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        });
}

function fetchPost(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp)
        })
}

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

// W tym zadaniu będziesz potrzebować narzędzia [JSON Server](https://github.com/typicode/json-server), które uruchomi lokalne API na podstawie pliku `data.json`. JSON Server instalowaliśmy globalnie podczas przerabiania materiałów z tego modułu.

// W pliku tym znajdują się już dane, które zostaną załadowane do HTML-a za pomocą kodu napisanego w `app.js` zaraz po uruchomieniu lokalnego API.

// JSON Server można uruchomić w terminalu przy pomocy komendy: `json-server ./data.json --watch`.

// Twoim zadaniem jest napisanie obsługi formularza, tak aby można było dodawać nowe dane do naszego lokalnego API.

// Przypominam, że należy:
// * wykorzystać odpowiednią metodę (`POST`),
// * na podstawie wysłanych przez formularz danych utworzyć obiekt, który trzeba zamienić na format JSON (`JSON.stringify()`),
// * przekazanć odpowiedni nagłówek (`'Content-Type': 'application/json'`).

// Po każdorazowym dodaniu użytkownika zaktualizuj widok przy pomocy funkcji `loadUsers()`. Trzeba ją uruchomić w odpowiednim momencie, np. w `finally()`.