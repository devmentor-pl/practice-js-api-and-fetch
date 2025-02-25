const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    getUserData()
}

function loadUsers() {
    const promise = _fetch(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function _fetch(url, options) {
    return fetch(url, options)
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

function getUserData() {
    const form = document.querySelector('.form')
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault()

            const [firstNameInput, lastNameInput] = form.elements

            const data = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value
            }

            addUserToJSON(data)
        })
    }
}

function addUserToJSON(data) {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }

    _fetch(apiUrl, options)
        .catch(err => console.log(err))
        .finally(() => loadUsers())
}