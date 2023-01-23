const init = () => {
	const btn = document.querySelector('button');

	btn.addEventListener('click', getIP);
};

const getIP = () => {
	const URL = 'https://api64.ipify.org?format=json';
	const promise = fetch(URL);

	promise
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res);
		})
		.then((data) => setIP(data.ip))
		.catch((err) => console.error(err))
		.finally(console.log('Done'));
};

const setIP = (ip) => {
	const span = document.querySelector('span');
	span.textContent = ip;
};

document.addEventListener('DOMContentLoaded', init);
