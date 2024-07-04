const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('.form')

    formEl.addEventListener('submit', e => {
        e.preventDefault()

        const firstNameEl = formEl.querySelector('.form__field--first-name')
        const firstNameValue = firstNameEl.value
        const lastNameEl = formEl.querySelector('.form__field--last-name')
        const lastNameValue = lastNameEl.value

        const data = {
            firstName: firstNameValue, lastName: lastNameValue,
        }

        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }
        fetch(apiUrl, options)
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
            .finally( loadUsers() )
    })
    loadUsers()
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
