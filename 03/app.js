document.addEventListener('DOMContentLoaded', init);

function init() {
	const button = document.querySelector('button');

	button.addEventListener('click', getIp);
	console.log('DOM');
}

function getIp() {
	const urlApiIP = 'https://api.ipify.org?format=json';

	const ipNumber = fetch(urlApiIP);
	ipNumber.then(resp => resp.json()).then(data => showIp(data.ip));
}

function showIp(ipNumber) {
	const span = document.querySelector('span');
	span.textContent = ipNumber;
}
