document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});

const key = 'f5662bc59e904427ae9be3b4822d89fe';

function handleSubmit(event) {
    event.preventDefault();
    const { latitude, longitude } = getInputCoordinates();

    if(!latitude || !longitude) {
        console.log("Brak współrzędnych");
        return;
    }

    fetchWeather(latitude, longitude)
        .then(apiData => updateWeatherUI(latitude, longitude, apiData))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('API ok')
        });
}

function getInputCoordinates() {
     const inputLatitude = document.querySelector('.form__field--lat');
     const inputLongitude = document.querySelector('.form__field--lng');
     return {
        latitude: inputLatitude.value.trim(),
        longitude: inputLongitude.value.trim()
     };
}

function fetchWeather(latitude, longitude) {
    return fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&lat=${latitude}&lon=${longitude}`)
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            }
            return Promise.reject(resp);
        });
}

/*Kiedyś dostawałam ciągłe uwagi, że nie powinno być kilku return w kodzie. Bardzo proszę żebyś w CR krótko
 dał mi znać czy taki kod jest w porządku i czy mieści się w dobrych praktykach. Dzięki! :) */

function updateWeatherUI(latitude, longitude, apiData) {
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemp = document.querySelector('.weather__temperature');

    weatherLat.innerText = latitude;
    weatherLng.innerText = longitude;
    weatherSummary.innerText = apiData.data[0].weather.description;
    weatherTemp.innerText = apiData.data[0].temp;
}




