document.addEventListener('DOMContentLoaded', init)

function init() {
	const btnEl = document.querySelector('button')

	if (btnEl) {
		btnEl.addEventListener('click', showIP)
	}
}

function showIP() {
	const spanEl = document.querySelector('span')
	const promise = fetch('https://api.ipify.org?format=json', { method: 'GET' })

	promise
		.then((resp) => {
			if (resp.ok) {
				return resp.json()
			}

			return Promise.reject(resp)
		})
		.then((resp) => (spanEl.textContent = resp.ip))
		.catch((err) => console.log(err))
		.finally(() => console.log('Odpytywanie API zakończone!'))
}
