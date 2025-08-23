const apiUrl = 'http://localhost:3000/users';
// const apiUrl = './data.json';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers()
    addUsers()
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
            console.log(resp)
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp)
        });
}

function insertUsers(usersList) {
    console.log(usersList)
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}

function addUsers() {
    const form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('submit')

        console.log(e.target)
        const [name, last] = e.target.elements
        console.log(name.value)
        console.log(last.value)

        fetchPost(name.value, last.value)

    })
}
function fetchPost(name, last) {

    const data = {
        "firstName": name,
        "lastName": last
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    }

    const promise = fetch(
        apiUrl,
        options
    )
    promise
        .then(resp => {
            if(resp.ok) return resp.json()
            return Promise.reject(resp)
        })
        .then(console.log)
        .catch(console.log)
        .finally(loadUsers)
}


