//DZIAŁA

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const form = document.querySelector('.form');
console.log(form);
const latInput = document.querySelector('.form__field--lat');
console.log(latInput);
const lngInput = document.querySelector('.form__field--lng');
const weatherLat = document.querySelector('.weather__lat');
const weatherLng = document.querySelector('.weather__lng');
const weatherSummary = document.querySelector('.weather__summary');
const weatherTemperature = document.querySelector('.weather__temperature');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const apiKey = 'd33fa416e91d4db29169e3d7a7c4e0ab';
    const latitude = latInput.value;
    const longitude = lngInput.value;
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}`;

    fetch(apiUrl).then(response => response.json()).then(data => {
        const weatherData = data.data[0];

        weatherLat.textContent = weatherData.lat;
        weatherLng.textContent = weatherData.lon;

        weatherSummary.textContent = weatherData.weather.description;
        weatherTemperature.textContent = weatherData.temp;
    }).catch(error => {
        console.error('Error fetching weather data:', error);
    });
});