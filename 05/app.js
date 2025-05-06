const apiUrl = 'http://localhost:3000/users';

let userForm = null
let firstNameInput = null
let lastNameInput = null
let usersListElement = null

document.addEventListener('DOMContentLoaded', init);

function init() {
    userForm = document.querySelector('.form')
    firstNameInput = document.querySelector('.form__field--first-name')
    lastNameInput = document.querySelector('.form__field--last-name')
    usersListElement = document.querySelector('.users')

    loadUsers();
    setupFormListener();
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

function fetchPost(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(resp => {
        if (resp.ok) {
            return resp.json()
        }
        throw new Error(`error status: ${resp.status}`)
    })
}

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    if (!usersListElement) {
        console.log('element nie znaleziony');
        return
    }
    usersListElement.innerHTML = ''
    usersList.forEach(user => {
        if (!user || typeof user.firstName === 'undefined' || typeof user.lastName === 'undefined') {
            return
        }

        const liElement = document.createElement('li')
        liElement.innerText = `${user.firstName} ${user.lastName}`

        ulElement.appendChild(liElement);
    })
}


function setupFormListener() {
    if (!userForm || !firstNameInput || !lastNameInput) {
        console.log('formularz nie znbaleziony');
        return
    }

    userForm.addEventListener('submit', (e) => {
        e.preventDefault()

        
    const newUser = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
    }

    const promise = fetchPost(apiUrl, newUser)

    promise
        .then(addedUser => {
            console.log('User dodany:', addedUser)
        })
        .catch(err => {
            console.error('błąd dodawania user:', err);
        })
        .finally(() => {
            loadUsers()
            userForm.reset()
        })
    })
}