document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('DOM');
	const btn = document.querySelector('button');
	btn.addEventListener('click', showIp);
}

function showIp() {
	const spanEl = document.querySelector('span');

	const promise = fetch('https://api.ipify.org');

	promise
		.then(resp => {
			if (resp.ok) {
				return resp.text();
			}
			return Promise.reject(resp);
		})
		.then(ip => (spanEl.innerText = ip))
		.catch(err => console.log(err))
		.finally(() => {
			console.log(('Odpytywanie API zakończone!'));
		});
}
