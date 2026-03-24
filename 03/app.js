document.addEventListener('DOMContentLoaded', init);

function init() {
	const btnGetIP = document.querySelector('button');
	const span = document.querySelector('span');

	if (!btnGetIP || !span) return;

	const getIP = () => {
		const promise = fetch('https://api.ipify.org?format=json');

		promise
			.then(resp => {
				if (!resp.ok) {
					return Promise.reject(`HTTP error: ${resp.status}`);
				}
				return resp.json();
			})
			.then(data => {
				if (!data.ip) throw new Error('Brak pola ip');
				span.textContent = data.ip;
			})
			.catch(err => console.error(`Błąd: ${err.status} ${err}`));
	};

	btnGetIP.addEventListener('click', getIP);
}
