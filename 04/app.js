document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const formEl = document.querySelector('.form')
const latEl = document.querySelector('.weather__lat')
const lngEl = document.querySelector('.weather__lng')
const descriptionEl = document.querySelector('.weather__summary')
const temperatureEl = document.querySelector('.weather__temperature')

formEl.addEventListener('submit', checkTemp) 


function checkTemp(e) {
    e.preventDefault();
            const lat = document.querySelector('.form__field--lat').value
            const lng = document.querySelector('.form__field--lng').value
            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=6dd8c7d8439d416caf4caebd26be0557&lang=pl&include=minutely`;
            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then (data => {
                    console.log(data)
                    const { description } = data.data[0].weather
                    const { temp } = data.data[0]
                    descriptionEl.innerText = description
                    temperatureEl.innerText = temp
                    latEl.innerText = lat
                    lngEl.innerText = lng
                })
        }