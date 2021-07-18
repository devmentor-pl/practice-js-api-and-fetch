//początkowo myślałem że robimy moduły w tym zadaniu i skonfigurowałem webpacka :)

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const form = document.querySelector('.form');
    form.addEventListener('submit', apiResponse);
}

const getCoordinates = () => {
    const latitude = document.querySelector('.form__field--lat').value;
    const longtitude = document.querySelector('.form__field--lng').value;
    return {
        latitude,
        longtitude
    };
}

const apiResponse = (e) => {
    e.preventDefault();
    const {
        latitude,
        longtitude
    } = getCoordinates();
    const api = fetch(`https://api.weatherbit.io/v2.0/current?key=14aab904234e414784a109152262897c&lat=${latitude}&lon=${longtitude}&lang=pl`);
    api
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(data => getData(data.data[0]))
        .catch(err => console.log(err))
        .finally('Odpytywanie API zakończone');
}

const getData = (data) => {
    const latitudeValue = data.lat;
    const longtitudeValue = data.lon;
    const weather = data.weather.description;
    const temp = data.temp;
    insertReceivedData(latitudeValue, longtitudeValue, weather, temp);
}

const insertReceivedData = (latitude, longtitude, weather, temp) => {
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');

    weatherLat.textContent = latitude;
    weatherLng.textContent = longtitude;
    weatherSummary.textContent = weather;
    weatherTemperature.textContent = convertCelcToFahr(temp).toFixed(2);
}

const convertCelcToFahr = (value) => {
    value = Number(value);
    return (value * 1.8) + 32;
}