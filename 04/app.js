const init = async() => {
    console.log('DOM');

    const form = document.querySelector('form');
    const latInput = document.querySelector('.form__field--lat');
    const lonInput = document.querySelector('.form__field--lng');


    // Define the coordinates for each location
    const locations = {
        'Warszawa': { lat: 52.232222, lon: 21.008333 },
        'Kraków': { lat: 50.061389, lon: 19.938333 },
        'Wrocław': { lat: 51.11, lon: 17.022222 }
    };

    // For each location, add a button that sets the values of the latitude and longitude
    // inputs to the coordinates of the location
    for (const location in locations) {
        const button = document.createElement('button');
        button.textContent = location;
        button.addEventListener('click', (event) => {
            event.preventDefault();
            latInput.value = locations[location].lat;
            lonInput.value = locations[location].lon;
        });
        form.appendChild(button);
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const lat = latInput.value;
        const lon = lonInput.value;

        const latElement = document.querySelector('.weather__lat');
        const lngElement = document.querySelector('.weather__lng');

        latElement.textContent = lat;
        lngElement.textContent = lon;

        await getWeather(lat, lon);
    });
}

// This function fetches weather data from the Weatherbit API for the provided latitude
// and longitude, and displays the weather description and temperature
const getWeather = async(lat, lon) => {
    const apiKey = '9380bf571ae140669d036b3cdd282553';
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&include=minutely&units=I&lang=pl`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const summaryElement = document.querySelector('.weather__summary');
            const temperatureElement = document.querySelector('.weather__temperature');

            summaryElement.textContent = data.data[0].weather.description;
            temperatureElement.textContent = data.data[0].temp;
        })
        .catch(error => {
            console.log(error);
        });
}

document.addEventListener('DOMContentLoaded', init);