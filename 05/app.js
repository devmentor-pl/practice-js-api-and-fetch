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

function addUser() {

    const formSumbit = document.querySelector('.form__submit');

    formSumbit.addEventListener('click', e => {
        e.preventDefault();
        
        const name = document.querySelector('.form__field--first-name');
        const surname = document.querySelector('.form__field--last-name');
        
        const data = {
            firstName: name.value,
            lastName: surname.value,
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
        }

        const promise = fetch(apiUrl, options,);

        promise
            .then(resp => {
                if (resp.ok) { return resp.json(); }
                return Promise.reject(resp);
            })
            
            .catch(err => console.error(err))
            .finally(() => {
                loadUsers(),
                name.value = '',
                surname.value = ''
            })
    })
}
