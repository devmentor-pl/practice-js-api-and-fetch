const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
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
    submit();
}

function submit() {
    const btn = document.querySelector('.form__submit');
    btn.addEventListener('click', e => {
        e.preventDefault();
        const firstName = document.querySelector('.form__field--first-name').value;
        const lastName = document.querySelector('.form__field--last-name').value;
        addUser(firstName, lastName);
    });
}

function addUser(firstName, lastName, id) {

    const newUser = {
        "firstName": firstName,
        "lastName": lastName,
    }

    fetch(apiUrl, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser),
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
    .finally(loadUsers())

}