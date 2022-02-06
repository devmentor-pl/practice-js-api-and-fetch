// const { last } = require("lodash");

const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', addNewUser);
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

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

function addNewUser(e) {
    e.preventDefault();
    const {
        firstName,
        lastName
    } = getValues();
    const data = {
        "firstName": firstName,
        "lastName": lastName,
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    }

    const promise = fetch(apiUrl, options);

    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(() => loadUsers);
}

function getValues() {
    const firstName = document.querySelector('.form__field--first-name').value;
    const lastName = document.querySelector('.form__field--last-name').value;
    return {
        firstName,
        lastName
    };
}
