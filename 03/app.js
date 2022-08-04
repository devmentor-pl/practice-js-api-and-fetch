document.addEventListener("DOMContentLoaded", init);

function init() {
	const button = document.querySelector("button");
	button.addEventListener("click", getIp);

	function getIp() {
		const span = document.querySelector("span");
		const apiUrl = fetch("https://api.ipify.org?format=json");
		apiUrl
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				}
				return Promise.reject(resp);
			})
			.then((ip) => (span.innerText = ip.ip))
			.catch((err) => console.log(err));
	}
}
