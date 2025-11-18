document.addEventListener('DOMContentLoaded', init);

async function init() {
	console.log('DOM');
	setDefaultCoordinates();
	await checkWeather();
}
async function checkWeather() {
	const button = document.querySelector('.form__submit');
	button.addEventListener('click', handleSumbit);
}

async function handleSumbit(e) {
	e.preventDefault();
	const { lat, lng } = getCoordinates();
	try {
		if (!isNumber(lat) || !isNumber(lng)) {
			throw new Error('Coordinates are wrong');
		}
		const weather = await getWeather(lat, lng);

		setMessageData(lat, lng, weather.weather.description, weather.temp);
	} catch (err) {
		alert(err.message);
	}
}

function getCoordinates() {
	const lat = document.querySelector('.form__field--lat').value;
	const lng = document.querySelector('.form__field--lng').value;
	return { lat, lng };
}

function isNumber(val) {
	return !isNaN(parseFloat(val));
}

function setMessageData(latitude, longitude, weatherCond, temp) {
	const latField = document.querySelector('.weather__lng');
	const lngField = document.querySelector('.weather__lat');
	const summaryField = document.querySelector('.weather__summary');
	const tempField = document.querySelector('.weather__temperature');

	latField.innerText = latitude;
	lngField.innerText = longitude;
	summaryField.innerText = weatherCond;
	tempField.innerText = temp;
}

function setDefaultCoordinates() {
	document.querySelector('.form__field--lat').value = '52.232222';
	document.querySelector('.form__field--lng').value = '21.008333';
	document.querySelector('.weather__lat').innerText = '52.232222';
	document.querySelector('.weather__lng').innerText = '21.008333';
}

async function getWeather(latitude, longitude) {
	const API_KEY = 'e0bd7c2870b74690827f5e7aff5e82b4';
	const units = 'I';
	const lang = 'pl';
	const urlParams = `?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&key=${API_KEY}`;
	const URL = 'https://api.weatherbit.io/v2.0/current' + urlParams;
	try {
		const response = await fetch(URL);
		if (!response.ok) {
			throw new Error('Something went wrong!!!');
		}
		const weather = await response.json();
		return weather.data[0];
	} catch (err) {
		throw new Error('Connection problem');
	}
}
