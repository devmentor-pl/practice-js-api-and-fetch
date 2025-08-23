const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUser();
}

function addUser() {
    const formElement = document.querySelector('.form');
    if (formElement) {
        formElement.addEventListener(
            'submit',
            handleSubmit
        );
    };

    function handleSubmit(e) {
        e.preventDefault();

        const [firstName, lastName] = e.target.elements;
        if (firstName.value && lastName.value) {
            addNewUser(firstName.value, lastName.value);
        } else {
            const errorMessageElement = document.createElement('p');
            errorMessageElement.innerText = 'Wprowadzono błędne dane!';
            errorMessageElement.style.color = 'red';
            formElement.appendChild(errorMessageElement);
        };
    };

    function addNewUser(firstName, lastName) {
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.ok) {
                return response.json();
            };
        }).finally(loadUsers);
    };
};

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
