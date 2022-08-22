document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    weather()
}

function weather() {



    const formEl = document.querySelector('.form')


    formEl.addEventListener('submit', (event) => {

        event.preventDefault()

        const inputLat = document.querySelector('.form__field--lat')
        const inputLong = document.querySelector('.form__field--lng')

        const latText = document.querySelector('.weather__lat')
        const longText = document.querySelector('.weather__lng')

        const temp = document.querySelector('.weather__temperature')
        const summary = document.querySelector('.weather__summary')

        const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${inputLat.value}&lon=${inputLong.value}&key=69cd9dca745c4b2fb467e5c8d45365ff&include=minutely&units=I&lang=pl`

        console.log(inputLat.value, inputLong.value)

        latText.innerText = inputLat.value
        longText.innerText = inputLong.value




        fetch(apiUrl)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                temp.innerText = data.data[0].app_temp
                summary.innerText = data.data[0].weather.description

            })
            .catch(err => { console.log(err) })
    })

}

