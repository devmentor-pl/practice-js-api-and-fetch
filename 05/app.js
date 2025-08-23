const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();

    const form = document.querySelector('.form');
    form.addEventListener("submit", handleSubmit);  
}

function handleSubmit(e) {
    e.preventDefault();

    const [firstNameInput, lastNameInput] = Array.from(e.target.elements);

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if(!firstName || !lastName) return;
    
    if(firstName.length < 3 || lastName.length < 3) {
        alert('First name and last name cannot be shorter that 3 characters!');
        return;
    }

    const newUser = { firstName, lastName };
    addUser(newUser);
}

function addUser(user) {
    const promise = fetchPost(apiUrl, user);

    promise
        .catch(err => console.error(err))
        .finally(loadUsers);
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchPost(url, data) {
    const options = {
        method: 'POST', 
        body: JSON.stringify( data ), 
        headers: { "Content-Type": "application/json" },
    };

    return fetch(url, options)
        .then(resp => {
            if(resp.ok) {
                return Promise.resolve(resp);
            }

            return Promise.reject(resp);
        });
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