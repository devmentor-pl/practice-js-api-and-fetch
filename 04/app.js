document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM')

    const form = document.querySelector('form')
    const lat = document.querySelector('.form__field--lat')
    const long = document.querySelector('.form__field--lng')

    form.addEventListener('submit', getWeather)

    function getWeather(e) {
        e.preventDefault()
        console.log('submit')

        let latValue = lat.value
        console.log(latValue)
        let longValue = long.value
        console.log(longValue)

        latValue = 52.2
        longValue = 21.0

        const KEY = '87642df3e4584b76ae77b48f4d15eef3'
        // const URL = 'https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]'
        const URL = `https://api.weatherbit.io/v2.0/current?key=${KEY}&lat=${latValue}&lon=${longValue}`

        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            const temp = data && data.data[0].temp
            console.log( temp )
            const desc = data && data.data[0].weather.description
            console.log( desc )
            
            setWeather(latValue, longValue, temp, desc)
        })
        .catch(err => console.log( err ))


    }
    function setWeather(latValue, longValue, temp, desc) {
        const weatherLat = document.querySelector('.weather__lat')
        const weatherLng = document.querySelector('.weather__lng')
        const weatherSummary = document.querySelector('.weather__summary')
        const weatherTemperature = document.querySelector('.weather__temperature')

        weatherLat.innerText = latValue
        weatherLng.innerText = longValue
        weatherSummary.innerText = desc
        weatherTemperature.innerText = temp
    }

}