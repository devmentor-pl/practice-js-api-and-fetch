const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();
  addDataToJson();
}

function loadUsers() {
  const promise = fetchData(apiUrl);

  promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function fetchData(url, options) {
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

function takeDataFromUser() {
  const firstName = document.querySelector(".form__field--first-name").value;
  const lastName = document.querySelector(".form__field--last-name").value;
  return { firstName: firstName, lastName: lastName };
}

function addDataToJson() {
  const buttonEl = document.querySelector(".form__submit");
  if (buttonEl) {
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();

      const { firstName, lastName } = takeDataFromUser();
      const data = { firstName: firstName, lastName: lastName };

      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      };

      const promise = fetchData(apiUrl, options);
      promise
        .then((resp) => console.log(resp))
        .catch((err) => console.error(err))
        .finally(loadUsers);
    });
  }
}
