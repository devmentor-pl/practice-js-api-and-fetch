const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();
  handleForm();
}

function handleForm() {
  const form = document.querySelector("form");

  form.addEventListener("submit", sendUserData);
}

function sendUserData(e) {
  e.preventDefault();
  const firstName = document.querySelector(".form__field--first-name").value;
  const lastName = document.querySelector(".form__field--last-name").value;
  console.log(firstName, lastName);
  const data = { firstName, lastName };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }, // zwykle JSON, informacja w docs
  };
  fetch(apiUrl, options).finally(loadUsers);
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
  // .then(data => {})
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
