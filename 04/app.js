const API__KEY = '6265f4d03b4b474f88d58705e51823bc';
const inputSubmit = document.querySelector('.form__submit');
document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('DOMloaded');

	inputSubmit.addEventListener('click', getGeoCoordinates);
}

function getGeoCoordinates(e) {
	e.preventDefault();
	const latitudeInput = document.querySelector('.form__field--lat');
	const longitudeInput = document.querySelector('.form__field--lng');

	const latitude = parseFloat(latitudeInput.value);
	const longitude = parseFloat(longitudeInput.value);

	if (!isNaN(latitude) && !isNaN(longitude)) {
		fetchData(latitude, longitude);
	} else {
		alert('type correct coordinates');
	}
}

function fetchData(latitude, longitude) {
	const API = `https://api.weatherbit.io/v2.0/current?key=${API__KEY}&lat=${latitude}&lon=${longitude}&units=I`;
	const weatherData = fetch(API);
	
	weatherData.then(resp => resp.json()).then(data => processingData(data, latitude, longitude));
}

function processingData(data, latitude, longitude) {
	const temperature = data.data[0].app_temp;
	const city = data.data[0].city_name;

	updateContent(temperature, city, latitude, longitude);
}

function updateContent(temperature, city, latitude, longitude) {
	const latitudeText = document.querySelector('.weather__lat');
	const longitudeText = document.querySelector('.weather__lng');
	const cityPlaceholder = document.querySelector('.weather__summary');
	const tempPlaceholder = document.querySelector('.weather__temperature');

	// juz chyba nie ma sensu tworzyc funkcji ktora bedzie tylko wsadzala te przetowrozne dane?
	// tzn - setText(latitudeText,longitudeText, cityPlaceholder, tempPlaceholer)
	// gdzie funkcja setTxt to bedzie to co ponizej?
	latitudeText.textContent = latitude;
	longitudeText.textContent = longitude;
	cityPlaceholder.textContent = city;
	tempPlaceholder.textContent = temperature;
}
