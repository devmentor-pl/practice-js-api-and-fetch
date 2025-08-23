document.addEventListener("DOMContentLoaded", init);
const form = document.querySelector(".form");

function init() {
	console.log("DOM");

	form.addEventListener("submit", getWeather);
}

function isCorrectLat(value) {
	return value >= 0 && value <= 90;
}

function isCorrectLong(value) {
	return value >= 0 && value <= 180;
}

function getWeather(e) {
	e.preventDefault();
	const latitudeValue = Number(form.querySelector(".form__field--lat").value);
	const longitudeValue = Number(form.querySelector(".form__field--lng").value);
	const latitude = form.querySelector(".form__field--lat");
	const longitude = form.querySelector(".form__field--lng");

	latitude.value = "";
	longitude.value = "";

	if (isCorrectLat(latitudeValue) && isCorrectLong(longitudeValue)) {
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
				putWeatherData(resp, latitudeValue, longitudeValue);
			})

			.catch(err => console.error(err))
			.finally(() => console.log("your weather"));
	} else {
		alert("Please choose correct latitude and longitude");
	}
}

function putWeatherData(resp, latitudeValue, longitudeValue) {
	const latitudeInText = document.querySelector(".weather__lat");
	const longitudeInText = document.querySelector(".weather__lng");
	const weatherDescription = document.querySelector(".weather__summary");
	const temperature = document.querySelector(".weather__temperature");

	latitudeInText.innerText = latitudeValue;
	longitudeInText.innerText = longitudeValue;
	weatherDescription.innerText = resp.data[0].weather.description;
	temperature.innerText = resp.data[0].temp;
}
