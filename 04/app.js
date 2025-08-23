document.addEventListener('DOMContentLoaded', init);
const weatheLatValue = document.querySelector('#form__field--lat')
const weatheLonValue = document.querySelector('#form__field--lon')

function init() {
    console.log('DOM');
}

function getWeatherData() {

    const weatheLat = document.querySelector('.weather__lat')
    const weatheLon = document.querySelector('.weather__lng')
    const weatherSummary = document.querySelector('.weather__summary')
    const weatherTemperature = document.querySelector('.weather__temperature')

    // Input's
    const latV = weatheLatValue.value
    const lonV = weatheLonValue.value

    const apiKey = '2d83928e30e84fd58b608672ee8f698b'
    const fetchData = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latV}&lon=${lonV}`

    fetch(fetchData)
    .then(resp => {
        if(resp.ok) return resp.json();

        return Promise.reject(resp)
    })
    .then(data => {
        console.log(data);
        weatherSummary.innerHTML = data.data[0].weather.description
        weatherTemperature.innerHTML = data.data[0].temp
        weatheLat.innerText = weatheLatValue.value
        weatheLon.innerText = weatheLonValue.value
    })
    .catch(err => console.error(err))
    .finally(()=>{
        console.log('Zapytanie zakończone.');

    })

}

const form = document.querySelector('form')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    getWeatherData(weatheLatValue.value, weatheLonValue.value)
})