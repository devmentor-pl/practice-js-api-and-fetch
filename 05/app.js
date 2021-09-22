const apiUrl = 'http://localhost:3000/users';
document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
}

function loadUsers() {
    handleFetch(apiUrl)
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function handleFetch(url, options) {
    return fetch(url, options)
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

function addUser() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', addData)
}

function addData(e) {
    e.preventDefault();
    const data = getData();
    isEachDataValid(data) ?
        handlePostMethod(data) :
        alert('First name & last name are required - only letters & minimum 2 characters');
}

function getData() {
    const firstName = document.querySelector('.form__field--first-name').value.trim();
    const lastName = document.querySelector('.form__field--last-name').value.trim();
    return { firstName, lastName };
}

function isEachDataValid({ firstName, lastName }) {
    const stringRegex = /^[a-zA-Z]{2,}(?:(-| )[a-zA-Z]+){0,2}$/;
    return stringRegex.test(firstName) && stringRegex.test(lastName);
}

function handlePostMethod(data) {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }
    handleFetch(apiUrl, options)
        .catch(err => console.error(err))
        .finally(() => loadUsers())
}


