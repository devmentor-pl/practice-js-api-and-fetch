const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
}

function addUser() {
    const formEl = document.querySelector('.form');
    if(formEl) {
        formEl.addEventListener('submit', handleAddUserSubmit)
    }

    function handleAddUserSubmit(e) {
        e.preventDefault();
        const [firstName, lastName] = formEl.elements;
        
        if(firstName.value && lastName.value) {
            addNewUser(firstName.value, lastName.value)
        }
        
    }
}

function addNewUser(firstName, lastName) {
    const promise = fetchPOST(apiUrl, {firstName, lastName});

    promise
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .finally(loadUsers)

}

function fetchPOST(url, data) {
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
