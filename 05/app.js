const apiUrl = "http://localhost:3000/users";
const regexName = /^[a-zA-Z ]{2,30}$/;

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
  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const [firstNameInput, lastNameInput] = e.target.elements;
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const areInputsValid = checkNames(firstName, lastName);
    if (!areInputsValid) return alert("Inputs are not valid");

    const data = {
      firstName,
      lastName,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    fetch(apiUrl, options)
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err))
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

function checkNames(...names) {
  const areInputsValid = names.every((name) => {
    return regexName.test(name);
  });
  return areInputsValid;
}
