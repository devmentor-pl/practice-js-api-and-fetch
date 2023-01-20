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
	/* const API_LINK = 'https://api.weatherbit.io/v2.0/current?';
	const API_KEY = '&key=f93c6d18427e4c79aca3fb72a6ad546f';
	const API_UNITS = '&units=I'; */

	const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?';
	const API_KEY = '&appid=9b5ce65ad2e72e682b7798fee968342e';
	const API_UNITS = '&units=imperial';
	const API_LANG = '&lang=pl';

	const URL = `${API_LINK}lat=${lat.value}&lon=${lon.value}${API_KEY}${API_UNITS}${API_LANG}`;
	// const URL = `${API_LINK}lat=52.232222&lon=21.008333${API_KEY}${API_UNITS}`;

	const promise = fetch(URL);
	promise
		.then((resp) => {
			if (resp.ok) {
				return resp.json();
			} else if (resp.status === 400) {
				alert('Nieprawidłowe żądanie!');
			}
			return Promise.reject(resp);
		})
		.then((data) => {
			setData(data);

			// const copyData = Object.assign({}, ...data.data);
			// const temp = copyData.temp;

			// latText.textContent = copyData.lat;
			// lonText.textContent = copyData.lon;
			// weatherSummary.textContent = copyData.weather.description;
		})
		.catch(alert('Podaj prawidłowe współrzędne'));
};

const setData = (data) => {
	const latText = document.querySelector('.weather__lat');
	const lonText = document.querySelector('.weather__lng');
	const weatherSummary = document.querySelector('.weather__summary');
	const temperature = document.querySelector('.weather__temperature');

	temperature.textContent = data.main.temp;
	latText.textContent = data.coord.lat;
	lonText.textContent = data.coord.lon;
	weatherSummary.textContent = data.weather[0].description;
};

document.addEventListener('DOMContentLoaded', init);

// Warszawa: 52.232222, 21.008333,
// Kraków: 50.061389, 19.938333,
// Wrocław: 51.11, 17.022222.
