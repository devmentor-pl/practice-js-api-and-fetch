document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => handleSubmit(event, showWeather));

function handleSubmit(event, weather){
    event.preventDefault();
    const longitude = document.querySelector('.form__field--lng').value;
    const latitude = document.querySelector('.form__field--lat').value;

    weather(longitude, latitude);
}


function showWeather(longitude, latitude){

    const key = '690bbcc3c15447a296838d332feafa45'
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl`);

    promise
        .then((resp) => {
            if (resp.ok){
                return resp.json();
            }
            if (resp.status === 400){
                return Promise.reject(`BAD QUERY TO API!`);
            }
            return Promise.reject(resp);
        })
        .then((weather) => {
            const weatherLat = document.querySelector('.weather__lat');
            const weatherLng = document.querySelector('.weather__lng');
            const weatherDesc = document.querySelector('.weather__summary');
            const weatherTemp = document.querySelector('.weather__temperature');

            const weatherData = weather.data[0];
            weatherLat.textContent = weatherData.lat;
            weatherLng.textContent = weatherData.lon;
            weatherDesc.textContent = weatherData.weather.description;
            weatherTemp.textContent = weatherData.temp;

        })
        .catch(err => console.error(err))
        .finally(() => console.log('Zakonczono odpytywanie API'));
        

}