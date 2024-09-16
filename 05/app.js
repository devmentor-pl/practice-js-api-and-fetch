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

function fetchGet(apiUrl) {
    return fetch(apiUrl)
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

function addUsers() {
    const firstName = document.querySelector('.form__field--first-name');
    const lastName = document.querySelector('.form__field--first-name');
    const submit = document.querySelector('.form__submit');
    submit.addEventListener('click', e => {
        e.preventDefault();

        const data = {
            firstName: firstName.value,
            lastName: lastName.value
        };
        console.log(data)
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(apiUrl, options)
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
            .finally(loadUsers);
    });
}