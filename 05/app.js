const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
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

function addUser() {
    const submit = document.querySelector('.form')
    if (submit) {
        submit.addEventListener('submit', handleSubmit)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const [firstNameInput, lastNameInput] = e.target.elements
        if (firstNameInput.value && lastNameInput.value) {
            addNewUser(firstNameInput.value, lastNameInput.value)
        }
    }
}

function addNewUser(firstName, lastName) {
    fetchPost(apiUrl, { firstName, lastName })
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    })
    .catch(err => console.error(err))
    .finally(() => loadUsers())
}

function fetchPost(url, data) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}
