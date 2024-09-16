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

function addUser () {
    const formEl = document.querySelector('.form');
    formEl.addEventListener('submit', e => {
        e.preventDefault();
        
        if((formEl.elements[0].value!=="")&&(formEl.elements[1].value!=="")) {
            const firstName = e.target.elements[0];
            const lastName = e.target.elements[1];
            
            const data = {
                firstName: firstName.value,
                lastName: lastName.value
            }
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            }
            fetch(apiUrl, options)
                .then(response => console.log(response))
                .catch(err => console.log(err))
                .finally(loadUsers)
        } else {
            alert('Pola formularza są nieprawidłowo wypełnione!')
        }
       
    });
}
