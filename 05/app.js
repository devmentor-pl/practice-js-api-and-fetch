const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    
    loadUsers();
    const submit = document.querySelector('.form');
    submit.addEventListener('submit', addUser);
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

function addUser(ev) {
    ev.preventDefault();

    const userData = getUserDates();
    sendDatas(userData);
}

function sendDatas(userData) {

    const options = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {'Content-Type': 'application/json'}
    }

    const promise = fetch(apiUrl, options);

    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(() => loadUsers);
}

function getUserDates() {

    const firstName = document.querySelector('.form__field--first-name').value;
    const lastName = document.querySelector('.form__field--last-name').value;

    // console.log(typeof firstName);
    // console.log(typeof lastName);
    return {firstName, lastName};
}