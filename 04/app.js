document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const lat = document.querySelector('.form__field--lat')
    const lng = document.querySelector('.form__field--lng')
    const submit = document.querySelector('.form__submit')

    submit.addEventListener('click', (e) => {
        e.preventDefault()

        const latValue = lat.value
        const lngValue = lng.value

        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=d9dab0584dfb4500808e7ab19e8bfc2a&lat=${latValue}&lon=${lngValue}&units=I&lang=pl`)

        promise
            .then( resp => {
                if (resp.ok) {
                    return resp.json()
                }
    
                return Promise.reject()
            })
            .then(weatherInfo => {
                printWeatherData(weatherInfo, latValue, lngValue)
            })
            .catch(err => console.error(err))
    })
}

function printWeatherData(weatherInfo, latValue, lngValue) {
    const weatherSection = document.querySelector('.weather')

    weatherSectionParagraph = weatherSection.children[0]
    weatherSectionParagraph.children[0].innerText = latValue
    weatherSectionParagraph.children[1].innerText = lngValue
    weatherSectionParagraph.children[2].innerText = weatherInfo.data[0].weather.description
    weatherSectionParagraph.children[3].innerText = weatherInfo.data[0].app_temp
}