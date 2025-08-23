const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
}

function addUser() {
    const formEl = document.querySelector('.form');
    if(formEl) {
        formEl.addEventListener('submit', actionSubmit);
    }

    function actionSubmit (e) {
        e.preventDefault();
        //console.log('submit');

        const [firstName, lastName] =e.target.elements;
        if(firstName.value && lastName.value) {
            newUser(firstName.value, lastName.value);
        }
    }
}


function newUser (firstName, lastName) {
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({firstName, lastName}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resp => {
            if(resp.lok) {
                return resp.json();
            }
        })
            .then(data =>{
                console.log(data);
            })
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

