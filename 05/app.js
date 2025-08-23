const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    const form = document.querySelector('.form');
    form.addEventListener('submit', handleSubmit);
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
function handleSubmit(e) {
    e.preventDefault();

    const firstNameInput = document.querySelector('.form__field--first-name');
    const lastNameInput = document.querySelector('.form__field--last-name');

    const newUser = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value
    };
    const promise = fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        }

    });
    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        
        .catch(error => console.error(error))
        .finally(() => {loadUsers()})

}
