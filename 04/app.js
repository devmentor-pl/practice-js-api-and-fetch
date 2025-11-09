document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM')
    const form = document.querySelector('.form')
    form.addEventListener('submit', formSubmit)

    // Przykładowe miasta z możliwością dodania api do geolokalizajci największych miast

    const cities = [
        { name: "Warszawa", lat: 52.232222, lon: 21.008333 },
        { name: "Kraków", lat: 50.061389, lon: 19.938333 },
        { name: "Wrocław", lat: 51.11, lon: 17.022222 },
        { name: "Katowice", lat: 50.258, lon: 19.0275 },
        { name: "Gdańsk", lat: 54.352, lon: 18.6466 }
    ]

    createCityButtons(cities);

}

// Mój webapi key

const apiKey = "6348bc99a85a4e3aa676022ff5c70369"

// Create buttons 

function createCityButtons(cities) {

    const form = document.querySelector('.form')

    const buttonRow = document.createElement('div')
    buttonRow.classList.add('form__row', 'form__row--buttons')

    cities.forEach(city => {

        const btn = document.createElement('button')
        btn.type = 'button'
        btn.classList.add('city-btn')
        btn.textContent = city.name
        btn.dataset.lat = city.lat
        btn.dataset.lon = city.lon

        btn.style.margin = '1rem 2rem'
        btn.style.padding = '.75rem 2rem'
        btn.style.border = '1px solid black'
        btn.style.borderRadius = "1rem"
        btn.style.clor = 'black'
        btn.style.alignContent = 'center'
        btn.style.cursor = 'pointer'

        // onclick add to form

        btn.addEventListener('click', () => {
            document.querySelector('.form__field--lat').value = city.lat
            document.querySelector('.form__field--lng').value = city.lon
            getWeather(city.lat, city.lon)
        })

        buttonRow.appendChild(btn)

    });

    form.insertBefore(buttonRow, form.firstChild)

}

// Form 

async function formSubmit(e) {

    e.preventDefault()

    const lat = document.querySelector('.form__field--lat').value.trim()
    const lon = document.querySelector('.form__field--lng').value.trim()

    if (!lat || !lon) {
        alert("Wpisz Twoją szerokość i długość geograficzną!")
        return
    }


    getWeather(lat, lon)
}


async function getWeather(lat, lon) {


    // url 

    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&lang=pl`

    // Pobieram dane pogodowe 

    try {

        const response = await fetch(url)

        if(!response.ok){
            throw new Error(`Błąd http: {response.status}`)
        }

        const data = await response.json()
        const weather = data.data[0]

        console.log("Pogoda w Krakowie:")
        console.log(`Temperatura: ${weather.temp}°C`)
        console.log(`Opis: ${weather.weather.description}`)
        console.log(`Wilgotność: ${weather.rh}%`)
        console.log(`Wiatr: ${weather.wind_spd} m/s`)
        console.log(`Ciśnienie: ${weather.pres} hPa`)

        const latEl = document.querySelector(".weather__lat")
        const lngEl = document.querySelector(".weather__lng")
        const summaryEl = document.querySelector(".weather__summary")
        const tempEl = document.querySelector(".weather__temperature")

        latEl.textContent = weather.lat
        lngEl.textContent = weather.lon
        summaryEl.textContent = weather.weather.description
        tempEl.textContent = weather.temp


    } catch (error) {

        console.error("Błąd podczas pobierania danych pogodowych:", error)
        alert("Nie udało się pobrać Twoich danych pogodowych. Ponów próbę ; )")

    }

}
