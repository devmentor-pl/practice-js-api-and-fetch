const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();
  addUser();
}

function addUser() {
  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", handleForm);
}

function handleForm(e) {
  e.preventDefault();
  const [firstName, lastName] = e.target.elements;
  addNewUser(firstName.value, lastName.value);
}

function addNewUser(firstName, lastName) {
  postNewUser(firstName, lastName)
    .then((resp) => {
      if (resp.ok) resp.json();
    })
    .then((resp) => console.log(data))
    .catch((err) => console.log("Can not download data", err))
    .finally(loadUsers);
}

function postNewUser(firstName, lastName) {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ firstName: firstName, lastName }),
    headers: { "Content-Type": "application/json" },
  });
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
  const ulElement = document.querySelector(".users");
  ulElement.innerHTML = "";
  usersList.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.innerText = `${user.firstName} ${user.lastName}`;

    ulElement.appendChild(liElement);
  });
}
