document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    getWeather()
}

function getWeather() {
    const formEl = document.querySelector('form')

    formEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const lat = parseFloat(document.querySelector('.form__field--lat').value)
        const lon = parseFloat(document.querySelector('.form__field--lng').value)
        const latTextEl = document.querySelector('.weather__lat')
        const lonTextEl = document.querySelector('.weather__lng')
        const weatherDescEl = document.querySelector('.weather__summary')
        const tempTextEl = document.querySelector('.weather__temperature')

        fetch(`https://api.weatherbit.io/v2.0/current?key=84af629ede014d02abea474810618f7e&lat=${lat}&lon=${lon}&lang=pl`)
        .then( resp => resp.json() )
        .then( jsonObj => {
                latTextEl.innerText = lat
                lonTextEl.innerText = lon
                weatherDescEl.innerText = jsonObj.data[0].weather.description
                tempTextEl.innerHTML = jsonObj.data[0].temp
                console.log(jsonObj) })
        .catch( () => alert('Błąd pobierania danych!') )
    })
}