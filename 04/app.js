document.addEventListener('DOMContentLoaded', init)

const formEl = document.querySelector('form')
const weather = document.querySelector('.weather')
const weatherLat = weather.querySelector('.weather__lat')
const weatherLng = weather.querySelector('.weather__lng')
const weatherSummary = weather.querySelector('.weather__summary')
const weatherTemp = weather.querySelector('.weather__temperature')
const apiKey = '798fb26ba7e14930859560e5aee2bdd1'
const lang = 'pl'

function init() {
	formEl.addEventListener('submit', e => {
		e.preventDefault()
		latitude = e.target.elements.latitude.value
		longitude = e.target.elements.longitude.value

		if (!isNaN(latitude) && !isNaN(longitude)) {
			checkWeather()
		} else {
			alert('Podaj poprawne dane')
		}
		formEl.reset()
	})
}

function checkWeather() {
	const api = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=${lang}`

	fetch(api)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			return Promise.reject(resp)
		})
		.then(data => {
			const { temp, city_name } = data.data[0]
			const { description } = data.data[0].weather
			const fahrenheit = (temp * 9) / 5 + 32
			weatherSummary.textContent = description
			weatherTemp.textContent = fahrenheit.toFixed(2)

			console.log(data)
		})

	weatherLat.textContent = latitude
	weatherLng.textContent = longitude
}
