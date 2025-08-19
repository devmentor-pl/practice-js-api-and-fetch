document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const weatherForm = document.querySelector('.form')
    const latInput = document.querySelector('.form__field--lat')
    const lngInput = document.querySelector('.form__field--lng')
    const weatherLat = document.querySelector('.weather__lat')
    const weatherLng = document.querySelector('.weather__lng')
    const weatherSummary = document.querySelector('.weather__summary')
    const weatherTemp = document.querySelector('.weather__temperature')


    const apiKey = 'b4bfc6a4ff014356840f447bc5275087'
    const apiUrl = 'https://api.weatherbit.io/v2.0/current'
    const lang = 'pl'
    const unt = 'I'

    if (weatherForm) {
        weatherForm.addEventListener('submit', (e) => {
            e.preventDefault()

            const lat = latInput.value.trim()
            const lon = lngInput.value.trim()

            // if (!lat || !lon) {
            //     alert('Podaj poprawne wartości!')
            //     return
            // }

            weatherLat.textContent = lat
            weatherLng.textContent = lon
            weatherSummary.textContent = 'Ładowanie...'
            weatherTemp.textContent = '0°F'
            
            const apiUrlTemplate = `${apiUrl}?lat=${lat}&lon=${lon}&key=${apiKey}&lang=${lang}&units=${unt}`

            fetch(apiUrlTemplate)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Błąd: ${response.status}`)
                    }
                    return response.json()
                })
                .then(data => {
                    if (data && data.data.length > 0 ) {
                        const currentWeather = data.data[0]
                        weatherSummary.textContent = currentWeather.weather.description
                        weatherTemp.textContent = `${currentWeather.temp}°F`
                    } else {
                        throw new Error('Brak danych pogodowych')
                    }
                })
                .catch(err => {
                    console.error('błąd pobierania prognozy pogozy', err);
                    weatherSummary.textContent = 'Wystąpił błąd!'
                    weatherTemp.textContent = 'N/A'
                })
        })
    }
}