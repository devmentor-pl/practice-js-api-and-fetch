const apiUrl = 'http://localhost:4000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {

    loadUsers();

    const form = document.querySelector('.form')
    form.addEventListener('submit', formSubmit)

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

// add new users to json

function formSubmit(e){


    // no add data to form

    e.preventDefault()

    const firstName = document.querySelector('.form__field--first-name').value.trim()
    const lastName = document.querySelector('.form__field--last-name').value.trim()

    if(!firstName || !lastName){
        alert('Wróć do formularza, wypełnij cały!')
        return
    }

    const newUser = {
        firstName, lastName
    }

    // POST 

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    .then(resp =>{

        if(!resp.ok) return Promise.reject(resp)
            return resp.json()
    })

    .then(() => {
        loadUsers()
    })

    .catch(err => console.error(err))

    e.target.reset()

}