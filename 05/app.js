const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

//console.log(firstName)
function init() {
    loadUsers();
    getUsersValue();
}

function getUsersValue(){
    const form = document.querySelector('form');
    form.addEventListener('submit', onClick);
    }


function onClick (event) {
    event.preventDefault();
    const firstName = document.querySelector('.form__field--first-name');
    const lastName = document.querySelector('.form__field--last-name')
    //console.log(firstName.value, lastName.value)
    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;

    const newUsers = ({
        firstName: firstNameVal,
        lastName: lastNameVal
    })
    fetchPost(apiUrl, newUsers)
        .then(() => console.log('ok'))
        .then(() => alert('błąd'))
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

function fetchPost(url, data){
   return fetch(url, {

        method: 'POST',
        body: JSON.stringify (data),
        
        headers: {'Content-Type': 'application/json'}
    })
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
