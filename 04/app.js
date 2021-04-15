document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const btn = document.querySelector('.form__submit');
    btn.addEventListener('click', submit);
}

function submit(e) {
    e.preventDefault();
    const lat = document.querySelector('.form__field--lat').value;
    const lng = document.querySelector('.form__field--lng').value;
    if (lat.length <= 0 || lng.length <= 0) {
        alert('Uzupełnij oba pola!');
        return;
    };
    getWeatherInfo(lat, lng);
}

async function getWeatherInfo(lat, lng) {
    try {
        const res = await fetch(`https://api.weatherbit.io/v2.0/current?key=2b14a373ec16481eabbd0bf964d923ac&lat=${lat}&lon=${lng}&lang=pl&units=I`);
    const resInJson = await res.json();
    displayWeatherInfo(resInJson.data[0]);
    } catch (error) {
        console.log(error);
        alert('Coś poszło nie tak :(');
    }
}

function displayWeatherInfo({lat, lon, temp, weather: {description}}) {
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');

    weatherLat.textContent = lat;
    weatherLng.textContent = lon;
    weatherSummary.textContent = description;
    weatherTemperature.textContent = temp;
}