document.addEventListener("DOMContentLoaded", init);

function init() {
	console.log("DOM");
	const button = document.querySelector("button");
	button.addEventListener("click", getIP);
}

function getIP() {
	const promise = fetch("https://api.ipify.org?format=json");

	promise
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		})
		.then(resp => {
			const span = document.querySelector("span");
			span.innerText = resp.ip;
		})
		.catch(err => console.error(err))
		.finally(() => console.log("IP zostało pobrane"));
}
