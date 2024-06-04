const apiUrl = "http://localhost:3000/users"

document.addEventListener("DOMContentLoaded", init)

function init() {
	loadUsers()
	addUser()
}

const addUser = () => {
	const formEl = document.querySelector(".form")

	formEl.addEventListener("submit", e => {
		e.preventDefault()
		const firstNameInput = document.querySelector(".form__field--first-name")
		const firstNameInputValue = firstNameInput.value
		const lastNameInput = document.querySelector(".form__field--last-name")
		const lastNameInputValue = lastNameInput.value

		addNewUser(firstNameInputValue, lastNameInputValue)
	})
}


function addNewUser(firstName, lastName) {
    const options = {
        method: 'POST',
        body: JSON.stringify({firstName, lastName}),
        headers: {'Content-Type': 'application/json'}


    }
    fetch(apiUrl, options)
        .then(resp => {
            if(resp.ok) {
                return resp.json
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err))
        .finally(loadUsers)
}

function loadUsers() {
	const promise = fetchGet(apiUrl)

	promise.then(data => insertUsers(data)).catch(err => console.error(err))
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
	const ulElement = document.querySelector(".users")
	ulElement.innerHTML = ""
	usersList.forEach(user => {
		const liElement = document.createElement("li")
		liElement.innerText = `${user.firstName} ${user.lastName}`

		ulElement.appendChild(liElement)
	})
}
