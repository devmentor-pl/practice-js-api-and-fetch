document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('DOM');

	const formEl = document.querySelector('form');
	const latitudeEl = document.querySelector('.form__field--lat');
	const longitudeEl = document.querySelector('.form__field--lng');
	const latInfo = document.querySelector('.weather__lat');
	const lngInfo = document.querySelector('.weather__lng');
	const tempInfo = document.querySelector('.weather__temperature');
	const summaryInfo = document.querySelector('.weather__summary');

	if (formEl) {
		formEl.addEventListener('submit', (e) =>
			handleSubmit(e, latitudeEl, longitudeEl)
		);
	}

	function handleSubmit(e, latitudeEl, longitudeEl) {
		e.preventDefault();
		if (latitudeEl.value !== '' && longitudeEl.value !== '') {
			const data = {
				latitude: latitudeEl.value,
				longitude: longitudeEl.value,
			};
			getWeatherData(data);
		} else {
			alert('Podaj poprawnie długość i szerokość geograficzną!');
		}
	}

	function getWeatherData(data) {
		const API_KEY = 'b8e59f222fce4663ae7bdc7a6a382b01';
		const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${data.latitude}&lon=${data.longitude}&lang=pl&units=I`;

		fetch(apiUrl)
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				}
				return Promise.reject(resp);
			})
			.then((dataFromApi) => {
				showWeatherData(dataFromApi);
			})
			.catch((err) => console.log(err))
			.finally(() => console.log('Odpytywanie API zakończone'));
	}

	function showWeatherData(dataFromApi) {
		const currWeather = dataFromApi.data[0];
		latInfo.textContent = currWeather.lat;
		lngInfo.textContent = currWeather.lon;
		tempInfo.textContent = currWeather.temp;
		summaryInfo.textContent = currWeather.weather.description;
	}
}
