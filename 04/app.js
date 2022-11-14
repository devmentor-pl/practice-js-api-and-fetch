document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}




const init = () => {
    const inputEl = document.querySelector('.forms__submit');
    inputEl.addEventListener('click', showDataWeather);
}

const showDataWeather =(e) => {
    e.preventDefault();

    const path = getContent();
    const promise = fetch(path);

    promise
        .then (resp =>{
            if (resp.ok) {return resp.json() }
            if (resp.status ===400) {return Promise.reject('Podaj poprawne dane') }
            return Promise.reject(resp)
        })
            .then (data => weatherData(data.data[0]) )
            .catch( err => console.log(err) )
            .finally(() => console.log('Api zadziałało') );
    }
    
    const weatherData =(data) => {
        const latitudeValue = data.lat;
        const longitudeValue = data.lon;
        const descriptionValue = data.weather.description;
        const temperatureValue = data.temp;

        putWeatherData(latitudeValue, longitudeValue, descriptionValue, temperatureValue);
}

const putWeatherData =(latitudeValue, longitudeValue,descriptionValue, temperatureValue) => {
    const latitude = document.querySelector('.weather__lat');
    const longitude = document.querySelector('.weather__lng');
    const summaryWeather = document.querySelector('.weather__summary');
    const temperatue = document.querySelector('.weather__temperatue');

    latitude.innerText = latitudeValue;
    longitude.innerText = longitudeValue;
    summaryWeather.innertext = descriptionValue;
    temperatue.innerText = temperatureValue;
}

const getContent = () => {

    const keyEl = '23bf1c19a598445d9996d96b1f1b41c3';
    const language = 'pl';
    const unit = 'I';

    const {
        latitudeValue:latitude,
        longitudeValue:longitudeValue
    } = geographicCord();

    const path ='https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]';
    
    return path;
}

const geographicCord =() => {
    const latitudeValue = document.querySelector('.fomr__field--lat').value;
    const longitudeValue= document.querySelector('.foem__field--lng').value;

    return {
        latitudeValue,
        longitudeValue
    }
}

document.addEventListener('DOMContentLoaded' ,init);