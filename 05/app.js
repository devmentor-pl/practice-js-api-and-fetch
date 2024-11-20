const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
	loadUsers();
	addUser();
}
function addUser() {
	const formEl = document.querySelector('form');
	if (formEl) {
		formEl.addEventListener('submit', handleSubmit);
	}
	function handleSubmit(e) {
		e.preventDefault();
		const [firstName, lastName] = e.target.elements;
		if (firstName.value && lastName.value) {
			addNewUser(firstName.value, lastName.value);
		}
	}
}
// function addNewUser(firstName, lastName) {
// 	fetch(apiUrl, {
// 		method: 'POST',
// 		body: JSON.stringify({ firstName, lastName }),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 		.then((response) => {
// 			if (response.ok) {
// 				return response.json();
// 			} else {
// 				throw new Error(`HTTP error! status: ${response.status}`);
// 			}
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.finally(loadUsers)
// 		.catch((error) => {
// 			console.error('Błąd podczas dodawania nowego użytkownika:', error);
// 		});
// }

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
}

async function addNewUser(firstName, lastName) {
	try {
		const data = await postData(apiUrl, { firstName, lastName });
		console.log(data);
	} catch (error) {
		console.error('Błąd podczas dodawania nowego użytkownika:', error);
	} finally {
		loadUsers();
	}
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
	const ulElement = document.querySelector('.users');
	ulElement.innerHTML = '';
	usersList.forEach((user) => {
		const liElement = document.createElement('li');
		liElement.innerText = `${user.firstName} ${user.lastName}`;

		ulElement.appendChild(liElement);
	});
}
