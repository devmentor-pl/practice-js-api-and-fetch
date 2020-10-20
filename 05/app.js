const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addNewUsers();
   
}

function addNewUsers() {
    const form = document.querySelector('form');
    form.addEventListener('submit', add)
}

function add (e) {

e.preventDefault();
const  firstName = document.querySelector('.form__field--first-name');
const lastName = document.querySelector('.form__field--last-name');

const firstNameValue = firstName.value;
console.log(firstNameValue)
const lastNameValue = lastName.value;
console.log(lastNameValue)

const data = ({
    firstName: firstNameValue,
    lastName: lastNameValue
})

const options = {
    method: 'POST',
    body: JSON.stringify( data ),
    headers: {'Content-Type': 'application/json'}
    };
    fetch(apiUrl, options)
    .then(resp => console.log(resp))
    .catch(err => console.error(err))
    .finally( loadUsers );


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

