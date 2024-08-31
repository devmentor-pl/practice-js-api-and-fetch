const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();
  addUser();
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

function addUser() {
  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const { value: firstName } = formEl.querySelector(
      ".form__field--first-name"
    );
    const { value: lastName } = formEl.querySelector(".form__field--last-name");
    const data = { firstName: firstName, lastName: lastName };
    formEl.reset();
    console.log(data);
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
    fetch(apiUrl, options)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(loadUsers);
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
