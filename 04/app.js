document.addEventListener('DOMContentLoaded', init);

function init() {
    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', showWheather)
}

function showWheather (e) {
    e.preventDefault()

    const latitude = document.querySelector('.form__field--lat').value
    const longitude= document.querySelector('.form__field--lng').value 

    const key = '8df5cb7c1edd4d2a99fdf57d43f6cc52'
    const api =  `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl`

    const promise = fetch(api)
    promise
        .then(resp => {
            if(resp.ok) { return resp.json()}
            if(resp.status === 400) { return Promise.reject('Należy wpisać poprawne współrzędne')}
            return Promise.reject(resp)
        })
    // .then(data => console.log(data.data[0]))
    .then(data =>  getWeatherInfo(data.data[0]))
    .catch(err => console.error(err))
    .finally(() => console.log('Odpytywanie API zakończone'))
}

function getWeatherInfo({lat, lon, weather:{description}, temp}) {
    const textLat = document.querySelector('.weather__lat')
    const textLng = document.querySelector('.weather__lng')
    const textSummary = document.querySelector('.weather__summary')
    const textTemp = document.querySelector('.weather__temperature')

    textLat.innerText = lat
    textLng.innerText = lon
    textSummary.innerText = description
    textTemp.innerText = temp
}