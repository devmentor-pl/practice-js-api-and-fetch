const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUsers();
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
            if(resp.ok) {
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

function addUsers() {
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', e => {
        e.preventDefault();
        const firstNameEl = document.querySelector('.form__field--first-name');
        const lastNameEl = document.querySelector('.form__field--last-name');
        const {firstName, lastName} = e.target.elements;
        const data = {
            firstName: firstNameEl.value, lastName: lastNameEl.value
        }
        const options = {
            method: 'POST',
            body: JSON.stringify ( data ),
            headers: {'Content-Type': 'application/json'}
        };
        fetch(apiUrl, options) 
        .then(resp => console.log(resp)) 
        .catch(err => console.errors(err))
        .finally ( loadUsers );
    });
}