document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

const key = 'e08da82b049541a1bdce9197fac3a50d'

const inputElementLat = document.querySelector('.form__field--lat')
const inputElementLong = document.querySelector('.form__field--lng')
const weatherLat = document.querySelector('.weather__lat')
const weatherLong = document.querySelector('.weather__lng')
const submitButton = document.querySelector('.form__submit')
const weatherDescription = document.querySelector('.weather__summary')
const weatherTemp = document.querySelector('.weather__temperature')


function checkValues() {
    if (inputElementLat.value > -90 && inputElementLat.value < 90) {
        latValue = inputElementLat.value
    } else 
        alert("Taka współrzędna nie istnieje!")
    
    if (inputElementLong.value > -180 && inputElementLong.value < 180) {
        longValue = inputElementLong.value
    } else 
        alert("Taka współrzędna nie istnieje!")
    
}

function getWeatherInfo(dataObj) {
        weatherLat.innerText = ''
        weatherLong.textContent = ''
        weatherDescription.innerText = ''
        weatherTemp.innerText = ''

        const getData = dataObj.data[0]
        const description = getData.weather.description
        const temperatureC = getData.temp
        const temperatureF = (temperatureC * 9 / 5) + 32

        weatherLat.innerText = latValue
        weatherLong.textContent = longValue
        weatherDescription.innerText = description
        weatherTemp.innerText = temperatureF
    }

submitButton.addEventListener('click', e => {
    e.preventDefault()
    checkValues()
 
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latValue}&lon=${longValue}`)  
    
    promise
        .then(resp => {
            console.log(resp)
            if (resp.ok) { return resp.json() }
            return Promise.reject(resp)
        })
        .then(dataObj => getWeatherInfo(dataObj))
        .catch(err => console.log(err))

})

}





