const form = document.querySelector('.form');
const firsNameInp = form.querySelector('.form__field--first-name');
const lastNameInp = form.querySelector('.form__field--last-name');
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
function fetchPost(url, data){
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    };

    return fetch(url, options)
        .then(resp => {
            if(resp.ok) {
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

function addUser(){
    
    form.addEventListener('submit', e => {
        e.preventDefault();

        const data = {
            firstName: firsNameInp.value,
            lastName: lastNameInp.value,
        }

        const promise = fetchPost(apiUrl, data);
        promise
            .catch(err => console.error(err))
            .finally(() => loadUsers())
    });
  
}
