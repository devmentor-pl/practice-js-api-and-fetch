import ApiHandler from './ApiHandler.js';
const resource = '/users';

const form = document.querySelector('form');
document.addEventListener('DOMContentLoaded', init);

function init() {
	const apiHandler = new ApiHandler();
	apiHandler.load(resource).then(resp => insertUsers(resp));

	form.addEventListener('submit', getDataFromInput);

	function getDataFromInput(e) {
		// i tak strone przeladowuje :|
		e.preventDefault();
		e.stopPropagation();
		const name = document.querySelector('.form__field--first-name').value;
		const lastName = document.querySelector('.form__field--last-name').value;

		if (name != '' && lastName != '') {
			const userData = {
				firstName: name,
				lastName: lastName,
			};
			apiHandler.create(resource, userData).then(data => console.log(data));
		}
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
}
