document.addEventListener("DOMContentLoaded", init);

function init() {
	const form = document.querySelector("form");
	const API_KEY = "1afb275531dc4926a413e2161557d1a5";

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const { latitude, longditude } = getCoordinates();
		const apiUrl = fetch(
			`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lang=pl&units=I&lat=${latitude}&lon=${longditude}`
		);
		apiUrl
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				}
				return Promise.reject(resp);
			})
			.then((data) =>
				insertData(
					latitude,
					longditude,
					data.data[0].weather.description,
					data.data[0].temp
				)
			)
			.catch((err) => console.log(err));
	});

	function getCoordinates() {
		const latValue = document.querySelector(".form__field--lat").value;
		const lngValue = document.querySelector(".form__field--lng").value;
		return {
			latitude: latValue,
			longditude: lngValue,
		};
	}
	function insertData(latitude, longditude, summary, temp) {
		const latText = document.querySelector(".weather__lat");
		const lngText = document.querySelector(".weather__lng");
		const summaryItem = document.querySelector(".weather__summary");
		const tempItem = document.querySelector(".weather__temperature");
		latText.innerText = latitude;
		lngText.innerText = longditude;
		summaryItem.innerText = summary;
		tempItem.innerText = temp;
	}
}
