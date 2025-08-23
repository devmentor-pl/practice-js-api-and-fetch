document.addEventListener('DOMContentLoaded', init);
function init() {
    console.log('DOM');
    const form = document.querySelector('.form')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        getWeather()
    })

}

const getWeather = () => {
    const lat = document.querySelector('.weather__lat')
    const latInput = document.querySelector('.form__field--lat').value
    lat.innerText = latInput
    const lng = document.querySelector('.weather__lng')
    const lngInput = document.querySelector('.form__field--lng').value
    lng.innerText = lngInput
    const summary = document.querySelector('.weather__summary')
    const temperature = document.querySelector('.weather__temperature')
    const key = '2af55f842ab44d94ba475a7a4b9c0336'
    const latitude = latInput
    const longitude = lngInput
    console.log(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl`)
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl`)
    promise.then(resp => {
        if (resp.ok) {
            return resp.json()
        }
    })
        .then(data => {

            if (lat) {
                if (lng) {
                    console.log(data.data[0].temp)

                    summary.innerText = data.data[0].weather.description
                    temperature.innerText = (9 * (data.data[0].temp) + (32 * 5)) / 5
                }
            }
            else {
                console.error('Error')
            }

        })
        .catch(err => {
            console.error('Error')
        })
        .finally(() => console.log('Finished'))

}