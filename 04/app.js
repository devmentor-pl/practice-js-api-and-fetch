document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const form = document.querySelector('.form');

    form.addEventListener('submit', showWeather)
}

function showWeather(e) {
    e.preventDefault();
    const formValues = getValueForm();
    const {latitude, longitude} = formValues;
    showCordinate(latitude, longitude);
    const data = dataWeather(latitude, longitude);

    data.then(data => {
        console.log(data);
        const {lon, lat, temp, weather: {description}} = data.data[0];
        console.log(temp, description);
        return {lon, lat, description, temp}
    })
    .then((res) => {
        const weatherSummery = document.querySelector('.weather__summary');
        const currentDestTemp = document.querySelector('.weather__temperature');

        weatherSummery.innerText = res.description;
        currentDestTemp.innerText = res.temp;
    })
    .catch(err => console.log(err))
    .finally(() => {
        console.log('Odpytywanie API zakonczone!')
    });
    
    
}

function getValueForm() {
    const latitude = document.querySelector('.form__field--lat').value;
    const longitude = document.querySelector('.form__field--lng').value;


    return {latitude, longitude}
}

function showCordinate(lat, lon) {
    const latitude = document.querySelector('.weather__lat');
    const longitude = document.querySelector('.weather__lng');

    latitude.innerText = lat;
    longitude.innerText = lon;
}

async function dataWeather(latitude, longitude) {
    const key = '39de9602544d45c5a6f1e1071bfdc7da';
    const url = 'http://api.weatherbit.io/v2.0/current';

    const promise = fetch(`${url}?lang=pl&units=I&lat=${latitude}&lon=${longitude}&key=${key}&include=minutely`);


    const a = await promise.then(resp => {
        if(resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    })

    return a;

}

