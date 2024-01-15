const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadUsers();

    const form = document.querySelector(".form");
    form.addEventListener("submit", handleFormSubmit);
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then((data) => {
            console.log("Otrzymane dane z API:", data);
        })
        .catch((err) => console.error(err));
}

function handleFormSubmit(event) {
    event.preventDefault();

    const firstNameInput = document.querySelector(".form__field--first-name");
    const lastNameInput = document.querySelector(".form__field--last-name");

    const newUser = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
    };

    const promise = fetchPost(apiUrl, newUser);

    promise
        .then(() => {
            loadUsers(); // Aktualizacja widoku po dodaniu użytkownika
            clearFormInputs(); // Wyczyszczenie pól formularza
        })
        .catch((err) => console.error(err));
}

function fetchPost(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((resp) => {
        if (resp.ok) {
            return resp.json();
        }
        return Promise.reject(resp);
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

    if (usersList && Array.isArray(usersList)) {
        console.log("Przekazywane dane do insertUsers:", usersList);

        usersList.forEach((user) => {
            console.log("Przetwarzany użytkownik:", user);

            const liElement = document.createElement("li");
            liElement.innerText = `${user.firstName} ${user.lastName}`;

            ulElement.appendChild(liElement);
        });
    } else {
        console.error("Nieprawidłowa lista użytkowników:", usersList);
    }
}

function clearFormInputs() {
    const firstNameInput = document.querySelector(".form__field--first-name");
    const lastNameInput = document.querySelector(".form__field--last-name");

    firstNameInput.value = "";
    lastNameInput.value = "";
}
