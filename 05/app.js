const apiUrl = 'http://localhost:3000/users';
const formEl = document.querySelector('form');


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
}


// tworzymy nasłuchiwanie na form
// wywołujemy w nim po submit load users


const addUser = (e) => {
    e.preventDefault();
    const [firstName, lastName] = formEl.elements;

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    if (firstNameValue.length > 0 && lastNameValue.length > 0) {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'id': '', 
                'firstName': firstNameValue,
                'lastName': lastNameValue
            })
        }).then(res => {
            if(res.ok) {
                return res.json()
            }
            return Promise.reject(res);
        })
        .catch(err => console.log(err))
        .finally(() => {
            loadUsers()
        })
    }
    else {
        alert('Podaj imię i nazwisko')
    }
}

formEl.addEventListener('submit', addUser)