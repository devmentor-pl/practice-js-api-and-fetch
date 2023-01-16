const key = '3f8b882da33d4731a149cd2cb80b54e4';
const lang = 'pl';
const path = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${long}&lang=${lang}`;

const init = () => {
    console.log('DOM');

    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', getWeatherData);
}

const getWeatherData = (e) => {
    e.preventDefault();
    const latitude = document.querySelector('.form__field--lat').value;
    const longitude = document.querySelector('.form__field--lng').value;
    getLocation(latitude, longitude);
}

const getLocation = (latitude, longitude) => {
    const promise = fetch(path);
    promise
        .then(resp => {
            if(resp.ok) { return resp.json(); }
            if(resp.status === 400) { return Promise.reject('Nieprawidłowe żądanie!')}
            return Promise.reject(resp)
        })
        .then(data => showCurrentWeather(data.data[0]))
        .catch(err => console.log(err))
        .finally( () => console.log('Odpytywanie API zakończone!'))
}

const showCurrentWeather = (data) => {
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemp = document.querySelector('.weather__temperature');

    weatherLat.innerText = data.lat;
    weatherLng.innerText = data.lon;
    weatherSummary.innerText = data.weather.description;
    weatherTemp.innerText = data.temp;
}

document.addEventListener('DOMContentLoaded', init);