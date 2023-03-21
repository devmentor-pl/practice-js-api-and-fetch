const apiUrl = 'http://localhost:3000/users'

document.addEventListener('DOMContentLoaded', init)

function init() {
	const formEl = document.querySelector('form')
	if (formEl) {
		formEl.addEventListener('submit', handleSubmit)
	}
	loadUsers()
}

function loadUsers() {
	const promise = fetchGet(apiUrl)

	promise.then((data) => insertUsers(data)).catch((err) => console.error(err))
}

function fetchGet(url) {
	return fetch(url).then((resp) => {
		if (resp.ok) {
			return resp.json()
		}

		return Promise.reject(resp)
	})
}

function insertUsers(usersList) {
	const ulElement = document.querySelector('.users')
	ulElement.innerHTML = ''
	usersList.forEach((user) => {
		const liElement = document.createElement('li')
		liElement.innerText = `${user.firstName} ${user.lastName}`

		ulElement.appendChild(liElement)
	})
}

function handleSubmit(e) {
	e.preventDefault()

	const firstName = e.target.elements[0]
	const lastName = e.target.elements[1]

	if (firstName.value.length > 3 && lastName.value.length > 3) {
		const data = {
			firstName: firstName.value,
			lastName: lastName.value,
		}

		addUser(data)
	} else {
		alert('Enter correct first and last name!')
	}
}

function addUser(newUser) {
	const options = {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: { 'Content-Type': 'application/json' },
	}

	fetch(apiUrl, options)
		.then((resp) => console.log(resp))
		.catch((err) => console.log(err))
		.finally(loadUsers())
}
