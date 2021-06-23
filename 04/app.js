document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const form = document.querySelector('.form');
    form.addEventListener('submit', getData);
};

const getData = function(e) {
    e.preventDefault();
    const {latitude, longitude} = getValues();

    getWeather(latitude, longitude);

};

const getValues = function() {
    const latitude = document.querySelector('.form__field--lat').value;
    const longitude = document.querySelector('.form__field--lng').value;
    
    return {latitude, longitude};
};

const getWeather = function(latitude, longitude) {
    const key = '6f40ff7ea90948c6a21b58f028a0d134';
    const lang = 'pl';
    const unit = 'I';

    const promise = fetch(`http://api.weatherbit.io/v2.0/current?key=${key}&lang=${lang}&units=${unit}&lon=${longitude}&lat=${latitude}`);

    promise
        .then(resp => {
            if(resp.ok) {return resp.json()};
            return Promise.reject(resp);
        })
        .then(data => showData(data.data[0]))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Finish')
        })
};

const showData = function(data) {
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLong = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemp = document.querySelector('.weather__temperature');

    weatherLat.textContent = data.lat;
    weatherLong.textContent = data.lon;
    weatherSummary.textContent = data.weather.description;
    weatherTemp.textContent = data.temp;
};