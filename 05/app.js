const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', sendToAPIandList)
    }
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

function sendToAPIandList(e) {
    e.preventDefault();
    const [name, surname] = e.target.elements
    if (hasOnlyLettersAndHyphen(name.value) && hasOnlyLettersAndHyphen(surname.value)) {
        const data = {
            firstName: name.value,
            lastName: surname.value
        }
        postData(data)
    } else {
        alert('Only letters of polish alphapet and a hyphen allowed.')
    }
}

function hasOnlyLettersAndHyphen(element) {
    return /^[A-ZÓŚŹŻŁ][a-ząęóćśźżńł]+[\-]?([A-ZÓŚŹŻŁ][a-zząęóćśźżńł]+)?$/.test(element)
}

function postData(userData) {
    const options = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(apiUrl, options)
        .catch(err => console.error(err))
        .finally(loadUsers())
}
