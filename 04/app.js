document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', getData);
}

function getData(e) {
    e.preventDefault();
    const lat = document.querySelector('.form__field--lat').value;
    const long = document.querySelector('.form__field--lng').value;
    getWeather(lat, long);
}

function getWeather(lat, long) {
    const key = 'a597a49aa2bb4094bab1c0777c07229d';
    const lang = 'pl';
    const path = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${long}&lang=${lang}`;
    const promise = fetch(path);
    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            if (resp.status === 400) {
                return Promise.reject('NIEPRAWIDŁOWE ŻĄDANIE');
            }
            return Promise.reject(resp);
        })
        .then(data => showWeather(data.data[0]))
        .catch(err => console.log(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        });
}

function showWeather(data) {
    const latEl = document.querySelector('.weather__lat');
    const longEl = document.querySelector('.weather__lng');
    const tempEl = document.querySelector('.weather__temperature');
    const weatherEl = document.querySelector('.weather__summary');

    latEl.innerText = data.lat;
    longEl.innerText = data.lon;
    weatherEl.innerText = data.weather.description;
    tempEl.innerText = data.temp;
}