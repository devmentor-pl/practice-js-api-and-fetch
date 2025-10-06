const apiUrl = 'http://localhost:3000/users';
console.log(apiUrl)

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
    // insertUsers();
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

function addUser() {
    const form = document.querySelector('form')
    const firstName = document.querySelector('.form__field--first-name');
    const lastName = document.querySelector('.form__field--last-name');

    form.addEventListener('submit', e => {
        e.preventDefault();
        data = { firstName: firstName.value, lastName: lastName.value }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(apiUrl, options)
            .then(resp => {
                if (resp.ok) { return resp.json(); }
                return Promise.reject(resp);
            })
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
            .finally(loadUsers);
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
