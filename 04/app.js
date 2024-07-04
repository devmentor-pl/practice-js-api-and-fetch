document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('form')

    formEl.addEventListener('submit', e => {
        e.preventDefault()

        const latitudeInputEl = formEl.querySelector('.form__field--lat')
        const latValue = latitudeInputEl.value

        const longitudeInputEl = formEl.querySelector('.form__field--lng')
        const longVale = longitudeInputEl.value

        const regexLat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
        const regexLon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;

        if(regexLat.test(latValue) && regexLon.test(longVale)) {
            getWeather(latValue, longVale)
        } else {
            alert('Niepoprawne dane')
        }

    })

}

function getWeather(latitude, longitude) {
    const apiKey = '11d50ab196ba427990eee9027bd5506e'

    fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&include=minutely&lang=pl`)
        .then(response => {
            if (response.ok) { return response.json() }
        })
        .then(data => {
            const weatherData = data.data[0];
            const tempC = weatherData.temp;
            const tempF = celsiusToFahrenheit(tempC)
            const weatherDesc = weatherData.weather.description;
            updateWeatherForUser(tempF, weatherDesc, latitude, longitude)
        })
        .catch(err => { console.error(err) });
}

function updateWeatherForUser(temp, weatherInfo, latValue, longValue) {
    const latEl = document.querySelector('.weather__lat')
    latEl.textContent = latValue

    const longEl = document.querySelector('.weather__lng')
    longEl.textContent = longValue

    const weatherSummaryEl = document.querySelector('.weather__summary')
    weatherSummaryEl.textContent = weatherInfo

    const weatherTempEl = document.querySelector('.weather__temperature')
    weatherTempEl.textContent = temp
}

function celsiusToFahrenheit(tempC) {
    return tempC * 9/5 + 32;
}