const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();

    const formEl = document.forms[0];
    const firstNameInputEl = formEl.querySelector('.form__field--first-name');
    const lastNameInputEl = formEl.querySelector('.form__field--last-name');

    formEl.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const data = {
            "firstName": firstNameInputEl.value,
            "lastName": lastNameInputEl.value,
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(apiUrl, options)
            .then((resp) => {
                if (resp.ok) {
                    alert("Dane wprowadzone!")
                }
            })
            .catch(err => alert(err))
            .finally(() => {
                loadUsers()
            })
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
