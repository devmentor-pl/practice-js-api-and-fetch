
const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', addUsers)
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


// attach event listener to form

// zaspisac dane z formularza do zmiennych
// zmienne podac do ./data.json
// uaktualnic liste na stronie html

function addUsers(event) {

    event.preventDefault();

    const target = event.target.elements;
    const fName = target[0].value;
    const lName = target[1].value;

    const data = {
        firstName: fName,
        lastName: lName,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(apiUrl, options)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                Promise.reject('NEIN');
            }
        })
        .catch(err => console.error(err))
        .finally(loadUsers)
};
