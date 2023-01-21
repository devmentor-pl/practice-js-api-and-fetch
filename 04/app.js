const init = () => {
	const formEl = document.querySelector('.form');

	formEl.addEventListener('submit', handlerSubmit);
};

const handlerSubmit = (e) => {
	e.preventDefault();

	const latInput = document.querySelector('.form__field--lat');
	const lonInput = document.querySelector('.form__field--lng');

	getWeather(latInput, lonInput);

	e.target.reset();
};

const getWeather = (lat, lon) => {
	const API_LINK = 'https://api.weatherbit.io/v2.0/current?';
	const API_KEY = '&key=f93c6d18427e4c79aca3fb72a6ad546f';
	const API_UNITS = '&units=I';
	const API_LANG = '&lang=pl';

	const URL = `${API_LINK}lat=${lat.value}&lon=${lon.value}${API_KEY}${API_UNITS}${API_LANG}`;

	const promise = fetch(URL);
	promise
		.then((resp) => {
			if (resp.ok) {
				return resp.json();
			} else if (resp.status === 400) {
				return Promise.reject('Nieprawidłowe żądanie!');
			}
			return Promise.reject(resp);
		})
		.then((data) => {
			const copyData = Object.assign({}, ...data.data);
			console.log(copyData);
			setData(copyData);
		})
		.catch(() => alert('Podaj poprawne współrzędne.'));
};

const setData = (data) => {
	const latText = document.querySelector('.weather__lat');
	const lonText = document.querySelector('.weather__lng');
	const weatherSummary = document.querySelector('.weather__summary');
	const temperature = document.querySelector('.weather__temperature');

	temperature.textContent = data.temp;
	latText.textContent = data.lat;
	lonText.textContent = data.lon;
	weatherSummary.textContent = data.weather.description;
};

document.addEventListener('DOMContentLoaded', init);
