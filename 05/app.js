const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

const form = document.querySelector(".form");

function init() {
  loadUsers();

  form.addEventListener("submit", (e) => {
    submitData(e);
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

function submitData(e) {
  e.preventDefault();
  const formElements = Array.from(e.currentTarget.elements);

  const [firstName, lastName] = formElements;

  if (firstName.value.length > 1 && lastName.value.length > 1) {
    console.log("test");
    fetchData(firstName.value, lastName.value);
  }
}

function fetchData(firstName, lastName) {
  const data = {
    firstName: firstName,
    lastName: lastName,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  fetch(apiUrl, options)
    .then((resp) => console.log(resp))
    .catch((err) => console.error(err))
    .finally(loadData);
}
