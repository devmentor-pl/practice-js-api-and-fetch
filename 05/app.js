const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {       
    loadUsers();
    addUser();
}

function loadUsers() {
    const promise = runFetch(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function addUser() {
    const form = document.querySelector('form');    
    form.addEventListener('submit', sendUserToAPI);
}

function runFetch(url, option) {
    return fetch(url, option)
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

function sendUserToAPI(e) {

    e.preventDefault(); 

    const userData = getUserData(e.target.elements);
    
    if (isCorrectUserData(userData)) {
        const options = {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {'Content-Type': 'application/json'}
        };

        runFetch(apiUrl, options)
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err))
            .finally(loadUsers);
    }
    else {
        e.target.reset();
        alert('Wprowdź poprawne dane!')
    }
}

function getUserData([firstNameInput, lastNameInput]) {
               
    return {firstName : firstNameInput.value, lastName : lastNameInput.value}
}

function isCorrectUserData(userData) {
    
    const {firstName, lastName} = userData;
    const rex = /^[A-Za-z]{3,}/;

    if (!rex.test(firstName) || !rex.test(lastName)) return false;

    return true;

}
