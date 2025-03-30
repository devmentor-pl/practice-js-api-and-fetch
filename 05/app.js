const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadUsers();
  const form = document.querySelector('.form');
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const firstName = document.querySelector('.form__field--first-name');
  const lastName = document.querySelector('.form__field--last-name');

  if (firstName.value.length === 0 || lastName.value.length === 0) {
    alert('Proszę wypełnić wszystkie puste pola');
    return;
  }

  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
  };

  addUser(user);
}

function addUser(user) {
  const promise = fetchPost(apiUrl, user);
  promise
    .then(() => {
      loadUsers();
    })
    .catch((err) => console.error(err));
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

function fetchPost(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(resp);
  });
}
