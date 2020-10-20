const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();

  const form = document.querySelector(".form");

  if (form) {
    form.addEventListener("submit", onSubmit);
  }
}

function loadUsers() {
  const promise = performFetch(apiUrl);

  promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function performFetch(url, options) {
  return fetch(url, options).then((resp) => {
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

function onSubmit(e) {
  e.preventDefault();

  const firstName = getInputValue(".form__field--first-name");
  const lastName = getInputValue(".form__field--last-name");

  if (!isValueValid(firstName)) {
    alert("Proszę podać imię.");
    return;
  }

  if (!isValueValid(lastName)) {
    alert("Proszę podać nazwisko.");
    return;
  }

  saveData(firstName, lastName)
    .catch((err) => console.error(err))
    .finally(loadUsers);
}

function saveData(firstName, lastName) {
  const data = { firstName, lastName };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return performFetch(apiUrl, options);
}

function getInputValue(selector) {
  const elem = document.querySelector(selector);

  if (elem) {
    return elem.value;
  }

  return null;
}

function isValueValid(value) {
  return value !== null && value.trim().length > 0;
}
