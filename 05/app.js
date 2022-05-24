// const apiUrl = 'http://localhost:3000/users';
const apiUrl = './data.json';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => {
            console.log(data.users)
            return data.users
        })
        .then(data => insertUsers(data))
        .catch(err => console.error(err))
}

function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            console.log( resp )
            if(resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        });
}

function insertUsers(usersList) {
    console.log( usersList )
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}
