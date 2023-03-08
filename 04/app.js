document.addEventListener("DOMContentLoaded", init);
const form = document.querySelector(".form");

function init() {
	console.log("DOM");

	form.addEventListener("submit", getWeather);
}

function getWeather(e) {
	e.preventDefault();
	const latitudeValue = form.querySelector(".form__field--lat").value;
	const longitudeValue = form.querySelector(".form__field--lng").value;
	const latitudeInText = document.querySelector(".weather__lat");
	const longitudeInText = document.querySelector(".weather__lng");
	const weatherDescription = document.querySelector(".weather__summary");
	const temperature = document.querySelector(".weather__temperature");
	const key = "9396da9b853a437199b1f03a5cd706f4";

	const promise = fetch(
		`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitudeValue}&lon=${longitudeValue}&lang=pl`
	);

	promise
		.then(resp => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		})

		.then(resp => {
			latitudeInText.innerText = latitudeValue;
			longitudeInText.innerText = longitudeValue;
			weatherDescription.innerText = resp.data[0].weather.description;
			temperature.innerText = resp.data[0].temp;
		})
		.catch(err => console.error(err))
		.finally(() => console.log("your weather"));
}
