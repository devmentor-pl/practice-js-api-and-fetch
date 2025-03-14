const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);


function init() {
    loadUsers();
    document.querySelector('.form').addEventListener('submit', handleFormSubmit);
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

function handleFormSubmit(e) {
    e.preventDefault();

    const firstName = document.querySelector('.form__field--first-name').value;
    const lastName = document.querySelector('.form__field--last-name').value;
    fetchGet(apiUrl)
        .then(users => {
            const maxId = users.reduce((max, user) => user.id > max ? user.id : max, 0);
            const userData = { id: maxId + 1, firstName, lastName };
            return fetchPost(apiUrl, userData);
        })
        .then(() => loadUsers())
        .catch(err => console.error(err))
        .finally(() => {
            document.querySelector('.form__field--first-name').value = '';
            document.querySelector('.form__field--last-name').value = '';
        });
}

function fetchPost(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        return Promise.reject(resp);
    });
}
