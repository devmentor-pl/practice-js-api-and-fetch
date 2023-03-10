const apiUrl = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", init);

function init() {
	loadUsers();
	addUser();
}

function loadUsers() {
	const promise = fetchGet(apiUrl);

	promise.then(data => insertUsers(data)).catch(err => console.error(err));
}

function fetchGet(url) {
	return fetch(url).then(resp => {
		if (resp.ok) {
			return resp.json();
		}
		return Promise.reject(resp);
	});
}

function insertUsers(usersList) {
	const ulElement = document.querySelector(".users");
	ulElement.innerHTML = "";
	usersList.forEach(user => {
		const liElement = document.createElement("li");
		liElement.innerText = `${user.firstName} ${user.lastName}`;
		ulElement.appendChild(liElement);
	});
}

function addUser() {
	const form = document.querySelector("form");

	form.addEventListener("submit", e => {
		e.preventDefault();

		const [firstName, lastName] = e.target.elements;

		if (firstName.value !== "" && lastName.value !== "") {
			const data = {
				firstName: firstName.value,
				lastName: lastName.value,
			};

			return data;
		}

		const options = {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		};

		fetch(apiUrl, options)
			.then(resp => console.log(resp))
			.catch(err => console.error(err))
			.finally(loadUsers);
	});
}
