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


function addUsers(){
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', e => {
        e.preventDefault();
        console.log(e.target);
        const {firstName,lastName} = e.target.elements;
        console.log(firstName); // undefined
        console.log(lastName); // undefined
        const users = {
            firstName:firstName.value, lastName:lName.value 
           };
        console.log(users); // app.js:49 Uncaught TypeError: Cannot read properties of undefined (reading 'value') at HTMLFormElement.
    });
}

// U ciebie strona 83 działa, spotykam sie z tym bledem ktorys raz i czas zrozumiec ;)