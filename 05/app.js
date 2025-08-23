const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
}

function addUser() {
    const formEl = document.querySelector('.form');

    if(formEl) {
        formEl.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(e.target.elements)
        const firstNameEl = e.target.elements[0];
        const firstName = firstNameEl.value;
        const lastNameEl = e.target.elements[1];
        const lastName = lastNameEl.value;

        if(firstName && lastName) {
            fetchPost(apiUrl, {firstName, lastName})
                .then(resp => {
                    if(resp.ok) {
                        return resp.json();
                    }
                })
                .then(data => console.log(data))
                .catch(err => console.error(err))
                .finally( loadUsers );
        }
    }
}

function fetchPost(url, data) {
    const options = {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: {'Content-Type': 'application/json'}
    }
    return fetch(url, options)
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
