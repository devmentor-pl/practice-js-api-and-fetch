const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();
  addUser();
}

function addUser() {
  const formElement = document.querySelector(".form");
  formElement.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    const [firstName, lastName] = e.target.elements;
    if (firstName.value && lastName.value) {
      addNewUser(firstName.value, lastName.value);
    }
  }
}

function addNewUser(firstName, lastName) {
  fetchPost(apiUrl, { firstName, lastName })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .finally(loadUsers);
}

function loadUsers() {
  const promise = fetchGet(apiUrl);

  promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function fetchPost(url, data) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
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
  const ulElement = document.querySelector(".users");
  ulElement.innerHTML = "";
  usersList.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.innerText = `${user.firstName} ${user.lastName}`;

    ulElement.appendChild(liElement);
  });
}
