const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
  loadUsers();
  removeUsers();
  addUsers();
}

function loadUsers() {
  const promise = fetchGet(apiUrl);

  promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function fetchGet(url) {
  return fetch(url).then((resp) => {
    if (resp.ok) {
      //   console.log(resp.json());
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
    liElement.dataset.id = user.id;

    ulElement.appendChild(liElement);
  });
}

function removeUsers() {
  const ulEl = document.querySelector('.users');
  ulEl.addEventListener('click', (e) => {
    const targetEl = e.target;
    if (targetEl.tagName === 'LI') {
      const id = targetEl.dataset.id;
      const options = {method: 'DELETE'};
      fetch(`${apiUrl}/${id}`, options)
        .then((resp) => console.log(resp))
        .catch((err) => console.error(err))
        .finally(loadUsers);
    }
  });
}

function addUsers() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.elements[0].value);
    const {firstName, lastName} = e.target.elements;
    if (!firstName.value && !lastName.value) {
      alert('Puste pola formularza');
      return;
    }
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    };
    fetch(apiUrl, options)
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err))
      .finally(loadUsers);
  });
}
