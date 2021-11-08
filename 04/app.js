document.addEventListener('DOMContentLoaded', init);

function init() {
	console.log('DOM');
	const formPanel = document.querySelector('.form');
	formPanel.addEventListener('submit', showWeatherInfo);
}

const latitudeInput = document.querySelector('.form__field--lat').value;
const longitudeInput = document.querySelector('.form__field--lng').value;

let weatherLat = document.querySelector('.weather__lat');
let weatherLng = document.querySelector('.weather__lng');

let weatherSummary = document.querySelector('.weather__summary');
let weatherTemperature = document.querySelector('.weather__temperature');

function showWeatherInfo(e) {
	e.preventDefault();

	if (coordinatesValidation(latitudeInput, longitudeInput)) {
		enterCoordinates();
		queryPromise();
	} else {
		alert('Wrong input!');
	}
}

function coordinatesValidation(latitudeInput, longitudeInput) {
	const regexExp = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;
	const str = `${latitudeInput},${longitudeInput}`;
	return regexExp.test(str);
}

function enterCoordinates() {
	weatherLat.textContent = latitudeInput;
	weatherLng.textContent = longitudeInput;
}

function queryPromise() {
	const promise = fetch(
		`https://api.weatherbit.io/v2.0/current?key=1bf060bf40e848dfa19e6ea7ec2e81d6&lat=${latitudeInput}&lon=${longitudeInput}&lang=pl&units=I`
	);
	promise
		.then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
		.then((data) => {
			weatherSummary.textContent = data.data[0].weather.description;
			weatherTemperature.textContent = data.data[0].temp;
		})
		.catch((err) => console.error(err))
		.finally(() => console.log('API query complete!'));
}
