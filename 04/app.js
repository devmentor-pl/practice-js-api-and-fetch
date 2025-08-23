document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', showWeatherInfo);
}

function showWeatherInfo(e) {
    e.preventDefault();
    const promise = fetch(setApiPath());
    promise
        .then(resp => {
            if (resp.ok) { return resp.json() };
            if (resp.status === 400) { return Promise.reject('Enter correct geo coordinates') };
            return Promise.reject(resp);
        })
        .then(weatherInfo => renderWeatherInfo(weatherInfo.data[0]))
        .catch(err => console.error(err))
        .finally(() => console.log('API polling complete'))
}

function setApiPath() {
    const apiKey = '7ad5d6df79834fbfa6cdfa28bf8c7483';
    const lang = 'pl';
    const units = 'I'
    const [lat, lon] = getGeoCoordinates();
    return `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lon}&lang=${lang}&units=${units}`;
}

function getGeoCoordinates() {
    const latitudeValue = document.querySelector('.form__field--lat').value;
    const longitudeValue = document.querySelector('.form__field--lng').value;
    return [latitudeValue, longitudeValue];
}

function renderWeatherInfo({ lat, lon, weather: { description }, temp }) {
    const latitudeTxt = document.querySelector('.weather__lat');
    const longitudeTxt = document.querySelector('.weather__lng');
    const weatherSummaryTxt = document.querySelector('.weather__summary');
    const temperatureTxt = document.querySelector('.weather__temperature');
    latitudeTxt.textContent = lat;
    longitudeTxt.textContent = lon;
    weatherSummaryTxt.textContent = description.toLowerCase();
    temperatureTxt.textContent = temp;
}