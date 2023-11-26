document.addEventListener('DOMContentLoaded', init)
const button = document.querySelector('button')
const span = document.querySelector('span')

function init() {
	getMyIp()
}

const getMyIp = () => {
	const ipAdress = fetch('https://api.ipify.org')

	ipAdress
		.then(resp => {
			if (resp.ok) {
				return resp.text()
			} else {
				return Promise.reject(`Http error: ${res.status}`)
			}
		})
		.then(data => {
			btnFunc(data)
		})
		.catch(error => {
			console.error(error)
		})
}

const btnFunc = data => {
	if (button) {
		button.addEventListener('click', () => {
			span.innerText = data
		})
	}
}
