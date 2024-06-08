const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    setupForm();
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

function setupForm() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const firstNameInput = document.querySelector('.form__field--first-name');
    const lastNameInput = document.querySelector('.form__field--last-name');

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if(!firstName || !lastName) {
        alert('Wpisz zarówno imię jak i nazwisko.');
        return;
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        if (!response.ok) {
            throw new Error('Network response failed');
        }
        firstNameInput.value = '';
        lastNameInput.value = '';

        loadUsers();
    } catch (error) {
        console.error(error);
        alert('Nie udało się załadować nowego użytkownika.');
    }
}