document.addEventListener("DOMContentLoaded", init);

function init() {
	const getIpButton = document.querySelector("button");
	console.log(getIpButton);
	const ipSpan = document.querySelector("span");

	getIpButton.addEventListener("click", () => {
		fetch("https://api.ipify.org?format=json")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				const ipAddress = data.ip;
				ipSpan.textContent = ipAddress;
			})
			.catch((error) => {
				console.error("Error fetching IP:", error);
			});
	});
}
