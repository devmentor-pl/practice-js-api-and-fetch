document.addEventListener('DOMContentLoaded', init)

function init() {
	const formEl = document.querySelector('form')

	if (formEl) {
		formEl.addEventListener('submit', handleSubmit)
	}
}

function handleSubmit(e) {
	e.preventDefault()
	const latitude = document.querySelector('.form__field--lat')
	const longitude = document.querySelector('.form__field--lng')

	if (latitude.value !== '' && longitude.value !== '') {
		const data = {
			latitude: latitude.value,
			longitude: longitude.value,
		}
		createApiUrl(data)
	} else {
		alert('Podaj długość i szerokość geograficzną!')
	}
}

function createApiUrl(data) {
	const API_KEY = '195f1a7ae96d4ad488f9543021ea79c8'
	const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${data.latitude}&lon=${data.longitude}&lang=pl&units=I`

	getWeatherData(apiUrl)
}

function getWeatherData(apiUrl) {
	fetch(apiUrl)
		.then((resp) => {
			if (resp.ok) {
				return resp.json()
			}
			return Promise.reject(resp)
		})
		.then((data) => {
			showWeatherData(data)
		})
		.catch((err) => console.log(err))
		.finally(console.log('Odpytywanie API zakończone'))
}

function showWeatherData(dataFromApi) {
	const currWeather = dataFromApi.data[0]
	const latInfo = document.querySelector('.weather__lat')
	const ingInfo = document.querySelector('.weather__lng')
	const tempInfo = document.querySelector('.weather__temperature')
	const summaryInfo = document.querySelector('.weather__summary')
	const weatherIco = document.querySelector('.weather__icon')

	latInfo.textContent = currWeather.lat
	ingInfo.textContent = currWeather.lon
	tempInfo.textContent = currWeather.temp
	summaryInfo.textContent = currWeather.weather.description
	weatherIco.setAttribute(
		'src',
		`https://www.weatherbit.io/static/img/icons/${currWeather.weather.icon}.png`
	)
}
