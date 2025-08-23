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
            if (resp.ok) {
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

function addUser() {
    const form = document.querySelector(".form");

    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements);
    const errorMsg = document.querySelector(".error__msg");
    errorMsg.textContent = "";
    const [firstNameEl, lastNameEl] = e.target.elements;
    const isValid = [firstNameEl, lastNameEl].every((element) => {
        return element.value
    })

    if (!isValid) {
        errorMsg.textContent = "Wprowadź imię i nazwisko";
        return;
    }
    const data = {
        firstName: firstNameEl.value,
        lastName: lastNameEl.value
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(apiUrl, options)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => loadUsers())

}
