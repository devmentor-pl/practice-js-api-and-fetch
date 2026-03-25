document.addEventListener('DOMContentLoaded', init);

const API_KEY = 'dd80ec8b34e44a0995677deab7ea6152';
const PROXY_URL = 'http://localhost:8080/';
const WEATHER_API = 'https://api.weatherbit.io/v2.0/current';

function init() {
	const form = document.querySelector('form');
	if (!form) return;

	form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
	e.preventDefault();

	const form = e.currentTarget;
	const { lat, lng } = getFormValues(form);
	const description = form.nextElementSibling;

	const validation = validateCoordinates(lat, lng);
	if (!validation.valid) {
		console.error(validation.message);
		return;
	}

	fetchWeather(lat, lng)
		.then(weather => updateUI(description, weather))
		.catch(err => console.error('Błąd:', err));
}

function getFormValues(form) {
	return {
		lat: form.querySelector('.form__field--lat').value.trim(),
		lng: form.querySelector('.form__field--lng').value.trim(),
	};
}

function fetchWeather(lat, lng) {
	const url = `${WEATHER_API}?lang=pl&units=I&lat=${lat}&lon=${lng}&key=${API_KEY}`;

	return fetch(PROXY_URL + url)
		.then(resp => {
			if (!resp.ok) {
				return Promise.reject(`HTTP error: ${resp.status}`);
			}
			return resp.json();
		})
		.then(data => {
			const weather = data?.data?.[0];

			if (!weather) {
				return Promise.reject('Brak danych pogodowych');
			}
			return weather;
		});
}

function updateUI(description, weather) {
	if (!description || !weather) return;

	const latValue = description.querySelector('.weather__lat');
	const lngValue = description.querySelector('.weather__lng');
	const summary = description.querySelector('.weather__summary');
	const temp = description.querySelector('.weather__temperature');

	latValue.textContent = weather.lat ?? '-';
	lngValue.textContent = weather.lon ?? '-';
	summary.textContent = weather.weather?.description ?? 'Brak opisu';
	temp.textContent = weather.temp ?? '-';
}

function validateCoordinates(lat, lng) {
	const latitude = Number(lat);
	const longitude = Number(lng);

	if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
		return { valid: false, message: 'Współrzędne muszą być liczbami' };
	}

	if (latitude < -90 || latitude > 90) {
		return { valid: false, message: 'Szerokość geograficzna musi być w zakresie -90 lub 90 stopni' };
	}

	if (longitude < -180 || longitude > 180) {
		return { valid: false, message: 'Długość geograficzna musi być w zakresie -180 lub 180 stopni' };
	}

	return { valid: true };
}
