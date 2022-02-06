
document.addEventListener('DOMContentLoaded', init);
const button = document.querySelector('.form__submit');
// const weatherLatInfo = document.querySelector('.weather__lat')
// const weatherLngInfo = document.querySelector('.weather__lng')
// const weatherSummary = document.querySelector('.weather__summary')
// const currentTemprature = document.querySelector('.weather__temperature')
const inputLng = document.querySelector('.form__field--lng');
const inputLat = document.querySelector('.form__field--lat');
console.log(inputLat);

function init() {
    const button = document.querySelector('.form__submit');
    console.log('DOM');
    button.addEventListener("click", loadWeather);
}

function loadWeather(e) {
    e.preventDefault;
    const inputValueLat = inputLat.value;
    const inputValueLng = inputLng.value;
    const key = 'e2243021f54e4ba1927cde30039992a3';
    const lang = "pl";
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${inputValueLat}&lon=${inputValueLng}`)
    promise
        .then(resp => {
            if(resp.ok) { return resp.json(); }
            return Promise.reject(resp);
    })
        .then(data => console.log(data.data[0]))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
    });
}

// function addWeatherInfo() {
        // weatherLatInfo.textContent = inputValueLat;
        // weatherLngInfo.textContent = inputValueLng;
        // weatherSummary.textContent = data.weather.description;
        // currentTemprature.textContent = data.temp;
    // })
// 
// }



















   