
document.addEventListener('DOMContentLoaded', init);
const button = document.querySelector('.form__submit');
const weatherLatInfo = document.querySelector('.weather__lat')
const weatherLngInfo = document.querySelector('.weather__lng')
const weatherSummary = document.querySelector('.weather__summary')
const currentTemprature = document.querySelector('.weather__temperature')
const inputLng = document.querySelector('.form__field--lng');
const inputLat = document.querySelector('.form__field--lat');

function init() {
    const button = document.querySelector('.form__submit');
    console.log('DOM');
    button.addEventListener("click", loadWeather);
}

function loadWeather(e) {
    e.preventDefault();
    const inputValueLat = inputLat.value;
    const inputValueLng = inputLng.value;
    const key = 'e2243021f54e4ba1927cde30039992a3';
    const lang = "pl";
    const units = "I";
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${inputValueLat}&lon=${inputValueLng}&lang=${lang}&units=${units}`)
    promise
        .then(resp => {
            if(resp.ok) { return resp.json(); }
            return Promise.reject(resp);
        })
        .then(data => addWeatherInfo(data))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
    });
}

function addWeatherInfo(data) {
        weatherLatInfo.textContent = data.data[0].lat;
        weatherLngInfo.textContent = data.data[0].lon;
        weatherSummary.textContent = data.data[0].weather.description;
        currentTemprature.textContent = data.data[0].temp;
}



















   