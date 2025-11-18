document.addEventListener('DOMContentLoaded', init);

async function init() {
	console.log('DOM');
	initButton();
}

async function initButton() {
	const button = document.querySelector('button');
	const ipField = document.querySelector('span');
	try {
		const ip = await getIp();
		button.addEventListener('click', () => {
			ipField.innerText = ip;
		});
	} catch (err) {
		ipField.innerText = err.message;
	}
}

async function getIp() {
	const URL = 'https://api.ipify.org?format=json';
	try {
		const response = await fetch(URL);
		if (!response.ok) {
			throw new Error('Something went wrong!!!');
		}
		const data = await response.json();
		return data.ip;
	} catch (err) {
		throw new Error('Connection problem');
	}
}
