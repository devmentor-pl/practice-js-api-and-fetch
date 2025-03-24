const apiUrl = 'http://localhost:3000/users';

const init = () => {
    loadUsers();
    addUser();
}

const loadUsers = () => {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

const fetchGet = (url) =>{
    return fetch(url)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        });
}

const insertUsers = (usersList) => {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

const addUser = () => {
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', submitForm);
}

const submitForm = e => {
    e.preventDefault();

    const firstName = document.querySelector('.form__field--first-name');
    const lastName = document.querySelector('.form__field--last-name');
    const user = {firstName: firstName.value, lastName: lastName.value};

    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
    };

    fetch(apiUrl, options)
        .then(resp => console.log(resp))
        .catch(err => console.error(err))
        .finally(loadUsers());
}

document.addEventListener('DOMContentLoaded', init);
