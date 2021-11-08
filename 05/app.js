const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
	loadUsers();
	addUser();
}

function addUser() {
	const form = document.querySelector('.form');
	form.addEventListener('submit', addData);
}

function addData(e) {
	e.preventDefault();
	const data = getData();
	return isDataValid(data) ? fetchPOST(data) : alert('Wrong input!');
}

function getData() {
	const firstName = document
		.querySelector('.form__field--first-name')
		.value.trim();
	const lastName = document
		.querySelector('.form__field--last-name')
		.value.trim();
	return { firstName, lastName };
}

function isDataValid({ firstName, lastName }) {
	const regEx = /^[a-z ,.'-]+$/i;
	return regEx.test(firstName) && regEx.test(lastName);
}

function loadUsers(options) {
	const promise = fetchGet(apiUrl, options);
	promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
}

function fetchPOST(data) {
	const options = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	};
	loadUsers(options);
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
