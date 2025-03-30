const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadUsers();
  addUser();
}

function addUser() {
  const formEl = document.querySelector('form');
  if (formEl) {
    formEl.addEventListener('submit', onSubmit);
  }
}

function onSubmit(e) {
  e.preventDefault();
  const [firstName, lastName] = e.target.elements;
  if (firstName && lastName) {
    addNewUser(firstName.value, lastName.value);
  }
}

function addNewUser(firstName, lastName) {
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ firstName, lastName }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .catch((err) => console.log(err))
    .finally(loadUsers());
}

function loadUsers() {
  const promise = fetchGet(apiUrl);

  promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function fetchGet(url) {
  return fetch(url).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }

    return Promise.reject(resp);
  });
}

function insertUsers(usersList) {
  const ulElement = document.querySelector('.users');
  ulElement.innerHTML = '';
  usersList.forEach((user) => {
    const liElement = document.createElement('li');
    liElement.innerText = `${user.firstName} ${user.lastName}`;

    ulElement.appendChild(liElement);
  });
}
