const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addPerson();
}

const addPerson =() =>{
    const formEl = document.querySelector('.form');
    if(formEl) {
        formEl.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const [firstName, lastName] = event.target.elements;
        if(firstName.value && lastName.value) {
            addNewUser(firstName.value, lastName.value);
        }
    }
}

const addNewUser = (firstName, lastName) => {
    fetchPost(apiUrl, {firstName, lastName})
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }
        })
        .then(data => {
            console.log(data);
        })
        .finally(loadUsers)
}

const fetchPost = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
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