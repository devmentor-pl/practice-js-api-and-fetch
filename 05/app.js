const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
	loadUsers();
	addUsers();
}

function loadUsers() {
	const promise = fetchGet(apiUrl);

	promise.then(data => insertUsers(data)).catch(err => console.error(err));
}

function validateUserData(firstName, lastName) {
	const nameRegex = /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż -]+$/;

	if (!firstName.trim() || !lastName.trim()) {
		return { value: false, message: 'Wypełnij oba pola' };
	}

	if (firstName.length < 2 || lastName.length < 2) {
		return { value: false, message: 'Wpisz poprawne imię i nazwisko' };
	}

	if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
		return { value: false, message: 'Imię i nazwisko mogą zawierać tylko litery' };
	}

	return { value: true };
}

function addUsers() {
	const form = document.querySelector('form');
	form.addEventListener('submit', e => {
		e.preventDefault();

		const { firstName, lastName } = e.target.elements;

		const validation = validateUserData(firstName.value, lastName.value);
		if (!validation.value) {
			alert(validation.message);
			return;
		}

		const data = {
			firstName: firstName.value,
			lastName: lastName.value,
		};

		const promise = fetchPost(apiUrl, data);

		promise
			.then(() => form.reset())
			.catch(err => console.error(err))
			.finally(loadUsers);
	});
}

function fetchGet(url) {
	return fetch(url).then(resp => {
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

	return fetch(url, options).then(resp => {
		if (resp.ok) {
			return resp.json();
		}

		return Promise.reject(resp);
	});
}

function insertUsers(usersList) {
	const ulElement = document.querySelector('.users');
	ulElement.innerHTML = '';
	usersList.forEach(user => {
		const liElement = document.createElement('li');
		liElement.innerText = `${user.firstName} ${user.lastName}`;

		ulElement.appendChild(liElement);
	});
}
