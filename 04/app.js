document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}
function init() {
	const form = document.querySelector(".form");
	const latInput = document.querySelector(".form__field--lat");
	const lngInput = document.querySelector(".form__field--lng");
	const weatherSection = document.querySelector(".weather");
	const latOutput = document.querySelector(".weather__lat");
	const lngOutput = document.querySelector(".weather__lng");
	const summaryOutput = document.querySelector(".weather__summary");
	const temperatureOutput = document.querySelector(".weather__temperature");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const latitude = latInput.value;
		const longitude = lngInput.value;

		if (latitude && longitude) {
			getWeather(latitude, longitude)
				.then((data) => {
					latOutput.textContent = latitude;
					lngOutput.textContent = longitude;
					summaryOutput.textContent = data.weather.description;
					temperatureOutput.textContent = data.temp;
				})
				.catch((error) => {
					console.error("Error fetching weather:", error);
				});
		} else {
			alert("Please enter both latitude and longitude.");
		}
	});
}

async function getWeather(latitude, longitude) {
	const apiKey = c20f6792d19f4868b494c7d8e4769086; 
	const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}`;

	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		const { weather, temp } = data.data[0];
		return { weather, temp };
	} catch (error) {
		throw new Error("Error parsing response:", error);
	}
}