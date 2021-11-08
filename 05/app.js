const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
	loadUsers();
}

const form = document.querySelector('.form');
form.addEventListener('submit', addUser);

const firstNameInput = document.querySelector('.form__field--first-name');
const lastNameInput = document.querySelector('.form__field--last-name');

function addUser(e) {
	e.preventDefault();

	const data = {
		firstName: firstNameInput.value,
		lastName: lastNameInput.value,
	};

	const options = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	};

	if (firstNameInput.value && lastNameInput.value) {
		const promise = fetchGet(apiUrl, options);
		promise
			.then((data) => insertUsers(data))
			.catch((err) => console.error(err));
	} else {
		alert('Wrong input!');
	}
}

function loadUsers() {
	const promise = fetchGet(apiUrl);

	promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function fetchGet(url, options) {
	return fetch(url, options).then((resp) =>
		resp.ok ? resp.json() : Promise.reject(resp)
	);
}

function insertUsers(usersList) {
	const ulElement = document.querySelector('.users');
	ulElement.innerHTML = '';
	usersList.forEach((user) => {
		const liElement = document.createElement('li');
		liElement.innerText = `${user.firstName} ${user.lastName}`;

		ulElement.appendChild(liElement);
	});
}
