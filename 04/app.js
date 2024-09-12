document.addEventListener('DOMContentLoaded', init);
const form = document.querySelector('form')
const lat = document.querySelector('.form__field--lat')
const lon = document.querySelector('.form__field--lng')
const lonTextField = document.querySelector('.weather__lng')
const latTextField = document.querySelector('.weather__lat')
const temp = document.querySelector('.weather__temperature')
const weather = document.querySelector('.weather__summary')
const apiKey = 'e33828148819480ca43dbac811a37cce'
const language = 'pl'

function init() {
    console.log('DOM');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(`${lat.value} ; ${lon.value}`)

        lonTextField.textContent = lon.value
        latTextField.textContent = lat.value

        const promise = fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat.value}&lon=${lon.value}&key=${apiKey}&include=minutely&lang=${language}&units=I`)
        promise
            .then(data => { return data.json() })
            .then(data => {
                console.log(data)
                weather.textContent = data.data[0].weather.description
                temp.textContent = data.data[0].temp
            })
            .catch(err => console.log(err))
            .finally(() => {
                console.log('Odpytywanie API zakończone!')
            })

    })
}


