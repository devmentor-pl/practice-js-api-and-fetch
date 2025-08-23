const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    const button = document.querySelector(".form__submit")
    button.addEventListener("click", getData)
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

function sendData(data) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        })
        .finally(() => {
            loadUsers()
        });

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

function getData() {

    const nameInput = document.querySelector(".form__field--first-name")
    const lastNameInput = document.querySelector(".form__field--last-name")

    const name = nameInput.value
    const lastName = lastNameInput.value
    const newData = { 'firstName': name, "lastName": lastName }

    sendData(newData)
}