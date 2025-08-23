document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('DOM');
}

const btn = document.querySelector('button');
btn.addEventListener('click', getIP);

const span = document.querySelector('span');

const promise = fetch('https://api.ipify.org');

function getIP() {
	promise
		.then((resp) => {
			return resp.ok ? resp.text() : Promise.reject(resp);
		})
		.then((ip) => {
			span.textContent = ip;
		})
		.catch((err) => console.error(err))
		.finally(() => console.log('API query complete!'));
}
