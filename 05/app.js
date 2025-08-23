const apiUrl = 'http://localhost:3000/users'

document.addEventListener('DOMContentLoaded', init)

function init() {
	loadUsers()
	addUser()
}

function loadUsers() {
	const promise = fetchGet(apiUrl)

	promise
		.then(data => {
			insertUsers(data)
		})

		.catch(err => console.error(err))
}

function fetchGet(url) {
	return fetch(url).then(resp => {
		if (resp.ok) {
			return resp.json()
		}
		return Promise.reject(resp)
	})
}

function insertUsers(usersList) {
	const ulElement = document.querySelector('.users')
	ulElement.innerHTML = ''
	usersList.forEach(user => {
		const liElement = document.createElement('li')
		liElement.innerText = `${user.firstName} ${user.lastName}`
		ulElement.appendChild(liElement)
	})
}

function addUser() {
	const formEl = document.querySelector('.form')
	formEl.addEventListener('submit', e => {
		e.preventDefault()
		const { firstName, lastName } = e.target.elements

		const data = {
			firstName: firstName.value,
			lastName: lastName.value,
		}

		const options = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		}

		fetch(apiUrl, options)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
			.finally(loadUsers)
	})
}
