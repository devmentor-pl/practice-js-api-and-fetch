const init = () => {
    const button = document.querySelector('.form__submit');
    button.addEventListener('click' , showCurrentWeatherData);
}

const showCurrentWeatherData = (e) => {
    e.preventDefault();

    const path = getPathContent();
    const promise = fetch(path);

    promise
        .then( resp => {
            if( resp.ok ) { return resp.json() }
            if( resp.status === 400 ) { return Promise.reject('Enter correct coordinates') }
            return Promise.reject(resp)
        })
        .then( data => getWeatherData(data.data[0]) )
        .catch( err => console.log(err) )
        .finally( () => console.log('API query complete!') );
}

const getWeatherData = (data) => {

    const latitudeValue = data.lat;
    const longitudeValue = data.lon
    const weatherDescriptionValue = data.weather.description
    const temperatureValue = data.temp

    insertWeatherData(latitudeValue, longitudeValue, weatherDescriptionValue, temperatureValue);
}

const insertWeatherData = (latitudeValue, longitudeValue, weatherDescriptionValue, temperatureValue) => {
    const latitude = document.querySelector('.weather__lat');
    const longitude = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const temperature = document.querySelector('.weather__temperature');

    latitude.innerText = latitudeValue;
    longitude.innerText = longitudeValue;
    weatherSummary.innerText = weatherDescriptionValue;
    temperature.innerText = temperatureValue;
}

const getPathContent = () => {

    const key = 'db4796cb38b34526ae96896badeeda87';
    const language = 'pl';
    const unit = 'I';

    const {
        latitudeValue: latitude,
        longitudeValue: longitude
    } = getGeographicalCoordinates();

    const path = `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=${language}&units=${unit}`;

    return path;
}

const getGeographicalCoordinates = () => {

    const latitudeValue = document.querySelector('.form__field--lat').value;
    const longitudeValue = document.querySelector('.form__field--lng').value;

    return {
        latitudeValue,
        longitudeValue
    }
}

document.addEventListener('DOMContentLoaded', init);