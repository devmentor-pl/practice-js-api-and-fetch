document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const form = document.querySelector('.form')

    form.addEventListener('submit', e => {
        getCoordinates(e, form)
        clearInputs(form)
    })

}

function getCoordinates(e, [latInput, lonInput]) {
    e.preventDefault()

    const lat = Number(latInput.value)
    const lon = Number(lonInput.value)

    if (!isNaN(lat) && !isNaN(lon) && lat !== 0 && lon !== 0) {
        createUrl(lat, lon)
    } else {
        alert('Pola nie mogą być puste i wartości muszą być liczbami')
    }
}

function clearInputs([lat, lon]) {
    lat.value = ''
    lon.value = ''
}

function createUrl(lat, lon) {
    const key = 'd33463dfb961481bace485c81fc1fcc6'
    const url = `https://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&lat=${lat}&lon=${lon}`

    getWeatherData(url, lat, lon)
}

function getWeatherData(url, lat, lon) {
    fetch(url)
        .then(resp => resp.json())
        .then(data => getWeatherDetails(data, lat, lon))
        .catch(err => console.log(err))
        .finally(() => console.log('done'))
}

function getWeatherDetails({ data }, lat, lon) {
    const { temp, weather: { description } } = data[0]

    updateWeatherInfo(temp, description, lat, lon)
}

function updateWeatherInfo(temp, description, lat, lon) {
    const latElement = document.querySelector('.weather__lat')
    const lngElement = document.querySelector('.weather__lng')
    const summaryElement = document.querySelector('.weather__summary')
    const temperatureElement = document.querySelector('.weather__temperature')

    const tempFahrenheit = convertCtoF(temp)

    latElement.textContent = lat
    lngElement.textContent = lon
    summaryElement.textContent = description
    temperatureElement.textContent = tempFahrenheit
}

function convertCtoF(temp) {
    return (temp * 9 / 5 + 32).toFixed()
}
