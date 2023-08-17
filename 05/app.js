const apiUrl = 'http://localhost:3000/users';

const submitBtn = document.querySelector('.form__submit');
document.addEventListener('DOMContentLoaded', init);

function init() {
	loadUsers();
	submitBtn.addEventListener('click', getDataFromInput);
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

function getDataFromInput(e) {
	e.preventDefault();
	const name = document.querySelector('.form__field--first-name').value;
	const lastName = document.querySelector('.form__field--last-name').value;

	if (name != '' && lastName != '') {
		const userData = {
			firstName: name,
			lastName: lastName,
		};
		sendDataToServer(userData);
	} 
}
function sendDataToServer(userData) {
	const options = {
		method: 'POST',
		body: JSON.stringify(userData),
		headers: { 'Content-Type': 'application/json' },
	};
	const promise = fetch(apiUrl, options);

	promise
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		})
		.then(data => console.log(data))
		.catch(err => console.error(err));
        // nie dodaje finally() z odswiezaniem wynikow, bo widze ze nie jest to potrzebne 
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
