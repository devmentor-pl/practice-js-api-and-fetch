const key = '6137133ca77c4885bf6a7c99b62f28bb';
const url = `https://api.weatherbit.io/v2.0/current`;


document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM');
    const formEl = document.querySelector('.form');
    formEl.addEventListener('submit', showWeather)
}

function showWeather(event) {
    event.preventDefault();
    const formEl = event.target;
    const coordinates = getCoordiantes(formEl);
    showCoordinates(coordinates);
    const {latitude, longitude} = coordinates;
    displayWeather( {url, key, latitude, longitude} );
}

function getCoordiantes(formEl) {
    const latitude = formEl.querySelector('.form__field--lat').value;
    const longitude = formEl.querySelector('.form__field--lng').value;
    return {latitude, longitude};
}

function showCoordinates({latitude, longitude}) {
    const latitudeInfo = document.querySelector('.weather__lat');
    const longitudeInfo = document.querySelector('.weather__lng');
    latitudeInfo.innerText = latitude;
    longitudeInfo.innerText = longitude;
}

function displayWeather( {url, key, latitude, longitude} ) {
    const paramsUrl = `?key=${key}&lat=${latitude}&lon=${longitude}`;
    let res = {};
    fetch(url + paramsUrl)
        .then(response => response.json())
        .then(result => {
            const {temp, weather: {description}} = result.data[0];
            console.log({temp, description});
            return {temp, description};
        })
        .then( weather => {
            document.querySelector('.weather__summary').innerText = weather.description;
            document.querySelector('.weather__temperature').innerText = weather.temp;
        })
        .catch(error => console.error(error));
}