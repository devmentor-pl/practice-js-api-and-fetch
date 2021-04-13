const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    const formEl = document.querySelector('.form');
    formEl.addEventListener('submit', onSubmit);
}

function onSubmit(event) {
    event.preventDefault();
    const userName = getName(event.target);
    createUser(userName);
}

function getName(formEl) {
    const firstName = formEl.querySelector('.form__field--first-name').value; 
    const lastName = formEl.querySelector('.form__field--last-name').value;
    return {firstName, lastName};
}

function createUser(userData) {
    const promise = fetchPost(apiUrl, userData);
    promise
        // .then(resp => console.log("Tu drukuję resp: " + resp.json()))
        .catch(err => console.error(err))
        .finally(loadUsers);
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchPost(url, {firstName, lastName}) {
    
    const data =  {
        firstName,
        lastName,    
    }

    const options = {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: { "Content-Type": "application/json" },
    }
    
    return fetch(url, options)
        .then(resp => {
            if(resp.ok) {
                // debugger;
                return resp.json();
            }

            return Promise.reject(resp);
        });
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
