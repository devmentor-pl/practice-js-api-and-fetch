

document.addEventListener('DOMContentLoaded', init);
const weatherSummary = document.querySelector('.weather__summary');
const weatherTemperature = document.querySelector('.weather__temperature');
const formFieldLat = document.querySelector('.form__field--lat');
const formFieldLng = document.querySelector('.form__field--lng');
const weatherLat = document.querySelector('.weather__lat');
const weatherLng = document.querySelector('.weather__lng')

function init() {
    console.log('DOM');
    const sendButton = document.querySelector('.form__submit');
    sendButton.addEventListener('click', loadWeather);
}

function loadWeather(e) {
    e.preventDefault();
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=4903c309127f4896b6aadb0549216809&lang=pl&lat=${formFieldLat.value}&lon=${formFieldLng.value}`;

    let number = /^[0-9]+$/;
    if ((number.test(formFieldLat.value)) && (number.test(formFieldLng.value))) {
        fetch(`${apiUrl}`)
            .then(resp => {
                if (resp.ok) { return resp.json(); }
                return Promise.reject(resp);
            })
            .then(data => {
                weatherSummary.textContent = data.data[0].weather.description;
                weatherTemperature.textContent = data.data[0].temp;
                weatherLat.textContent = formFieldLat.value;
                weatherLng.textContent = formFieldLng.value;
            })
            .catch(err => console.error(err));
    } else {
        alert('Wprowadź prawidłowe dane');
    }
}