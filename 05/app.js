const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', postUser)
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

function postUser(evt) {
  evt.preventDefault();
  const {nameData} = bundleUserInput();
  console.log(JSON.stringify(nameData));

  const options = {
    method: 'POST',
    body: JSON.stringify(nameData),
    headers: {'Content-Type': 'application/json'}
  }
  
  fetch(apiUrl, options);
}

function bundleUserInput() {
  const firstNameInput = document.querySelector(".form__field--first-name");
  const lastNameInput = document.querySelector(".form__field--last-name");
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  const nameData = {
    firstName: firstName,
    lastName: lastName
  }
  return {nameData};
}