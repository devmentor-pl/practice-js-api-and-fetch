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

async function fetchPost(url, data) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Error occured" + response.status);
  }

  return console.log(response);
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

function addUser() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  const firstName = e.currentTarget.elements[0];
  const lastName = e.currentTarget.elements[1];

  if (firstName.value === "" || lastName.value === "")
    return console.log("Pola nie moga byc puste");

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
  };

  fetchPost(apiUrl, data)
    .catch((err) => console.error(err))
    .finally(() => {
      loadUsers();
      firstName.value = "";
      lastName.value = "";
    });
}
