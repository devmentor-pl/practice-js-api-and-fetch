document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', getWeather);
}

const getWeather = function(e) {
    e.preventDefault();

    const latitudeEl = document.querySelector('.form__field--lat');
    const lat = latitudeEl.value;
    const longitudeEl = document.querySelector('.form__field--lng');
    const lon = longitudeEl.value;
    const latData = document.querySelector('.weather__lat');
    const lonData = document.querySelector('.weather__lng');
    latData.innerText = lat;
    lonData.innerText = lon;
    const weatherDescriptionData = document.querySelector('.weather__summary');
    const tempData = document.querySelector('.weather__temperature');

    const options = {
    method: 'GET', 
   }
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=3ce5db6a01624d4990f3cffbdaf61d8e&lat=${lat}&lon=${lon}&lang=pl&units=I&include=minutely`, options);

    promise
        .then(resp => {
        if(resp.ok) { return resp.json(); } 
        return Promise.reject(resp);
    })
    .then(data => 
    (weatherDescriptionData.innerText = (data.data[0].weather.description),
    tempData.innerText = (data.data[0].temp))
    )
    .catch(err => console.error(err));
}

   

