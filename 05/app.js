const apiUrl = 'http://127.0.0.1:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
	loadUsers();
	addUser();
}

function addUser() {
	const submitBtn = document.querySelector('.form__submit');
	submitBtn.addEventListener('click', (e) => {
		const firstName = document.querySelector('.form__field--first-name').value;
		const lastName = document.querySelector('.form__field--last-name').value;
		e.preventDefault();
		const promise = fetchPost(apiUrl, { firstName, lastName });
		promise.finally(loadUsers).catch((err) => console.error(err));
	});
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

function fetchPost(url, data) {
	const options = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	};
	return fetch(url, options).then((resp) => {
		if (resp.ok) {
			return resp.json();
		}

		return Promise.reject(resp);
	});
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
