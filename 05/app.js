const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadUsers();
  loadSubmit();
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

function loadSubmit() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = getValuesFromForm();
    renameKey(user, "first-name", "firstName");
    renameKey(user, "last-name", "lastName");
    if (user.lastName.length > 1 && user.firstName.length > 1) {
      sendToApi(user);
    } else {
      alert("Enter valid name!");
    }
  });
}

function getValuesFromForm() {
  const inputObj = {};
  const inputArr = document.querySelectorAll(".form__field");
  inputArr.forEach((input) => {
    const key = [...input.classList]
      .find((cl) => cl.startsWith("form__field--"))
      .split("--")[1];

    inputObj[key] = input.value.trim();
  });
  return inputObj;
}

function renameKey(obj, oldKey, newKey) {
  if (oldKey !== newKey && obj.hasOwnProperty(oldKey)) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
}

async function sendToApi(obj) {
  const fetchObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };

  try {
    const response = await fetch(apiUrl, fetchObj);
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error while sending data: ${error}`);
  } finally {
    loadUsers();
  }
}
