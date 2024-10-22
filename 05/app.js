const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
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
