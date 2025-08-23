const apiUrl = 'http://localhost:3000/users';
const fields = [{
    name: 'firstName',
    isReq: true,
    pattern: '^[A-Za-z]{3,}'
}, {
    name: 'lastName',
    isReq: true,
    pattern: '^[A-Za-z]{3,}'
}];

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    addUserDatabase()
}
function addUserDatabase() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const [firstName, lastName] = form.elements;
        if (validForm(form)) {
            const data = { firstName: firstName.value, lastName: lastName.value };
            const options = {
                method: 'POST',
                body: JSON.stringify((data)),
                headers: { 'Content-Type': 'application/json' }
            };
            fetch(apiUrl, options);
        };
    });
};

function validForm(form) {
    isValid = false;
    fields.forEach((e) => {
        const { name, isReq, pattern } = e;
        const value = form.elements[name].value;
        if (isReq) {
            if (value === '') {
                return alert(`[${name}] field can not be empty`);
            };
            if (pattern) {
                const reg = new RegExp(pattern);
                if (!reg.test(value)) {
                    return alert('Please check if fields contains correctly value base it of them name');
                };
            };
        };
        isValid = true;
    });
    return isValid;
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
