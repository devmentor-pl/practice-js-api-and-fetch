const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    initAddUserForm();
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


function initAddUserForm() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();

    const firstNameInput = document.querySelector('.form__field--first-name');
    const lastNameInput = document.querySelector('.form__field--last-name');

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (!firstName || !lastName) {
        alert('Uzupełnij oba pola!');
        return;
    }

    const user = {
        firstName,
        lastName
    };

    
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(resp => {
            if (!resp.ok) {
                return Promise.reject(resp);
            }
            return resp.json();
        })
        .then(() => {
            firstNameInput.value = '';
            lastNameInput.value = '';
        })
        .catch(err => console.error('Błąd przy dodawaniu użytkownika:', err))
        .finally(() => {
            loadUsers();
        });
}