
const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
	loadUsers();
	setupForm();
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

function setupForm() {
	const formElement = document.querySelector(".form");

	formElement.addEventListener("submit", function (event) {
		event.preventDefault();

		const firstNameInput = document.querySelector(".form__field--first-name");
		const lastNameInput = document.querySelector(".form__field--last-name");

		if(!firstNameInput.value || !lastNameInput.value) {
			alert("Please fill in all fields");
			return;
		}

		const newUser = {
			firstName: firstNameInput.value,
			lastName: lastNameInput.value,
		};

		addNewUser(newUser)
			.then(() => loadUsers())
			.catch((err) => console.error(err));

	
		firstNameInput.value = "";
		lastNameInput.value = "";
	});
}

function addNewUser(user) {
	return fetch(apiUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	}).then((resp) => {
		if (resp.ok) {
			return resp.json();
		}

		return Promise.reject(resp);
	});
}
