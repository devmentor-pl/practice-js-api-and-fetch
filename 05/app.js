const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    const form = document.querySelector('form');
    form.addEventListener('submit', addUsers);
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

function addUsers(e){
    
        e.preventDefault();

        const nameEl = document.querySelector('.form__field--first-name');
        const lastNameEL = document.querySelector('.form__field--last-name');
      
        const data = {
            firstName: nameEl.value,
            lastName : lastNameEL.value
        };

     
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type' : 'application/json'}
        };

        fetch(apiUrl,options)
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
            .finally(loadUsers()); 
}
